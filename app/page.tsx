'use client'
import styles from '@/app/home.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react";


import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
    return (
        <main>
            <div className={styles.index}>
                <Link href="/search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </Link>
                <Link href="/identify">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                    </svg>
                </Link>
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                    </svg>
                </Link>
            </div>
            <div id="indexbg" className={styles.indexbg + " carousel slide carousel-fade"}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/images/bg1.webp" width={1920} height={1080} loading="eager" alt="bg1"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/bg2.webp" width={1920} height={1080} loading="eager" alt="bg2"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/bg3.webp" width={1920} height={1080} loading="eager" alt="bg3"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/bg4.webp" width={1920} height={1080} loading="eager" alt="bg4"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/bg5.webp" width={1920} height={1080} loading="eager" alt="bg5"/>
                    </div>
                </div>
            </div>
            <div className="container w-75 py-5">
                <div><Link href={"/detail/Averrhoa carambola"}>tmp link to test detail:Averrhoa carambola</Link></div>
                <h1>Objectives</h1>
                <p>
                    PlantSnap: Data and Care is a comprehensive plant care and identification tool designed to
                    meet the needs of students, gardening enthusiasts, professors, and other researchers in an
                    all-in-one application. Users would be able to search for specific plants using Perenual Plant API
                    and acquire data or have the option to utilize an AI image recognition tool called Pl@ntNet API to
                    identify plants. The data returned includes: care guide specifications related to water, sunlight
                    and indoor requirements, and keywords which will be displayed as icons indicating the severity of
                    interacting with this plant. Our project aims to offer a wider range of features compared to
                    existing plant search tools. This will enable researchers, gardening enthusiasts, and other users to
                    find plant data, comparable plants, and other information without needing to search around
                    additional websites.
                </p>
                <h1>Tech Stack</h1>
                <p>
                    Our group chose to program the project in Next.js, a popular React framework, and style/structure
                    the pages in HTML and CSS. For the designing components of the site, we will utilize Bootstrap to
                    assist with making the design mobile-friendly and responsive. Similarly, we will use the icons and
                    other
                    helpful visuals from Material UI. We chose Next.js because it promotes the creation of components
                    that are reusable and smaller compared to using only JavaScript and retaining large files of code.
                    Moreover, we chose Next.js rather than using only React.js because it requires less code to be
                    written. For example, to create pages in Next.js, a folder needs to be created for each page with a
                    corresponding
                    page file. However, in React.js, routes to pages need to be added to the router which adds
                    complexity. Furthermore, in Next.js the UI gets generated in advance from the server, unlike
                    React.js that uses Client Side Rendering. For the testing aspect of our project, we are leaning
                    towards using Jest
                    because it is a popular testing framework for React. Additionally, we would like to use Github
                    Actions as the CI/CD Pipeline since we are all familiar with the GitHub website. For more
                    information about the
                    tech stack please refer to the project report. <br/>

                    Reference: <a
                    href="https://www.freecodecamp.org/news/next-vs-react/">https://www.freecodecamp.org/news/next-vs-react/</a>
                </p>
                <h1>Contributors</h1>
                <p> This project was planned, designed, and implemented by:<br/>
                    - Layan Barrieshee<br/>
                    - Dony Wang<br/>
                    - Haoran Miao<br/>
                    - Ayana Hussain</p>

            </div>
            <Script src="/clientjs/home.js"/>
        </main>

    )
}
