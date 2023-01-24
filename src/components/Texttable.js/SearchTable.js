import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchTable = () => {
    const location = useLocation()
    const item = location.state
    console.log(item);
    return (
        <div>
        
            
        </div>
    );
};

export default SearchTable;