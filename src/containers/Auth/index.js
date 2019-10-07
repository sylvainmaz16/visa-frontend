import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import LoginForm from './LoginForm';

import './index.scss'

class AuthPage extends Component {
  static defaultProps = {
  }

  onLogin = (values) => {
    this.props.login(ADMIN.LOGIN_REQUEST, values)
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
    login: (type, data) => {
      dispatch({ type, data })
    },
  }
}

const mapStateToProps = state => ({
  data: state.admin.data,
  loading: state.admin.loading,
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthPage),
)
