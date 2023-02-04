import React, { useEffect, useState } from "react";
import { BiSend, BiSearch } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import test_table from "./testTable.module.css";
import { BiReset } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import Search from "./Search";
import SolveReport from "./SolveReport";

const Tasttable = () => {
  let country;

  const [data, setdata] = useState([]);
  const [getstat, setstat] = useState([]);
  const [getcity, setcity] = useState([]);
  const [getuser, setUserId] = useState([]);
  const [singleuserinfo, setSingleUserInfo] = useState([]);
  const [singleuserinfoClaim, setSingleUserInfoClaim] = useState(false);

  // spinner reset

  const [isLoading, setIsLoading] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [progress, setProgress] = useState(false);

  let intervalId;

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          setIsLoading(false);
          setstat([]);
          setcity([]);
          setUserId([]);
          setSingleUserInfo([]);
          setSingleUserInfoClaim([]);
          return 0;
        }
        return prevProgress + 10;
      });
    }, 1000);
  };

  const cancelLoading = () => {
    clearInterval(intervalId);
    setIsLoading(false);
    setProgress(true);
  };

  //color state
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButton1, setSelectedButton1] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState(null);
  const [selectedButton4, setSelectedButton4] = useState(null);

  //color state clickHandel
  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };
  const handleButtonClick1 = (id) => {
    setSelectedButton1(id);
  };
  const handleButtonClick2 = (id) => {
    setSelectedButton2(id);
  };
  const handleButtonClick3 = (id) => {
    setSelectedButton3(id);
  };
  const handleButtonClick4 = (id) => {
    setSelectedButton4(id);
  };

  useEffect(() => {
    fetch("maildata1.json")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);

  const handleCountry = (item) => {
    let country = item.state;
    const selectCountry = country.map((item) => item);
    setstat(selectCountry);
  };

  const handlestate = (item) => {
    let state = item.city;
    const selectState = state.map((item) => item);
    setcity(selectState);
  };

  const handlecity = (item) => {
    let state = item.user_report;
    const SelectState = state.map((item) => item);
    setUserId(SelectState);
  };

  const handleUserId = (item) => {
    let state = item.reports;
    const SelectState = state.map((item) => item);
    setSingleUserInfo(SelectState);
  };

  const handleclaimId = (item) => {
    let state = item.claim;
    const SelectState = state.map((item) => item);
    setSingleUserInfoClaim(SelectState);
  };

  ////////////////////////// search////////////////////

  return (
    <>
      <div>
        {/* <h1>{searchResult.length}</h1> */}

        {/* /////////////////////////////search part /////////////////////////////////*/}
        <Search></Search>

        <br></br>
        <br></br>
        <div className={test_table.inner} style={{marginTop:"-40px"}}>
          <div style={{ width: "10%" }}>
            <table className={test_table.table}>
              <tr>
                <th style={{ padding: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "-15px",
                      marginBottom: "-22px",
                    }}
                  >
                    <p>Country</p>
                    {/* reset button */}
                    <p className={test_table.tooltip1}>
                      <span className={test_table.tooltiptext1}>
                        Reset Data
                      </span>
                      {isLoading ? (
                        <div className={test_table.loaderContainer}>
                          <svg viewBox="0 0 36 36">
                            <path
                              className={test_table.progressBg}
                              d="M 18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className={test_table.progressBar}
                              strokeDasharray={`${progress}, 100`}
                              d="M 18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>

                          <MdOutlineCancel
                            onClick={cancelLoading}
                            color="#0048ba"
                            className={test_table.cancelButton}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <BiReset
                            onClick={startLoading}
                            className={test_table.restButtonStyle}
                          />
                        </div>
                      )}
                    </p>
                  </div>
                </th>
              </tr>
              {/* country map */}
              {data.map((item) => {
                return (
                  <>
                    {" "}
                    <tr>
                      <td onClick={() => handleCountry(item)}>
                        <button
                          className={test_table.btn}
                          onClick={() => handleButtonClick(item.id)}
                          style={{
                            backgroundColor:
                              selectedButton === item.id ? "#0048ba" : "white",
                            color:
                              selectedButton === item.id ? "white" : "black",
                          }}
                        >
                          {item.country_name} ({item.total_Mail_count})
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>

          {/* division map */}
          <div style={{ width: "10%" }}>
            <table className={test_table.table}>
              <tr>
                <th style={{ padding: "10px" }}>Division</th>
              </tr>
              {getstat.map((item) => {
                return (
                  <>
                    <tr>
                      <td onClick={() => handlestate(item)}>
                        <button
                          className={test_table.btn}
                          onClick={() => handleButtonClick1(item)}
                          style={{
                            backgroundColor:
                              selectedButton1 === item ? "#0048ba" : "white",
                            color: selectedButton1 === item ? "white" : "black",
                          }}
                        >
                          {item.State_name} ({item.state_user_count})
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>

          {/* distric map */}
          <div style={{ width: "10%" }}>
            <table className={test_table.table}>
              <tr>
                <th style={{ padding: "10px" }}>District</th>
              </tr>
              {getcity.map((item) => {
                return (
                  <>
                    {" "}
                    <tr onClick={(e) => handlecity(item)}>
                      <td>
                        <button
                          className={test_table.btn}
                          onClick={() => handleButtonClick2(item)}
                          style={{
                            backgroundColor:
                              selectedButton2 === item ? "#0048ba" : "white",
                            color: selectedButton2 === item ? "white" : "black",
                          }}
                        >
                          {item.city_name} ({item.city_user_count})
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>

          {/* userId map */}
          <div style={{ width: "10%" }}>
            <table className={test_table.table}>
              <tr>
                <th style={{ padding: "10px" }}>User ID</th>
              </tr>
              {getuser.map((item) => {
                return (
                  <>
                    <tr>
                      {" "}
                      <td onClick={(e) => handleUserId(item)}>
                        <button
                          className={test_table.btn}
                          onClick={() => handleButtonClick3(item)}
                          style={{
                            backgroundColor:
                              selectedButton3 === item ? "#0048ba" : "white",
                            color: selectedButton3 === item ? "white" : "black",
                          }}
                        >
                          {item.user_id}
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>

          {/* rest of part */}
          <div style={{ width: "60%" }}>
            <table className={test_table.table}>
              <tr>
                <th style={{ padding: "10px" }}>Subject</th>
                <th style={{ padding: "10px" }}>Repoter</th>
                <th style={{ padding: "10px" }}>Claimer</th>
                <th style={{ padding: "10px" }}>Post ID</th>
                <th style={{ padding: "10px" }}> Comment</th>
                <th style={{ padding: "5px 18px" }}> Status</th>
              </tr>

              {singleuserinfo.map((item) => {
                return (
                  <>
                    <tr>
                      <td onClick={(e) => handleclaimId(item)}>
                        <button
                          className={test_table.btn}
                          onClick={() => handleButtonClick4(item)}
                          style={{
                            backgroundColor:
                              selectedButton4 === item ? "#0048ba" : "white",
                            color: selectedButton4 === item ? "white" : "black",
                          }}
                        >
                          {item.report_sub}{" "}
                        </button>
                      </td>

                      <td style={{ padding: "10px" }}>
                        {" "}
                        {item.user_name} ({item.user_id})
                      </td>
                      <td>
                        {item.claim_id} ({item.claim_name})
                      </td>
                      <td> {item.post_id} </td>
                      <td style={{ maxWeight: "1000px" }}> {item.comment} </td>
                      <td> {item.status} </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>

          <div style={{ width: "13%" }}>
            <table className={test_table.table}>
              <th
                style={{
                  fontSize: "16px",
                  height: "35px",
                  width: "98%",
                  display: "flex",
                }}
              >
                <p style={{ marginLeft: "90px", marginTop: "8px" }}>Review</p>
                <div style={{ marginLeft: "80px", marginTop: "5px" }}>
                  {/* {
                                singleuserinfoClaim && 
                               <BiDownload style={{ width: "20px", height: "25px" }} /> 
                            } */}
                </div>
              </th>

              {singleuserinfoClaim &&
                singleuserinfoClaim.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {/* repoter */}
                          <div className={test_table.reportpart}>
                            <div style={{ backgroundColor: "#e4e4e4" }}>
                              <p
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  marginTop: "-15PX",
                                  fontWeight: "bold",
                                  fontSize: "15px",
                                }}
                              >
                                {item.user_name}
                                <span style={{ fontSize: "11px" }}>
                                  {" "}
                                  (Repoter){" "}
                                </span>
                              </p>
                            </div>

                            <div style={{ width: "320px", height: "90px" }}>
                              <p style={{ fontSize: "13px" }}>
                                {item.reportr_Issue}
                              </p>
                              <p
                                style={{
                                  fontSize: "9px",
                                  color: "gray",
                                  marginRight: "5px",
                                  marginTop: "-7px",
                                }}
                              >
                                05/01/2022, 18:11
                              </p>
                            </div>

                            <div style={{ height: "300px" }}>
                              <div style={{ textAlign: "start", width: "80%" }}>
                                <p
                                  style={{
                                    backgroundColor: "lightgray",
                                    fontSize: "12px",
                                    borderRadius: "10px 10px 10px 0px",
                                    padding: "5px",
                                    margin: "5px 5px 2px 5px",
                                  }}
                                >
                                  srgsdfctgsgsvsghcsx
                                </p>
                                <p
                                  style={{
                                    fontSize: "9px",
                                    color: "gray",
                                    marginLeft: "5px",
                                  }}
                                >
                                  05/01/2022, 17:31
                                </p>
                              </div>

                              <div
                                style={{
                                  width: "80%",
                                  marginLeft: "auto",
                                  textAlign: "end",
                                }}
                              >
                                <p
                                  style={{
                                    backgroundColor: "gray",
                                    fontSize: "12px",
                                    borderRadius: "10px 10px 0px 10px",
                                    padding: "5px",
                                    margin: "5px 5px 2px 5px",
                                    color: "white",
                                  }}
                                >
                                  sdgfcseghsrdtgnbdbjv
                                </p>
                                <p
                                  style={{
                                    fontSize: "9px",
                                    color: "gray",
                                    marginRight: "5px",
                                  }}
                                >
                                  05/01/2022, 18:11
                                </p>
                              </div>
                            </div>

                            <div
                              style={{ marginLeft: "15px", display: "flex" }}
                            >
                              <div style={{ paddingTop: "8px" }}>
                                <input
                                  className={test_table.inputbox}
                                  placeholder="Type messege"
                                ></input>
                              </div>
                              <div>
                                <BiSend
                                  className={test_table.repltbtn}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* claimer */}
                          <div className={test_table.reportpart1}>
                            <div style={{ backgroundColor: "#e4e4e4" }}>
                              <p
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  marginTop: "15PX",
                                  fontWeight: "bold",
                                  fontSize: "15px",
                                }}
                              >
                                {item.claim_name}
                                <span style={{ fontSize: "11px" }}>
                                  {" "}
                                  (Claimer)
                                </span>
                              </p>
                            </div>
                            <div style={{ width: "320px", height: "90px" }}>
                              <p style={{ fontSize: "13px" }}>
                                {item.claim_issue}
                              </p>
                              <p
                                style={{
                                  fontSize: "9px",
                                  color: "gray",
                                  marginRight: "5px",
                                  marginTop: "-7px",
                                }}
                              >
                                05/01/2022, 18:11
                              </p>
                            </div>

                            <div style={{ height: "300px" }}>
                              <div style={{ textAlign: "start", width: "80%" }}>
                                <p
                                  style={{
                                    backgroundColor: "lightgray",
                                    fontSize: "12px",
                                    borderRadius: "10px 10px 10px 0px",
                                    padding: "5px",
                                    margin: "5px 5px 2px 5px",
                                  }}
                                >
                                  srgsdfctgsgsvsghcsx
                                </p>
                                <p
                                  style={{
                                    fontSize: "9px",
                                    color: "gray",
                                    marginLeft: "5px",
                                  }}
                                >
                                  05/01/2022, 17:31
                                </p>
                              </div>

                              <div
                                style={{
                                  width: "80%",
                                  marginLeft: "auto",
                                  textAlign: "end",
                                }}
                              >
                                <p
                                  style={{
                                    backgroundColor: "gray",
                                    fontSize: "12px",
                                    borderRadius: "10px 10px 0px 10px",
                                    padding: "5px",
                                    margin: "5px 5px 2px 5px",
                                    color: "white",
                                  }}
                                >
                                  sdgfcseghsrdtgnbdbjv
                                </p>
                                <p
                                  style={{
                                    fontSize: "9px",
                                    color: "gray",
                                    marginRight: "5px",
                                  }}
                                >
                                  05/01/2022, 18:11
                                </p>
                              </div>
                            </div>

                            <div
                              style={{
                                marginLeft: "25px",
                                display: "flex",
                                marginTop: "10px",
                              }}
                            >
                              <div>
                                <input
                                  className={test_table.inputbox}
                                  placeholder="Type messege"
                                ></input>
                              </div>
                              <div>
                                <BiSend
                                  style={{
                                    padding: "4px 10px",
                                    width: "25px",
                                    height: "25px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <div className={test_table.position}>
                        <Link
                          state={item}
                          to={"/pdf"}
                          className={test_table.tooltip}
                        >
                          <AiOutlineDownload
                            style={{
                              width: "22px",
                              height: "30px",
                              color: "gray",
                            }}
                          ></AiOutlineDownload>
                          <span className={test_table.tooltiptext}>
                            Download PDF
                          </span>
                        </Link>
                      </div>

                      <div
                        style={{
                          marginTop: "15px",
                          marginBottom: "15px",
                          display: "flex",
                          justifyContent: "flex-end",
                          marginRight: "5px",
                        }}
                      >
                        <div>
                          <Link
                            state={item}
                            to={""}
                            className={test_table.pdfbtn}
                          >
                            {" "}
                            Process{" "}
                          </Link>
                        </div>

                        <div style={{ marginLeft: "15px" }}>
                          <Link
                            state={item}
                            to={""}
                            className={test_table.pdfbtn1}
                          >
                            {" "}
                            Solve{" "}
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasttable;
