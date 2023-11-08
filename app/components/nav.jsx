import React from 'react'
import Link from 'next/link';
import '../styles/App.css';


function nav() {
  return (
    <nav class="navbar-main">

        <h2 class="logo-text">PlantSnap</h2>
        <div className="back">
            <Link href="/listings" className="links">Listings</Link>
            <Link href="/" className="links">Filtering</Link>
        </div>
    </nav>
  )
}

export default nav