import { Button, Modal } from 'antd';
import React from 'react'

function SuccessModal(props) {
    Modal.info({
        title: 'This is a notification message',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
        onOk() {},
      });
    };
    const success = () => {
      Modal.success({
        content: 'some messages...some messages...',
      });
    };
  return (
    
    <div>
        <Button onClick={success}>Info</Button>
    </div>
  )


export default SuccessModal
