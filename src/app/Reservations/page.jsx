'use client'
import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks
import { HomeOutlined, InteractionOutlined } from '@ant-design/icons'; // Importing icons from Ant Design
import SearchResult from './Component/SearchResult'; // Importing SearchResult component
import Navigations from '../Component/Navigations'; // Importing Navigations component
import SearchReservation from './Component/SeachReservations'; // Importing SearchReservation component
import axios from 'axios'; // Importing axios for HTTP requests

const PageRoot = [ // Root navigation items
  { key: '1', href: '', title: <HomeOutlined /> }, // Home
  { key: '2', href: '', title: <><InteractionOutlined /><span>Reservations</span></> }, // Reservations
  { key: '3', href: '', title: <span> Search Results</span> } // Search Results
];

function page() {
  // const [keyword, setKeyword] = useState(""); // State for keyword
   const [status, setStatus] = useState("*"); // State for status
  // const [type, setType] = useState("*"); // State for type
  // const [items, setItems] = useState([]); // State for items (search results)
   const [loading, setLoading] = useState(true); // Loading state

  // async function fetchData(type) { // Function to fetch data from server
  //   setLoading(true); // Set loading to true while fetching
  //   try {
  //     // Sending POST request to fetch data based on search parameters
  //     const response = await axios.post('http://localhost:5164/api/Reservation/SearchReservation', {
  //       keywords: keyword,
  //       resourceId: type === "resourceId" || type === "*",
  //       userId: type === "userId" || type === "*",
  //       reservationId: type === "reservationId" || type === "*"
  //     });
  //     const data = response.data; // Extracting data from response
  //     setLoading(false); // Setting loading to false after data is fetched
  //     setItems(data); // Updating items state with fetched data
  //   } catch (error) {
  //     setLoading(false); // Setting loading to false if there's an error
  //     console.error('Error fetching data:', error); // Logging error to console
  //   }
  // }

  // const search = () => fetchData(type); // Function to trigger search

  // useEffect(() => { fetchData("*"); }, []); // Fetch data on component mount

  return (
    <div>
      <div>
        <div></div>
        {/* Rendering Navigations component */}
        {/*<Navigations selectedItem="Reservations" topic="Reservations" pageroot={PageRoot}>}
          {/* Rendering SearchReservation and SearchResult components */}
        {/*  <SearchReservation func1={setStatus} func2={setType} func3={setKeyword} search={search} />*/}
          <SearchResult  />
        {/*</Navigations>*/}
      </div>
    </div>
  )
}

export default page; // Exporting page component
