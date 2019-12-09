import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import { withCookies } from 'react-cookie';
import SignupForm from './SignupForm';
import { Button, notification } from 'antd';

import './index.less'

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Hello, Agency!',
    description:
      type == 'success' ? 'Successfully signed up. Your account is under review!' : 'Failed to register. You\'ve already registered or something went wrong.',
  });
};

class SignupPage extends Component {
  static defaultProps = {
  }

  constructor(props){
    super(props)
    this.onSignup = this.onSignup.bind(this)
  }

  onSignup = (values) => {
    console.log('onSignup: ', values)
    this.props.login(ADMIN.SIGNUP_REQUEST, values, (result) => {
      if(result.error) {
        openNotificationWithIcon('error')
      } else {
        openNotificationWithIcon('success')
        this.props.history.push('/auth')
      }
    })
  }

  render() {
    return (
      <div className="visa-admin-signup">
        <SignupForm loading={this.props.loading} signup={this.onSignup}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    login: (type, data, cb) => {
      dispatch({ type, data, cb })
    },
  }
}

const mapStateToProps = state => ({
  data: state.admin.data,
  loading: state.admin.loading,
})


export default withCookies(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignupPage),
))
