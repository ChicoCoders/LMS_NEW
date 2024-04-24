import React, { useEffect, useState } from 'react';
import {Col, Row, Button, Popconfirm} from 'antd';
function NotificationRaw({id,userName,date,subject,description,removeNotification}) {
    const handleRemove = (id) => {//function to remove the notification
        removeNotification(id);
    }
return(
    // Display the notification
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div
            style={{
                backgroundColor: '#ffff',
                width: '80%',
                height: '200px',
                marginBottom: '20px',
                borderRadius: '5px',
                boxShadow: '0 2px 5px 0 rgba(0,0,0,0.2)',
            }}>






        <div //style for notification
            style={{
                padding: '20px',
                marginLeft: '25px',
            }}>
             {/*Display the subject*/}
            <Row  style={{ marginBottom: '10px' }}>
                <Col span={8}><strong>{subject}</strong></Col>

            </Row>

            {/*Display the date*/}
            <Row  style={{ marginBottom: '10px' }}>
                <Col span={8} >To:{userName}</Col>
                <Col span={3} offset={13}>
                    {date}
                </Col>
            </Row>

             {/*Display the description*/}
            <Row  style={{ marginBottom: '20px' }}>
                <Col span={8} >{description}</Col>

            </Row>

            <Row  style={{ marginBottom: '10px' }}>
                <Col span={8} offset={21}>

                    <Popconfirm
                        title="Remove the Notification"
                        description="Are you sure to remove this notification?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleRemove(id)}//call handleRemove function to remove the notification
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

                </Col>
            </Row>

        </div>
        </div>
    </div>
);
}

export default NotificationRaw;


