import React, { useState } from 'react';
import { Checkbox, DatePicker, Radio, Select } from 'antd';
import { Button, Col, Flex, Input, Row, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Search from 'antd/es/input/Search';


// Extend dayjs with customParseFormat plugin
dayjs.extend(customParseFormat);

// Destructure RangePicker from DatePicker
const { RangePicker } = DatePicker;

// Define the SearchReservations component
function SearchUsers({ func1, func2, func3, search }) {
    // State for placement
    const [placement, setPlacement] = useState("*");

    // Handler for placement change
    const handlePlacementChange = (e) => {
        setPlacement(e.target.value);
        func1(e.target.value);
    };
    
    // Handler for type change
    const handleTypeChange = (v) => {
        func2(v);
    }
  
    // Handler for search
    const handleSearch = (value, _e, info) => {
        search();
    }

    // Handler for keyword change
    const handleKeywordChange = (e) => {
        func3(e.target.value);
    }
  
    
    return (
        <div>
            <Row style={{ margin: "0 0 20px 0" }} gutter={[10, 10]}>
                <Col xs={24} sm={14}>
                    <Flex wrap='wrap' align='center'>
                        <Radio.Group value={placement} onChange={handlePlacementChange} style={{ margin: ' 0 15px 0 0' }}>
                            <Radio.Button value="*">All</Radio.Button>
                            <Radio.Button value="Admin">Admin</Radio.Button>
                            <Radio.Button value="Patron">Patron</Radio.Button>
                            
                        </Radio.Group>
                       
                    </Flex>
                </Col>
                <Col xs={24} sm={10}>
                <Flex justify='right'>
                    <Space.Compact>
                       
                        <Select
                            defaultValue="all"
                            style={{ width: 100 }}
                            onChange={handleTypeChange}
                            options={[
                                { value: 'all', label: 'All' },
                                { value: 'username', label: 'User Name' },
                                { value: 'name', label: 'Name' },
                                { value: 'email', label: 'Email' },
                                { value: 'address', label: 'Address' },
                            ]}
                        />
                        <Search
                            placeholder="input search text"
                            allowClear
                            onSearch={handleSearch}
                            onChange={handleKeywordChange}
                        />
                    </Space.Compact>
                    </Flex>
                </Col>
            </Row>
        </div>
    );
}

export default SearchUsers;
