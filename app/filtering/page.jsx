'use client'
import { useEffect, useState } from "react";
import React from 'react'
import Filter from './filter';
import "./Filter.css";

function Filtering(props) {
 
  const plantId = props.id;
  const [speciesData, setSpeciesData] = useState(null);


  useEffect(() => {
    function sendData() {
      fetch(`/.netlify/functions/filtering?q=${plantId}`)
        .then((res) => res.json())
        .then((data) => setSpeciesData(data))
        .catch((error) => console.error("Error:", error));
    }
    sendData();
  }, [plantId]) 

  return (
    <div className="App">
        <Filter speciesList={speciesData} />
    </div>

  )
}

export default Filtering;