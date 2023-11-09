'use client'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";


import React from 'react';
import './styles/App.css';
import Link from "next/link";

export default function Home() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

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
