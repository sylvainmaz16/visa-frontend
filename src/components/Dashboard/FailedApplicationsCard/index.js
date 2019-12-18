import React from 'react'
import {
  Statistic, Card, Icon, Tooltip,
} from 'antd'

import MiniChart from './mini-chart'

const FailedApplicationsCard = ({
  total,
}) => (
    <Card>
      <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-chartCard">
        <Statistic title="Submitted Applications" value={total} valueStyle={{ fontSize: '28px' }} />
        <span className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-action">
          <Tooltip title="View Details">
            <Icon type="info-circle" />
          </Tooltip>
        </span>
        <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-content" style={{ height: '46px' }}>
          <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-contentFixed" style={{ height: '100%' }}>
            <MiniChart />
          </div>
        </div>
        <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-footer">
          <div className="antd-pro-pages-dashboard-analysis-components-charts-field-index-field">
            <span className="antd-pro-pages-dashboard-analysis-components-charts-field-index-label">
              <span>Last 24 hours: </span>
            </span>
            <span className="antd-pro-pages-dashboard-analysis-components-charts-field-index-number">13</span>
          </div>
        </div>
      </div>
    </Card>
  )

export default FailedApplicationsCard
