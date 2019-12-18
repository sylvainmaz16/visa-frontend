import React from 'react'
import { Statistic, Row, Col, Button, Card } from 'antd'
import TestChart from './Charts/test'
import TestRing from './Charts/ring'

const AdminPageDashboard = ({
  ...props
}) => {
  return (
    <div className="admin-page-dashboard">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Sales" value={`$ 126,560`} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Pending Applications" value={5} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Failed Applications" value={3} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Email Template Required" value={1} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <TestChart />
        </Col>
        <Col span={12}>
          <TestRing />
        </Col>
      </Row>
    </div>
  )
}
export default AdminPageDashboard
