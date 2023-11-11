'use client'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {useEffect} from 'react';
import Image from 'next/image'; 
import flowerImage from './temp-flower.jpg'; 
import './Listings.css';

const cardData = [
  {
    imageSrc: flowerImage, 
    title: 'Card Title 1',
    description: 'This is a short card description 1.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 2',
    description: 'This is a short card description 2.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 1',
    description: 'This is a short card description 1.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 2',
    description: 'This is a short card description 2.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 1',
    description: 'This is a short card description 1.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 2',
    description: 'This is a short card description 2.',
  },
  {
    imageSrc: flowerImage,
    title: 'Card Title 1',
    description: 'This is a short card description 1.',
  },
  {
    imageSrc: flowerImage, 
    title: 'Card Title 2',
    description: 'This is a short card description 2.',
  },
];

function filtering() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container-custom">
      <p>Image search result: {cardData.length} results</p>
      <div className="row row-cols-1 row-cols-md-4">
        {cardData.map((card, index) => (
          <div className="col mb-4" key={index}>
            <div className="card h-100">
              <Image src={card.imageSrc} width={500} height={200} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default filtering;
