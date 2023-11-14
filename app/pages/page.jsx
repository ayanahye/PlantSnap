'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import {perenual_search_test_value as dataObject} from "@/app/globalTypes";


export default function page() {

    /*

    >>>>>> tested, and this works fine, sample data is in SampleData.json

    --- Getting Individual Plant Data ---

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

    // --- Getting List of Plant Data ---

    
    /*
    const [dataObject, setData] = useState(null);

    useEffect(() => {
        const apiKey = '';
        const url = `https://perenual.com/api/species-list?key=${apiKey}&q=rose&page=1}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    */
    
    
    return (
        <div>
            <h3>Here&apos;s the filtered data</h3>
            <ul>
                {dataObject && dataObject.data.map(item => (
                    <li key={item.id}>
                        ID: {item.id}, Plant Name: {item.common_name}
                        {item.default_image && (
                            <img src={item.default_image.regular_url} alt={item.common_name} width="100" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

