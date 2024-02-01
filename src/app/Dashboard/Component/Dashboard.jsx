'use client'
import React from 'react'
import { Button, Flex } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined,ReadOutlined  , UserOutlined ,
    AuditOutlined ,DoubleRightOutlined ,CalendarOutlined 
    ,FieldTimeOutlined,UserAddOutlined,NotificationOutlined,InteractionOutlined,
    InfoCircleOutlined   } from '@ant-design/icons';
import DashboardCard from './DashboardCard';
import DashboardImage from './DashboardImage';
import TimeCard from './TimeCard';
import MyButton from '@/app/Component/MyButton';


const firstRow = {
    flex: 1,
    boxShadow:"0 3px 6px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.2)"
}
const buttonrow = {
    flex: 1,
}

function Dashboard() {
    return (
        <Flex vertical gap="5px">
            <Flex gap="8px" wrap="wrap" align='stretch'>
                <div style={firstRow}><DashboardCard title="Total" value="590" prefix={<ReadOutlined />} background="rgba(35,149,239,255)" /></div>
                <div style={firstRow}><DashboardCard title="Users" value="101" prefix={<UserOutlined/>} background="rgb(78, 177, 82)" /></div>
                <div style={firstRow}><DashboardCard title="Requests" value="10" prefix={<AuditOutlined />} background="rgb(1, 150, 136)" /></div>
                <div style={firstRow}><DashboardCard title="Issued" value="85" prefix={<DoubleRightOutlined />} background="rgb(59, 89, 150)" /></div>
                
            </Flex>
            <Flex gap="8px" wrap="wrap" align='stretch'>
                <div style={firstRow}><DashboardImage></DashboardImage></div>
                <div style={firstRow} ><TimeCard title="Users" value="101" prefix1={<FieldTimeOutlined />} prefix2={<CalendarOutlined />} background="rgb(0,21,41)" /></div>
            </Flex>
            <Flex gap="8px" wrap="wrap" align='stretch' style={{margin:'10px 0 0 0'}}>
                
                <div style={buttonrow}><MyButton icon={<UserAddOutlined />} >Add Users</MyButton></div>
                <div style={buttonrow}><MyButton icon={<AuditOutlined/>} >Requests</MyButton></div>
                <div style={buttonrow}><MyButton icon={<NotificationOutlined />} >Send a Notice</MyButton></div>
                <div style={buttonrow}><MyButton icon={<InteractionOutlined />} >Reservations</MyButton></div>
                <div style={buttonrow}><MyButton icon={<InfoCircleOutlined />} >About</MyButton></div>
                
            </Flex >
            
            
        </Flex>
    )
}

export default Dashboard
