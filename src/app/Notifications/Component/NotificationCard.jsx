'use client'
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Select, Tooltip, Flex, Pagination, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
import Notifications from './Notifications';
import AddNotification from './AddNotifications';
import UpdateNotification from './UpdateNotification';
import RemindNotification from './RemindNotification';
import axios from 'axios';
import axioinstance from '../../Instance/api_instance';






function NotificationCard() {
    const [notifications, setItems] = useState([]);
    const [notifi, setNotifications] = useState(notifications);
    const [selectedType, setSelectedType] = useState('All');
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleRemind, setVisibleRemind] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedNotification, setSelectedNotification] = useState(null);
    const[page,changepage]=useState(1);
    const[size,changeSize]=useState(0);

    const changingPage =(pnumber,size)=>{
          changepage(pnumber);
    }
  


    const showRemindModal = () => {
        setVisibleRemind(true);
    };

    const handleRemind = (values) => {
        const newNotification = {
            id: notifi.length + 1,
            date: new Date().toLocaleDateString(),
            ...values,
        };
        const updatedNotifications = [...notifi, newNotification];
        setNotifications(updatedNotifications);
        setVisibleRemind(false);
    };
    const showAddModal = () => {
        setVisibleAdd(true);
    };

    const showUpdateModal = (notification) => {
        setSelectedNotification(notification);
        setVisibleUpdate(true);
    };

    const handleUpdate = (id, values) => {
        const updatedNotifications = notifi.map((notification) =>
            notification.id === id ? { ...notification, ...values } : notification
        );
        setNotifications(updatedNotifications);
        setVisibleUpdate(false);
    };

    const handleAdd = (values) => {
        const newNotification = {
            id: notifi.length + 1,
            date: new Date().toLocaleDateString(),
            ...values,
        };
        const updatedNotifications = [...notifi, newNotification];
        setNotifications(updatedNotifications);
        setVisibleAdd(false);
    };

    const handleCancel = () => {
        setVisibleAdd(false);
        setVisibleUpdate(false);
        setSelectedNotification(null);
    };

    const handleRemove = async(id) => {
        try{
        const response=await axioinstance.delete(`Notification/RemoveNotification?id=${id}`);
        console.log(response);
        fetchData();
        }catch(e){
            console.log(e);
        }
    };
    const handleSearch = (value) => {
        setSearchText(value);
        const filteredNotifications = notifications.filter(
            (notify) =>
                notify.to.toLowerCase().includes(value.toLowerCase()) ||
                notify.type.toLowerCase().includes(value.toLowerCase()) ||
                notify.description.toLowerCase().includes(value.toLowerCase())
        );
        setNotifications(filteredNotifications);
    };

    const handleTypeChange = (value) => {
        setSelectedType(value);
        if (value === 'All') {
            return setNotifications(notifications);
        } else {
            const filteredNotifications = value ? notifications.filter((notify) => notify.type === value) : notifications;
            setNotifications(filteredNotifications);
        }

    };

    async function fetchData() { // Function to fetch data from server
        //etLoading(true); // Set loading to true while fetching
        try {
            // Sending POST request to fetch data based on search parameters
            const response = await axioinstance.get('Notification/GetNotificatons?username=all');
            const data = response.data.reverse(); // Extracting data from response
            changeSize(data.length);
            //setLoading(false); // Setting loading to false after data is fetched
            setItems(data); // Updating items state with fetched data
        } catch (error) {
            // setLoading(false); // Setting loading to false if there's an error
            console.error('Error fetching data:', error); // Logging error to console
        }
    }
    useEffect(() => { fetchData(); }, []);

    console.log(notifications)
    console.log(size);
    return (

        <div>
            <Row gutter={16} style={{ marginBottom: '30px', }}>
                <Col span={12}>
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showRemindModal}>
                        Reminding
                    </Button>

                    {visibleRemind && (
                        <RemindNotification visible={visibleRemind} onRemind={handleRemind} onCancel={() => setVisibleRemind(false)} />
                    )}
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showAddModal}>
                        New
                    </Button>
                    <AddNotification visible={visibleAdd} onCreate={handleAdd} onCancel={handleCancel} fetchData={fetchData}/>
                    {selectedNotification && (
                        <UpdateNotification visible={visibleUpdate} onUpdate={handleUpdate} onCancel={handleCancel} notification={selectedNotification} />
                    )}
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showUpdateModal}>
                        Updates
                    </Button>
                </Col>
                <Col span={9}>

                    <Select
                        placeholder="Select Type"
                        style={{ width: '150px' }}
                        onChange={handleTypeChange}
                        value={selectedType}
                    >

                        <Option value="All">All</Option>
                        <Option value="Special Notice">Special Notice</Option>
                        <Option value="Updates">Updates</Option>
                        <Option value="Reminder">Reminder</Option>

                    </Select>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        style={{
                            width: '50%',
                            padding: '8px',
                            borderRadius: '5px 0px 0px 5px ',
                            border: '1px solid #ccc',
                        }}
                    />
                    <Tooltip title="search">
                        <Button
                            style={{ backgroundColor: '#001628', color: '#ffff', borderRadius: '0 5px 5px 0' }}
                            type="primary"
                            shape="square"
                            icon={<SearchOutlined />}
                        />
                    </Tooltip>
                </Col>
            </Row>
                        <Flex  vertical align="center" >
            {notifications.slice((page-1)*9,(page-1)*9+ 9).map((notification) => (
                <Card
                    key={1}
                    style={{
                        width: '80%',
                         margin: '15px 0',
                        // backgroundColor: '#f0f0f0',
                        // borderRadius: '5px',
                        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.05)',
                    }}
                >

                    <Row gutter={20}>
                        <Col span={24}>
                            <div>
                                <h3>{notification.subject}</h3>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        To: {notification.userName}
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        Date: {notification.date}
                                    </div>
                                </div>
                            </div>

                        </Col >
                        <Col span={24}>
                            
                        <div style={{ wordWrap: 'break-word' }}>
        <p>{notification.description}</p>
    </div>
                                  
                        </Col>
                        <Col span={24} >
                            <Flex justify="end">
                            
                            <Popconfirm
                                    title="Remove the Notification"
                                    description="Are you sure to remove this notification?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={() => handleRemove(notification.id)}
                                >
                                    <Button
                                        danger
                                        type='primary'
                                        style={{
                                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.15)',
                                        }}
                                        
                                    >
                                        Remove
                                    </Button>
                                    </Popconfirm>
                                    </Flex>  
                           
                    </Col>
                    </Row>
                </Card>
            ))}
             <Pagination defaultCurrent={1} total={50} onChange={changingPage} pageSize={9} />
            </Flex>
        </div>
    );
}

export default NotificationCard;




