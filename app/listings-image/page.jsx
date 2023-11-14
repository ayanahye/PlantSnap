'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import Image from 'next/image';
import defaultImg from "./placeholder-img.jpg"
import './Listings-image.css';
//import data from "../SampleList-Plantnet.json";


export default function Listings() {
  const [data, setData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
      if (selectedFiles.length + files.length <= 5) {
        setSelectedFiles([...selectedFiles, ...Array.from(files)]);
        const previews = Array.from(files).map((file) => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...previews]);
      } else {

    

        alert('You can upload up to 5 images.');
      }
    }
  };

  const handleRemoveImage = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1); 
  
    const newImagePreviews = [...imagePreviews];
    newImagePreviews.splice(index, 1); 
  
    setSelectedFiles(newSelectedFiles);
    setImagePreviews(newImagePreviews);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = '2b10MirhMEvzZjE0ioI36wqLGe';
    const baseURL = 'https://my-api.plantnet.org';
    const project = 'all';

    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('images', file);
    }

    const url = `${baseURL}/v2/identify/${project}?include-related-images=true&no-reject=false&lang=en&api-key=${apiKey}`;
    try {
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        const responseData = response.data;
        setData(responseData);
        console.log('Response data:', responseData);
      } else {
        console.error('HTTP error! Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="container-custom">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} multiple/>
        <button className="button-preview" type="submit">Submit</button>
      </form>
      
      <div className="selected-images">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="image-container">
            <img key={index} className="image-preview" width="200px" height="200px" src={preview} alt={`Selected Image ${index}`} />
            <button className="buttonDelete" onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      {data && data.results.length > 0 && (
        <div>
          <p>Image search result: {data.results.length} results</p>
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
                    <h5>{result.species.commonNames.join(', ')}</h5>
                    <p>Confidence: {result.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

