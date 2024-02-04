'use client'
import { DatePicker, Form, Image, Input } from 'antd'
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

function IssueForam(props) {
    return (
        <div style={{
            maxHeight: "350px",
            padding: '0 10px 0 0',
            overflowY: 'auto',

        }} >
            <Form form={props.form1}

                size='small'
                layout='vertical'
                name="nest-messages"
                // onFinish={onFinish}

                validateMessages={validateMessages}
            >
                <center><Image
                    src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
                    alt="Picture of the author"
                    width={100}
                    height={150}
                /></center>
                <Form.Item
                    name='reservationId'
                    label="Reservation Id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={"resourceId"}
                    label="Resource / ISBN"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name={"borrowerId"}
                    label="Borrowed by"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"issuerId"}
                    label="Issued by"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"dueDate"}
                    label="Due Date"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <DatePicker />
                </Form.Item>




            </Form>
        </div>
    )
}

export default IssueForam
