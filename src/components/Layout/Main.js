import React from 'react';
import { Outlet } from 'react-router-dom';
import Cetagory from '../Cetagory/Cetagory';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Cetagory></Cetagory>
        </div>
    );
};

export default Main;