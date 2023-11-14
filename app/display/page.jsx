'use client';
import React, {useEffect, useState} from 'react'



function Display() {

    const [prevSearchQuery, setPrevSearchQuery] = useState("");

    useEffect(() => {
        const searchQuery = localStorage.getItem('lastSearchQuery');

        if (searchQuery !== null) {
            console.log('Your search: ', searchQuery);
            setPrevSearchQuery(searchQuery);

            localStorage.removeItem('lastSearchQuery');
        }
        else {
            console.log("no data");
        }
    }, [])


  return (
    prevSearchQuery && <div>your search is: {prevSearchQuery}</div>
  )
}

export default Display;