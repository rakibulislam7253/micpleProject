import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';
import { BiSearch } from 'react-icons/bi';
const Search = () => {


    const [data, setdata] = useState([]);
    const [getsearch, setsearch] = useState('')

    // const [filterval,setfilter]=useState([])

    // console.log(filterval);

    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);




    const search = (event) => {
        event.preventDefault()
        const value = event.target.name.value
        setsearch(value)
        // console.log(getsearch);
    }

    // console.log(data);

    {
        data.map(country => {

            // console.log("country name:" + country.country_name);
            country.state.map(state => {
                // console.log("state name:" + state.State_name);

                state.city.map(citydata => {
                    citydata.user_report?.map(report => {
                        report.reports.filter(item => {

                            console.log(item.user_id==='saddam01');
                        })



                    })

                })
            })
        })
    }

    return (
        <div>
            <form onSubmit={search} className={test_table.searchInputStyle}  >
                <div className={test_table.inputtest_table}>
                    <input name='name' style={{ height: "20px", width: "300px", padding: "5px", borderRadius: "5px" }} className={test_table.input}
                        placeholder="Search here..." />

                    <button className={test_table.searchField}>
                        <BiSearch style={{ color: "gray" }} className={test_table.searchBtn} />{" "}
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Search;