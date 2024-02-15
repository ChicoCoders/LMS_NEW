'use client'
import React, {useState} from 'react';
import { Card, Row, Col, Button, Select } from 'antd';
const { Option } = Select;

const notifications = [
    {
        id: 1,
        to: 'All',
        date: '5/12/2023',
        type: 'Special Notice',
        description: 'Dear Patrons, Kindly note our revised hours starting [Date]. Masks and social distancing remain mandatory. Renewals and digital resources are available online. Timely returns help avoid fines. Stay updated on upcoming events.'
    },
    {
        id: 2,
        to: 'All',
        date: '5/15/2023',
        type: 'Updates',
        description: 'Hello Library Users, We have recently added new books to our collection. Explore the latest arrivals and enjoy your reading!'
    },
    {
        id: 3,
        to: 'Faculty',
        date: '5/20/2023',
        type: 'Reminder',
        description: 'Faculty members, please remind your students about the importance of returning borrowed books on time. It ensures fair access for everyone.'
    },
    {
        id: 4,
        to: 'All',
        date: '5/25/2023',
        type: 'Warning',
        description: 'Attention Library Users, we have noticed an increase in overdue books. Kindly return them promptly to avoid fines and maintain a smooth borrowing process.'
    },
    {
        id: 5,
        to: 'All',
        date: '6/2/2023',
        type: 'Special Notice',
        description: 'Dear Library Community, our annual book sale is approaching. Don\'t miss the chance to grab your favorite books at discounted prices. Stay tuned for more details!'
    },
    {
        id: 6,
        to: 'Students',
        date: '6/10/2023',
        type: 'Reminder',
        description: 'Students, exams are around the corner. Ensure you have all the necessary study materials. Check the library catalog for relevant resources.'
    },
    {
        id: 7,
        to: 'All',
        date: '6/15/2023',
        type: 'Updates',
        description: 'Good news! We now offer a new online reading platform. Explore a wide range of e-books from the comfort of your home. Access instructions available on our website.'
    },
    {
        id: 8,
        to: 'Faculty',
        date: '6/20/2023',
        type: 'Special Notice',
        description: 'Dear Faculty, we appreciate your feedback on our services. Feel free to share your thoughts and suggestions to help us improve and better cater to your needs.'
    }
];


// ... (import statements remain unchanged)

function NotificationCard() {
    // useState to store the notifications
    const [notifi, setNotifications] = useState(notifications);
    const [selectedType, setSelectedType] = useState("All");

    // function to remove the notification
    const handleRemove = (id) => {
        const newNotifications = notifi.filter((notify) => notify.id !== id);
        setNotifications(newNotifications);
    };

    const handleTypeChange = (value) => {
        setSelectedType(value);
        //if type = all, show all notifications
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
                    <Button style={{ marginRight: '10px', width:'150px', backgroundColor: '#001628', color:"#ffff" }}>Reminding</Button>
                    <Button style={{ marginRight: '10px', width:'150px', backgroundColor: '#001628', color:"#ffff"  }}>New</Button>
                    <Button style={{ marginRight: '10px', width:'150px', backgroundColor: '#001628', color:"#ffff"  }}>Updates</Button>
                </Col>
                <Col span={8}>

                    <Select
                        placeholder="Select Type"
                        style={{ width: '150px' }}
                        onChange={handleTypeChange}
                        value={selectedType}
                    >
                         {/*default value is all*/}
                        <Option value="All">All</Option>
                        <Option value="Special Notice">Special Notice</Option>
                        <Option value="Updates">Updates</Option>
                        <Option value="Reminder">Reminder</Option>
                        {/* Add more options based on your notification types */}
                    </Select>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            width: '50%',
                            padding: '5px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </Col>
            </Row>

            {notifi.map((notification) => (
                <Card
                    key={notification.id}
                    style={{
                        width: '100%',
                        margin: '15px 0',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '20px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
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
                                    borderRadius: '10px',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '100%',
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
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

