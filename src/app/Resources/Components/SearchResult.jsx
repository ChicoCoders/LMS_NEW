'use client'
import { Button, Flex, Pagination, Row, Space, Table,Col} from 'antd'
import React, { useEffect, useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import ResultTable from '../../Component/ResultTable';
import CardResource from './myComponent/CardResource'
import Link from 'next/link';
import Card from 'antd/es/card/Card';
import axios from 'axios';


function SearchResult(props) {

  const [books,setBooks]=useState([]);



  const[page,changepage]=useState(1);

  const changingPage =(pnumber,size)=>{
        changepage(pnumber);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5164/api/Resource/GetAllResource`);
      const searchData = response.data;
      setBooks(searchData);
      
    } catch (error) { 
      alert('Error searching data:');
    }
  };

  useEffect(()=>{handleSearch()},[]);
  
  return(
    <Card title="List of Books">
    <Row style={{width:"100%"}}   gutter={[15,15]} justify="center">
   
    {books.slice((page-1)*9,(page-1)*9+ 9).map((item) => (
        <CardResource  dataset={item} />
      ))}
  
    </Row>
    <br></br>
    <center><Pagination defaultCurrent={1} total={books.length} onChange={changingPage} pageSize={9}/></center>
    </Card>
  )
}

export default SearchResult
