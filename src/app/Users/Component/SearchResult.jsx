'use client'
import { Button, Flex, Space, Table,FloatButton } from 'antd'
import React, { useEffect, useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined,PlusOutlined} from '@ant-design/icons';
import ResultTable from '../../Component/ResultTable';
import Link from 'next/link';
import AddUserModal from './AddUserModal';
import SearchUsers from './SearchUsers';
import axioinstance from '../../Instance/api_instance';

const columns = [
    {
        title: 'User Name',
        dataIndex: 'username',
        key: 'userId',
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email Address',
      dataIndex: '',
      key: 'email',
      render:(record)=>
      <a href={`mailto:${record.email}`}>{record.email}</a>
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        
      },
    {
      title: 'More',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
        <Space size="large" >
          <Link href="/Users/About" ><MoreOutlined/></Link>
        </Space>
         
        </>
      )
    },
    {
      title: 'Remove',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
          <Space size="large">
          <Link href="/" ><UserDeleteOutlined style={{color:'red'}}/></Link>
                  {/* <Button type='primary' icon={<MoreOutlined /> } size='small'></Button>
        <Button type='primary' danger icon={<UserDeleteOutlined />}size='small'></Button> */}
        </Space>
        </>
      )
    },
  ];


function SearchResult(props) {

  const [keyword, setKeyword] = useState(""); // State for keyword
  const [role, setRole] = useState("*"); // State for status
  const [type, setType] = useState("all"); 
  const [items, setItems] = useState([]); // State for items
  const [loading, setLoading] = useState(true); // Loading state

  const [open, setOpen] = useState(false);
  const showModal = () => {
  setOpen(true);
  };
  const closeModal=()=>{
  setOpen(false);
  };

  const fetchData = async(type)=>{
   
    try{
      const response = await axioinstance.post('User/SearchUser',{
        keyword:keyword,
        type:type
      });
      console.log(response.data);
      setLoading(false);
      setItems(response.data);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  const search = () => {
    fetchData(type);
  } // Function to trigger search

  
useEffect(()=>{fetchData(type)},[]);
  return(
    <>
   
     <SearchUsers func1={setRole} func2={setType} func3={setKeyword} search={search}></SearchUsers>
    <ResultTable loading={loading}  dataset={role=== "*" ? items : items.filter(user => user.role.toLowerCase() === role.toLowerCase())} columnset={columns} pagination={{pageSize:20}}/>
    <AddUserModal open={open} openModal={showModal} closeModal={closeModal} fetchData={fetchData}/>
    <FloatButton  onClick={showModal} icon={<PlusOutlined/>} tooltip="Add a resource" type='primary'/> 
    </>
  )
}

export default SearchResult
