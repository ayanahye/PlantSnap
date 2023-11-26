'use client'
import styles from '@/app/home.module.css';
import 'bootstrap/dist/css/bootstrap.css'


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
                <Link href="/taxonomy" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                    </svg>
                </Link>
            </div>
            <div id="indexbg" className={styles.indexbg + " carousel slide carousel-fade"}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/images/img1-new.jpg" width={1920} height={1080} loading="eager" alt="bg1"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/img2-new.jpg" width={1920} height={1080} loading="eager" alt="bg2"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/img3-new.jpg" width={1920} height={1080} loading="eager" alt="bg3"/>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/img4-new.jpg" width={1920} height={1080} loading="eager" alt="bg4"/>
                    </div>
                </div>
            </div>
            <div className="container w-75 py-5">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 style={{textAlign: 'center', marginBottom: '50px', color: 'green'}}
                            className="display-4">PlantSnapify</h1>
                        <p style={{textAlign: 'center', marginBottom: '50px'}} className="lead">An AI based research
                            tool for plant identification and research.</p>
                    </div>
                </div>
                <h1 style={{textAlign: 'center', marginBottom: '50px', color: 'green'}} className="display-4">Tips</h1>

                <div style={{marginTop: '30px'}} className="card">
                    <div className="card-header">
                        Recognition
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Upload images of flowers, trees, grasses, ferns, vines, wild salads, cacti, and many more
                                and get <strong>FAST</strong> results</p>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Confidence
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Use the built in confidence rates to guide your research</p>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Search
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Search using keywords such as color/size or scientific and common name</p>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Display
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Click on a plant in the results list to see more information</p>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Narrow your search
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Use the options on the search page to filter through the results</p>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Plant Icon Legend
                    </div>
                    <div id="icons" className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Leaf</p>
                                <Image src="/images/leaf.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Danger</p>
                                <Image src="/images/danger.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Medicinal</p>
                                <Image src="/images/medical.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Indoor</p>
                                <Image src="/images/indoor.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Edible</p>
                                <Image src="/images/apple.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Drought Tolerant</p>
                                <Image src="/images/desert.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Flower</p>
                                <Image src="/images/flower.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px'}}>
                                <p>Rare</p>
                                <Image src="/images/rare.svg" width='50' height='50' alt="flower"></Image>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <div style={{marginTop: '50px'}} className="card">
                    <div className="card-header">
                        Care Guides
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Use the filters to find specifc care requirements, including, sunlight, watering,
                                maintenance.</p>
                        </blockquote>
                    </div>
                </div>

                <div>
                    <h1 style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px', color: 'green'}}
                        className="display-4">Developers</h1>
                    <div style={{textAlign: 'center', marginBottom: '20px'}}>
                        <p>
                            This project was planned, designed, and
                            implemented by: Layan Barrieshee, Dony Wang, Haoran Miao, Ayana Hussain.
                        </p>
                        <Link href="https://github.com/ayanahye/PlantSnap" target="_blank">GitHub</Link>
                    </div>
                </div>

            </div>
            <Script src="/clientjs/home.js"/>
        </main>

    )
}
