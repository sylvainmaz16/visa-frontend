import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin'

import './ds160.less'

TweenOne.plugins.push(PathPlugin)

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.path2 = 'M202.1 210.2C202.1 222.28 192.25 233.73 172.56 244.55L172.56 180.28C192.25 188.14 202.1 198.12 202.1 210.2Z" id="cJJaXP5uc"></path><path d="M221.46 237.16C228.65 241.69 235.5 243.48 242.02 242.55C251.8 241.15 252.8 220.4 255 217.4C256.46 215.41 253.13 213.08 245.02 210.42C230.64 207.36 223.13 202.56 222.46 196.04C221.79 189.52 230.71 184.27 249.21 180.28'
    this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
      c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
      v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
      s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
      s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`
    this.animation = {
      path: this.path,
      repeat: -1,
      duration: 5000,
      ease: 'linear',
    }
  }

  render() {
    const { style, paused } = this.props

    return (
      <div style={style}>
        <TweenOne
          animation={this.animation}
          style={{
 margin: 0, width: 5, height: 5, transform: 'translate(-2.5px, -2.5px)',
}}
          className="code-box-shape"
          paused={paused}
        />
        <svg width="200" height="200">
          <path d={this.path} fill="none" stroke="rgba(255, 255, 255, 0.2)" />
        </svg>
      </div>
    )
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
  style: PropTypes.object,
}

export default Demo
