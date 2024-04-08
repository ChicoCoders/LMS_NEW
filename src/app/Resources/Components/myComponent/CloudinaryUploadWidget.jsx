import { createContext, useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { LoadingOutlined, CloudUploadOutlined } from '@ant-design/icons';
// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
  const [loaded, setLoaded] = useState(false);
  const[url,setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);
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

  const   initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
            setUrl(result.info.public_id);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };
 console.log(url);
  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          height: "60px",
        }}
        type="button"
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
        icon={<UploadOutlined />}
      >
        Upload
      </Button>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
//export { CloudinaryScriptContext };