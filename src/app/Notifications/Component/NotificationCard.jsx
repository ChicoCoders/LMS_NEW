'use client'
import React, {useState} from 'react';
import { Card, Row, Col, Button, Select, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
import Notifications from './Notifications';
import AddNotification from './AddNotifications';
import UpdateNotification from './UpdateNotification';
import RemindNotification from './RemindNotification';



let notifications = Notifications;


function NotificationCard() {
    const [notifi, setNotifications] = useState(notifications);
    const [selectedType, setSelectedType] = useState('All');
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleRemind, setVisibleRemind] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedNotification, setSelectedNotification] = useState(null);


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

    const handleRemove = (id) => {
        const newNotifications = notifi.filter((notify) => notify.id !== id);
        notifications = newNotifications;
        setNotifications(newNotifications);
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
        if(value === 'All'){
            return setNotifications(notifications);
        }else{
            const filteredNotifications = value ? notifications.filter((notify) => notify.type === value) : notifications;
            setNotifications(filteredNotifications);
        }

    };

    return (
        <div>
            <Row gutter={16} style={{ marginBottom: '30px',}}>
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
                    <AddNotification visible={visibleAdd} onCreate={handleAdd} onCancel={handleCancel} />
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
                        style={{width: '150px'}}
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
                            style={{backgroundColor: '#001628', color: '#ffff', borderRadius: '0 5px 5px 0'}}
                            type="primary"
                            shape="square"
                            icon={<SearchOutlined/>}
                        />
                    </Tooltip>
                </Col>
            </Row>

            {notifi.map((notification) => (
                <Card
                    key={notification.id}
                    style={{
                        width: '100%',
                        margin: '15px 0',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.15)',
                    }}
                >
                    <Row gutter={16}>
                        <Col span={1}>
                            <div>
                                <strong>{notification.id}</strong>
                            </div>
                        </Col>
                        <Col span={20}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        To: {notification.to}
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        Date: {notification.date}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p><strong>{notification.type}</strong></p>
                                <p>{notification.description}</p>
                            </div>
                        </Col>
                        <Col span={1}>
                            <Button
                                style={{
                                    backgroundColor: '#ff4d4f',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '100%',
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.15)',
                                }}
                                onClick={() => handleRemove(notification.id)}
                            >
                                Remove
                            </Button>
                        </Col>
                    </Row>
                </Card>
            ))}
        </div>
    );
}

export default NotificationCard;




