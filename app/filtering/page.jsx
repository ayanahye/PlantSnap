'use client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from '../components/nav';

import React from 'react'
import Filter from '../components/filter';
import Data from '../values.json';
import '../styles/App.css';

function filtering() {
  return (
    <div className="App">
         <Nav />
        <Filter speciesList={JSON.stringify(Data)}/>
    </div>
  )
}

export default filtering