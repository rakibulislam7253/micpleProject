import React, { useEffect, useState } from "react";
import { UnderReview } from "./StateContext";

const SolveReport = () => {
  const [ShowData, setShowdata] = useState()

  const solve = UnderReview();
  // useEffect(() => {
  
  //   setShowdata(solve)
  // }, [solve])

  // console.log(ShowData)
  return (
    <div>
      {/* {
        ShowData?.map(name => {

          <h1>name: {name}</h1>
        })

      } */}
      <h1>name: {solve}</h1>

    </div>
  );
};

export default SolveReport;
