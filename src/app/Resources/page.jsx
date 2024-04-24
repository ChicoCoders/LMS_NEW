'use client'
import React, { useState } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import SearchResult from './Components/SearchResult';
import { Button, FloatButton} from 'antd';
import SearchResources from './Components/SearchResources';
import {PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';


const data =  [{}]

  

function page() {
        return (
        <div>
            <div>
                                   
                   <Link href={'/Resources/AddResources'}><FloatButton  icon={<PlusOutlined/>} tooltip="Add a resource" type='primary'/></Link>
                       <SearchResources/>
                       <br />
                       <SearchResult data={data} />
            </div>
        </div>
    )
}

export default page
