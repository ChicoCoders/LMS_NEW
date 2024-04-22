'use client'
import { Table } from 'antd'
import React from 'react'
import AboutCard from '../Component/AboutCard'

function ResultTable(props) {
  return (
    <div style={{ width: '100%', overflowX: 'scroll' }}>
      <Table
      rowKey={"reservationNo"}
        loading={props.loading}
        pagination={props.pagination}
        columns={props.columnset}
        expandable={{
          expandedRowRender: (record) => (
           
              <AboutCard reservationId={record.reservationNo}/>
             
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={props.dataset}
      />
    </div>
  )

}

export default ResultTable
