import React, { useEffect, useState } from "react";
import demo1 from '../demo/15800017.jpg'
import { BsCamera } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
const SolveReport = () => {


  return (
    <div>

      <div style={{ width: "450px", height: "300px", backgroundColor: "green", border: "2px solid black" }}>
        <img style={{ width: "350px", height: "auto", marginTop: "10px" }} src={demo1}></img>
        <div style={{ display: "flex", justifyContent: "space-around" }}>

          <div>
            <BsCamera style={{ width: "25px", color: "white" }} />
          </div>
          <div>
            <FiMoreVertical style={{ width: "25px", color: "white" }} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SolveReport;
