import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'
import * as constants from 'utils/constants'

class MyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSendLink(values)
      }
    })
  }

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }

    const { applicationId, sending, agency } = this.props

    let link = `${constants.myURL}/ds-160/application-form/token=${applicationId}`

    if (agency) {
      link = `${link}?agency=${agency}`
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field">
          <h2 className="visa-global-section-title-customized-by-ds-160">
            Please use the following link to return to your form from any computer.
            <br />
            <a href={link}>{link}</a>
            <br /> This link will expire after 30 days.
            <br /> Enter your email address to send the link by email.
          </h2>
        </div>
        <Form.Item>
          {getFieldDecorator('email', {
            initialValue: '',
            rules: [{ type: 'email', required: true, message: 'Please input valid email address' }],
          })(<Input disabled={sending} />)}
        </Form.Item>
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" loading={sending}>
            SEND LINK
          </Button>
        </div>
      </Form>
    )
  }
}
const Form_DS160_SaveAndContinue = Form.create()(MyForm)
export default Form_DS160_SaveAndContinue
