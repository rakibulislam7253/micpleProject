import React, { useEffect, useState } from "react";
import { UnderReview } from "./StateContext";

const SolveReport = () => {
const solve=UnderReview();
console.log(solve)
  return (
    <div>
      <h1>rakib{solve.length}</h1>
    </div>
  );
};

export default SolveReport;
