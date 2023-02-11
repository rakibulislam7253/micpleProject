import React, { useState } from "react";
import styles from "./post.module.css";

const Post_Customs_Icons = ({ title, component }) => {
  return (
    <div
      className={styles.modal}
      style={{
        
        marginLeft: "20px",
        backgroundColor: "white",
      }}
    >
      <button className={styles.btn1}>
        <p >{component}</p>

        <h5 style={{marginLeft:"8px"}} > {title} </h5>
      </button>
    </div>
  );
};

export default Post_Customs_Icons;