import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from 'components/VisaBanner';
import VisaHeader from 'components/VisaHeader';
import { DS160 } from 'actions/types'
import { Spin, Button, Icon } from 'antd';

import './index.less'
class DS160_AutoOnlineFill extends Component {
  static defaultProps = {
    token: null
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { token } = this.props
  }

  onStart = () => {
    let iframe = document.getElementById('ds-160-online-form');
    let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  }

  render() {
    const { token } = this.props

    return (
      <div className="visa-ds160-auto-online-form">
        <Button type="primary" onClick={this.onStart}>
          AutoFill
          <Icon type="right" />
        </Button>
        <iframe id="ds-160-online-form" className="ds-160-online-form" src="https://ceac.state.gov/GenNIV/Default.aspx"/>
      </div>
      
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadApplicationFromDB: (type, applicationId) => {
      dispatch({ type, applicationId })
    }
  }
}

const mapStateToProps = state => ({
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_AutoOnlineFill),
)
