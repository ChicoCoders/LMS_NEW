'use client'
import React from 'react'
import { Button, Card, Flex, Table } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined,ReadOutlined  , UserOutlined ,
    AuditOutlined ,DoubleRightOutlined ,CalendarOutlined 
    ,FieldTimeOutlined,UserAddOutlined,NotificationOutlined,InteractionOutlined,
    InfoCircleOutlined   } from '@ant-design/icons';
import DashboardCard from './DashboardCard';
import DashboardImage from './DashboardImage';
import TimeCard from './TimeCard';
import MyButton from '../../Component/MyButton';


const firstRow = {
    flex: 1,
    // boxShadow:"0 3px 6px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.2)"
}
const buttonrow = {
    flex: 1,
}

function Dashboard() {
    return (
        <Flex gap="30px"  vertical  style={{width:"100%"}}>
            <Flex gap='8px' vertical >
            <Flex gap="8px" wrap="wrap" align='stretch'>
                <div style={firstRow}><DashboardCard title="Total" value="3257" icon={<ReadOutlined />}/></div>
                <div style={firstRow}><DashboardCard title="Users" value="250" icon={<UserOutlined/>} /></div>
                <div style={firstRow}><DashboardCard title="Requests" value="10" icon={<AuditOutlined />} /></div>
                <div style={firstRow}><DashboardCard title="Issued" value="400" icon={<DoubleRightOutlined />}  /></div>
                
            </Flex>
            <Flex gap="8px" wrap="wrap" align='stretch'>
                <div style={firstRow}><DashboardCard title="Total" value="3257" icon={<ReadOutlined />}/></div>
                <div style={firstRow}><DashboardCard title="Users" value="250" icon={<UserOutlined/>} /></div>
                <div style={firstRow}><DashboardCard title="Requests" value="10" icon={<AuditOutlined />} /></div>
                <div style={firstRow}><DashboardCard title="Issued" value="400" icon={<DoubleRightOutlined />}  /></div>
                
            </Flex>
            </Flex>
            <Flex gap="8px" wrap="wrap" align='stretch' >
                    <div style={firstRow}><Table/></div>
                    <div style={firstRow}>dsfffff</div>

                </Flex>
            
               
            
            <Flex gap="8px" wrap="wrap" align='stretch' style={{margin:'30px 0 0 0'}}>
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
