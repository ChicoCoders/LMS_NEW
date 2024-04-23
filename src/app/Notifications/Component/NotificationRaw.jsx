import React, { useEffect, useState } from 'react';
import {Col, Row, Button, Popconfirm} from 'antd';
function NotificationRaw({id,to,date,type,description,removeNotification}) {
    const handleRemove = (id) => {
        removeNotification(id);
    }
return(

    // <div>
    //     {props.id}
    //     {props.to}
    //     {props.date}
    //     {props.type}
    //     {props.description}
    // </div>
    <div
        style={{
            backgroundColor: '#f5f5f5',
            width: '100%',
            height: '200px',
            marginBottom: '20px',
            borderRadius: '20px',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2)',
        }}>






    <div
        style={{
            padding: '20px',
            marginLeft: '25px',
        }}>
        <Row >
            <Col span={8}><strong>{id}</strong>{to}</Col>
            <Col span={8} offset={19}>
                {date}
            </Col>
        </Row>

        <Row style={{ marginBottom: '10px' }}>
            <Col span={8} style={{ fontWeight: 'bold', marginLeft: '35px' }}>{type}</Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
            <Col span={19} style={{ marginLeft: '35px' }}> {description}</Col>
            <Col span={8} offset={21}>
                {/*<Button type="primary" onClick={() => handleRemove(id)}*/}
                {/*        style={{*/}
                {/*            backgroundColor:"red",*/}
                {/*            borderRadius: '10px',*/}
                {/*            boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2)',*/}
                {/*                }}>Remove</Button>*/}
                <Popconfirm
                    title="Remove the Notification"
                    description="Are you sure to remove this notification?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => handleRemove(id)}
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
);
}

export default NotificationRaw;


