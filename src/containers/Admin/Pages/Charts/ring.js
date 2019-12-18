import React from 'react'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide,
} from 'bizcharts'
import DataSet from '@antv/data-set'
import { Card } from 'antd'

class Donut extends React.Component {
  render() {
    const { DataView } = DataSet
    const { Html } = Guide
    const data = [
      {
        item: 'Not Completed',
        count: 516,
      },
      {
        item: 'Pending',
        count: 12,
      },
      {
        item: 'In progress',
        count: 2,
      },
      {
        item: 'Failed',
        count: 4,
      },
      {
        item: 'Incident',
        count: 1,
      },
      {
        item: 'Successed',
        count: 725,
      },
    ]
    const dv = new DataView()
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%"
          return val
        },
      },
    }

    return (
      <Card>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type="theta" radius={0.75} innerRadius={0.7} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={100}
            offsetX={-0}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>Applications<br><span style=&quot;color:#262626;font-size:2.5em&quot;>1217</span></div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%"

                return {
                  name: item,
                  value: percent,
                }
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff",
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item + ": " + val
              }}
            />
          </Geom>
        </Chart>
      </Card>
    )
  }
}

export default Donut

