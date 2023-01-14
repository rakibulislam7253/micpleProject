import React, { useEffect, useState } from 'react';
import test_table from './testTable.module.css';

const Tasttable = () => {
    let country
    const [allcountry, setallcountry] = useState([]);



    const [data, setdata] = useState([]);
    const [getCountry, setgetcountry] = useState();

    const [getstat, setstat] = useState([]);
    const [selectstate, setselectstate] = useState();

    const [getcity, setcity] = useState([]);
    const [selectcity, setselectcity] = useState();

    const [getuser, setuser] = useState([]);
    const [selectuser, setselectuser] = useState();

    const [singleuserinfo, setsingleuser] = useState([]);


    //color state


    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);



    const handleButtonClick = (id) => {
        setSelectedButton(id);
    };

    const handleButtonClick1 = (id) => {
        setSelectedButton1(id);
    };
    const handleButtonClick2 = (id) => {
        setSelectedButton2(id);
    };
    const handleButtonClick3 = (id) => {
        setSelectedButton3(id);
    };




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
        // console.log(citys)
        setcity(citys)

    }
    const handlecity = (e) => {
        let count = 0
        let userids = data.filter(userid => userid.city === e)
        count = userids.length;
        userids = [...new Set(userids.map(item => item.userId))]
        userids.sort();
        // console.log(count)
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
                                                <button className={test_table.btn} onClick={() => handleButtonClick(contendor.id)} style={{
                                                    backgroundColor:
                                                        selectedButton === contendor.id ? "#0048ba" : "white",
                                                    color:
                                                        selectedButton === contendor.id ? "white" : "black"
                                                }}>
                                                    {contendor.country}
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
                                                    className={test_table.btn}
                                                    onClick={() => handleButtonClick1(items)} style={{
                                                        backgroundColor: selectedButton1 === items ? "#0048ba" : "white",
                                                        color:
                                                            selectedButton1 === items ? "white" : "black"
                                                    }}>
                                                    <option key={items}>

                                                        {items}

                                                    </option>






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
                                                    className={test_table.btn}
                                                    onClick={() => handleButtonClick2(items)} style={{
                                                        backgroundColor:
                                                            selectedButton2 === items ? "#0048ba" : "white",
                                                        color:
                                                            selectedButton2 === items ? "white" : "black"
                                                    }}>
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
                                            <button
                                                className={test_table.btn}
                                                onClick={() => handleButtonClick3(items)} style={{
                                                    backgroundColor:
                                                        selectedButton3 === items ? "#0048ba" : "white",
                                                    color:
                                                        selectedButton3 === items ? "white" : "black"
                                                }}>
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



                <div style={{ width: '80%' }}>
                    <table className={test_table.table} >

                        <tr>
                            
                            <th style={{ padding: '10px' }}>Repoter</th>
                            <th style={{ padding: '10px' }}>Claimer</th>
                            <th style={{ padding: '10px' }}>Subject</th>
                            <th style={{ padding: '10px' }}>Post ID</th>
                            <th style={{ padding: '10px' }}> Comment</th>

                            
                            <th  style={{ padding: '10px' }}>Report View</th>
                        </tr>
                        {
                            singleuserinfo.map((items) => {
                                return (
                                    <><tr>
                                        <td> {items.userId} </td>
                                        <td > {items.claimer.claim_id} </td>
                                        <td > {items.subject} </td>

                                        <td > {items.claimer.post_id} </td>

                                        <td > {items.comment} </td>



                                        <td style={{}} >
                                            {items.reportrCommrnt}
                                            <hr></hr>
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






        </>

    );
};

export default Tasttable;