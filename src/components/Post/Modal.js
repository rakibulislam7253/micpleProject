import React, { useState } from "react";
import styles from "./post.module.css";
import { FiMoreVertical } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { BiWorld, BiCommentDetail, BiRocket } from "react-icons/bi";
import { TbPlayerEject, TbBan } from "react-icons/tb";
import Post_Customs_Icons from "./Post_Customs_Icons";
import { GiVrHeadset } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa";

const Modal = ({ items }) => {
  const {
    user_name,
    audio,
    video,
    photo,
    file,
    status,
    share,
    reaction,
    comments,
    date,
    promote,
    live,
    pull
  } = items;
const [count,setCount]=useState(0)
const [count1,setCount1]=useState(0)



const handelyes=()=>{
  
  setCount(count+1)
  
console.log(count)
}
const handelNo=()=>{
  
  setCount1(count1+1)
  
console.log(count1)
}
  console.log(items?.message);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.pDiv}>
      <div className={styles.pHeader}>
        <div className={styles.pHName}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNg1_sTuHQe1xYCq1HMU_tGgqJwCuIFeCiw&usqp=CAU"
            alt=""
            className={styles.pPhoto}
          />
          <div className={styles.hName}>
            <h4>
              {items.user_name}
              <IoCheckmarkCircleOutline className={styles.pIcon} />
            </h4>
            <p
              style={{
                marginTop: "-20px",
                fontSize: "12px",
              }}
            >
              {date}
              <BiWorld className={styles.pIcon1} />
            </p>
          </div>
        </div>

        {/* option */}

        <div>
          <FiMoreVertical
            style={{
              marginTop: "8px",

              marginRight: "10px",
              height: "22px",
            }}
            onClick={toggleDropdown}
          />
          <div style={{ position: "absolute" }}>
            {isOpen && (
              <ul
                style={{
                  marginTop: "5px",
                  marginLeft: "-210px",
                  width: "200px",

                  // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                }}
              >
                <Post_Customs_Icons
                  component={
                    <TbPlayerEject
                      className={styles.effect}
                      style={{
                        color: "gray",
                        width: "20px",
                        height: "20px"
                      }}
                    />
                  }
                  title={"Reject "}
                />
                <Post_Customs_Icons
                  component={
                    <TbBan
                      className={styles.effect}
                      style={{
                        color: "gray",
                        width: "20px",
                        height: "20px"
                      }}
                    />
                  }
                  title={"Ban"}
                />
                <Post_Customs_Icons
                  className={styles.effect}
                  component={
                    <GiVrHeadset
                      style={{
                        color: "gray",
                        width: "20px",
                        height: "20px"
                      }}
                    />
                  }
                  title={"Adds Hide"}
                />
                <Post_Customs_Icons
                  className={styles.effect}
                  component={
                    <FaHeadSideVirus
                      style={{
                        color: "gray",
                        width: "20px",
                        height: "20px"
                      }}
                    />
                  }
                  title={"Adds Ban"}
                />
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={styles.pMain}>
        {audio ? (
          <audio style={{
            width: "250px",

            padding: "10px",
            marginInlineStart: "-50px"
          }} controls>
            <source src={items?.audio} type="audio/mp3" />
          </audio>
        ) : (
          ""
        )}

        {video ? (
          <video style={{ width: "100%", video: "100%" }} controls>
            <source src={items?.video} type="video/mp4"></source>
          </video>

        ) :
          ""
        }
        {photo ? (
          <div style={{ width: "100%" }}>
            <img style={{ height: "400px" }} src={items?.photo} />
          </div>
        ) : (
          ""
        )}
        {file ? <input type="file" id="avatar" name="avatar" /> : ""}
        {status ? (
          <div>
            <h3>Status Here</h3>
          </div>
        ) : (
          ""
        )}

        {live ? (
          <video width="100%" height="100%" controls>
            <source src={items?.live} type="video/mp4" />
          </video>
        ) : (
          ""
        )}

        {
          pull ? (
            <div >
              <div className={styles.pull}>
                <div style={{ marginTop: "140px", marginLeft: "170px" }}>

                  <div style={{ position: "relative", marginTop: "-95px", marginLeft: "13px" }}>
                    <p className={styles.box} style={{ fontSize: "30px" }} ></p>
                  </div>
                  <div style={{ position: "relative", marginTop: "-90px" }}>
                    <p className={styles.box1} style={{ fontSize: "30px" }} ></p>
                  </div>
                  <div style={{ position: "relative", marginTop: "-90px", marginLeft: "-10px" }}>
                    <p className={styles.box2} style={{ fontSize: "30px" }} >Questions</p>
                  </div>
                </div>


              <div style={{display:"flex",justifyContent:"center"}}>
                
                 
                  <p style={{width:"120px",height:"70px",backgroundColor:"white",fontSize:"30px",padding:"10px",borderTopLeftRadius: "25px",borderBottomLeftRadius: "25px"}}><span style={{fontSize:"30px",fontFamily:"inherit",fontWeight:"bold",
                 
                 color :"#0048ba"}}>Yes</span><br></br>{count}%</p>
              

                <p style={{width:"120px",height:"70px",backgroundColor:"rgb(244, 239, 239)",fontSize:"30px",padding:"10px",  borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}><span style={{fontSize:"30px",fontFamily:"inherit",fontWeight:"bold",
                 
                 color :"#0048ba"}}>No</span><br></br>{count1}%</p>
               
              </div>
              <div>
                <h2 style={{padding:"0px 10px"}}>1998 is my birdthday date.Is my year 24?</h2>
              </div>

              <div style={{display:"flex",justifyContent:"center"}}>
                
                 
                  <p  onClick={handelyes} style={{ cursor:"pointer", width:"100px",height:"30px",backgroundColor:"white",fontSize:"30px",padding:"10px",borderTopLeftRadius: "25px",borderBottomLeftRadius: "25px"}}><span style={{fontSize:"30px",fontFamily:"inherit",fontWeight:"bold",
                 
                 color :"#0048ba"}}>Yes</span></p>
              

                <p onClick={handelNo} style={{ cursor:"pointer",width:"100px",height:"30px",backgroundColor:"rgb(244, 239, 239)",fontSize:"30px",padding:"10px",  borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}><span style={{fontSize:"30px",fontFamily:"inherit",fontWeight:"bold",
                 
                 color :"#0048ba"}}>No</span></p>
               
              </div>
              </div>
            </div>
          ) : ("")}
      </div>


      {/* emoji */}
      <div className={styles.pFooter}>
        <div className={styles.emoji}>
          <img
            style={{ width: "33px", height: "33px" }}
            src="https://em-content.zobj.net/source/skype/289/thumbs-up_1f44d.png"
          ></img>
          <p>Like</p>
          <p style={{ fontWeight: "normal" }}>{reaction.like}</p>
        </div>
        <div className={styles.emoji}>
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://em-content.zobj.net/source/skype/289/smiling-face-with-heart-eyes_1f60d.png"
          ></img>
          <p>Love</p>
          <p style={{ fontWeight: "normal" }}>{reaction.love}</p>
        </div>
        <div className={styles.emoji}>
          {/* <img src="https://em-content.zobj.net/source/skype/289/grinning-face-with-sweat_1f605.png"></img> */}
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://em-content.zobj.net/source/skype/289/face-with-hand-over-mouth_1f92d.png"
          ></img>
          <p>Haha</p>
          <p style={{ fontWeight: "normal" }}>{reaction.haha}</p>
        </div>
        <div className={styles.emoji}>
          <img
            style={{ width: "28px", height: "28px" }}
            src="https://em-content.zobj.net/source/skype/289/crying-face_1f622.png"
          ></img>
          <p>Sad</p>
          <p style={{ fontWeight: "normal" }}>{reaction.sad}</p>
        </div>
        <div className={styles.emoji}>
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://em-content.zobj.net/source/skype/289/angry-face_1f620.png"
          ></img>
          <p>Angry</p>
          <p style={{ fontWeight: "normal" }}>{reaction.angry}</p>
        </div>

        <div className={styles.emoji}>
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://em-content.zobj.net/source/skype/289/cold-face_1f976.png"
          ></img>

          <p>Winter</p>
          <p style={{ fontWeight: "normal" }}>5</p>
        </div>
        <div className={styles.emoji}>
          <BiCommentDetail style={{ width: "25px" }} />
          <p>Comments</p>
          <p style={{ fontWeight: "normal" }}>{comments}</p>
        </div>
        <div className={styles.emoji}>
          <RiShareForwardLine style={{ width: "25px" }} />
          <p>Share</p>
          <p style={{ fontWeight: "normal" }}>{share}</p>
        </div>
        <div className={styles.emoji}>
          <BiRocket style={{ width: "25px" }} />
          <p>Promote</p>
          <p style={{ fontWeight: "normal" }}>{promote}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;