'use client'
import React, { Children, useEffect, useState } from "react";
import {
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import TextArea from "antd/es/input/TextArea";
import { Button, message, notification } from "antd";
import { duration } from "moment";
import { UserContext } from "../../Context/Context";

const Chat = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [connection, setConnection] = useState(null);
    const [api, contextHolder] = notification.useNotification();
    const user = React.useContext(UserContext).user;
    
  const openNotificationWithIcon = (title,type,msg) => {
    api[type]({
      message: title,
      description:
        msg,
        duration:0
    });
  };
    
    
    useEffect(() => {
      const connect = new HubConnectionBuilder()
        .withUrl("http://localhost:5164/Hubs/MyHub")
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      setConnection(connect);
      connect
        .start()
        .then(() => {
          
          connect.on("ReceiveMessage", (sender,title, content, sentTime) => {
            setMessages((prev) => [...prev, { sender,title, content, sentTime }]);
          });
          connection.invoke("JoinRoom","all");
          connection.invoke("JoinRoom",user.userName);
          connection.invoke("JoinRoom",user.userType);
          connect.invoke("RetrieveMessageHistory");
        })
        .catch((err) =>
          console.error("Error while connecting to SignalR Hub:", err)
        );
  
      return () => {
        if (connection) {
          connection.off("ReceiveMessage");
        }
      };
    }, [user]);

    const sendMessage = async () => {
      if (connection && newMessage.trim()) {
        await connection.send("PostMessage", newMessage);
        setNewMessage("");
      }
    };

    const isMyMessage = (username) => {
      return connection && username === connection.connectionId;
    };

    useEffect(()=>{
      
      if(messages.length>0){
          const msg=messages[messages.length - 1];

          console.log(msg);
          console.log(connection.connectionId);
          
          openNotificationWithIcon(msg.title,'success',msg.content);
        
      }
      
    },[messages])

    return (
    //     <div className="p-4">
    //   <div className="mb-4">
    //     {messages.map((msg, index) => (
    //       <div
    //         key={index}
    //         className={`p-2 my-2 rounded ${
    //           isMyMessage(msg.sender) ? "bg-blue-200" : "bg-gray-200"
    //         }`}
    //       >
    //         <p>{msg.content}</p>
    //         <p className="text-xs">{new Date(msg.sentTime).toLocaleString()}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="d-flex justify-row">
    //     <TextArea
    //       rows={4}
    //       className="border p-2 mr-2 rounded w-[300px]"
    //       value={newMessage}
    //       onChange={(e) => setNewMessage(e.target.value)}
    //     />
    //     <Button
    //       type="primary"
    //       onClick={sendMessage}
    //       className="bg-blue-500 text-white p-2 rounded"
    //     >
    //       Send
    //     </Button>
    //   </div>
    // </div>
      // Your JSX content here
      <div>
        {contextHolder}
      {children}
      </div>
    );
};

export default Chat;
