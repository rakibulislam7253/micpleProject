import React, { useEffect, useState } from 'react';
import Testtable2 from '../Texttable.js/Testtable2'
import Process from './Process';
import SolveReport from './SolveReport';
import './notice.css'
const AllTesttable = () => {


    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
        <div>



            <div className='data_body'>
                <div className='mails_tab'>
                    <div className="tabs">
                        <button className={`tab ${checkActive(1, "active")}`} onClick={() => handleClick(1)} >All Reports  </button>
                        <button className={`tab ${checkActive(2, "active")}`} onClick={() => handleClick(2)} > Processing Reports </button>
                        <button className={`tab ${checkActive(3, "active")}`} onClick={() => handleClick(3)} > Solve Reports </button>
                    </div>
                </div>





                <div className="panels">
                    <div className={`panel ${checkActive(1, "active")}`}>
                        <Testtable2 />
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                        <SolveReport />
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                        <Process />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AllTesttable;