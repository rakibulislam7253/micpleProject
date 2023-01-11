import React from "react";
import { useState, useEffect } from "react";

import "./report.css";
const Country = () => {

  const [data, setdata] = useState([]);
  const [getCountry, setgetcountry] = useState();


  const [getstate, setstate] = useState([]);
  const [selectstate, setselectstate] = useState();


  const [getcity, setcity] = useState([]);
  const [selectcity, setselectcity] = useState();


  const [getuser, setuser] = useState([]);
  const [selectuser, setselectuser] = useState();

  console.log(getuser);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setdata(data))
  }, []);

  const country = [...new Set(data.map(item => item.country))];
  country.sort();




  const handleCountry = (e) => {
    let states = data.filter(state => state.country === e.target.value);
    states = [...new Set(states.map(item => item.state))]
    states.sort()
    setstate(states)

  }

  const handleState = (e) => {
    let citys = data.filter(city => city.state === e.target.value);
    citys = [...new Set(citys.map(item => item.city))]
    citys.sort()
    setcity(citys)

  }


  const handlecity = (e) => {

    let userid = data.filter(user => user.city === e.target.value);
    userid = [...new Set(userid.map(item => item.userId))]
    userid.sort()
    setuser(userid)


  }

  const handleuser = (e) => {
    let userid = data.filter(user => user.city === e.target.value);
    // states=[...new Set(states.map(item=>item.state))]
    // states.sort()
    setuser(userid)
    console.log(userid);
  }

  return (
    <div>
      <div>
        {/*unique with country  */}


        <select onChange={(e) => handleCountry(e)}>
          {country.map(items => <option key={items} value={getCountry}>{items}</option>)}
        </select>

        <select onChange={(e) => handleState(e)}>
          {getstate.map(items => <option key={items} value={selectstate}>{items}</option>)}
        </select>

        <select onChange={(e) => handlecity(e)}>
          {getcity.map(items => <option key={items} value={selectcity} >{items}</option>)}
        </select>

        <select onChange={(e) => handleuser(e)}>
          {getuser.map(items => <option key={items} >{items}</option>)}
        </select>






      </div>
    </div>
  );
};

export default Country;
