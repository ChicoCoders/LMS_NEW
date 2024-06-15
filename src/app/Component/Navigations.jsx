"use client";
import React, { use, useEffect, useState } from "react";
import {
  ArrowLeftOutlined,
  UserOutlined,
  LogoutOutlined,
  MessageOutlined,
  ReadOutlined,
  AuditOutlined,
  InteractionOutlined,
  InfoCircleOutlined,
  DashboardOutlined,
  NotificationOutlined,
  MessageTwoTone,
  MessageFilled,
  SettingOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Layout,
  Menu,
  Space,
  theme,
  Avatar,
  Badge,
  Divider,
  Spin,
  Result,
} from "antd";
import Link from "next/link";
import AdressBar from "./AdressBar";
import MenuItem from "antd/es/menu/MenuItem";
import { usePathname, useRouter } from "next/navigation";
import { image1 } from "../../../public/lib1.jpg";
import Image from "next/image";

import axios from "axios";

import Cookies from "js-cookie";
import Profile from "./Profile";
import axioinstance from "../Instance/api_instance";
import { UserContext, EmailContext } from "../Context/Context";
import MyHub from "../Notifications/MyHub/page";
import ErrorPage from "../ErrorPage/page";
import NotificationDrawer from "./NotificationDrawer"
const { Header, Content, Footer, Sider } = Layout;

const sideitems = [
  {
    key: "Dashboard",
    icon: React.createElement(DashboardOutlined),
    label: <Link href="/Dashboard">Dashboard</Link>,
  },
  {
    key: "Resources",
    icon: React.createElement(ReadOutlined),
    label: <Link href="/Resources">Resources</Link>,
  },
  {
    key: "Users",

    icon: React.createElement(UserOutlined),
    label: <Link href="/Users">Users</Link>,
  },
  {
    key: "Requests",
    icon: React.createElement(AuditOutlined),
    label: <Link href="/Requests">Requests</Link>,
  },
  {
    key: "Notifications",
    icon: React.createElement(MessageOutlined),
    label: <Link href="/Notifications">Notifications</Link>,
  },
  {
    key: "Reservations",
    icon: React.createElement(InteractionOutlined),
    label: <Link href="/Reservations">Reservations</Link>,
  },
  {
    key: "Reports",
    icon: React.createElement(InfoCircleOutlined),
    label: <Link href="/Reports">Reports</Link>,
  },
  {
    key: "Settings",
    icon: React.createElement(SettingOutlined),
    label: <Link href="/Settings">Settings</Link>,
  },
];

const sideitems2 = [
  {
    key: "Dashboard",
    icon: React.createElement(DashboardOutlined),
    label: <Link href="/Dashboard">Dashboard</Link>,
  },
  {
    key: "Resources",
    icon: React.createElement(ReadOutlined),
    label: <Link href="/Resources">Resources</Link>,
  },

  {
    key: "Requests",
    icon: React.createElement(AuditOutlined),
    label: <Link href="/Requests">Requests</Link>,
  },

  {
    key: "Reservations",
    icon: React.createElement(InteractionOutlined),
    label: <Link href="/Reservations">Reservations</Link>,
  },

  {
    key: "Settings",
    icon: React.createElement(SettingOutlined),
    label: <Link href="/Settings">Settings</Link>,
  },
];

function Navigations(props) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const[Notifications,setNotification]=useState([]);
  const[open,setOpen]=useState(false);

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5164/api/Auth/Logout",
        { withCredentials: true }
      );
      Cookies.remove("jwt");
      //  const response=axios.post();
      console.log(response);
      router.push("/LogIN");
    } catch (error) {
      console.log(error);
    }
  };

  const GetUser = async () => {
    try {
      const response = await axioinstance.get("User/GetMyData");
      const response1 = await axioinstance.get("User/GetEmail");
      setUser(response.data);
      console.log(response.data);
      setEmail(response1.data);
    } catch (error) {
    }
    setLoading(false)
  };

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  const location = usePathname();

  // Extracting the root path
  const rootPath = location.split("/")[1];

  const items = [
    {
      key: "1",

      label: (
        
          <Avatar onClick={()=>setOpen(true)} icon={<MessageOutlined />} />
        
      ),
    },
    {
      key: "2",

      label: <Avatar icon={<UserOutlined />} />,
      children: [
        {
          label: (
            <a href="https://www.antgroup.com">
              <center>
                <Avatar icon={<UserOutlined />} />{" "}
              </center>
            </a>
          ),
          key: "3",
        },
        {
          label: <center>{user.fName + " " + user.lName}</center>,
          key: "4",
        },
        {
          type: "divider",
        },
        {
          icon: React.createElement(EditOutlined),
          label: <a href="https://www.aliyun.com">Edit Profile</a>,
          key: "4",
        },
        {
          icon: React.createElement(SettingOutlined),
          label: <a href="https://www.aliyun.com">Settings </a>,
          key: "5",
        },
        // {
        //   icon: React.createElement(QuestionCircleOutlined),
        //   label: <a href="https://www.aliyun.com">Help & Support </a>,
        //   key: "6",
        // },
        {
          icon: React.createElement(InfoCircleOutlined),
          label: <a href="https://www.aliyun.com">About</a>,
          key: "7",
        },
        {
          type: "divider",
        },
        {
          icon: React.createElement(LogoutOutlined),
          label: <div onClick={logout}>Log out</div>,
          key: "8",
        },
      ],
    },
  ];

  useEffect(() => {
    GetUser();
  }, []);

  return rootPath != "LogIN" && rootPath != "ErrorPage" ? (
    <UserContext.Provider value={{ user, GetUser }}>
      <EmailContext.Provider value={{ email, setEmail }}>
        {loading ? (
          <Spin spinning={loading} fullscreen />
        ) : user.userName == undefined ? (
          <ErrorPage />
        ) : (
          <Layout style={{ minHeight: "100vh" }}>

            <NotificationDrawer open={open} setOpen={setOpen}/>
            
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              style={{ height: "auto" }}
            >
              <div style={{ position: "sticky", top: 0 }}>
                <div
                  style={{
                    color: "white",
                    width: "100%",
                    textAlign: "center",
                    padding: "20px 10px",
                  }}
                >
                  {!collapsed ? (
                    <Image src="/translib.png" width={140} height={35} />
                  ) : (
                    <Image src="/translogo.png" width={40} height={35} />
                  )}
                </div>
                <ConfigProvider
                  theme={{
                    components: {
                      Menu: {
                        iconSize: 20,
                        iconMarginInlineEnd: 20,
                        darkItemHoverBg: "rgba(0, 0, 0, 0.3)",
                        collapsedIconSize: 20,
                        darkItemSelectedBg: "#2b4368",
                      },
                    },
                  }}
                >
                  <Menu
                    theme="dark"
                    mode="inline"
                    items={user.userType == "admin" ? sideitems : sideitems2}
                    defaultSelectedKeys={rootPath}
                  />
                </ConfigProvider>
              </div>
            </Sider>
            <Layout>
              <Header
                style={{
                  zIndex: 2,
                  position: "sticky",
                  top: 0,
                  padding: 0,
                  background: "rgb(255,255,255)",
                }}
              >
                <ConfigProvider
                  theme={{
                    components: {
                      Menu: {
                        iconMarginInlineEnd: 25,
                      },
                    },
                  }}
                >
                  <Menu
                    triggerSubMenuAction="click"
                    style={{
                      position: "sticky",
                      top: 0,
                      justifyContent: "end",
                    }}
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["."]}
                    items={items}
                  />
                </ConfigProvider>
              </Header>
              <Content style={{ margin: "24px 5%" }}>
                <Card>
                  <Flex al justify="space-between" align="center" wrap="">
                    <Flex
                      style={{ fontSize: "25px", fontWeight: "600" }}
                      align="center"
                    >
                      {" "}
                      <Button
                        onClick={() => router.back()}
                        style={{ margin: "0 20px 0 0" }}
                        shape="circle"
                        icon={<ArrowLeftOutlined />}
                      />
                      {rootPath}
                    </Flex>
                    <div>
                      <AdressBar item={props.pageroot} />
                    </div>
                  </Flex>
                  <Divider />
                  <Flex a vertical style={{ margin: "10px 0 0 0 " }}>


                    <MyHub>
                      {props.children}
                    </MyHub>



                  </Flex>
                </Card>
              </Content>

              <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        )}
      </EmailContext.Provider>
    </UserContext.Provider>
  ) : (
    <UserContext.Provider value={{ user, GetUser }}>
      <EmailContext.Provider value={{ email, setEmail }}>
        {props.children}
      </EmailContext.Provider>
    </UserContext.Provider>
  );
}

export default Navigations;
