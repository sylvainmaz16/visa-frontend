import React from 'react'
import {
  Statistic, Card, Icon, Tooltip,
} from 'antd'

const TotalSaleCard = ({
  total,
}) => (
    <Card>
      <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-chartCard">
        <Statistic title="Total Sales" prefix="$" value={total} valueStyle={{ fontSize: '28px' }} />
        <span className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-action">
          <Tooltip title="View Details">
            <Icon type="info-circle" />
          </Tooltip>
        </span>
        <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-content" style={{ height: '46px' }}>
          <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-contentFixed">
            <div className="antd-pro-pages-dashboard-analysis-components-trend-index-trendItem" style={{ marginRight: '16px' }}>
              <span>
                <span>WoW Change</span>
                <span className="antd-pro-pages-dashboard-analysis-style-trendText">12%</span>
              </span>
              <span className="antd-pro-pages-dashboard-analysis-components-trend-index-up">
                <Icon type="caret-up" />
              </span>
            </div>
            <div className="antd-pro-pages-dashboard-analysis-components-trend-index-trendItem">
              <span>
                <span>DoD Change</span>
                <span className="antd-pro-pages-dashboard-analysis-style-trendText">11%</span>
              </span>
              <span className="antd-pro-pages-dashboard-analysis-components-trend-index-up">
                <Icon type="caret-down" style={{ color: '#52c41a' }} />
              </span>
            </div>
          </div>
        </div>
        <div className="antd-pro-pages-dashboard-analysis-components-charts-chart-card-index-footer">
          <div className="antd-pro-pages-dashboard-analysis-components-charts-field-index-field">
            <span className="antd-pro-pages-dashboard-analysis-components-charts-field-index-label">
              <span>Daily Sales</span>
            </span>
            <span className="antd-pro-pages-dashboard-analysis-components-charts-field-index-number">$12,423</span>
          </div>
        </div>
      </div>
    </Card>
  )

export default TotalSaleCard
