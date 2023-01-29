import React, { useEffect, useState } from "react";
import { UnderReview } from "./StateContext";

const SolveReport = () => {
const [ShowData,setShowdata]=useState()

const solve=UnderReview();
useEffect(()=>{

  setShowdata(solve)
},[solve])

// console.log(ShowData)
  return (
    <div>
      {
        ShowData?.map(item=>{
          console.log(item.country_name);
          <h3>{item?.State_name}</h3>
         

        })
      }
      
    </div>
  );
};

export default SolveReport;
