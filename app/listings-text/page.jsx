'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import defaultImg from "./placeholder-img.jpg"
import './Listings-text.css';

import dataObject from "../SampleList.json";


function Listings() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    // https://stackoverflow.com/questions/72221255/how-to-pass-data-from-one-page-to-another-page-in-next-js


    /*

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const [dataObject, setData] = useState(null);

    useEffect(() => {
        const apiKey = 'restricted access';
        const url = `https://perenual.com/api/species-list?key=${apiKey}&q=daisy&page=1}`;

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

    const displayedData = dataObject?.data?.slice(0, 8) || [];

    

    return (
        <div className="container-custom">
            <p>Image search result: {displayedData.length} results</p>
            {dataObject ? (
                <div className="row row-cols-1 row-cols-md-4">
                    {displayedData.map((item, index) => (
                        <div className="col mb-4" key={item.id}>
                            <div className="card h-100 card-hover">
                                {item.default_image ? (
                                    <button className="button-to-plant"><Image src={item.default_image.regular_url} width={500} height={200}
                                           className="card-img-top" alt={item.common_name}/></button>
                                ) : (
                                    <button className="button-to-plant"><Image src={defaultImg} width={500} height={200} className="card-img-top"
                                           alt={item.common_name}/></button>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{item.common_name}</h5>
                                    <p className="card-text">ID: {item.id}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Listings;