import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from '../../../components/VisaBanner';
import VisaHeader from '../../../components/VisaHeader';
import { DS160 } from '../../../actions/types'
import { Spin } from 'antd';

import './index.scss'
class DS160_Checkout extends Component {

  constructor(props) {
    super(props)
  }

  onSendLink = ( data ) => {
    console.log('Email sending: ', data);
  }

  render() {

    const { email, step_index, loading, applicationId } = this.props

    if(loading) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin">
      </Spin>
    }

    return (
      <div className="visa-ds160-save-and-continue">
        <VisaHeader />
        <VisaBanner backgroundColor="#428bca">
          DS 160 US Visa Online Application
        </VisaBanner>
        <div className="container visa-ds160-save-and-continue__content">
          <Form_DS160_SaveAndContinue email={email} onSendLink={this.onSendLink} applicationId={applicationId}/>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // onNextStep: (type) => {
    //   dispatch({ type })
    // },
  }
}

const mapStateToProps = state => ({
  email: state.mainData.email,
  step_index: state.mainData.step_index,
  loading: state.mainData.loading,
  applicationId: state.mainData.applicationId
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Checkout),
)
