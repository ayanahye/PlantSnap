'use client'
import 'bootstrap/dist/css/bootstrap.css'


import React from 'react';

import Filtering from '../pages/filtering.js';
import '../styles/App.css';
import Nav from '../components/nav.jsx';
import Link from "next/link";

export default function Home() {

    let a = "example"
    //get string in .env
    let string = process.env.PLANTNET_KEY;
    //make sure file is use server if it contains api operation
    return (
        <div style={{height: "200vh"}}>
            <div>TODO:home</div>
            <Link href={"/detail/Averrhoa carambola"}>tmp link to test detail:Averrhoa carambola</Link>
        </div>
    );
}
