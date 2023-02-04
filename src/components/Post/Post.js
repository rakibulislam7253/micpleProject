import React, { useState } from "react";
import styles from "./PostShow.module.css";
import { FiMoreVertical } from "react-icons/fi";
import { IoCheckmarkCircleOutline, IoMdShareAlt } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { BiWorld, BiCommentDetail, BiRocket } from "react-icons/bi";
import {

} from "react-icons/bs";
import Post_Customs_Icons from "./Post_Customs_Icons";


const Post = () => {
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
                            Name <IoCheckmarkCircleOutline className={styles.pIcon} />
                        </h4>
                        <p style={{ marginTop: "-20px", fontSize: "12px", marginLeft: "-18px" }}>
                            2 day<BiWorld className={styles.pIcon} />
                        </p>
                    </div>
                </div>


                {/* option */}

                <div>

                    <FiMoreVertical style={{ marginTop: "8px", position: "sticky", marginRight: "10px", height: "22px" }} onClick={toggleDropdown} />
                    <div style={{ position: "absolute", marginTop: "-15px" }}>
                        {isOpen && (


                            <ul style={{ marginLeft: "-80px", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px" }}>

                                <Post_Customs_Icons title={'Remove '} />
                                <Post_Customs_Icons title={'Band'} />


                            </ul>

                        )}
                    </div>
                </div>
            </div>
            <div className={styles.pMain}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNg1_sTuHQe1xYCq1HMU_tGgqJwCuIFeCiw&usqp=CAU"
                    alt=""

                />
            </div>


            <div className={styles.pFooter}>
                <div className={styles.emoji}>
                    <img style={{ width: "33px", height: "33px" }} src="https://em-content.zobj.net/source/skype/289/thumbs-up_1f44d.png"></img>
                    <p>Like</p>
                    <p style={{ fontWeight: "normal" }}>50</p>
                </div>
                <div className={styles.emoji}>
                    <img style={{ width: "30px", height: "30px" }} src="https://em-content.zobj.net/source/skype/289/smiling-face-with-heart-eyes_1f60d.png"></img>
                    <p>Love</p>
                    <p style={{ fontWeight: "normal" }}>15</p>
                </div>
                <div className={styles.emoji}>
                    {/* <img src="https://em-content.zobj.net/source/skype/289/grinning-face-with-sweat_1f605.png"></img> */}
                    <img style={{ width: "30px", height: "30px" }} src="https://em-content.zobj.net/source/skype/289/face-with-hand-over-mouth_1f92d.png"></img>
                    <p>Haha</p>
                    <p style={{ fontWeight: "normal" }}>6</p>
                </div>
                <div className={styles.emoji}>
                    <img style={{ width: "28px", height: "28px" }} src="https://em-content.zobj.net/source/skype/289/crying-face_1f622.png"></img>
                    <p>Sad</p>
                    <p style={{ fontWeight: "normal" }}>1</p>
                </div>
                <div className={styles.emoji}>
                    <img style={{ width: "30px", height: "30px" }} src="https://em-content.zobj.net/source/skype/289/angry-face_1f620.png"></img>
                    <p>Angry</p>
                    <p style={{ fontWeight: "normal" }}>0</p>
                </div>

                <div className={styles.emoji}>

                    <img style={{ width: "30px", height: "30px" }} src="https://em-content.zobj.net/source/skype/289/cold-face_1f976.png"></img>

                    <p>Winter</p>
                    <p style={{ fontWeight: "normal" }}>5</p>
                </div>
                <div className={styles.emoji}>
                    <BiCommentDetail style={{ width: "25px" }} />
                    <p>Comments</p>
                    <p style={{ fontWeight: "normal" }}>5</p>
                </div>
                <div className={styles.emoji}>
                    <RiShareForwardLine style={{ width: "25px" }} />
                    <p>Share</p>
                    <p style={{ fontWeight: "normal" }}>5</p>
                </div>
                <div className={styles.emoji}>
                    <BiRocket style={{ width: "25px" }} />
                    <p>Promote</p>
                    <p style={{ fontWeight: "normal" }}>5</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
