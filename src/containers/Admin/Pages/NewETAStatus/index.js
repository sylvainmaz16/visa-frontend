import React from 'react'
import {
 Result, Button, Spin, Descriptions, Badge,
} from 'antd'
import _ from 'lodash'
import './index.scss'

export default function ETAStatus({ loading, data, additionalInfo }) {
  console.log(loading, data, additionalInfo)

  if (loading) {
    return <Spin tip="Please wait..." className="admin-page-canada-check-status-modal-spin" />
  }

  if (!data || !data.finalDecisionReason) {
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

  const extraRender = (
    <Descriptions title={_.get(data, 'applicationStatus')} bordered key="description">
      <Descriptions.Item label="eTA Number">{_.get(data, 'etaNumber')}</Descriptions.Item>
      <Descriptions.Item label="Expiry date">{_.get(data, 'expirationDateString')}</Descriptions.Item>
      <Descriptions.Item label="Application Number">{_.get(additionalInfo, 'applicationNumber')}</Descriptions.Item>
      <Descriptions.Item label="Email Subject" span={3}>
        {_.get(additionalInfo, 'subject') || ''}
      </Descriptions.Item>
      <Descriptions.Item label="Email Body">
        <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: _.get(additionalInfo, 'textAsHtml') || '' }} />
      </Descriptions.Item>
    </Descriptions>
  )

  if (data.finalDecisionReason === 'Not Started') {
    return (
      <Result
        status="warning"
        title="Pending"
        extra={[
          extraRender,
        ]}
      />
    )
  }

  if (data.finalDecisionReason === 'Approved') {
    return (
      <Result
        status="success"
        title={data.finalDecisionReason}
        extra={[
          extraRender,
        ]}
      />
    )
  }

  return (
    <Result
      status="error"
      title={data.finalDecisionReason}
      extra={[
        extraRender,
      ]}
    />
  )
}
