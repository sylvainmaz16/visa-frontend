import React from 'react'
import {
  Statistic, Row, Col, Card,
} from 'antd'

import TotalSaleCard from 'components/Dashboard/TotalSaleCard/index'
import CustomersCard from 'components/Dashboard/CustomersCard/index'

import TestChart from './Charts/test'
import TestRing from './Charts/ring'

import './dashboard.less'
import AutomationStatusGauge from '../../../components/Dashboard/AutomationStatusChart'
import FailedApplicationsCard from '../../../components/Dashboard/FailedApplicationsCard'

const AdminPageDashboard = ({
  ...props
}) => {
  const statisticLayout = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 6 },
  }

  return (
    <div className="admin-page-dashboard">
      <Row gutter={[16, 16]} type="flex" align="top">
        <Col {...statisticLayout}>
          <TotalSaleCard total={126560} />
        </Col>
        <Col {...statisticLayout}>
          <CustomersCard total={8846} />
        </Col>
        <Col {...statisticLayout}>
          <FailedApplicationsCard total={3} />
        </Col>
        <Col {...statisticLayout}>
          <AutomationStatusGauge />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <TestChart />
        </Col>
        <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <TestRing />
        </Col>
      </Row>
    </div>
  )
}
export default AdminPageDashboard
