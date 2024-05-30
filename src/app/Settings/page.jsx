import { Card, DatePicker, Divider, Form, Input } from 'antd'
import React from 'react'
import EditProfile from './Components/EditProfile'
import ChangePassword from './Components/ChangePassword'
import ChangeEmail from './Components/ChangeEmail'

function page() {
  return (
    <div>
      <Divider orientation='left'>Profile Settings</Divider>
        <EditProfile/>
        <br></br>
        <ChangePassword/>
        <br></br>
        <ChangeEmail/>
        <br></br>
        <Divider orientation='left'>App Settings</Divider>
    </div>
  )
}

export default page