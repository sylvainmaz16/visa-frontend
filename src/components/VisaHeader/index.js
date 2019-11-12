import React, { Component } from 'react'
import './index.scss'

class VisaHeader extends Component {
  static defaultProps = {
    backgroundColor: 'rgba(81, 156, 255, 1)',
    className: ''
  }

  render() {
    const { className } = this.props
    return (
      <div className={"visa-com-header " + className}>
      </div>
    )
  }
}

export default VisaHeader;