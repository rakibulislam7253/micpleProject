import React, { useEffect, useState } from 'react';

const Trayal = () => {

    const [data, setdata] = useState([]);
    const [getstat, setstat] = useState([]);
    const [getcity, setcity] = useState([]);
    const [getuser, setuser] = useState([]);
    const [singleuserinfo, setsingleuser] = useState([]);



    const [color1, setcolor1] = useState()
    const [color2, setcolor2] = useState()

    console.log(color1)



    useEffect(() => {

        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setdata(data))



            if (color1 === 'yellow1') {
                document.querySelector('#button1').style.backgroundColor = " #0048ba"
            }
            if (color2 === 'yellow2') {
                document.querySelector('#button2').style.backgroundColor = " #0048ba"
            }
    }, [color1,color2]);


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

    let country = [...new Set(data.map(item => item.country))];

    country.sort();

    const handleCountry = (e,color) => {
        let states = data.filter(state => state.country === e);
        states = [...new Set(states.map(item => item.state))]
        states.sort();
        setcolor1(color)
        setstat(states)

    }


    const handlestate = (e, color) => {

        let citys = data.filter(city => city.state === e)
        citys = [...new Set(citys.map(item => item.city))]
        citys.sort();
        setcolor2(color)
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


    // const [color2, setcolor2] = useState([])


    // const click1 = (color) => {
    //     setcolor1(color)
    // }
    // const click2 = (color) => {
    //     setcolor2(color)
    // }


    // useEffect(() => {
    //     document.getElementById('button1').style.backgroundColor = color1
    //     document.getElementById('button2').style.backgroundColor = color2
    // }, [color1, color2])



    return (
        <div>
            <div style={{ width: '10%' }}>
                <table >
                    <tr>
                        <th style={{ padding: '10px' }}>Country</th>
                    </tr>
                    {
                        userCollection.map((contendor) => {
                            return (
                                <>
                                    <tr><td onClick={() => handleCountry(contendor.country , "yellow1")}>
                                        <button id='button1'>
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
                <table>
                    <tr> <th style={{ padding: '10px' }}>Division</th></tr>
                    {
                        getstat.map(items => {

                            return (
                                // onClick={() => { click1("yellow") }}
                                <tr>
                                    <td onClick={(e) => handlestate(items, "yellow2")}>
                                        <button id='button2'>{items}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>




            <div style={{ width: '10%' }}>
                <table >

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
                                            >
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


        </div>
    );
};

export default Trayal;






