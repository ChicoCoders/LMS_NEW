"use client";
import { Button, Form, Drawer, message } from "antd";
import React, { useState } from "react";
import IssueForam from "./IssueForam";
import axioinstance from "../../Instance/api_instance";

function IssueModal({ open, close, data }) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState(true);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const successModal = () => {
    messageApi.open({
      type: "success",
      content: "Book issued successfully",
    });
  };

  const errorModal = (e) => {
    messageApi.open({
      type: "error",
      content: e,
    });
  };

  async function fetchData() {
    // Function to fetch data from server
    try {
      // Sending POST request to fetch data based on search parameters
      const response = await axioinstance.post("Reservation/Issuebook", {
        isbn: String(form.getFieldValue("resourceId")),
        borrowerID: String(form.getFieldValue("borrowerId")),
        issuedID: String(form.getFieldValue("issuerId")),
        dueDate: date,
        email: email,
        requestId: 0,
      });
      const data = response.data; // Extracting data from response
      setTimeout(() => {
        setLoading(false);
        // fetchData(form);
        successModal();
        close();
        form.resetFields();
      }, 3000);
    } catch (error) {
      setLoading(false);
      errorModal(String(error.response.data).split("\n")[0]);
    }
  }

  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        setLoading(true);
        fetchData();
      })
      .catch(() => {
        console.log("Validate Failed:");
      });
  };

  const handleCancel = () => {
    close();
    form.resetFields();
  };

  return (
    <div>
      <Drawer
        mask={true}
        maskClosable={false}
        style={{ maxWidth: "95%" }}
        width="350px"
        open={open}
        title="Issue Book"
        onOk={handleOk}
        onClose={handleCancel}
        footer={[
          <Button
            block
            size="medium"
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
            style={{backgroundColor:"red"}}
          >
            Issue
          </Button>,
        ]}
      >
        {contextHolder}
        <IssueForam
          setDate={setDate}
          form={form}
          data={data}
          setEmail={setEmail}
          email={email}
        />
      </Drawer>
    </div>
  );
}

export default IssueModal;
