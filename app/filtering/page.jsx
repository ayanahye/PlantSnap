'use client'
import { useEffect, useState } from "react";

import React from 'react'
import Filter from '../components/filter';
import Data from '../SampleData.json';
import '../styles/App.css';

function filtering() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [speciesList, setSpeciesList] = useState(Data);

  return (
    <div className="App">
        <Filter speciesList={speciesList} />
    </div>


  )
}

export default filtering