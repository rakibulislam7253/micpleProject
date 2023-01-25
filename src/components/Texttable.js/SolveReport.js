import React, { useEffect, useState } from "react";

const SolveReport = () => {
  const [searchResults, setSearchResults] = useState();
const option1=['a','b','c','d','e']
  return (
    <div>
      <select>
       {
        option1.map(btn=>
            {
                <option>{btn.option1}</option>
            })
       }
      </select>
    </div>
  );
};

export default SolveReport;
