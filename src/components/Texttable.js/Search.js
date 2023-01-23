import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';
import { BiSend, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Search = () => {

    const [first, setFirst] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(false);
    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((json) => setFirst(json)
            );
    }, []);


    const handleSearch = (e) => {
        setSearchText(e.target.value);
        // e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        first.map((country) => {
            country.state.map((state) => {
                state.city.map((city) => {
                    const filteredData = city.user_report.find((report) => report.user_id === searchText)
                    // console.log(filteredData);


                    if (filteredData) {
                        setSearchResults(filteredData)
                        console.log(searchResults)

                    }
                    else
                    {
                       
                        console.log(searchResults)
                    }

                });
            });
        });
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className={test_table.searchInputStyle}  >
                    <div className={test_table.inputtest_table} style={{ display: "flex" }}>
                        <input name='name' value={searchText}

                            onChange={handleSearch}

                            style={{ height: "20px", width: "300px", padding: "5px", borderRadius: "5px" }}
                            className={test_table.input}
                            placeholder="Search here..." />

                        <div>

                            <Link state={searchResults} to={'/searchtable'} className={test_table.searchField}>
                                <BiSearch style={{ color: "gray" }} className={test_table.searchBtn} />
                            </Link>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Search;