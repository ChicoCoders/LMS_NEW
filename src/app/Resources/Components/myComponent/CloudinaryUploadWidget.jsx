import { createContext, useEffect, useState } from "react";
import {Button} from 'antd';
import UploadImage from "./UploadImage";


const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId,setImageUrl }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

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

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
            const imageUrl=result.info.url;
            console.log(imageUrl);
            setImageUrl(imageUrl);
           
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

  return (
    
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Button
        id="upload_widget"
        onClick={initializeCloudinaryWidget}
        size="medium"
        style={{marginTop:'10px',width:'220px'}}
        type='primary'
      >
        Upload Resource Image
      </Button>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
