'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import Image from 'next/image';
import defaultImg from "./placeholder-img.jpg"
import './Listings-image.css';
import data from "../SampleList-Plantnet.json";


export default function Listings() {
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    
    /*
    const [data, setData] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = ''; 
    const baseURL = 'https://my-api.plantnet.org';
    const project = 'all';

    const formData = new FormData();
    formData.append('organs', 'auto');
    formData.append('images', selectedFile);

    const url = `${baseURL}/v2/identify/${project}?include-related-images=true&no-reject=false&lang=en&api-key=${apiKey}`;

    try {
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        const data = response.data;
        setData(data);
        console.log('Response data:', data);
      } else {
        console.error('HTTP error! Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  /*

  add right below the div 

          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Submit</button>
        </form>

  */

  return (
    <div>
      {data && data.results.length > 0 && (
        <div>
          <p>Image search result: {data.results.length} results</p>
          <div className="container-custom">
            <div className="row row-cols-1 row-cols-md-4">
              {data.results.map((result, index) => (
                <div className="col mb-4" key={index}>
                  <div className="card h-100 card-hover">
                    <div>
                      {result.images && result.images.length > 0 && (
                        <div>
                          <Image
                            src={result.images[0].url.m}
                            width={500}
                            height={200}
                            className="card-img-top"
                            alt={result.species.commonNames.join(', ')}
                          />
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <h5>Common name: {result.species.commonNames.join(', ')}</h5>
                      <p>Confidence: {result.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

