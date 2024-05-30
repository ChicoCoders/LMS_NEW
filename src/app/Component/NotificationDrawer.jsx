'use state'
import { Button, Card, Divider, Drawer, Flex, Radio, Space, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import axioinstance from '../Instance/api_instance';
import Notification from './Notification';
import { ConfigProvider } from 'antd';
import { DoubleRightOutlined, RightOutlined } from '@ant-design/icons';

function NotificationDrawer({setOpen,open}) {
    const[loading,setLoading]=useState(false);
    const[notifications,setNotifications]=useState([]);
    const [all,setAll]=useState(false);
    const GetNotification = async()=>{
     
        //etLoading(true); // Set loading to true while fetching
        try {
            // Sending POST request to fetch data based on search parameters
            const response = await axioinstance.get('Notification/GetNotificatons?username=.');
            const data = response.data.reverse(); // Extracting data from response
            //setLoading(false); // Setting loading to false after data is fetched
            setNotifications(data); // Updating items state with fetched data
            console.log(data);
        } catch (error) {
            // setLoading(false); // Setting loading to false if there's an error
            console.log('Error fetching data:', error); // Logging error to console
        }
    }
   useEffect(()=>{
    setLoading(true);
    GetNotification()
    setLoading(false)},[open==true]);

  return (

    <ConfigProvider
  theme={{
    token: {
      paddingLG:0,
    },
  }}
>
    <Drawer
                
                mask={true}
                maskClosable={false}
                closeIcon={<DoubleRightOutlined />}
                style={{maxWidth:'95%'}}
                width='400px'
                title={<><Flex align='center'  justify='space-between'>Notifications<Space style={{margin:"0 20px 0 0"}}>
                
                <Radio.Group defaultValue="a" size="medium" block>
                  <Radio.Button value="a">Read</Radio.Button>
                  <Radio.Button value="b">Unread</Radio.Button>
                </Radio.Group></Space></Flex>
                </>
              }
                open={open}
                onClose={()=>setOpen(false)} 
                footer={notifications.length>5?<Button block onClick={()=>setAll(!all)}>{all==false?"Show All":"Show Less"}</Button>:null}
                
            >
                <div style={{overflowX:"hidden"}}>

              <Spin spinning={loading}>
                
                {all==true||notifications.length<=5?
                    notifications.map((notification)=>
            
<>
                {/* <div  style={{height:"50px",overflow:"hidden"}}>
                    <div><strong>{notification.subject}</strong></div>
                    {notification.description}</div>
                    <br></br> */}
                    <Notification subject={notification.subject} description={notification.description}/>
                </>
                
                
                ):
                notifications.splice(0,4).map((notification)=>
            
<>
                {/* <div  style={{height:"100px"}}>
                    <div><strong>{notification.subject}</strong></div>
                    {notification.description}</div>
                    <br></br> */}
                    <Notification subject={notification.subject} description={notification.description}/>
                </>)}
            
              </Spin>
              </div>
            </Drawer>
            </ConfigProvider>
  )
}

export default NotificationDrawer