import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from 'components/VisaBanner'
import VisaHeader from 'components/VisaHeader'
import { DS160 } from 'actions/types'
import { withCookies } from 'react-cookie'
import { Spin, notification } from 'antd'
import Form_DS160_SaveAndContinue from './EmailForm'

import './index.less'

const openNotificationWithIcon = type => {
  notification[type]({
    message: type == 'success' ? 'Successfully sent!' : 'Failed to send an email!',
    description:
      type == 'success' ? 'Thank you for saving DS-160 Non-Immigrant US Visa Application' : 'Please try again to save your application',
  })
}

class DS160_Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sending: false,
    }
  }

  onSendLink = data => {
    const { applicationId, cookies } = this.props
    this.setState({ sending: true })
    this.props.sendLinkEmail(DS160.SEND_LINK_EMAIL_REQUEST, { ...data, applicationId }, res => {
      this.setState({ sending: false })
      if (res && res.status == 'success') {
        openNotificationWithIcon('success')
        cookies.set('sendLinkEmailSuccess', data.email, { path: '/', maxAge: 3600 })
      } else {
        openNotificationWithIcon('error')
      }
    })
  }

  render() {
    const {
      loading, applicationId, cookies, agency,
    } = this.props
    const { sending } = this.state

    if (loading) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin" />
    }

    const sentAddr = cookies.get('sendLinkEmailSuccess')
    var customTheme = 'visa-ds160-save-and-continue';
    if (agency && agency.toLowerCase() === 'uva') 
      customTheme = 'visa-ds160-save-and-continue visa-uva'
    if (agency && agency.toLowerCase() === 'aes') 
      customTheme = 'visa-ds160-save-and-continue visa-aes'
    if (agency && agency.toLowerCase() === 'ues') 
      customTheme = 'visa-ds160-save-and-continue visa-ues'

    return (
      <div className={customTheme}>
        <VisaHeader />
        <VisaBanner backgroundColor="#428bca">
          DS 160 US Visa Online Application
        </VisaBanner>
        <div className="container visa-ds160-save-and-continue__content">
          {sentAddr && <div className="visa-global-field">
            <h2 className="visa-global-section-title-customized-by-ds-160" style={{ fontSize: '1.5em' }}>
              The link was sent to the following email address:
              {' '}
              {sentAddr}
            </h2>
          </div>}
          {!sentAddr && <Form_DS160_SaveAndContinue onSendLink={this.onSendLink} applicationId={applicationId} sending={sending} agency={agency} />}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendLinkEmail: (type, payload, cb) => {
    dispatch({ type, payload, cb })
  },
})

const mapStateToProps = state => ({
  loading: state.main.loading,
  applicationId: state.main.applicationId,
})

export default withCookies(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Checkout),
))
