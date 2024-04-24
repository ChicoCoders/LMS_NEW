'use client'
import { Button, Col, Descriptions, Flex, Image, Row,Tooltip,ConfigProvider} from 'antd'
import { Collapse } from 'antd';
const { Panel } = Collapse;
import Card from 'antd/es/card/Card'
import Link from 'next/link';
import React, { useState,useEffect} from 'react'
import EditModall from './EditModel'
import { EditOutlined,DeleteOutlined ,LeftCircleOutlined} from '@ant-design/icons';
import axioinstance from '../../../Instance/api_instance';



function AboutCard(props) {
  const [open, setOpen] = useState(false);
  const [items,setItem]=useState([]);
  const [error,seterror]=useState(false);
  const [loading,setLoading]=useState(true);
  const[status,setStatus]=useState("")
  const [responseData,setresponseData]=useState([]);

  const showModal = () => {
  
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const fetchData=async()=>{
    setLoading(true);
    try{
      const response = await axioinstance.get(`Resource/AbouteResource?isbn=${props.isbn}`);
      const responseData = response.data;
      console.log(responseData.isbn );
      setStatus(response.data.status);
      const items = [
        { key: '1', label: 'Resource ID (ISBN)', children: responseData.isbn,},
        { key: '2', label: 'Title', children: responseData.title,},
        { key: '3', label: 'Author', children: responseData.author,},
        { key: '4', label: 'Year', children:'2000',},
        { key: '5', label: 'Type', children: responseData.type},
        { key: '6', label: 'Price', children: responseData.price},
        { key: '7', label: 'No. Pages', children: responseData.pages},
        { key: '8', label: 'Added on', children: responseData.addedon},
      ];
      setItem(items);
      setresponseData(responseData);
      setLoading(false); 
    }
    catch(error){
        console.log(error);
        seterror(true);
        setLoading(false);
    }
  }

  useEffect(() => { fetchData(); }, []);

  const ButtonWithTooltip = ({ defaultText, hoverText }) => {
    const [text, setText] = useState(defaultText);
  
    const handleMouseEnter = () => {
      setText(hoverText);
    };
  
    const handleMouseLeave = () => {
      setText(defaultText);
    };
  
    return (
        <Button
          type="primary"
          style={{ background: '#2D363F', margin: '0 10px 10px 0', borderRadius: '15px',width:'80px',fontSize:'12px',}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </Button>
    );
  };

  return (
    <ConfigProvider
     theme={{
     token: {
      colorBorder: 'rgb(255,255,255)',
      colorTextHeading:'rgba(0, 0, 0, 0.48)'
     },
    }}
    >

    <div>
      <Flex justify="space-between" style={{marginBottom:'20px'}}>
        <div>
          <font style={{ fontSize: '18px',fontWeight:'600'}}>Resources Details of Recource {responseData.title}</font>
        </div>
        <div >
        <Tooltip title="Go Back">
          <Link href="/Resources">
             <LeftCircleOutlined style={{ fontSize: '22px',marginTop:'7px',color:'black'}}/>
          </Link> 
        </Tooltip>
        </div>
      </Flex>
       <Row gutter={[30, 30]}>
      <Col md={24} sm={24} xs={24}>
      <Card bordered style={{width:'95 %'}}>
      {error ? (
        <div>Loading has failed....</div>
      ) : (
        <><Row gutter={[30, 30]} >
                  <Col md={8} sm={24} xs={24}>

                    <Image
                      src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
                      alt="Picture of the author"
                      width="75%"
                      style={{ borderRadius: '10%' }} />
                  </Col>
                  <Col md={16} sm={24} xs={24}>
                    <Descriptions title={ <div>

                      <Flex  style={{ margin: '20px 0px 30px 0px',justifyContent:'space-between',fontSize:'10px'}}>

                        <div>
                        <ButtonWithTooltip defaultText="Total" hoverText={responseData.total} />
                        <ButtonWithTooltip defaultText="Borrowed" hoverText={responseData.borrowed} />
                        <ButtonWithTooltip defaultText="Remain" hoverText={responseData.remain} />
                        <ButtonWithTooltip defaultText="Location" hoverText={responseData.location} />
                     
                        </div>
                        <div style={{ height: '30px' }}>
                          <Button type='primary' danger style={{ margin: " 0 10px 10px 0" }} shape='round' icon={<DeleteOutlined />}></Button>
                          <Button type='primary' style={{ margin: " 0 10px 10px 0" }} shape='round' icon={<EditOutlined />} onClick={showModal}></Button>
                        </div>
                      </Flex>
                    </div>} layout="horizontal" column={{
                      xs: 1,
                      sm: 2,
                      md: 2,
                      lg: 2,
                      xl: 2,
                      xxl: 2,
                    }}

                      items={items} 
                      labelStyle={{ fontWeight: '600' }}/>

                  </Col>

                </Row><br /><br />
                <Collapse>
                    <Panel header={`Description about ${responseData.title}`}  key="1" style={{backgroundColor: '#f5f5f5',fontWeight: '600'}}>
                      <p>{responseData.description}</p>
                    </Panel>
                </Collapse></>
                
        )}
      </Card> 
      </Col>
      </Row> 
     <EditModall  fetchData={fetchData} open={open} openFuntion={showModal} close={closeModal} data={responseData}/> 
      </div>
      </ConfigProvider>
  )
}

export default AboutCard
