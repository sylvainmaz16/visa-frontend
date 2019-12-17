import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd'

import './LoginForm.less'

class MyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { form, login } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        login(values)
      }
    })
  };

  render() {
    const { loading, form } = this.props
    const { getFieldDecorator } = form

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your Username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              disabled={loading}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              disabled={loading}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox disabled={loading} style={{ color: 'white' }}>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="" disabled={loading}>
            Forgot password
          </a>
          <Button type="default" htmlType="submit" className="login-form-button" loading={loading}>
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    )
  }
}

const LoginForm = Form.create()(MyForm)
export default LoginForm
