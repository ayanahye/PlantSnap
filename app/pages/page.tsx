import React from 'react'
import { useEffect } from 'react'

function page() {

    useEffect(() => {
        const getData = async () => {
            const speciesId = 12;
            const apiKey = '';
            const url = `https://perenual.com/api/species/details/${speciesId}?key=${apiKey}`;
            
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log('response from API:', res);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        getData();
    }, []);
    
    return (
        <div>page</div>
    )
}

export default page