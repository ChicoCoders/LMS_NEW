'use client'
import { Button, Card, Space, Table } from 'antd'
import React from 'react'
import ResultTable from '../../Component/ResultTable'
import {BellOutlined  } from '@ant-design/icons';
import Link from 'next/link';

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
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
      },
     
    {
      title: 'Remind',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="large">
        <Link href="/" ><BellOutlined  style={{color:'red'}}/></Link>
        </Space>
      )
    },
  
  ];



function OverdueTable(props) {
  return (
    <Card >
    <div >
        <h4>Overdue List</h4>
        <ResultTable dataset={props.data} columnset={columns} pagination={false}/>
    </div>
    </Card>
  )

}

export default OverdueTable
