import React, { useEffect, useState } from "react";
import test_table from "./testTable.module.css";
import { BiSend, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const Search = () => {
  const [first, setFirst] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState();



  useEffect(() => {
    fetch("maildata1.json")
      .then((response) => response.json())
      .then((json) => setFirst(json));
  }, []);



  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    // console.log(searchText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    first.map((country) => {
      country.state.map((state) => {
        state.city.map((city) => {
          // console.log(searchText);
          const filteredData = city.user_report.find(
            (report) => report.user_id === searchText
          );
          // console.log(filteredData);
          if (filteredData) {
            setSearchResults(filteredData);
            // console.log(searchResults)
          }
        });
      });
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className={test_table.searchInputStyle}>
          <div
            className={test_table.inputtest_table}
            style={{ display: "flex" }}
          >
            <input
              onChange={handleSearch}
              value={searchText}
              style={{
                height: "30px",
                width: "300px",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "white"
              }}
              className={test_table.input}
              placeholder="Search by User ID...."
            />
            <BiSearch
              style={{ color: "gray", marginRight: "10px", color: "blue" }}
              className={test_table.searchBtn}
            />
          </div>
        </form>
      </div>
      {/* display: searchResults ? "block" : "none" */}
      <div style={{display: searchResults ? "block" : "none", marginTop: "-40px", border: "1px solid Lightgray", padding: "12px" }} >
        <table className={test_table.table}  >
          <tr>
            <th style={{ padding: "10px" }}>Country</th>
            <th style={{ padding: "10px" }}>Division</th>
            <th style={{ padding: "10px" }}>Distric</th>
            <th style={{ padding: "10px" }}>User ID</th>
            <th style={{ padding: "10px" }}>Subject</th>
            <th style={{ padding: "10px" }}>Repoter</th>
            <th style={{ padding: "10px" }}>Claimer</th>
            <th style={{ padding: "10px" }}>Post ID</th>
            <th style={{ padding: "10px" }}> Comment</th>
            <th style={{ padding: "5px 18px" }}> Status</th>
          </tr>

          {searchResults &&
            searchResults.reports.map((item) => {
              return (
                <>
                  <tr >
                    <td  style={{padding:"5px"}}>{item.country_name}</td>
                    <td>{item.State_name}</td>
                    <td>{item.city_name}</td>
                    <td>{item.user_id}</td>
                    <td style={{padding:"5px"}}>{item.report_sub}</td>
                    <td>
                      {item.user_name} ({item.user_id})
                    </td>
                    <td>
                      {" "}
                      {item.claim_id} ({item.claim_name})
                    </td>
                    <td> {item.post_id}</td>
                    <td> {item.comment}</td>
                    <td> {item.status}</td>
                  </tr>
                </>
              );
            })}

          <div>
            <Link state={searchResults} to={"/pdf1"}>
              <button
                style={{padding: "5px 15px",position: "absolute",marginLeft: "820px",marginTop:"25px"}}
                id={"pdfbtn"}>
                {" "}
                Download PDF
              </button>
            </Link>
          </div>

         
        </table>
      </div>
      <h3 style={{marginTop:"60px",display: searchResults ? "block" : "none" }}>All User Data</h3>
    </div>
  );
};

export default Search;
