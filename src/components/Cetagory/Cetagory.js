import React from "react";
import { useState, useEffect } from "react";
import Design from "../Design/Design";

import './deshboard.css'
const Cetagory = () => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setitems(data));
  }, []);
  return (
    
    <div className="design">
      <div className="boxstyle ">
        {items.map((deshborditem) => (
          <Design
          key={deshborditem.id}
          deshborditem={deshborditem}
          >
          </Design>
        ))}
      </div>
    </div>
  );
};

export default Cetagory;
// <div className="design">
//       <div className="boxstyle">
//         {items.map((deshborditem) => (
//           <Design
//           key={deshborditem._id}
//           deshborditem={deshborditem}
//           >
//           </Design>
//         ))}
//       </div>
//     </div>