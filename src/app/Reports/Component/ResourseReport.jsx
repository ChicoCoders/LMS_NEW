'use client'
import React, { useEffect, useState } from 'react'
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
import axioinstance from '../../Instance/api_instance';

const firstRow = {
    flex: 1,
    width: '100%'
    
}
const buttonrow = {
    flex: 1,
}






function ResourseReport() {

    const iconStyle=  {padding:16,borderRadius:32,fontSize:24,background:"rgb(150,119,255)",border:'0px solid rgb(0,21,41)',color:'rgb(0,21,41)'}
    const [statics,setStatics]=useState({});
    const[loading,setLoading]=useState(true);

    const fetchData=async()=>{
      try{
        const response1 = await axioinstance.get("Dashboard/getAdminDashboradData");
        //const response1 = await axioinstance.get("Report/count");

        console.log(response1.data);
        setStatics(response1.data);
      }
      catch(err){ 
        console.log(err);
      }
    }


    useEffect(() => {
        fetchData();
    }, [])

    //useEffect(() => {()=>setLoading(false);}, [statics])


    return (
      <>
      

       <div>
          <div style={{background:"rgb(191, 191, 191)",marginLeft:50,padding:20,borderRadius:5}}>
           <h1 style={{paddingLeft:30}}>User Report</h1>
           <h3>Novels : {statics.navels}</h3>
           <h3>Ebooks : {statics.ebooks}</h3>
          </div>
        </div>
    
        </>
    )
}

export default ResourseReport
