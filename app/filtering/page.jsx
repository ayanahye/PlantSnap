'use client'
import { useEffect, useState } from "react";

import React from 'react'
import Filter from './filter';
import "./Filter.css";

function Filtering(props) {

  //const plantId = localStorage.getItem('plantId');

  const plantId = props.id;
  const [speciesData, setSpeciesData] = useState(null);

  function sendData() {
    fetch(`/.netlify/functions/filtering?${plantId}`)
      .then((res) => res.json())
      .then((data) => setSpeciesData(data))
      .catch((error) => console.error("Error:", error));
  }

  sendData();


  // const [speciesList, setSpeciesList] = useState(Data);

  return (
    <div className="App">
        <Filter speciesList={speciesData} />
    </div>

  )
}

export default Filtering

  /*
    useEffect(() => {
        const getData = async () => {
            
            const apiKey = 'sk-sZxb6546cce0783d62824';
            const url = `https://perenual.com/api/species/details/${plantId}?key=${apiKey}`;
            
            try {
                const res = await fetch(url);
                const data = await res.json();
                //console.log('response from API:', res);
                setSpeciesData(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        getData();
    }, [plantId]);
  */