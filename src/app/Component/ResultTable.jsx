'use client'
import { Table } from 'antd'
import React from 'react'

function ResultTable(props) {
  return (
    <div style={{ width: '100%', overflowX: 'scroll' }}>
      <Table
        loading={props.loading}
        pagination={props.pagination}
        columns={props.columnset}

        dataSource={props.dataset}
      />
    </div>
  )

}

export default ResultTable
