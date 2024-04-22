'use client'
import { Button, DatePicker, Input } from 'antd';  // Import DatePicker from antd
import React, { useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
const dateFormat = 'YYYY/MM/DD';

const AAA = (props) => {

  const [save, setDetails] = useState(false);

  const [para ,changePara]=useState('2015/01/01');

  const [editable, changeEdit] = useState(false);

  const [text,changeText]=useState('2015/01/01')

  const cancelButton=()=>{
    changeEdit(false);
  }

  const editContent = (e) => {

    changeEdit(true);
  }

  const saveDetails  =(e)=> {
    console.log(e.target.value)
    changeText(e);
    setDetails(true)
  }


  const saveMe=(e)=>{
    changePara( text);
    changeEdit(false);  
    setDetails(false);
  }

  return (
    <div>

      <div>
        {
          editable ?<><DatePicker defaultValue={dayjs(text, dateFormat)}  format={dateFormat}    onChange={saveDetails} /><Button onClick={cancelButton}>Cancel</Button></>
            
            :
           <>
           
           <span>{para}</span>
           <Button onClick={editContent}>
              Edit
            </Button>
            </>
        }
        {save?
              <><Button onClick={saveMe}>Save</Button></>:null}
              
      </div>

    </div>
  );
};

export default AAA;
