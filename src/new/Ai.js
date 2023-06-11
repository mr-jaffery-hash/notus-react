import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function RecommendedTable({ color, jobs }) {
  const [programs, setPrograms] = useState([]);
  const [org, setOrg] = useState();
  const [pic, setPic] = useState();
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [similarJobs, setSimilarJobs] = useState([]);

  const fetchData = async (userID) => {
    try {
      await axios
        .get("http://localhost:8000/api/getRecommendation", {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setSimilarJobs(response.data.message);
          // return response.data.message
          
        });
        console.log("my ai response", similarJobs);
       // or update your component state with the received data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('job', jobs)
    const fetchDataAndFilter = async () => {
      const fetchedData = await fetchData(localStorage.getItem("email"));
      console.log('return', similarJobs);
      
      let filterData = [];
      for (let i = 0; i < similarJobs.length; i++) {
        filterData = [...filterData, jobs.filter(item => item.title === similarJobs[i])];
      }
      console.log('simi', similarJobs)
      setSimilarJobs(filterData);
    };
  
    fetchDataAndFilter();
  }, []);

  function onHoverHandle(event) {
    setPic(event.parentNode.firstChild.firstChild.src);
    setOrg(event.parentNode.firstChild.textContent);
  }
  function onHoverExit() {
    setOrg(null);
    setPic(null);
  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Recommended
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Drive Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Area
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Duration
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Organisation
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Vacancy
                </th>
              </tr>
            </thead>
            <tbody>
              {similarJobs.map((item) => (
                <tr
                  onMouseEnter={(e) => {
                    onHoverHandle(e.target);
                  }}
                >
                  <th
                    id="head"
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                  >
                    {item.title}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.city}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.duration}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.organisation}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.vacancy}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown name={org} pic={pic} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

RecommendedTable.defaultProps = {
  color: "light",
};

RecommendedTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
