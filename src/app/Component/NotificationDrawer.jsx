'use state'
import { Button, Card, Divider, Drawer, Flex, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import axioinstance from '../Instance/api_instance';

function NotificationDrawer({setOpen,open}) {
    const[loading,setLoading]=useState(false);
    const[notifications,setNotifications]=useState([]);
    const [all,setAll]=useState(false);
    const GetNotification = async()=>{
     
        setLoading(true); // Set loading to true while fetching
        try {
            // Sending POST request to fetch data based on search parameters
            const response = await axioinstance.get('Notification/GetNotificatons?username=shaeni')//call to backend api
            const data = response.data.reverse(); // Extracting data from response
            //setLoading(false); // Setting loading to false after data is fetched
            setNotifications(data); // Updating items state with fetched data
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
    <Drawer
                mask={true}
                maskClosable={false}
                style={{maxWidth:'100%'}}
                width='350px'
                title={<Flex>Notifications</Flex>}
                open={open}
                onClose={()=>setOpen(false)} 
                footer={notifications.length>5?<Button block onClick={()=>setAll(!all)}> {all==false?"Show All":"Show Less"} </Button>:null}
                //when click on show all button it will show all the notifications
            >
                <div style={{overflowX:"hidden"}}>
              <Spin spinning={loading}>
                {all==true||notifications.length<=5?
                    notifications.map((notification)=>
            
<>
                <Card bordered={false} >
                    <div><strong>{notification.subject}</strong></div>
                    {notification.description}</Card>
                    <br></br>
                </>
                
                ):
                    // slice the notification list from 0 index to 4 th
                notifications.splice(0,4).map((notification)=>
            
<>
                <Card bordered={false} >
                    <div><strong>{notification.subject}</strong></div>
                    {notification.description}</Card>
                    <br></br>
                </>)}
            
              </Spin>
              </div>
            </Drawer>
  )
}

export default NotificationDrawer