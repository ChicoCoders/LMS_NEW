'use client'
import { Card, Checkbox, Col, ConfigProvider, DatePicker, Form, Image, Input, InputNumber, Row, Select } from 'antd'
import Column from 'antd/es/table/Column';
import moment from 'moment';
import React from 'react'



const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function ReturnForam(props) {
    const myfunc = () => {
        props.setNotification(!props.notification);
    }

    return (

     



<ConfigProvider
  theme={{
    components: {
      Form: {
        itemMarginBottom:18
        /* here is your component tokens */
      },
    },
  }}
>
 


            <Form form={props.form1} size='small' layout='vertical' name="nest-messages" validateMessages={validateMessages}>
                
                   
                        {/* <Image
                            src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
                            alt="Picture of the author"
                            width="150px"/> */}

                        
                        
                           <Form.Item name='reservationId' label="Reservation Id" initialValue={props.data1.reservationNo}><Input size='medium' disabled placeholder={props.data1.reservationNo} /> </Form.Item>
                            <Form.Item name="resourceId" label="Resource/ISBN" initialValue={props.data1.resource}><Input size='medium' disabled placeholder={props.data1.resource} /></Form.Item>
                        
                            <Form.Item name="returnid" label="Return by" rules={[{ required: true }]}><Input size='medium' /></Form.Item>
                            <Form.Item name="returndate" label="Return Date" rules={[{ required: true }]}>

                               
                                    <DatePicker   size='medium '  disabledDate={(current) => current.isAfter(moment())}  onChange={(e, s) => props.date(s)} />
                               
                            </Form.Item>
                            
                            <Form.Item name='penalty' label="Penalty"><InputNumber size='medium'/></Form.Item>
                    
                      <Form.Item name='notification'><Checkbox checked={props.notification} onChange={(e) => { myfunc() }} > Send notification to user</Checkbox></Form.Item>
        
            </Form>
            
</ConfigProvider>
     
    )
}

export default ReturnForam
