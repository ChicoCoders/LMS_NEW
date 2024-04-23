'use client'
import ResultTable from '../../Component/ResultTable'
import React, { useEffect, useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import { Button, Space, Tag,Modal } from 'antd';
import DeleteModal from './DeleteModal'
import Link from 'next/link';
import SearchRequests from './SeachRequests'
import axioinstance from '../../Instance/api_instance';





function SearchResult(props) {

  const[recordData,setRecord]=useState([]);


  const [open, setOpen] = useState(false);
  const showModal = (record) => {
    setRecord(record);
    setOpen(true);
  };
  const closeModal=()=>{
    setOpen(false);
  };

  const [keyword, setKeyword] = useState(""); // State for keyword
  const [status, setStatus] = useState("*"); // State for status
  const [type, setType] = useState("*"); // State for type
  const [items, setItems] = useState([]); // State for items (search results)
  const [loading, setLoading] = useState(true); // Loading state

  const columns = [
    {
        title: 'No',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'ID(ISBN)',
        dataIndex: 'isbn',
        key: 'isbn',
      },
    {
      title: 'UserID',
      dataIndex: 'borrowerID',
      key: 'borrowerID',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
     
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (record) => (
        <Button type='primary' danger onClick={() => showModal(record)} size='small' shape='round'>Cancle</Button>
      )
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (record) => (
        <Button type='primary'  size='small' shape='round'>Issue</Button>
      )
    },
  
  ];

  async function fetchData() { // Function to fetch data from server
    setLoading(true); // Set loading to true while fetching
    try {
      // Sending POST request to fetch data based on search parameters
      const response = await axioinstance.get("Request/DisplayRequest");
      // {
      //   // keywords: keyword,
      //   // resourceId: type === "resourceId" || type === "*",
      //   // userId: type === "userId" || type === "*",
      //   // reservationId: type === "reservationId" || type === "*"
      // },
      
      const data = response.data; // Extracting data from response
      console.log(data);
      setLoading(false); // Setting loading to false after data is fetched
      setItems(data); // Updating items state with fetched data
    } catch (error) {
      setLoading(false); // Setting loading to false if there's an error
      console.error('Error fetching data:', error); // Logging error to console
    }
  }

  const search = () => {
    fetchData(type);
  } // Function to trigger search

  useEffect(() => { fetchData(); }, []); 

  return (
    <div>
      <SearchRequests func1={setStatus} func2={setType} func3={setKeyword} search={search}/>
      <ResultTable loading={loading} dataset={items} columnset={columns} pagination={{pageSize:20}}/>
      <DeleteModal  open1={open} open={showModal} close={closeModal} recordData={recordData} fetchData={fetchData}/>
    </div>
  )
}

export default SearchResult
