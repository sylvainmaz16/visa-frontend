import React from 'react'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts'

const Curved = () => {
  const data = [
    {
      month: 'Jan',
      city: 'uva',
      temperature: 7,
    },
    {
      month: 'Jan',
      city: 'default',
      temperature: 0,
    },
    {
      month: 'Feb',
      city: 'uva',
      temperature: 6.9,
    },
    {
      month: 'Feb',
      city: 'default',
      temperature: 4.2,
    },
    {
      month: 'Mar',
      city: 'uva',
      temperature: 9.5,
    },
    {
      month: 'Mar',
      city: 'default',
      temperature: 5.7,
    },
    {
      month: 'Apr',
      city: 'uva',
      temperature: 14.5,
    },
    {
      month: 'Apr',
      city: 'default',
      temperature: 8.5,
    },
    {
      month: 'May',
      city: 'uva',
      temperature: 18.4,
    },
    {
      month: 'May',
      city: 'default',
      temperature: 11.9,
    },
    {
      month: 'Jun',
      city: 'uva',
      temperature: 21.5,
    },
    {
      month: 'Jun',
      city: 'default',
      temperature: 15.2,
    },
    {
      month: 'Jul',
      city: 'uva',
      temperature: 25.2,
    },
    {
      month: 'Jul',
      city: 'default',
      temperature: 17,
    },
    {
      month: 'Aug',
      city: 'uva',
      temperature: 26.5,
    },
    {
      month: 'Aug',
      city: 'default',
      temperature: 16.6,
    },
    {
      month: 'Sep',
      city: 'uva',
      temperature: 23.3,
    },
    {
      month: 'Sep',
      city: 'default',
      temperature: 14.2,
    },
    {
      month: 'Oct',
      city: 'uva',
      temperature: 18.3,
    },
    {
      month: 'Oct',
      city: 'default',
      temperature: 10.3,
    },
    {
      month: 'Nov',
      city: 'uva',
      temperature: 13.9,
    },
    {
      month: 'Nov',
      city: 'default',
      temperature: 6.6,
    },
    {
      month: 'Dec',
      city: 'uva',
      temperature: 9.6,
    },
    {
      month: 'Dec',
      city: 'default',
      temperature: 4.8,
    },
  ]
  const cols = {
    month: {
      range: [0, 1],
    },
  }

  return (
    <div>
      <Chart height={100} data={data} scale={cols} forceFit padding={[5, 5, 80, 5]}>
        <Legend />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom
          type="line"
          position="month*temperature"
          size={2}
          color="city"
          shape="smooth"
        />
        <Geom
          type="point"
          position="month*temperature"
          size={4}
          shape="circle"
          color="city"
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        />
      </Chart>
    </div>
  )
}

export default Curved

