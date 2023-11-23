/*

'use client'
import { useState, useEffect } from 'react';

export default function fetchData() {
  const [speciesData, setSpeciesData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [fullsearchQuery, setFullSearchQuery] = useState('');


    useEffect(() => {
        function sendData() {
            fetch(`/.netlify/functions/trefle?q=${fullsearchQuery}`)
            .then((res) => res.json())
            .then((data) => setSpeciesData(data))
            .catch((error) => console.error("Error:", error));
        }
        sendData();
    }, [])



  return (
    <div>
      <p>Image search result: results</p>
      <input
        className="input-flower"
        type="text"
        placeholder="Search for plants"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
       <button onClick={() => setFullSearchQuery(searchQuery)}>Search</button>
      {speciesData}
    </div>
  );
}
*/
