'use client'
import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks
import { HomeOutlined, InteractionOutlined } from '@ant-design/icons'; // Importing icons from Ant Design
import SearchResult from './Component/SearchResult'; // Importing SearchResult component
import Navigations from '../Component/Navigations'; // Importing Navigations component
import SearchReservation from './Component/SeachReservations'; // Importing SearchReservation component
import axios from 'axios'; // Importing axios for HTTP requests
import { UserContext } from '../Context/Context';


const PageRoot = [ // Root navigation items
  { key: '1', href: '', title: <HomeOutlined /> }, // Home
  { key: '2', href: '', title: <><InteractionOutlined /><span>Reservations</span></> }, // Reservations
  { key: '3', href: '', title: <span> Search Results</span> } // Search Results
];

function Adminview() {
    const user=React.useContext(UserContext).user; 

  return (
    <div>
          <SearchResult  />
    </div>
  )
}

export default Adminview; // Exporting page component
