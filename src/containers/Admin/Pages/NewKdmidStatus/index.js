import React from 'react'
import { Result, Button, Spin } from 'antd'
import './index.scss'

export default function KdmidStatus({ loading, data }) {
  console.log(loading, data)

  if (loading) {
    return <Spin tip="Please wait..." className="admin-page-ds160-check-status-modal-spin" />
  }

  if (!data) {
    return (
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Try Again
          </Button>
        }
      />
    )
  }

  if (data.Status === 1) {
    return (
      <Result
        status="success"
        title={data.StatusDescription}
        subTitle={data.FullDescription}
        extra={[
          <Button type="primary" key="console">
            Download File
          </Button>,
          <Button key="buy">Check Again</Button>,
        ]}
      />
    )
  }

  return (
    <Result
      title={data.StatusDescription}
      subTitle={data.FullDescription}
      extra={[
        <Button type="primary" key="console">
          Check Again
        </Button>,
      ]}
    />
  )
}
