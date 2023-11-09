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
    
    return (
        <div>{true && <div>{JSON.stringify(SampleData)}</div>}</div>
    )
}

export default page