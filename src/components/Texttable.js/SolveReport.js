import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
import demo2 from '../demo/1580007.jpg'
const SolveReport = () => {
  return (
    <div style={{ textAlign: "left", display: "flex", alignContent: "center", justifyContent: "space-between", padding: "0px 15px", backgroundColor: "Lightgray", width: "33%", height: "100%" }}>
      <div style={{ display: "flex" }}>

        <div style={{ marginTop: "2px" }}>
          <img style={{ width: "90px", height: "90px" }} src="https://img.icons8.com/plasticine/256/user-male-circle.png" />
        </div>

        <div style={{ padding: "2px 5x", marginTop: "2px", marginLeft: "5px",width:"50%" }}>
          <h4><b>John Doe</b></h4>
          <p style={{ marginTop: "-20px" }}>Workes doesn't add yet.
            Educations doesn't add yet.</p>
        </div>
      </div>

      <div style={{ marginTop: "30px", marginLeft: "-10px" }}>

        <button style={{ margin: "10px", padding: "3px 10px" }}>Unfollow</button>
        <button style={{ padding: "3px 10px" }}>Block</button>
      </div>


    </div>


  );
};

export default SolveReport;



