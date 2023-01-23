
import React, { useEffect, useState } from 'react';

const SolveReport = () => {
    const [first, setFirst] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState();

    useEffect(() => {
        fetch("/maildata1.json")
            .then((response) => response.json())
            .then((json) => setFirst(json)
            );
    }, []);


    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        first.map((country) => {
            country.state.map((state) => {
                state.city.map((city) => {
                    const filteredData = city.user_report.find((report) => report.user_id === searchText);
                    // console.log(filteredData);


                    if (filteredData) {

                        setSearchResults(filteredData)
                        console.log(searchResults)
                    }



                });
            });
        });
    };

    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Search by name..."
                />
                <button type="submit">Search</button>
            </form>


        </div >
    );
};

export default SolveReport;