// GoogleImageUpload.js
import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadURL = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequest = ({ onSuccess, onError, file }) => {
    // Here you can implement your logic to send the image URL to Google Search by Image API
    // onSuccess and onError should be called based on the API response
    // For simplicity, we'll just show a success message for demonstration purposes
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <div>
      <Upload
        customRequest={customRequest}
        showUploadList={false}
        beforeUpload={(file) => {
          // Validate the file or URL before uploading
          setImageUrl(file.url);
          return false; // To prevent automatic upload
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Image by URL</Button>
      </Upload>
      {imageUrl && (
        <div>
          <h2>Image URL:</h2>
          <p>{imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default UploadURL;
