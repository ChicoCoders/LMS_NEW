import React, { useState } from "react";
import { LoadingOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import ResourcesAddForm from "../ResourcesAddForm";

const UploadImage = ({setImageURL}) => {

  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState("dxkaiqscs");
  const [uploadPreset] = useState("myCloud");

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    cropping: true,
    c_fit: "fit",
    cropingAspectRatio: 240/310,
    croppingCoordinatesMode: "custom",
    croppingShowDimensions: true,
    croppingDefaultSelectionRatio:240/310,
  });


  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);
  console.log(imageUrl);
  setImageURL(imageUrl);
  return (
    <div className="App">
      <div
        style={{ width: "220px", height: "290px", border: "1px dotted black" }}
      >
        <AdvancedImage
          style={{ maxWidth: "100%" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setImageUrl={setImageUrl}/>
      
    </div>
  );
};
export default UploadImage;
