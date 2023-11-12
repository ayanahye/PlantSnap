'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import Image from 'next/image';
import defaultImg from "./placeholder-img.jpg"
import './Listings-image.css';


function Listings() {
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

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

    const apiKey = '2b10nDPkGVdtuyo4UrvEkBHO'; 
    const baseURL = 'https://my-api.plantnet.org';
    const project = 'all';

    const formData = new FormData();
    formData.append('organs', 'auto');
    formData.append('images', selectedFile);

    const url = `${baseURL}/v2/identify/${project}?api-key=${apiKey}`;

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
      {data && data.results.length > 0 && (
        <div>
          <h2>Identification Results</h2>
          {data.results.map((result, index) => (
            <div key={index}>
              <h3>Result {index + 1}</h3>
              <p>Common name: {result.species.commonNames.join(', ')}</p>
              <p>Scientific name: {result.species.scientificName}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}  

export default Listings;
