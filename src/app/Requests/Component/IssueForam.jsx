"use client";
import {
  Card,
  ConfigProvider,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import Column from "antd/es/table/Column";
import moment from "moment";
import React, { use, useState } from "react";
import { UserContext } from "../../Context/Context";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function 
ReturnForam(props) {
  const user=React.useContext(UserContext).user;

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 18,
            /* here is your component tokens */
          },
        },
      }}
    >
      <Form
        form={props.form}
        size="small"
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="resourceId"
          label="Resource/ISBN"
          initialValue={props.data.isbn}
        >
          <Input size="medium" disabled  />
        </Form.Item>
        
        <Form.Item
          name="borrowerId"
          label="Borrowed By"
          rules={[{ required: true }]}
          initialValue={props.data.borrowerID}
        >
          <Input size="medium" disabled/>
        </Form.Item>
        <Form.Item
          name="issuerId"
          label="Issued By"
          rules={[{ required: true }]}
          initialValue={user.userName}
        >
          <Input size="medium" disabled/>
        </Form.Item>
       
        <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
          <DatePicker
            size="medium"
            disabledDate={(current) => current.isBefore(moment())}
            onChange={(e, s) => props.date(s)}
          />
        </Form.Item>

        <br></br>
        <br></br>
        <Form.Item name="email">
          <Checkbox
            checked={props.email}
            onChange={(e) => props.setEmail(!props.email)}
          >
            {" "}
            Send email notification to user
          </Checkbox>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default ReturnForam;
