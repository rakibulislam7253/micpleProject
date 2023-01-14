import React from "react";
import { useState, useEffect } from "react";

import "./report.css";
const Country = () => {


  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const styles = {
    popup: {

      color: open ? 'white' : 'black',
      backgroundColor: open ? '#0048ba' : 'white',
      width: '100px', height: '30px',
      border: '1px solid gray',

    }

  }
  return (
    <div style={{display:'flex'}} >
      <div>
        <button style={styles.popup} onClick={() => { setOpen(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open1 ? 'white' : 'black', backgroundColor: open1 ? "#0048ba" : "white", margin: '20px', width: '100px', height: '30px' }} onClick={() => { setOpen1(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open2 ? 'white' : 'black', backgroundColor: open2 ? "#0048ba" : "white", width: '100px', height: '30px' }} onClick={() => { setOpen2(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open3 ? 'white' : 'black', backgroundColor: open3 ? "#0048ba" : "white", margin: '20px', width: '100px', height: '30px' }} onClick={() => { setOpen3(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open4 ? 'white' : 'black', backgroundColor: open4 ? "#0048ba" : "white", width: '100px', height: '30px' }} onClick={() => { setOpen4(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open5 ? 'white' : 'black', backgroundColor: open5 ? "#0048ba" : "white", margin: '20px', width: '100px', height: '30px' }} onClick={() => { setOpen5(true) }}>Open!</button>
      </div>
      <div>
        <button style={{ border: '1px solid gray', color: open6 ? 'white' : 'black', backgroundColor: open6 ? "#0048ba" : "white", width: '100px', height: '30px' }} onClick={() => { setOpen6(true) }}>Open!</button>
      </div>
    </div>
  );
};


export default Country;
