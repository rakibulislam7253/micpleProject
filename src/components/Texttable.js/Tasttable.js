import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';

const Tasttable = () => {
    const [data, setdata] = useState([]);
    const [getCountry, setgetcountry] = useState();

    const [getstat, setstat] = useState([]);
    const [selectstate, setselectstate] = useState();

    const [getcity, setcity] = useState([]);
    const [selectcity, setselectcity] = useState();

    const [getuser, setuser] = useState([]);
    const [selectuser, setselectuser] = useState();

    const [singleuserinfo, setsingleuser] = useState([]);
    console.log(singleuserinfo);


    useEffect(() => {
        // fetch("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);

    const country = [...new Set(data.map(item => item.country))];
    country.sort();

    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e);
        states = [...new Set(states.map(item => item.state))]
        states.sort();
        console.log(states)
        setstat(states)
    }


    const handlestate = (e) => {
        let citys = data.filter(city => city.state === e)
        citys = [...new Set(citys.map(item => item.city))]
        citys.sort();
        console.log(citys)
        setcity(citys)

    }
    const handlecity = (e) => {
        let count=0
        let userids = data.filter(userid => userid.city === e)
        count=userids.length;
        userids = [...new Set(userids.map(item => item.userId))]
        userids.sort();
        console.log(count)
        setuser(userids)

    }

    const handleUserId = (e) => {
        let singleuser = data.filter(user => user.userId === e)
        setsingleuser(singleuser);
    }


    return (


        <>

            <div className={test_table.inner}>

                <div style={{ width: '10%' }}>
                    <table className={test_table.table}>

                        <tr>
                            <th style={{ padding: '10px' }}>Country</th>
                        </tr>
                        {
                            country.map((items) => {
                                return (
                                    <>

                                        <tr>
                                            <td onClick={(e) => handleCountry(items)}>
                                                <button className={test_table.btn} ><option key={items} >{items}</option></button>
                                                {/* <option key={items} ></option> */}
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

                        <tr>
                            <th style={{ padding: '10px' }}>Division</th>
                        </tr>


                        {
                            getstat.map(items => {
                                return (
                                    <>
                                        <tr>
                                            <td onClick={(e) => handlestate(items)}>
                                                <button className={test_table.btn}><option key={items}>{items}</option></button>
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

                        <tr>
                            <th style={{ padding: '10px' }}>District</th>
                        </tr>
                        {
                            getcity.map(items => {
                                return (
                                    <>
                                        <tr>
                                            <td onClick={(e) => handlecity(items)}>
                                            <button className={test_table.btn}><option key={items} > {items} </option></button>
                        
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

                        <tr>
                            <th style={{ padding: '10px' }}>User ID</th>
                        </tr>
                        {
                            getuser.map((items) => {
                                return (
                                    <><tr>
                                        <td onClick={(e) => handleUserId(items)} >
                                         <button className={test_table.btn}>  <option key={items}   > {items} </option></button> 
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>



                <div style={{ width: '60%' }}>
                    <table className={test_table.table} >

                        <tr >
                            <th style={{ padding: '10px' }}>Repoter</th>
                            <th style={{ padding: '10px' }}>Claimer</th>
                            <th style={{ padding: '10px' }}>Subject</th>
                            <th style={{ padding: '10px' }}>Post ID</th>
                            <th style={{ padding: '10px' }}> Comment</th>
                            <th style={{ padding: '10px' }}>Report View</th>
                        </tr>
                        {
                            singleuserinfo.map((items) => {
                                return (
                                    <><tr>

                                        <td> {items.userId} </td>
                                        <td> {items.claimer.claim_id} </td>
                                        <td> {items.subject} </td>

                                        <td> {items.claimer.post_id} </td>

                                        <td> {items.comment} </td>

                                        <td>
                                            {items.reportrCommrnt}
                                        </td>



                                    </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </div>



            {/* <select onChange={(e) => handleCountry(e)}>
                <option>Country</option>
                {country.map(items => <option key={items} value={getCountry}>{items}</option>)}
            </select>

            <select onChange={(e) => handlestate(e)}>
                <option>division</option>
                {getstat.map(items => <option key={items} value={selectstate}>{items}</option>)}
            </select>

            <select onChange={(e) => handlecity(e)}>
                <option>City</option>
                {getcity.map(items => <option key={items} value={selectcity}> {items} </option>)}
            </select>

            <select >
                <option>UserId</option>
                {getuser.map(items => <option key={items.userId} > {items.userId}{items.name} </option>)}
            </select> */}


        </>

    );
};

export default Tasttable;