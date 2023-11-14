'use client'
import { useEffect, useState } from "react";

import React from 'react'
import Filter from './filter';
import {perenual_detail_test_value as Data} from "../globalTypes";

function Filtering() {

  const [speciesList, setSpeciesList] = useState(Data);


  /*

  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
      const getData = async () => {
          const speciesId = 15;
          const apiKey = 'sk-sZxb6546cce0783d62824';
          const url = `https://perenual.com/api/species/details/${speciesId}?key=${apiKey}`;
          
          try {
              const res = await fetch(url);
              const data = await res.json();
              console.log('response from API:', res);
              setSpeciesData(data);
          } catch (error) {
              console.log("Error fetching data:", error);
          }
      }
      getData();
  }, []);


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // const [speciesList, setSpeciesList] = useState(Data);

  */

  return (
    <div className="App">
        <Filter speciesList={speciesList} />
    </div>


  )
}

export default Filtering