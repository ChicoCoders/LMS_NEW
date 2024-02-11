import React, { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { Button, Col, Modal, Row, Slider, Upload } from "antd";

export default function ProfilePicUploadPopup(props) {
  const [loading, setLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const editedImageRef = useRef(null);
  const [tempImage, setTempImage] = useState(null);

  const showSuccessModal = () => {
    Modal.success({
      title: 'Success',
      content: 'Successfully Return the Resource',
    });
  };

  const handleOk = () => {
    props.close();
  };
  const handleCancel = () => {
    props.close();
  }
  const handleScaleChange = (event, newValue) => {
    setScale(newValue);
  };

  const handleChanege = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTempImage(reader.result);
      console.log(reader.result);
    };
  
    
  };
  return (
    <Modal
      style={{ maxWidth: '95%' }}
      width='auto'
      open={props.open1}
      centered
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Row gutter={[10]}>
          <Col xs={12}>
            <Button block size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
              Return
            </Button>
          </Col>
          <Col xs={12}>
            <Button block size='small' shape='round' key="back" onClick={handleCancel}>
              Cancel
            </Button>
          </Col>
        </Row>

      ]}

    >
      <Upload
        onChange={handleChanege}
        showUploadList={false}
        beforeUpload={() => false} // Prevent default upload action
      >
        <Button >Select Image</Button>
      </Upload>
      <AvatarEditor
        ref={editedImageRef}
        image={tempImage}
        width={180}
        height={180}
        border={50}
        color={[255, 0, 0, 0.6]} // RGBA
        scale={scale}
        rotate={0}
      />
      <Slider
        aria-label="Volume"
        min={1}
        max={10}
        step={0.1}
        value={scale}
        onChange={handleScaleChange}
      />
    </Modal>
  );
}
