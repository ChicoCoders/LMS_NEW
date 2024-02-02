'use client'
import React from 'react'
import { Button, Card, Flex, Table } from 'antd'
import {
    ArrowDownOutlined, ArrowUpOutlined, ReadOutlined, UserOutlined,
    AuditOutlined, DoubleRightOutlined, CalendarOutlined
    , FieldTimeOutlined, UserAddOutlined, NotificationOutlined, InteractionOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import DashboardCard from './DashboardCard';
import DashboardImage from './DashboardImage';
import TimeCard from './TimeCard';
import MyButton from '../../Component/MyButton';
import OverdueTable from "../Component/OverdueTable"
import Chart from "../Component/Chart"

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

const iconStyle={padding:8,borderRadius:20,fontSize:24,background:"blue",border:'2px solid black',color:"white"}

function Dashboard() {
    return (
        <Flex gap="30px" vertical style={{ width: "100%" }}>
            <Flex gap='8px' vertical >
                <Flex gap="8px" wrap="wrap" align='stretch'>
                    <div style={firstRow}><DashboardCard title="Total" value="3257" icon={<ReadOutlined style={iconStyle} />} /></div>
                    <div style={firstRow}><DashboardCard title="Users" value="250" icon={<UserOutlined style={iconStyle}/>} /></div>
                    <div style={firstRow}><DashboardCard title="Requests" value="10" icon={<AuditOutlined style={iconStyle}/>} /></div>
                    <div style={firstRow}><DashboardCard title="Issued" value="400" icon={<DoubleRightOutlined style={iconStyle}/>} /></div>

                </Flex>
                <Flex gap="8px" wrap="wrap" align='stretch'>
                    <div style={firstRow}><DashboardCard title="Total" value="3257" icon={<ReadOutlined style={iconStyle}/>} /></div>
                    <div style={firstRow}><DashboardCard title="Users" value="250" icon={<UserOutlined style={iconStyle}/>} /></div>
                    <div style={firstRow}><DashboardCard title="Requests" value="10" icon={<AuditOutlined style={iconStyle}/>} /></div>
                    <div style={firstRow}><DashboardCard title="Issued" value="400" icon={<DoubleRightOutlined style={iconStyle}/>} /></div>

                </Flex>
            </Flex>
            <Flex gap="8px"  wrap='wrap'>
            <div style={{ flex: 1, width: '100%' }}><Chart topic="This week transitions"/></div>
                <div style={{ flex: 1, width: '100%' }}><Chart topic="Ebook Views"/></div>

            </Flex>
            <Flex gap="8px" wrap="wrap" align='stretch' >
                <div style={{ flex: 5  }}><OverdueTable data={data} /></div>
                <div style={{ flex: 2}}></div>

            </Flex>
        </Flex>


    )
}

export default Dashboard
