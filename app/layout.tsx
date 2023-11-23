import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import {redirect} from "next/navigation";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'PlantSnap',
    description: 'TODO',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    async function searchSubmit(form: FormData) {
        "use server"
        redirect("/search?q=" + form.get("inputq"))
    }

    //This is the layout, the master of the page, which appears as the outer border on each page.
    //bootstrap has been referenced globally, do not import it again.

    //do not delete this bootstrap js plz!!!!!
    return (
        <html lang="en">
        <Script src='/bootstrap/bootstrap.bundle.min.js'></Script>
        <body className={inter.className}>
        <nav className="navbar navbar-expand-lg w-100 position-sticky top-0">
            <div className="container-fluid mx-lg-5 mx-3">
                <a className="navbar-brand" href="/">
                    <Image src="/images/plantsnaplogo.svg" width="255" height="70" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item mx-2" id="minscreen">
                            <Link className="nav-link text-center" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2" id="minscreen">
                            <Link className="nav-link text-center" aria-current="page" href="/search"> Plant Search</Link>
                        </li>
                        <li className="nav-item mx-2" id="minscreen">
                            <Link className="nav-link text-center" aria-current="page" href="/identify">Identify</Link>
                        </li>
                        <li className="nav-item mx-2" id="minscreen">
                            <Link className="nav-link text-center" aria-current="page" href="/filtering">Filter temp</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search"action={searchSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"  id = "ligher" name="inputq"/>
                        <button id="lighter" className="btn btn-outline-success" type="submit">🔍</button>
                    </form>
                </div>
            </div>
        </nav>
        {children}
        </body>
        </html>
    )
}
