"use client";
import { ConfigProvider, Checkbox, DatePicker, Form, Input } from "antd";
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

function IssueForam({ form, data, email, setEmail, setDate }) {
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
        form={form}
        size="small"
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="resourceId"
          label="Resource/ISBN"
          initialValue={data.isbn}
        >
          <Input size="medium" disabled />
        </Form.Item>
        <Form.Item
          name="issuerId"
          label="Issued By"
          rules={[{ required: true }]}
          initialValue={user.userName}
        >
          <Input size="medium" disabled />
        </Form.Item>
        <Form.Item
          name="borrowerId"
          label="Borrowed By"
          rules={[{ required: true }]}
        >
          <Input size="medium" />
        </Form.Item>

        <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
          <DatePicker
            size="medium"
            disabledDate={(current) => current.isBefore(moment())}
            onChange={(e, s) => setDate(s)}
          />
        </Form.Item>

        <br></br>
        <br></br>
        <Form.Item name="email">
          <Checkbox checked={email} onChange={(e) => setEmail(!email)}>
            {" "}
            Send email notification to user
          </Checkbox>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default IssueForam;
