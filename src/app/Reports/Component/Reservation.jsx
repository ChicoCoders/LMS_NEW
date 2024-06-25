import React,{useState} from 'react';
import { DatePicker, Space ,Button,Empty, Flex,Row,Col} from 'antd';
import axioinstance from '../../Instance/api_instance';
import Reportres from './Reservationreport';
import BarChart from './barchart';
import axios from 'axios';

const { RangePicker } = DatePicker;

function page(){
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [showUsegen, setShowUsegen] = useState(false);
  const [data, setData] = useState(null);
  const[chart1,setChart1]=useState([]);
  

  
  const genarate=async()=>{
    try{
      const response1 = await axios.post("http://localhost:5164/api/Report/reservationscount",{
        StartDate1:StartDate,
        EndDate1:EndDate
      });
      setShowUsegen(true); // Set the state to show Usegen component
      setData(response1.data);
      //alert(response1.data);
      const response2 = await axios.post("http://localhost:5164/api/Dashboard/getLastWeekReservations");
      setChart1(response2.data);
      console.log(response2.data)
    }
    catch(err){ 
      console.log(err);
    }
    
  }

  return(
    <div>
      <Flex wrap='wrap'>
        <div>
          <br /><br /><br />
          <RangePicker onChange={(e,s)=>{setStartDate(s[0]);setEndDate(s[1])}}/><br/>
          <Button type="primary" style={{ marginLeft:100 , marginTop:50}} onClick={genarate} >Generate</Button> <br />
        </div>
        <div>
        {showUsegen || <Empty style={{paddingLeft:300 ,paddingBottom:200 }}/>}
        {showUsegen && <Reportres style={{ marginTop: 0 }} data={data} />}
        </div>
        <Row style={{ width: "100%", margin: '30px 0' }} gutter={[5, 5]}>
                        <Col sm={12} ><Skeleton active loading={chart1.length==0}><BarChart data={chart1} /></Skeleton></Col>
                    </Row>


      </Flex>
      
      {/* <button type='primary' onClick={genarate} style={{ marginLeft:100 , marginTop:50}}>Genarate</button> */}
      
      
      
    </div>
  )
  
}


export default page;