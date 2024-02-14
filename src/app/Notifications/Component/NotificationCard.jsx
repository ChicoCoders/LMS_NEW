import React from 'react';
import { Card, Row, Col } from 'antd';

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


function NotificationCard() {
    return (
        <div>
            {notifications.map((notification) => (
                <Card
                    key={notification.id}
                    style={{
                        width: '100%',
                        margin: '10px 0',
                        backgroundColor: '#f0f0f0'
                    }}
                >
                    <Row gutter={16}>
                        <Col span={1}>
                            <strong>{notification.id}</strong>
                        </Col>
                        <Col span={20}>
                            <div>
                                <p>To: {notification.to}</p>
                                <p>Date: {notification.date}</p>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <p><strong>{notification.type}</strong></p>
                                <p>{notification.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Card>
            ))}
        </div>
    );
}

export default NotificationCard;
