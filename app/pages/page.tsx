'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import SampleData from "../SampleData.json";

function page() {

    /*

    >>>>>> tested, and this works fine, sample data is in SampleData.json

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const speciesId = 1;
            const apiKey = '---';
            const url = `https://perenual.com/api/species/details/${speciesId}?key=${apiKey}`;
            
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log('response from API:', res);
                setData(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    */

    const keysArray = Object.keys(SampleData)
    
    return (
        <div>
          <h3>Keys from the API response:</h3>
          <ul>
            {keysArray.map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
    )
}

export default page