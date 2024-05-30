"use client";
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
  Card,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import axios from "axios";
import React, { useState } from "react";

function UserAddForm(props) {
  return (
    <Form form={props.form} size="small" layout="vertical" name="nest-messages">
      <div>
        <Form.Item name="type" label="User Type" required>
          {" "}
          <Select
            defaultValue="patron"
            onChange={(value) => props.setType(value)}
            size="medium"
            options={[
              {
                value: "patron",
                label: "Patron",
              },
              {
                value: "admin",
                label: "Admin",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input size="medium" />
        </Form.Item>
      </div>

      <div>
        <Form.Item
          name="fname"
          label="First Name"
          required
          rules={[{ required: true}]}
        >
          <Input size="medium" />
        </Form.Item>
        <Form.Item
          name="lname"
          label="Last Name"
            required
          rules={[{ required: true}]}
        >
          <Input size="medium" />
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          required
          rules={[{ required: true}]}
        >
          <DatePicker size="medium" onChange={(e, s) => props.setDate(s)} />
        </Form.Item>
        <Form.Item
          name="nicno"
          label="NIC"
          required
          rules={[{ required: true}]}
        >
          <Input size="medium" />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="address"
          label="Address"
          required
          rules={[{ required: true}]}
        >
          <Input size="medium" />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile Number"
          required
          rules={[{ required: true}]}
        >
          <Input size="medium" />
        </Form.Item>
      </div>
    </Form>
  );
}

export default UserAddForm;
