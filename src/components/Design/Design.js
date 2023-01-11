import React from "react";
import { Link } from "react-router-dom";
import './design.css'


const Design = (props) => {
  
 const{id,category,price} = props.deshborditem;
  
  return (
    <div className="box_style">
    <div className="boxpart">
      <p className="number">{price }</p>

      <div className="divide">
        <div className="name">
          <p className="itemname">{category}</p>

         <Link to={`/test/${id}`} >
         <button className="countrybtn">Country</button>
         </Link>
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default Design;
