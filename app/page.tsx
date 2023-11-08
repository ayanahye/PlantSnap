'use client'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";


import React from 'react';

import Filtering from './pages/filtering.js';
import Listings from './pages/listings.js';
import './styles/App.css';
import Nav from './components/nav.jsx';

export default function Home() {

    let a = "example"
    //get string in .env
    let string = process.env.PLANTNET_KEY;
    //make sure file is use server if it contains api operation
    return (
        <div>
          <Nav />
          <Filtering />
        </div>
    );
}
