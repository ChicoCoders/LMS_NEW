'use client'
import React from 'react'
import { Button, Card, Col, Flex, Table ,Row} from 'antd'
import {
    ArrowDownOutlined, ArrowUpOutlined, ReadOutlined, UserOutlined,
    AuditOutlined, DoubleRightOutlined, CalendarOutlined
    , FieldTimeOutlined, UserAddOutlined, NotificationOutlined, InteractionOutlined,
    FileTextOutlined ,
    BookOutlined ,
    WarningOutlined ,
    InfoCircleOutlined
} from '@ant-design/icons';
import DashboardCard from './DashboardCard';
import DashboardImage from './DashboardImage';
import TimeCard from './TimeCard';
import MyButton from '../../Component/MyButton';
import OverdueTable from "../Component/OverdueTable"
import Chart from "../Component/Chart"
import RecentNoti from "../Component/RecentNoti"

const firstRow = {
    flex: 1,
    width: '100%'
    // boxShadow:"0 3px 6px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.2)"
}
const buttonrow = {
    flex: 1,
}

const data = [
    { reservationId: "res001", resourceId: "ISBN-9780451419439", userId: 1, userName: "John", dueDate: "2024-02-10", status: "reserved" },
    { reservationId: "res002", resourceId: "ISBN-9780446310789", userId: 2, userName: "Alice", dueDate: "2024-02-15", status: "borrowed" },
    { reservationId: "res003", resourceId: "ISBN-9780679732761", userId: 3, userName: "Bob", dueDate: "2024-02-18", status: "due" },
    { reservationId: "res004", resourceId: "ISBN-9780061120084", userId: 4, userName: "Emma", dueDate: "2024-02-25", status: "borrowed" },
    { reservationId: "res005", resourceId: "ISBN-9780345339683", userId: 5, userName: "Michael", dueDate: "2024-03-01", status: "reserved" },
    // { reservationId: "res007", resourceId: "ISBN-9780441172719", userId: 7, userName: "David", dueDate: "2024-03-15", status: "reserved" },
    // { reservationId: "res008", resourceId: "ISBN-9780140283334", userId: 8, userName: "Olivia", dueDate: "2024-03-22", status: "borrowed" },
    // { reservationId: "res009", resourceId: "ISBN-9780553588484", userId: 9, userName: "Daniel", dueDate: "2024-03-29", status: "reserved" },
    // { reservationId: "res010", resourceId: "ISBN-9780743273565", userId: 10, userName: "Emily", dueDate: "2024-04-05", status: "due" },
    // { reservationId: "res011", resourceId: "ISBN-9780345342966", userId: 11, userName: "John", dueDate: "2024-04-12", status: "reserved" },
    // { reservationId: "res012", resourceId: "ISBN-9780064407663", userId: 12, userName: "Alice", dueDate: "2024-04-19", status: "borrowed" },
    // { reservationId: "res013", resourceId: "ISBN-9780553213133", userId: 13, userName: "Bob", dueDate: "2024-04-26", status: "reserved" },
    // { reservationId: "res014", resourceId: "ISBN-9780671673660", userId: 14, userName: "Emma", dueDate: "2024-05-03", status: "reserved" },
    // { reservationId: "res015", resourceId: "ISBN-9780553296984", userId: 15, userName: "Michael", dueDate: "2024-05-10", status: "reserved" },
    // { reservationId: "res016", resourceId: "ISBN-9780345339706", userId: 16, userName: "Sophia", dueDate: "2024-05-17", status: "borrowed" },
    // Add more book transitions here
];
const chart1 = [
    {
      day: '01-07',
      y: 25,
    },
    {
      day: '01-08',
      y: 59,
    },
    {
      day: '01-09',
      y: 78,
    },
    {
      day: '01-10',
      y: 56,
    },
    {
      day: '01-11',
      y: 105,
    },
    {
      day: '01-12',
      y: 60,
    }
  ]
const chart2 = [
    {
        day: '01-07',
        y: 15,
      },
      {
        day: '01-08',
        y: 15,
      },
      {
        day: '01-09',
        y: 25,
      },
      {
        day: '01-10',
        y: 2,
      },
      {
        day: '01-11',
        y: 12,
      },
      {
        day: '01-12',
        y: 42,
      }
  ]



function Dashboard() {

    const iconStyle=  {padding:16,borderRadius:32,fontSize:24,background:"rgb(150,119,255)",border:'0px solid rgb(0,21,41)',color:'rgb(0,21,41)'}
  
    return (
        <div>
          
          <Row style={{ width: "100%" }}  gutter={[5, 5]}>
            <Col xs={24} sm={6}><DashboardCard title="Total" value="3257" icon={<ReadOutlined style={iconStyle} />} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Books" value="2500" icon={<UserOutlined style={iconStyle}/>} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Ebooks" value="200" icon={<FileTextOutlined style={iconStyle}/>} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Journals" value="400" icon={<BookOutlined style={iconStyle}/>} /></Col>
          
            <Col  xs={24} sm={6}><DashboardCard title="Users" value="725" icon={<UserOutlined style={iconStyle}/>} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Checkouts" value="250" icon={<DoubleRightOutlined style={iconStyle}/>} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Requests" value="10" icon={<AuditOutlined style={iconStyle}/>} /></Col>
            <Col xs={24} sm={6}><DashboardCard title="Overdue" value="15" icon={<WarningOutlined style={iconStyle}/>} /></Col>
          </Row>
          <Row style={{ width: "100%" ,margin:'30px 0'}}  gutter={[5, 5]}>
            <Col xs={24} sm={12}><Chart topic="This week transitions" data={chart1}/></Col>
            <Col xs={24} sm={12}><Chart topic="Ebook Views" data={chart2}/></Col>
          </Row>
          <Row style={{ width: "100%" ,margin:'30px 0'}}  gutter={[5, 5]}>
            <Col xs={24} sm={10}><RecentNoti/></Col>
            <Col xs={24} sm={14}><OverdueTable data={data} /></Col>
          </Row>
         
         
           
          
        


        </div>
       

    )
}

export default Dashboard
