'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect} from 'react';
import Image from 'next/image'; 
import defaultImg from "./placeholder-img.jpg"
import './Listings.css';
import dataObject from "../SampleList.json";

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



function filtering() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const displayedData = dataObject.data.slice(0, 8);

  return (
    <div className="container-custom">
      <p>Image search result: {displayedData.length} results</p>
      <div className="row row-cols-1 row-cols-md-4">
        {displayedData.map((item, index) => (
          <div className="col mb-4" key={item.id}>
            <div className="card h-100">
              {item.default_image ? (
                <Image src={item.default_image.regular_url} width={500} height={200} className="card-img-top" alt={item.common_name} />
              ) : (
                <Image src={defaultImg} width={500} height={200} className="card-img-top" alt={item.common_name} />
              )
            
            }
              <div className="card-body">
                <h5 className="card-title">{item.common_name}</h5>
                <p className="card-text">ID: {item.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default filtering;
