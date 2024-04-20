// Importing necessary modules from Ant Design and React
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Select, Tooltip, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
import Notifications from './Notifications'; // Importing other notification components
import AddNotification from './AddNotifications';
import UpdateNotification from './UpdateNotification';
import RemindNotification from './RemindNotification';
import axios from 'axios'; // Importing Axios for making HTTP requests

// NotificationCard component definition
function NotificationCard() {
    // State variables to manage notifications and their properties
    const [notifications, setItems] = useState([]);
    const [notifi, setNotifications] = useState(notifications);
    const [selectedType, setSelectedType] = useState('All');
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleRemind, setVisibleRemind] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedNotification, setSelectedNotification] = useState(null);

    // Function to show the modal for reminding notification
    const showRemindModal = () => {
        setVisibleRemind(true);
    };

    // Function to handle reminding notification
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

    // Function to show the modal for adding a new notification
    const showAddModal = () => {
        setVisibleAdd(true);
    };

    // Function to show the modal for updating a notification
    const showUpdateModal = (notification) => {
        setSelectedNotification(notification);
        setVisibleUpdate(true);
    };

    // Function to handle updating a notification
    const handleUpdate = (id, values) => {
        const updatedNotifications = notifi.map((notification) =>
            notification.id === id ? { ...notification, ...values } : notification
        );
        setNotifications(updatedNotifications);
        setVisibleUpdate(false);
    };

    // Function to handle adding a new notification
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

    // Function to handle canceling the modal
    const handleCancel = () => {
        setVisibleAdd(false);
        setVisibleUpdate(false);
        setSelectedNotification(null);
    };

    // Function to handle removing a notification
    const handleRemove = (id) => {
        const newNotifications = notifi.filter((notify) => notify.id !== id);
        notification = newNotifications;
        setNotifications(newNotifications);
    };

    // Function to handle searching notifications
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

    // Function to handle changing notification type
    const handleTypeChange = (value) => {
        setSelectedType(value);
        if (value === 'All') {
            return setNotifications(notifications);
        } else {
            const filteredNotifications = value ? notifications.filter((notify) => notify.type === value) : notifications;
            setNotifications(filteredNotifications);
        }
    };

    // Function to fetch data from the server
    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:5164/api/Notification/GetNotificatons?username=all');
            const data = response.data;
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch data when component mounts
    useEffect(() => { fetchData(); }, []);

    console.log(notifications); // Logging notifications to console

    // Rendering component
    return (
        <div>
            {/* Row containing buttons and select input */}
            <Row gutter={16} style={{ marginBottom: '30px' }}>
                <Col span={12}>
                    {/* Button to show reminder modal */}
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showRemindModal}>
                        Reminding
                    </Button>

                    {/* Rendering RemindNotification modal */}
                    {visibleRemind && (
                        <RemindNotification visible={visibleRemind} onRemind={handleRemind} onCancel={() => setVisibleRemind(false)} />
                    )}

                    {/* Button to show add notification modal */}
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showAddModal}>
                        New
                    </Button>

                    {/* Rendering AddNotification modal */}
                    <AddNotification visible={visibleAdd} onCreate={handleAdd} onCancel={handleCancel} />

                    {/* Rendering UpdateNotification modal if notification is selected */}
                    {selectedNotification && (
                        <UpdateNotification visible={visibleUpdate} onUpdate={handleUpdate} onCancel={handleCancel} notification={selectedNotification} />
                    )}

                    {/* Button to show update notification modal */}
                    <Button style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff' }} onClick={showUpdateModal}>
                        Updates
                    </Button>
                </Col>

                {/* Column for select input and search input */}
                <Col span={9}>
                    {/* Select input to filter notifications by type */}
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

                    {/* Search input */}
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

                    {/* Search button */}
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

            {/* Flex container to display notifications */}
            <Flex vertical align="center">
                {/* Mapping through notifications and rendering each notification as a Card */}
                {notifications.map((notification) => (
                    <Card
                        key={1}
                        style={{
                            width: '90%',
                            margin: '15px 0',
                            boxShadow: '0 1px 4px 0 rgba(0,0,0,0.05)',
                        }}
                    >
                        {/* Displaying notification details */}
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
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>{notification.description}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} >
                                <Flex justify="end">
                                    {/* Button to remove notification */}
                                    <Button
                                        danger
                                        type='primary'
                                        style={{
                                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.15)',
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Flex>
        </div>
    );
}

export default NotificationCard; // Exporting NotificationCard component
