'use client'
import ResultTable from '../../Component/ResultTable'
import React, { useEffect, useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import { Button, Space, Spin, Tag } from 'antd';
import ReturnModal from './ReturnModal'
import Link from 'next/link';
import SeachReservations from './SeachReservations';
import axios from 'axios';
import Cookies from 'js-cookie';
import axioinstance from '../../Instance/api_instance';





function SearchResult() {
  
 
  const token=Cookies.get('jwt');
  const[recordData,setRecord]=useState([]);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState(""); // State for keyword
  const [status, setStatus] = useState("*"); // State for status
  const [type, setType] = useState("*"); // State for type
  const [items, setItems] = useState([]); // State for items (search results)
  const [loading, setLoading] = useState(true); // Loading state

  const showModal = (record) => {
    setRecord(record);
    setOpen(true);
  };
  const closeModal=()=>{
    setOpen(false);
  };
 

  const columns = [
    {
        title: 'Reservation',
        dataIndex: 'reservationNo',
        key: 'reservationNo',
      },
      {
        title: 'Resource',
        dataIndex: 'resource',
        key: 'resource',
      },
    {
      title: 'User',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
        title: 'User Name',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
      },
      {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
      },
     
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="large">
        <Link href="/Reservations/About"><Button type='primary'  size='small' shape='round'>More</Button></Link>
        </Space>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status,record) => (status=="borrowed"?<Button onClick={() => showModal(record)} type='primary'  size='small' shape='round'>Borrowed</Button>:(status=="due"?<Button type='primary' danger size='small' shape='round'>Overdue</Button>:<Button type='primary' disabled size='small' shape='round'>Reserved</Button>)),
    },
  
  ];

 
  async function fetchData(type) { // Function to fetch data from server
    setLoading(true); // Set loading to true while fetching
    try {
      // Sending POST request to fetch data based on search parameters
      const response = await axioinstance.post('Reservation/SearchReservation', {
        keywords: keyword,
        resourceId: type === "resourceId" || type === "*",
        userId: type === "userId" || type === "*",
        reservationId: type === "reservationId" || type === "*"
      },);
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
    fetchData(type);} // Function to trigger search

  useEffect(() => { fetchData("*"); }, []); // Fetch data on component mount

  return (
    
    <div>
       <SeachReservations func1={setStatus} func2={setType} func3={setKeyword} search={search} />
       <ResultTable loading={loading} nodata={false} dataset={status === "*" ? items : items.filter(book => book.status === status)} columnset={columns} pagination={{pageSize:20}}/>
      <ReturnModal fetchData={fetchData} type={type}  open={open} openFuntion={showModal} close={closeModal} recordData={recordData}/>
    </div>
  )
}

export default SearchResult
