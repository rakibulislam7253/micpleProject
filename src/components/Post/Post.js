import React, { useState } from "react";

import styles from "./post.module.css";
import { BiReset } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect } from "react";
import Modal from "./Modal";
import PostFriend from "./PostFriend";

const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/post.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //country,state,city,phone state manage
  const [getState, setState] = useState([]);
  const [getCities, setCities] = useState([]);
  const [getUserId, setUserId] = useState([]);
  const [getCategories, setCategories] = useState([]);
  const [singleData, setSingleData] = useState([]);
  // const [singleData1, setSingleData1] = useState([]);

  const [details, setDetails] = useState([]);
  console.log(singleData)
  //color select
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButton1, setSelectedButton1] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState(null);
  const [selectedButton4, setSelectedButton4] = useState(null);
  const [selectedButton5, setSelectedButton5] = useState(null);


  //messaging color state
  const [colorSelect, setColorSelect] = useState(null);
  //reset button && loading
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(false);

  //

  //search input field
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const filtereData = data.filter((item) => console.log(item.country_name));

  let intervalId;

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          setIsLoading(false);
          setState([]);
          setCities([]);
          setUserId([]);
          setCategories([]);
          setSingleData([]);
          setDetails([]);
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

  const handleClickCountry = (e) => {
    // console.log(item);
    // console.log(item.state);
    const countries = e.state;
    console.log(countries);
    const state = countries.map((item) => item);
    setSelectedButton(e.id);
    setSelectedButton1(!e.id);
    setSelectedButton2(!e.id);
    setSelectedButton3(!e.id);
    setSelectedButton4(!e.id);
    setSelectedButton5(!e.id);

    // console.log(state);

    setState(state);
  };
  const handleClickState = (item) => {
    console.log(item);
    let state = item.city;
    let city = state.map((item) => item);
    setSelectedButton1(item);

    setCities(city);
  };
  const handleClickCity = (item) => {
    console.log(item);
    let state = item.user_id;
    let cities = state.map((item) => item);
    console.log(cities);
    setSelectedButton2(item);

    setUserId(cities);
  };
  const handleClickUserId = (e) => {
    // console.log(e.phones);
    const posts = e.category;
    let posted = posts.map((item) => item);
    console.log(posted);
    setSelectedButton3(e);

    setCategories(posted);
  };



  const handleClickCategories = (e) => {
    console.log(e);
    // const item=e.post
    // setCategories()

    if (e.name === value) {
      console.log(value)
      const friends = e.post;
      setSelectedButton4(e);
      setSingleData(friends)
    }


    else {

      const categoryee = e.post;
      const categories = categoryee?.map((item) => item);
      setSelectedButton4(e);
      setSingleData(categories);
    }
  };
  const handleClickCategoriesDetails = (e) => {
    console.log(e.details);
    const detail = e.details;
    const detailData = detail.map((item) => item);
    setSelectedButton5(e);
    setDetails(detailData);
  };

  return (
    <div>

      <div className={styles.mainCountry}>
        <table className={styles.mainTableContainer}>
          <table className={styles.tableCountry}>
            <tbody>
              <tr>
                <th>
                  <div className={styles.countryContainer}>
                    <p>Country</p>
                    <p className={styles.tooltip1}>
                      <span className={styles.tooltiptext1}>Reset Data</span>
                      {isLoading ? (
                        <div className={styles.loaderContainer}>
                          <svg viewBox="0 0 36 36">
                            <path
                              className={styles.progressBg}
                              d="M 18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className={styles.progressBar}
                              strokeDasharray={`${progress}, 100`}
                              d="M 18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>

                          <MdOutlineCancel
                            onClick={cancelLoading}
                            color="#0048ba"
                            className={styles.cancelButton}
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
                            className={styles.restButtonStyle}
                          />
                        </div>
                      )}
                    </p>
                  </div>
                </th>
              </tr>
              {data.map((item) => (
                <tr>
                  <td
                    onClick={() => handleClickCountry(item)}
                    className={[styles.countryPointer]}
                  >
                    <button
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          selectedButton === item.id ? "#0048ba" : "white",
                        color: selectedButton === item.id ? "white" : "black",
                      }}
                      className={styles.countryBtn}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "3px",
                          justifyContent: "center",
                        }}
                      >
                        <span> {item.country_name}</span>
                        <span> ({item.total_user_count})</span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.tableCountry1}>
            <tbody>
              <tr>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  State
                </th>
              </tr>
              {getState.map((items) => (
                <tr key={items.state}>
                  <td
                    onClick={() => handleClickState(items)}
                    className={styles.countryPointer}
                  >
                    <button
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          selectedButton1 === items ? "#0048ba" : "white",
                        color: selectedButton1 === items ? "white" : "black",
                      }}
                      className={styles.countryBtn}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "3px",
                          justifyContent: "center",
                        }}
                      >
                        <span> {items.State_name} </span>
                        <span> ({items.state_user_count})</span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.tableCountry1}>
            <tbody>
              <tr>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  City
                </th>
              </tr>
              {getCities.map((items) => (
                <tr key={items.state}>
                  <td
                    onClick={() => handleClickCity(items)}
                    className={styles.countryPointer}
                  >
                    <button
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          selectedButton2 === items ? "#0048ba" : "white",
                        color: selectedButton2 === items ? "white" : "black",
                      }}
                      className={styles.countryBtn}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "3px",
                          justifyContent: "center",
                        }}
                      >
                        <span> {items.city_name} </span>
                        <span> ({items.city_user_count})</span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.tableCountry1}>
            <tbody>
              <tr>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  UserId
                </th>
              </tr>
              {getUserId.map((items) => (
                <tr key={items.user_id}>
                  <td
                    onClick={() => handleClickUserId(items)}
                    className={styles.countryPointer}
                  >
                    <button
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          selectedButton3 === items ? "#0048ba" : "white",
                        color: selectedButton3 === items ? "white" : "black",
                      }}
                      className={styles.countryBtn}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "3px",
                          justifyContent: "center",
                        }}
                      >
                        <span> {items.user_id} </span>
                        <span> ({items.user_count})</span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>







          <table className={styles.tableCountry1}>
            <tbody>
              <tr>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Post
                </th>
              </tr>
              {getCategories.map((items) => (
                <tr key={items.phone}>
                  <td
                    onClick={() => handleClickCategories(items)}
                    className={styles.countryPointer}
                  >
                    <button
                    value={items}
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          selectedButton4 === items ? "#0048ba" : "white",
                        color: selectedButton4 === items ? "white" : "black",
                      }}
                      className={styles.countryBtn}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "3px",
                          justifyContent: "center",
                        }}
                      >
                        <span> {items.name} </span>
                        <span>({items.category_post_count}) </span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>





          {
            singleData?

              <>

                <table
                  style={{
                    height: "20px",
                  }}
                >
                  <tbody>
                    <tr>
                      <th>PostId</th>
                      <th>Date & Time</th>
                      <th>Name</th>
                    </tr>
                    {singleData.map((items) => (
                      <tr
                        onClick={() => handleClickCategoriesDetails(items)}
                        style={{

                          // fontWeight: colorSelect === items ? "normal" : "bold",
                          // color: colorSelect === items ? "gray" : "black",
                        }}
                        className={styles.dataStyle}
                      >
                        <td style={{
                          cursor: "pointer",
                          backgroundColor:
                            selectedButton5 === items ? "#0048ba" : "white",
                          color: selectedButton5 === items ? "white" : "black",
                        }}>{items.unique_audio_id}</td>
                        <td>
                          {items.date} ({items.sending_time})
                        </td>

                        <td>{items.user_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table
                  style={{
                    height: "20px",
                  }}
                >
                  <tbody>
                    <tr>
                      <th>Review</th>
                    </tr>
                    {details?.map((items) => (
                      <Modal items={items} />
                    ))}
                  </tbody>
                </table>
              </> 
              
              :
           <>

                {
                  singleData.map(item1 =>
                    // console.log(item1.name)
                    <PostFriend key={
                      item1.id}
                      item1={item1}
                    ></PostFriend>
                  )
                }
              </>







          }






        </table>
      </div>
    </div>
  );
};

export default Post;