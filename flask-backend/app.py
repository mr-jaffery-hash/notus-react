import pandas as pd
from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

job = {'jobID':[1,2,3,4,5,6,7,8,9,10], 'name':['Teaching', 'Conservation', 'Animal Care', 'Counseling', 'Enviroment Protection', 'Health Care', 'Old Age', 'Women Empowerment', 'IT Services', 'Religious']}
jobs = pd.DataFrame(job)


def GetSimilar(picked_userid, df):
  print(df)
  df = pd.merge(jobs, df, on='jobID', how='inner')
  print(df)

  # """checking the most popular jobs """

  agg_ratings = df.groupby('name').agg(mean_rating = ('rating', 'mean'), count = ('rating', 'count')).reset_index()
#   agg_ratings.info()

  agg_ratings.sort_values(by='count', ascending=False)

  # """User-Job Matrix"""

  matrix = df.pivot_table(index='userID', columns='name', values='rating')
  # matrix.head()

  # """normalization"""

  matrix_norm = matrix.subtract(matrix.mean(axis=1), axis = 'rows')
  # matrix_norm.head()

  # """user similarity using pearson"""

  user_similarity = matrix_norm.T.corr()
  # user_similarity.head()

  # """to calculate the similarity of a user assign picked_user """

  # Remove picked user ID from the candidate list
  user_similarity.drop(index=picked_userid, inplace=True)
  # Take a look at the data
  # user_similarity.head()

  # """to get **n** number of similar user"""
  n = 3
  # User similarity threashold
  user_similarity_threshold = 0
  # Get top n similar users
  similar_users = user_similarity[user_similarity[picked_userid]>user_similarity_threshold][picked_userid].sort_values(ascending=False)[:n]
  # Print out top n similar users
  # print(f'The similar users for user {picked_userid} are', similar_users)

  # jobs that the target user has rated
  picked_userid_rated = matrix_norm[matrix_norm.index == picked_userid].dropna(axis=1, how='all')
  # picked_userid_rated

  # jobs that similar users rated. Remove jobs that none of the similar users have rated
  similar_user_jobs = matrix_norm[matrix_norm.index.isin(similar_users.index)].dropna(axis=1, how='all')
  # similar_user_jobs

  # Remove the rated jobs from the job list
  similar_user_jobs.drop(picked_userid_rated.columns,axis=1, inplace=True, errors='ignore')
  # Take a look at the data
  # similar_user_jobs

  # A dictionary to store item scores
  item_score = {}
  # Loop through items
  for i in similar_user_jobs.columns:
    # Get the ratings for job i
    job_rating = similar_user_jobs[i]
    # Create a variable to store the score
    total = 0
    # Create a variable to store the number of scores
    count = 0
    # Loop through similar users
    for u in similar_users.index:
      # If the job has rating
      if pd.isna(job_rating[u]) == False:
        # Score is the sum of user similarity score multiply by the job rating
        score = similar_users[u] * job_rating[u]
        # Add the score to the total score for the job so far
        total += score
        # Add 1 to the count
        count +=1
    # Get the average score for the item
    item_score[i] = total / count
  # Convert dictionary to pandas dataframe
  item_score = pd.DataFrame(item_score.items(), columns=['job', 'job_score'])
      
  # Sort the job by score
  ranked_item_score = item_score.sort_values(by='job_score', ascending=False)
  # Select top m jobs
  m = 3
  # ranked_item_score.head(m)
  print(ranked_item_score.head(3))
  return ranked_item_score

@app.route('/api/getRecommendation', methods=['GET'])
def get_data():
    print('here')
    userID = request.args.get('userID')
    print(userID)
    # get ratings data from mongodb
    client = MongoClient('mongodb+srv://mrjaffery:VXyEHHudq5iLGvQy@cluster0.g8aer3a.mongodb.net/')
    db = client['test']
    collection = db['Ratings']

    cursor = collection.find()
    data = list(cursor)
    
    result = []
    for item in data:
        result.append({
            'userID': item['userID'],
            'jobID': item['jobID'],
            'rating': item['rating']
        })

    # convert retrived into a data frame 
    df = pd.DataFrame(result)

    # Drop duplicate rows based on userID and jobID columns
    df.drop_duplicates(subset=['userID', 'jobID'], inplace=True)

    all_userIDs = df['userID'].unique()
    all_jobIDs = list(range(1, 11))
    all_combinations = pd.MultiIndex.from_product([all_userIDs, all_jobIDs], names=['userID', 'jobID'])
    df_all_combinations = pd.DataFrame(index=all_combinations).reset_index()

    # Perform a left join with the existing data to add missing rows
    df_merged = df_all_combinations.merge(df, how='left', on=['userID', 'jobID'])

    # Sort the merged DataFrame by userID and jobID
    df_merged.sort_values(['userID', 'jobID'], inplace=True)

    rated_df = (GetSimilar(userID, df_merged))
    job_array = rated_df['job'].tolist()
     # Convert DataFrame to JSON
    # df_json = rated_df.to_json(orient='records')

    # Return the JSON response
    print((job_array))
    return jsonify({'message': job_array})
    # return 'hello'

@app.route('/api/addRecommendation', methods=['POST'])
def create_data():
    print('in flask')
    data = request.get_json()
    # print(data['userID'])

    userID = data['userID']
    jobID = data['jobID']
    jobRating = data['jobRating']
    # print(userID)
    new_row = {"userID": userID, "jobID": jobID, "rating": jobRating}

    client = MongoClient('mongodb+srv://mrjaffery:VXyEHHudq5iLGvQy@cluster0.g8aer3a.mongodb.net/')
    db = client['test']
    collection = db['Ratings']

    # # Insert the new record into the collection
    inserted_record = collection.insert_one(new_row)

    if inserted_record.acknowledged:
        return jsonify({'message': 'Data created successfully'})
    else:
        return jsonify({'message': 'Failed to add record'})
    
if __name__ == '__main__':
    app.run(debug=True)