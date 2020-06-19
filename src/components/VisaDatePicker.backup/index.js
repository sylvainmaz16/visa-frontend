import React, { Component } from 'react'
import { Form, DatePicker } from 'antd'
import moment from 'moment'

class VisaDatePicker extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    required: true,
    customRules: null,
  }

  render() {
    const { label, extra, initialValue, field, getFieldDecorator, required, customRule, readOnly, ...rest } = this.props

    return (
      <Form.Item label={label} extra={extra} required={required}>
        {getFieldDecorator(field, {
          initialValue: initialValue ? moment(initialValue, 'DD/MMM/YYYY') : null,
          rules: customRule || [{ required, message: 'This field is required' }],
        })(<DatePicker disabled={readOnly} />)}
      </Form.Item>
    )
  }
}
export default VisaDatePicker
