import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Script from "next/script";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'PlantSnap',
    description: 'TODO',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    //This is the layout, the master of the page, which appears as the outer border on each page.
    //bootstrap has been referenced globally, do not import it again.
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="navbar">
        </div>
        {children}
        </body>
        <Script src='/bootstrap/bootstrap.bundle.min.js'></Script>
        </html>
    )
}
