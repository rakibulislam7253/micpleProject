import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Country from '../Report/Country';
const Datareceive = () => {
  const [country, setcountry] = useState([]);
  console.log(country)
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setcountry(data))


  }, []);
  return (
    <div>
      {
        country.map(countryAllData =>
          <Country key={countryAllData.id}
            countryAllData={countryAllData}
          >


          </Country>

        )}
    </div>
  );
};

export default Datareceive;