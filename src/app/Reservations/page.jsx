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
  
   const [status, setStatus] = useState("*"); 
  
   const [loading, setLoading] = useState(true); // Loading state

  

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
