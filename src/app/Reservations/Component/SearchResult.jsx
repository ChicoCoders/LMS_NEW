'use client'
import ResultTable from '../../Component/ResultTable'
import React, { useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';
import ReturnModal from './ReturnModal'
import Link from 'next/link';






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
 

  const columns = [
    {
        title: 'Reservation',
        dataIndex: 'reservationId',
        key: 'reservationId',
      },
      {
        title: 'Resource',
        dataIndex: 'resourceId',
        key: 'resourceId',
      },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName',
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
        <Link href="/Reservations/About"><Button type='primary' icon={<MoreOutlined /> } size='small' shape='round'>More</Button></Link>
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

  return (
    <div>
      <ResultTable dataset={props.data} columnset={columns} pagination={{pageSize:20}}/>
      <ReturnModal  open1={open} open={showModal} close={closeModal} data1={recordData}/>
    </div>
  )
}

export default SearchResult
