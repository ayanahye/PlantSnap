import React from 'react'
import Filter from '../components/filter';

import Data from '../values.json';
import '../styles/App.css';

function filtering() {
  return (
    <div className="App">
        <Filter speciesList={JSON.stringify(Data)}/>
    </div>
  )
}

export default filtering