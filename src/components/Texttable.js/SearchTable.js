import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchTable = () => {
    const location = useLocation()
    const item = location.state
    console.log(item);
    return (
        <div>
            <h1>hi micple {item.user_id}</h1>
        </div>
    );
};

export default SearchTable;