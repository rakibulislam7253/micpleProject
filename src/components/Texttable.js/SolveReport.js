import React from 'react';
import { useLocation } from 'react-router-dom';

const SolveReport = () => {
    const location = useLocation()
    const item = location.state
    console.log(item);
    return (
        <div>
           <h1>hi i am solve</h1> 
        </div>
    );
};

export default SolveReport;