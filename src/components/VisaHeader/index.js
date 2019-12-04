import React, { Component } from 'react'
import './index.scss'

class VisaHeader extends Component {
  static defaultProps = {
    backgroundColor: 'white',
    className: ''
  }

  render() {
    const { className, backgroundColor } = this.props
    return (
      <div className={"visa-com-header " + className} style={{ backgroundColor }}>
      </div>
    )
  }
}

export default VisaHeader;