import React, { useEffect, useState } from "react";
import demo1 from '../demo/15800017.jpg'
import { BsCamera } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
const SolveReport = () => {


  return (
    <div>

      <div style={{ width: "340px", height: "300px", backgroundColor: "white"}}>
        <img style={{ width: "340px", height: "190px", marginTop: "10px" }} src={demo1}></img>
        
        <div style={{ display: "flex", justifyContent: "space-between" ,position:"relative",marginTop:"-190px",padding:"5px 10px"}}>

          <div>
            <BsCamera style={{ width: "25px", color: "white" }} />
          </div>
          <div>
            <FiMoreVertical style={{ width: "25px", color: "white" }} />
          </div>
          
        </div>

        <div style={{marginTop:"160px",textAlign:"left",marginLeft:"10px"}}>
        <h4>Mobile Application Developer</h4>
        <p style={{marginTop:"-20px"}}>0 (posts a day) 2 (Members).</p>
        </div>
        
      </div>

    </div>
  );
};

export default SolveReport;
