'use client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from '../components/nav';

import React from 'react'
import '../styles/App.css';
import '../styles/Listings.css'

function filtering() {
  return (
    <div className="App">
         <Nav />
         <div class="container-custom">
            <h2 class="big">Listings page</h2>
        </div>
    </div>
  )
}

export default filtering