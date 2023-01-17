import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from './Pdf';
import test_table from './testTable.module.css';

const Tasttable = () => {
    let country

    const [data, setdata] = useState([]);
    const [getstat, setstat] = useState([]);
    const [getcity, setcity] = useState([]);
    const [getuser, setUserId] = useState([]);
    const [singleuserinfo, setSingleUserInfo] = useState([]);
    const [singleuserinfoClaim, setSingleUserInfoClaim] = useState([]);

    <Pdf data={data}></Pdf>

    //color state
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);
    const [selectedButton4, setSelectedButton4] = useState(null);



    //color state clickHandel
    const handleButtonClick = (id) => { setSelectedButton(id) };
    const handleButtonClick1 = (id) => { setSelectedButton1(id) };
    const handleButtonClick2 = (id) => { setSelectedButton2(id) };
    const handleButtonClick3 = (id) => { setSelectedButton3(id) };
    const handleButtonClick4 = (id) => { setSelectedButton4(id) };




    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);


    const handleCountry = (item) => {
        let country = item.state;
        const selectCountry = country.map((item) => item)
        setstat(selectCountry)
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


    const handleclaimId = (item) => {
        let state = item.claim
        const SelectState = state.map((item) => item)
        setSingleUserInfoClaim(SelectState)
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
                        <th style={{ padding: '10px' }}> Status</th>


                    </tr>

                    {
                        singleuserinfo.map((item) => {
                            return (
                                <><tr>
                                    <td onClick={(e) => handleclaimId(item)} >
                                        <button className={test_table.btn} onClick={() => handleButtonClick4(item)}
                                            style={{
                                                backgroundColor: selectedButton4 === item ? "#0048ba" : "white",
                                                color: selectedButton4 === item ? "white" : "black"
                                            }}>
                                            {item.report_sub}  </button></td>


                                    <td style={{ padding: '10px' }}> {item.user_name} ({item.user_id})</td>
                                    <td  >


                                        {item.claim_id} ({item.claim_name})

                                    </td>


                                    <td > {item.post_id} </td>
                                    <td > {item.comment} </td>
                                    <td > {item.status} </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>


            <div style={{ width: '13%' }}>

                <table className={test_table.table} >
                    <th style={{ padding: '10px', fontSize: "16px" }}> Reviow
                    </th>
                    {
                        singleuserinfoClaim.map((item) => {
                            return (
                                <><tr>
                                    <td style={{ height: "900px" }}>
                                        <div className={test_table.reportpart} >
                                            <div style={{ backgroundColor: "#e4e4e4", }}>
                                                <p
                                                    style={{
                                                        width: '100%', padding: "8px",
                                                        marginTop: "-15PX",
                                                        fontWeight: "bold",
                                                        fontSize: "15px"
                                                    }}>
                                                    {item.user_name}<span style={{ fontSize: "11px" }}> (Repoter) </span>
                                                </p>

                                            </div>

                                            <p style={{ fontSize: "13px" }} >{item.reportr_Issue}</p>
                                            {/* <hr></hr> */}
                                            <div style={{ marginLeft: "15px", display: "flex", marginTop: "250px" }} >
                                                <div style={{ paddingTop: "8px" }}>
                                                    <input className={test_table.inputbox} ></input>
                                                </div>
                                                <div>
                                                    <button className={test_table.repltbtn} > <img src='https://cdn-icons-png.flaticon.com/512/4712/4712663.png' /> </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={test_table.reportpart1} >

                                            <div style={{ backgroundColor: "#e4e4e4" }}>
                                                <p
                                                    style={{
                                                        width: '100%', padding: "8px",
                                                        marginTop: "15PX",
                                                        fontWeight: "bold",
                                                        fontSize: "15px",

                                                    }}>

                                                    {item.claim_name}<span style={{ fontSize: "11px" }}> (Claimer)</span>
                                                </p>
                                            </div>
                                            <p style={{ fontSize: "13px" }} >{item.claim_issue}</p>
                                            {/* <hr></hr> */}
                                            <div style={{ marginLeft: "25px", display: "flex", marginTop: "360px" }}>
                                                <div>
                                                    <input className={test_table.inputbox}></input>
                                                </div>
                                                <div>
                                                    <button className={test_table.repltbtn} >Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <Link to={'/pdf'}><button style={{ backgroundColor: "yellow" }}><Pdf item={item} ></Pdf> PDF</button></Link> */}

                                    </td>

                                </tr>

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