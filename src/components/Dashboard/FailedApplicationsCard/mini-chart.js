import React from "react"
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts"

const Basiccolumn = () => {
  const data = [
    {
      hour: '-22',
      count: 13,
    },
    {
      hour: '-21',
      count: 15,
    },
    {
      hour: '-20',
      count: 1,
    },
    {
      hour: '-19',
      count: 11,
    },
    {
      hour: '-18',
      count: 11,
    },
    {
      hour: '-17',
      count: 6,
    },
    {
      hour: '-16',
      count: 10,
    },
    {
      hour: '-15',
      count: 3,
    },
    {
      hour: '-14',
      count: 0,
    },
    {
      hour: '-13',
      count: 12,
    },
    {
      hour: '-12',
      count: 12,
    },
    {
      hour: '-11',
      count: 11,
    },
    {
      hour: '-10',
      count: 3,
    },
    {
      hour: '-9',
      count: 2,
    },
    {
      hour: '-8',
      count: 1,
    },
    {
      hour: '-7',
      count: 9,
    },
    {
      hour: '-6',
      count: 2,
    },
    {
      hour: '-5',
      count: 9,
    },
    {
      hour: '-4',
      count: 6,
    },
    {
      hour: '-3',
      count: 5,
    },
    {
      hour: '-2',
      count: 10,
    },
    {
      hour: '-1',
      count: 3,
    },
  ]

  const cols = {
    count: {
      tickInterval: 20
    }
  }

  return (
    <div>
      <Chart height={100} data={data} scale={cols} forceFit padding={[5, 0, 44, 0]}>
        <Tooltip
          crosshairs={{
            type: "y",
          }}
        />
        <Geom type="interval" position="hour*count" />
      </Chart>
    </div>
  )
}

export default Basiccolumn
