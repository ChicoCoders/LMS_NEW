'use client'

import React, { useState } from 'react';
import ResourseReport from "./ResourseReport"
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Empty,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const form1= () => {

  const [dates, setDates] = useState([]);
  const [bookType, setBookType] = useState('');

  const onDateChange = (dates) => {
    setDates(dates);
  };

  const onBookTypeChange = (value) => {
    setBookType(value);
  };

  const [componentDisabled, setComponentDisabled] = useState(false);
  const [DateDisabled, setDateDisabled] = useState(false);
  const [PriceDisabled, setPriceDisabled] = useState(false);
  const [PageDisabled, setPageDisabled] = useState(false);
  const [KeywordDisabled, setKeywordDisabled] = useState(false);
  const [Genarate,setGenarate]=useState(false)

  const [selectedTypes, setSelectedTypes] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedTypes((prev) => 
            event.target.checked ? [...prev, value] : prev.filter((type) => type !== value)
        );
    };

    const onSubmit = async () => {
      if (dates.length === 2 && bookType) {
        const [start, end] = dates;
        try {
          const response = await axios.post('/api/Report/count', {
            startDate: start.format('YYYY-MM-DD'),
            endDate: end.format('YYYY-MM-DD'),
            bookType
          });
          <ResourseReport style={{marginLeft:"2000px"}}/>
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

  return (
    <>
      <Flex wrap='wrap'>

      <RangePicker onChange={onDateChange} />
      {/* <Select 
        style={{ width: 200, marginLeft: 8 }} 
        placeholder="Select a book type" 
        onChange={onBookTypeChange}
      >
        <Option value="Journals">Journals</Option>
        <Option value="Ebooks">Ebooks</Option>
        <Option value="Novels">Novels</Option>
        <Option value="science">Science</Option>
      </Select> */}
      <Button type="primary" onClick={()=>setGenarate(true)} style={{ marginLeft: 8 }}>
        Submit
      </Button>
      { Genarate?<ResourseReport style={{marginLeft:"2000px"}}/>: <Empty style={{padding:150 }}/>} 
      {/* <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
          minWidth:500,
        }}
      >

      <RangePicker onChange={onDateChange} />
      <Select 
        style={{ width: 200, marginLeft: 8 }} 
        placeholder="Select a book type" 
        onChange={onBookTypeChange}
      >
        <Option value="fiction">Fiction</Option>
        <Option value="non-fiction">Non-Fiction</Option>
        <Option value="biography">Biography</Option>
        <Option value="science">Science</Option>
      </Select>
      <Button type="primary" onClick={onSubmit} style={{ marginLeft: 8 }}>
        Submit
      </Button>

        {/* Type
        <input type="checkbox" value="Type1" onChange={handleCheckboxChange} /> Journals<br />
        <input type="checkbox" value="Type2" onChange={handleCheckboxChange} /> EBooks<br />
        <input type="checkbox" value="Type3" onChange={handleCheckboxChange} /> Novels<br />
        <input type="checkbox" value="Type3" onChange={handleCheckboxChange} /> Type 3<br />

        Date
        <RangePicker/>
        {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}>Type</Checkbox> */}
        {/* Type 
        <Form.Item label="  " d valuePropName="checked" colon={false}>
           <Checkbox>Books</Checkbox> <Checkbox style={{paddingLeft:32}} disabled={!componentDisabled}>e-Books</Checkbox><br />
           <Checkbox disabled={!componentDisabled}>Journals</Checkbox> <Checkbox style={{paddingLeft:20}} disabled={!componentDisabled}>Others</Checkbox>
        </Form.Item> */}


        {/* <Checkbox
        checked={DateDisabled}
        onChange={(e) => setDateDisabled(e.target.checked)}>Date</Checkbox>
        <Form.Item label="  "  colon={false}>
          <RangePicker disabled={!DateDisabled} />
        </Form.Item> */}

        {/* <Checkbox
        checked={PriceDisabled}
        onChange={(e) => setPriceDisabled(e.target.checked)}>Price</Checkbox>
        <Form.Item label="  " colon={false}>
          <Input style={{width:80 , marginRight:20}} disabled={!PriceDisabled} /> to <Input style={{width:80 , marginLeft:20}} disabled={!PriceDisabled}/>
        </Form.Item>

        <Checkbox
        checked={PageDisabled}
        onChange={(e) => setPageDisabled(e.target.checked)}>Page</Checkbox>
        <Form.Item label="  " colon={false}>
          <Input style={{width:80 , marginRight:20}} disabled={!PageDisabled} /> to <Input style={{width:80 , marginLeft:20}} disabled={!PageDisabled}/>
        </Form.Item>

        <Checkbox
        checked={KeywordDisabled}
        onChange={(e) =>setKeywordDisabled(e.target.checked)}>Any Keywords</Checkbox>
        <Form.Item label="  " colon={false}>
          <Input  disabled={!KeywordDisabled}/> 
          onClick={()=>setGenarate(true)
        </Form.Item> */}
        {/* <Button type="primary" onClick={submitform} style={{ marginLeft:100 , marginTop:50}}>Generate</Button> 
        
      </Form>
       { Genarate?<ResourseReport style={{marginLeft:"2000px"}}/>: <Empty style={{padding:150 }}/>}   */}

      </Flex>
    </>
  );
};

export default form1;



//Reservation 
// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   ColorPicker,
//   DatePicker,
//   Empty,
//   Flex,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Slider,
//   Switch,
//   TreeSelect,
//   Upload,
// } from 'antd';
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
// const FormDisabledDemo = () => {

//   const [componentDisabled, setComponentDisabled] = useState(false);
//   const [DateDisabled, setDateDisabled] = useState(false);
//   const [AgeDisabled, setAgeDisabled] = useState(false);
//   const [PageDisabled, setPageDisabled] = useState(false);
//   const [KeywordDisabled, setKeywordDisabled] = useState(false);
//   return (
//     <>
//       <Flex wrap='wrap'>
//       <Form
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         style={{
//           maxWidth: 600,
//           minWidth:500,
//         }}
//       >

//        <Checkbox
//         checked={AgeDisabled}
//         onChange={(e) => setAgeDisabled(e.target.checked)}> User ID</Checkbox>
//         <Form.Item label="  " colon={false}>
//           <Input style={{width:80 , marginRight:20}} disabled={!AgeDisabled} /> to <Input style={{width:80 , marginLeft:20}} disabled={!AgeDisabled}/>
//         </Form.Item>

//         <Checkbox
//         checked={DateDisabled}
//         onChange={(e) => setDateDisabled(e.target.checked)}> Date</Checkbox>
//         <Form.Item  label="  " colon={false}>
//           <RangePicker disabled={!DateDisabled} />
//         </Form.Item>


//         <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}>Type </Checkbox>
//         <Form.Item label="   " d valuePropName="checked" colon={false}>
//            <Checkbox disabled={!componentDisabled}>Due</Checkbox> <Checkbox style={{paddingLeft:20}} disabled={!componentDisabled}>Borrowed</Checkbox>
//            <Checkbox style={{paddingLeft:20}} disabled={!componentDisabled}>Reserved</Checkbox><br />
//         </Form.Item>
        
        
//         <br />
//         <Button type="primary" style={{ marginLeft:100 , marginTop:50}}>Generate</Button>
        
//       </Form>
//       <Empty style={{padding:150 }}/>
//       </Flex>
//     </>
//   );
// };
// export default FormDisabledDemo;