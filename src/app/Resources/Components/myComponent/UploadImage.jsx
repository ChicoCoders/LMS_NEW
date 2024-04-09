import React, { useState } from 'react';
import { LoadingOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Image from 'next/image';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');
  const [cloudName] = useState("dxkaiqscs");
  const [uploadPreset] = useState("myCloud");
  const [publicId, setPublicId] = useState("");


  const handleChange = async (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      try {
        const file = info.file.originFileObj;
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'myCloud'); // Replace 'mystore' with your Cloudinary upload preset
        data.append('cloud_name', 'dxkaiqscs'); // Replace 'dxkaiqscs' with your Cloudinary cloud name
        
        const response = await fetch('https://api.cloudinary.com/v1_1/dxkaiqscs/image/upload', {
          method: 'POST',
          body: data,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const cloudData = await response.json();
        setImageUrl(cloudData.secure_url);
        setLoading(false);
        console.log(setImageUrl);
        message.success('Image uploaded successfully!');
      } catch (error) {
        setLoading(false);
        message.error('Failed to upload image');
      }
    }};

  // const handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };
  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    cropping: true, //add a cropping step
    cropWidth: 200, //crop the image to the given width
    cropHeight: 200, //crop the image to the given height
    showAdvancedOptions: true, //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    folder: "Resources", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
    // maxImageHeight:100, //Scales the image down to a height of 2000 pixels before uploading
    // minImageHeight:100, //Scales the image up to a height of 100 pixels before uploading
    // cropImage: true, //crop the image to the given width and height
    // widthOfCrop: "200px", //crop the image to the given width
    // heightOfCrop: "200px", //crop the image to the given height
    resize: fill(200, 200), //resize the image to the given width and height
    w_200: fill(200), //resize the image to the given width
    h_100: fill(100), //resize the image to the given height
    c_fit: "fit", //applies the fit crop mode
    cropingAspectRatio: 1, //crop the image to the given aspect ratio
    croppingCoordinatesMode: "custom", //crop the image to the given aspect ratio
    croppingShowDimensions: true, //crop the image to the given aspect ratio
    croppingDefaultSelectionRatio: 1, //crop the image to the given aspect ratio
    croppingValidateDimensions: true, //crop the image to the given aspect ratio
  });
  
  const uploadButton = (
    <button
      style={{
        border: '2px solid #d9d9d9',
        justifyContent:'center',
        

        }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <CloudUploadOutlined style={{fontSize:'90px',paddingTop:'79px'}}/>}
      <div
        style={{
          width: '224px',
          height: '120px',
          alignContent:'center',
          fontSize:'20px'
        }}
      >
        <h5>Upload Image</h5> 
      </div>
    </button>
  );
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const imgObject = cld.image(publicId);

  return (
    <>
     <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId}/>
     <AdvancedImage
          style={{ maxWidth: "100px" }}
          cldImg={imgObject}
          plugins={[responsive(), placeholder()]}
        />
      <Upload         
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt="avatar"
  
          />
        ) : (
          uploadButton
        )}
      </Upload>

    </>
  );
};
export default UploadImage;