'use client'
import { useEffect } from 'react';
import FilterPage from '../../../filtering/page';

export default function Page({ params }: { params: { name: string } }) {

    
    const id = decodeURIComponent(params.name);
    const P_KEY = process.env.PERENUAL_KEY;

        // Use localStorage.setItem to store the id in local storage
    console.log(id);
    //localStorage.setItem('plantId', id);

    return (
        <main>
            <FilterPage id={id}/>
        </main>
    );
}
