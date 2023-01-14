import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';

const Tasttable = () => {
    let country
    const [allcountry, setallcountry] = useState([]);


    const [data, setdata] = useState([]);

    const [getstat, setstat] = useState([]);

    const [getcity, setcity] = useState([]);

    const [getuser, setuser] = useState([]);

    const [singleuserinfo, setsingleuser] = useState([]);


  





    useEffect(() => {
        // fetch("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);

    country = [...new Set(data.map(item => item.country))];

    country.sort();

    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e);
        states = [...new Set(states.map(item => item.state))]
        states.sort();

        setstat(states)

    }


    const handlestate = (e) => {
        let citys = data.filter(city => city.state === e)
        citys = [...new Set(citys.map(item => item.city))]
        citys.sort();
      
        setcity(citys)

    }
    const handlecity = (e) => {
        let count = 0
        let userids = data.filter(userid => userid.city === e)
        count = userids.length;
        userids = [...new Set(userids.map(item => item.userId))]
        userids.sort();
    
        setuser(userids)

    }

    const handleUserId = (e) => {
        let singleuser = data.filter(user => user.userId === e)
        setsingleuser(singleuser);
    }

    const color = (e) => {
        console.log(e.target.value);


    }





    let userCollection = [];

    data.map((item) => {
        const userId = item.country;
        const index = userCollection.findIndex((item) => item.country === userId);
        //   console.log(index);
        if (index === -1) {
            const contendor = { ...item, count: 1 };
            userCollection.push(contendor);
        } else {
            userCollection[index]["count"] += 1;
        }

    }, [])





    return (


        <>

            <div className={test_table.inner}>

                <div style={{ width: '10%' }}>
                    <table className={test_table.table}>

                        <tr>
                            <th style={{ padding: '10px' }}>Country</th>
                        </tr>
                        {
                            userCollection.map((contendor) => {
                                return (
                                    <>
                                        <tr>
                                            <td onClick={() => handleCountry(contendor.country)}>
                                                <button className={test_table.btn} >
                                                    {contendor.country}  <span style={{ fontSize: '18px' }} >({contendor.count})</span>
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

                        <tr>
                            <th style={{ padding: '10px' }}>Division</th>
                        </tr>


                        {


                            getstat.map(items => {

                                return (

                                    <>
                                        <tr>
                                            <td onClick={(e) => handlestate(items)}>
                                                <button

                                                    // onClick={() => { setOpen11(true) }}
                                                    // style={{ backgroundColor: open11 ? "#0048ba" : "white", color: open11 ? "white" : "black" }}
                                                    className={test_table.btn}>
                                                    <option key={items}>{items}</option>
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

                        <tr>
                            <th style={{ padding: '10px' }}>District</th>
                        </tr>
                        {
                            getcity.map(items => {
                                return (
                                    <>
                                        <tr onClick={(e) => handlecity(items)}>
                                            <td >
                                                <button
                                                    // onClick={color} value='city' className={test_table.btn}
                                                    className={test_table.btn}>
                                                    <option key={items} > {items} </option>
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
                                        <td> {items.reportrCommrnt}</td>



                                    </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </div>






        </>

    );
};

export default Tasttable;