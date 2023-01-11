import React from 'react';
import { Outlet } from 'react-router-dom';
import Country from '../Report/Country';

const Reports = () => {
    return (
        <div >
            <Country></Country>
            <Outlet></Outlet>
        </div>
    );
};

export default Reports;