"use client";
import { EditOutlined } from "@ant-design/icons";
import {
  Card,
  DatePicker,
  Form,
  Flex,
  Input,
  Button,
  Collapse,
  Spin,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import Password from "antd/es/input/Password";
import React, { use, useEffect, useState } from "react";
import axioinstance from "../../../Instance/api_instance";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function ChangePassword({spinning,setSpinning}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const router =useRouter();

  const success = (m) => {
    messageApi.open({
      type: "success",
      content: m,
    });
  };

  const error = (m) => {
    messageApi.open({
      type: "error",
      content: m,
    });
  };

  const ChangePassword = () => {
    form
      .validateFields()
      .then(async () => {
        setLoading(true);
        setSpinning(true);
        try {
          const response = await axioinstance.put("User/ResetPassword", {
            oldPassword: "none",
            newPassword: form.getFieldValue("new"),
          });
          success("password changed successfully");
          setConfirmPassword("");
          setNewPassword("");
          form.resetFields();
          Cookies.remove("jwt");
          router.push("/LogIN")
        } catch (e) {
          setSpinning(false);
          setLoading(false);
          error("password change failed");
        }

        
      })
      .catch((e) => {});
  };

  useEffect(() => {
    setSpinning(false);
  }, []);

  return (
    <div>
      {contextHolder}

      <>
          <Flex justify="center">
            <Form
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              form={form}
              size="small"
              name="nest-messages"
            >
              <Form.Item
                name="new"
                label="New Password"
                rules={[{ required: true }]}
              >
                <Password
                  size="medium"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="new1"
                label="Confirm Password"
                rules={[
                  { required: true },
                  {
                    validator: (_, value) =>
                      confirmPassword == newPassword
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "Passwords are not matched"
                            )
                          ),
                  },
                ]}
              >
                <Password
                  size="medium"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      <br></br><br></br><br></br>
      <Button block type="primary" size="medium" htmlType="submit" onClick={ChangePassword} loading={loading}>
        Submit
      </Button>
      
    </Form.Item>
            </Form>
          </Flex>
       
      </>
    </div>
  );
}

export default ChangePassword;
