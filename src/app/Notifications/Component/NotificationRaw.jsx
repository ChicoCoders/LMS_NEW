import React, { useEffect, useState } from 'react';
import { Col, Row,Button } from 'antd';
function NotificationRaw(props) {
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
            <Col span={8}><strong>{props.id}</strong>{props.to}</Col>
            <Col span={8} offset={19}>
                {props.date}
            </Col>
        </Row>

        <Row style={{ marginBottom: '10px' }}>
            <Col span={8} style={{ fontWeight: 'bold', marginLeft: '35px' }}>{props.type}</Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
            <Col span={19} style={{ marginLeft: '35px' }}> {props.description}</Col>
            <Col span={8} offset={21}>
                <Button type="primary"
                        style={{
                            backgroundColor:"red",
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2)',
                                }}>Remove</Button>
            </Col>
        </Row>

    </div>
    </div>
);
}

export default NotificationRaw;


