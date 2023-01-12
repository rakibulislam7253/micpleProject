import React from "react";
import { useState, useEffect } from "react";

import "./report.css";
const Country = () => {
  // const [checked, setChecked] = useState(false);
  // const [checked1, setChecked1] = useState(false);
  // const [checked2, setChecked2] = useState(false);

  // const toggleChecked = () =>
  //   setChecked(value => !value);

  // const toggleChecked1 = () =>
  //   setChecked1(value => !value);

  // const toggleChecked2 = () =>
  //   setChecked2(value => !value);

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const styles = {
    popup: {

      color: open? 'white' : 'black',
      backgroundColor: open ? '#0048ba' : 'white',
      width:'100px',height:'40px'
    }

  }
  return (
    <div>

      <button style={styles.popup} onClick={() => { setOpen(true) }}>Open!</button>

      <button style={{color: open1? 'white' : 'black', backgroundColor: open1 ? "#0048ba" : "white" ,margin:'20px',width:'100px',height:'40px'}} onClick={() => { setOpen1(true) }}>Open!</button>

      <button style={{color: open2? 'white' : 'black', backgroundColor: open2 ? "#0048ba" : "white",width:'100px',height:'40px' }} onClick={() => { setOpen2(true) }}>Open!</button>

    </div>
  );
};


export default Country;
// function App() {
//   const [checked, setChecked] = useState(false);
//   const toggleChecked = () => setChecked(value => !value);
//   return (
//     <input
//       type="checkbox"
//       checked={checked}
//       onChange={toggleChecked}
//     />
//   );
// }


// const [open,setOpen] = useState(false)
//   const styles = {
//     popup:{
//       display:"none",
//       opacity:"0"
//     }
//   };
//   return (
//     <div className="main">
//       <button className="open_button" onClick={()=>{setOpen(true)}}>Open!</button>
//       <div className="popup" style={styles.popup}>
//         <h1>This is a popup!</h1>
//         <button className="close_button" onClick={()=>{setOpen(false)}}>Close!</button>
//       </div>
//     </div>
//   );