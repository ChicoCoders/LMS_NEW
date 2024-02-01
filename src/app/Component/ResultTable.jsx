'use client'
import { Table } from 'antd'
import React from 'react'

function ResultTable(props) {
      return (
    <div style={{width:'100%',overflowX:'scroll'}}>
<Table                      
                            loading='true'
                            pagination={{ pageSize: 20 }}
                            columns={props.columnset}
                            expandable={{
                                expandedRowRender: (record) => (
                                    <p
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        {record.description}
                                    </p>
                                ),
                                rowExpandable: (record) => record.description!== '',
                            }}
                            dataSource={props.dataset}
                        />
    </div>
  )
  
}

export default ResultTable
