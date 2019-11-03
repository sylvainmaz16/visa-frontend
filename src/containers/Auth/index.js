import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import { withCookies } from 'react-cookie';
import LoginForm from './LoginForm';
import { Button, notification } from 'antd';

import './index.scss'

const openNotificationWithIcon = (type, descr, username = 'Customer') => {
  notification[type]({
    message: `Hello, ${username}!`,
    description:
      type == 'success' ? 'Successfully logged in. Please remember to log out after your work!' : descr ? descr : 'Failed to log in. Please input your username or password correctly.',
  });
};

class AuthPage extends Component {
  static defaultProps = {
  }

  constructor(props){
    super(props)
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin = (values) => {
    this.props.login(ADMIN.LOGIN_REQUEST, values, (result) => {
      if(result.error) {
        localStorage.removeItem('immigration4us_token')
        localStorage.removeItem('user')
        openNotificationWithIcon('error', result.error)
      } else {
        const {cookies} = this.props
        const redirectTo = cookies.get('immigration4us_authRedirectTo')
        openNotificationWithIcon('success', null, result.user.username)
        if(result.token) {
          const user = {
            username: result.user.username,
            email: result.user.email,
            role: result.user.role
          }
          localStorage.setItem('immigration4us_token', result.token)
          localStorage.setItem('user', JSON.stringify(user))
          // cookies.set('immigration4us_token', result.token, { path: '/', maxAge: 3600 });
          this.props.history.push(redirectTo ? redirectTo : '/board')
        } else {
          localStorage.removeItem('immigration4us_token')
          localStorage.removeItem('user')
        }
      }
      
    })
  }

  render() {
    return (
      <div className="visa-admin-auth">
        <LoginForm loading={this.props.loading} login={this.onLogin}/>
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
  )(AuthPage),
))
