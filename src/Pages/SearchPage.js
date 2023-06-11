import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import SearchCardTable from "../components/Cards/SearchCardTable.js";
import RecommendedTable from "../components/Cards/RecommendedTable.js";
import { Link } from "react-router-dom";
import SearchCardStats from "../components/Cards/SearchCardStats.js";
export default function Tables() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([])

  const fetchJobs = async () => {
    try{
      const response=await axios.get("http://localhost:5000/api/job");
      setJobs(response.data);
    }
    catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    // axios api call response
    fetchJobs()
    // setJobs(Object.values(response));
  }, []);

  const handleInputChange = (newValue, statTitle) => {
    console.log('new value', newValue)
    setSearchTerm(newValue);
    console.log('title', statTitle)
    let data = jobs;
    console.log('data', data)
    let searchedData = []
    if(statTitle==='Search by Organisation'){
      console.log('in here')
      console.log('term', searchTerm)
       searchedData = data.filter((item) => item.title === newValue);
       console.log('rel', searchedData)
    }
    else if(statTitle==='Search by Location'){
      console.log('in locations')
      console.log('jobs', jobs)
      console.log('data', data)
       searchedData = data.filter((item) => item.city === newValue);
       console.log('rel', searchedData)
    }
    else if(statTitle==='Search by Duration'){
       searchedData = data.filter((item) => item.duration === newValue);
    }
    else if(statTitle==='Search by Vacancy'){
       searchedData = data.filter((item) => item.vacancy === newValue);
    }
    setFilteredJobs(searchedData);
  };

  return (
    <>
      <AdminNavbar />
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/search">
                  <SearchCardStats
                    statSubtitle=""
                    statTitle="Search by Organisation"
                    statArrow=""
                    statPercent=""
                    statPercentColor="text-emerald-500"
                    statDescripiron=""
                    statIconName="fas fa-building"
                    statIconColor="bg-lightBlue-500"
                    handleInputChange={handleInputChange}
                  />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <SearchCardStats
                  statSubtitle=""
                  statTitle="Search by Location"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-map"
                  statIconColor="bg-red-500"
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <SearchCardStats
                  statSubtitle=""
                  statTitle="Search by Duration"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-clock"
                  statIconColor="bg-pink-500"
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <SearchCardStats
                  statSubtitle=""
                  statTitle="Search by Vacancy"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {filteredJobs.length>0? <SearchCardTable jobs={filteredJobs} />:<SearchCardTable jobs={jobs} />}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        {filteredJobs.length>0? <RecommendedTable jobs={filteredJobs} />:<RecommendedTable jobs={jobs} />}
        </div>
      </div>
    </>
  );
}
