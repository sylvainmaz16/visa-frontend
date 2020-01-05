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
  };

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

    const { email, applicationId, paid } = this.props

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field">
          <h2 className="visa-global-section-title-customized-by-ds-160">
            Please complete the DS-160 form before checkout
          </h2>
        </div>
      </Form>

    )
  }
}
const Form_DS160_Checkout_Info = Form.create()(MyForm)
export default Form_DS160_Checkout_Info
