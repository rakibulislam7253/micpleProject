import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';

const Tasttable = () => {
    let country

    const [data, setdata] = useState([]);
    const [getstat, setstat] = useState([]);
    const [getcity, setcity] = useState([]);
    const [getuser, setUserId] = useState([]);
    const [singleuserinfo, setSingleUserInfo] = useState([]);



    //color state
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);



    //color state clickHandel
    const handleButtonClick = (id) => { setSelectedButton(id) };
    const handleButtonClick1 = (id) => { setSelectedButton1(id) };
    const handleButtonClick2 = (id) => { setSelectedButton2(id) };
    const handleButtonClick3 = (id) => { setSelectedButton3(id) };




    useEffect(() => {
        // fetch("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        fetch("maildata.json")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);


    const handleCountry = (item) => {
        let country = item.state;
        const selectCountry = country.map((item) => item)
        setstat(selectCountry)
        // states.sort();

    }


    const handlestate = (item) => {
        let state = item.city;
        const selectState = state.map((item) => item)
        setcity(selectState)
    }



    const handlecity = (item) => {
        let state = item.user_report
        const SelectState = state.map((item) => item)
        setUserId(SelectState)

    }



    const handleUserId = (item) => {
        let state = item.reports
        const SelectState = state.map((item) => item)
        setSingleUserInfo(SelectState)       
    }

   



    return (<>
        <div className={test_table.inner}>


            <div style={{ width: '10%' }}>
                <table className={test_table.table}>
                    <tr> <th style={{ padding: '10px' }}>Country</th> </tr>
                    {
                        data.map((item) => {
                            return (
                                <> <tr> <td onClick={() => handleCountry(item)}>
                                    <button className={test_table.btn} onClick={() => handleButtonClick(item.id)} style={{
                                        backgroundColor: selectedButton === item.id ? "#0048ba" : "white",
                                        color: selectedButton === item.id ? "white" : "black"
                                    }}>
                                        {item.country_name} ({item.total_Mail_count})
                                    </button></td></tr></>)
                        })
                    }
                </table>
            </div>





            <div style={{ width: '10%' }}>
                <table className={test_table.table} >
                    <tr><th style={{ padding: '10px' }}>Division</th></tr>
                    {
                        getstat.map(item => {
                            return (<>
                                <tr>
                                    <td onClick={() => handlestate(item)}>
                                        <button
                                            className={test_table.btn}
                                            onClick={() => handleButtonClick1(item)} style={{
                                                backgroundColor: selectedButton1 === item ? "#0048ba" : "white",
                                                color:
                                                    selectedButton1 === item ? "white" : "black"
                                            }}>
                                            {item.State_name} ({item.state_user_count})
                                        </button>
                                    </td>
                                </tr>
                            </>
                            )
                        })
                    }
                </table>
            </div>




            <div style={{ width: '10%' }}>
                <table className={test_table.table}>

                    <tr><th style={{ padding: '10px' }}>District</th></tr>
                    {
                        getcity.map(item => {
                            return (
                                <> <tr onClick={(e) => handlecity(item)}>
                                    <td >
                                        <button className={test_table.btn}
                                            onClick={() => handleButtonClick2(item)} style={{
                                                backgroundColor:
                                                    selectedButton2 === item ? "#0048ba" : "white",
                                                color:
                                                    selectedButton2 === item ? "white" : "black"
                                            }}>
                                            {item.city_name} ({item.city_user_count})
                                        </button>

                                    </td>
                                </tr>
                                </>
                            )

                        })

                    }
                </table>
            </div>
            <div style={{ width: '10%' }}>
                <table className={test_table.table} >
                    <tr><th style={{ padding: '10px' }}>User ID</th></tr>
                    {
                        getuser.map((item) => {
                            return (
                                <><tr> <td onClick={(e) => handleUserId(item)} ><button className={test_table.btn} onClick={() => handleButtonClick3(item)} style={{ backgroundColor: selectedButton3 === item ? "#0048ba" : "white", color: selectedButton3 === item ? "white" : "black" }}>
                                    {item.user_id}</button></td></tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>



            <div style={{ width: '60%' }}>
                <table className={test_table.table} >
                    <tr>
                    <th style={{ padding: '10px' }}>Subject</th>
                        <th style={{ padding: '10px' }}>Repoter</th>
                        <th style={{ padding: '10px' }}>Claimer</th>
                     
                        <th style={{ padding: '10px' }}>Post ID</th>
                        <th style={{ padding: '10px' }}> Comment</th>
                    </tr>
                    {
                        singleuserinfo.map((item) => {
                            return (
                                <><tr>
                                     <td > {item.report_sub} </td>
                                    <td style={{ padding: '10px' }}> {item.user_name}({item.user_id})</td>
                                    <td > {item.claimer.claim_id}({item.claimer.claim_name}) </td>
                                   
                                    <td > {item.post_id} </td>
                                    <td > {item.comment} </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>


            <div style={{ width: '20%' }}>
                <table className={test_table.table} >

                    <tr>
                        <th style={{ padding: '10px' }}>Report View</th>
                    </tr>
                    {
                        singleuserinfo.map((item) => {
                            return (
                                <><tr>
                                    <td style={{ padding: '10px', height: '200px' }}>
                                        <h4 style={{ marginTop: '10px' }}><u>Repoter: {item.user_id}</u></h4>
                                        <p style={{ marginTop: '-15px' }} >{item.reportr_Issue}</p>

                                        <button className={test_table.btn} >Reply</button>
                                        
                                        <h4> <u>Claimer:{item.claim_id}</u></h4>
                                        <p style={{ marginTop: '-15px' }}>{item.claim_issue}</p> </td></tr>
                                </>)
                        })
                    }
                </table>
            </div>
        </div>


    </>

    );
};

export default Tasttable;