"use client";
import {
  Card,
  Checkbox,
  Col,
  ConfigProvider,
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
import React from "react";
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

function ReturnForam(props) {
  const user = React.useContext(UserContext).user;

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 18,
          },
        },
      }}
    >
      <Form
        form={props.form1}
        size="small"
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
      >
      

        <Form.Item
          name="reservationId"
          label="Reservation Id"
          initialValue={props.data1.reservationNo}
        >
          <Input
            size="medium"
            disabled
            placeholder={props.data1.reservationNo}
          />{" "}
        </Form.Item>
        <Form.Item
          name="resourceId"
          label="Resource/ISBN"
          initialValue={props.data1.resource}
        >
          <Input size="medium" disabled placeholder={props.data1.resource} />
        </Form.Item>

        <Form.Item
          name="returnid"
          label="Return by"
          rules={[{ required: true }]}
          initialValue={user.userName}
        >
          <Input size="medium" disabled/>
        </Form.Item>
        <Form.Item
          name="returndate"
          label="Return Date"
          rules={[{ required: true }]}
        >
          <DatePicker
            size="medium "
            disabledDate={(current) => current.isAfter(moment())}
            onChange={(e, s) => props.date(s)}
          />
        </Form.Item>

        <Form.Item name="penalty" label="Penalty">
          <InputNumber size="medium" />
        </Form.Item>

        <Form.Item name="notification">
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
