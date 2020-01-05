import React, { Component } from 'react'
import { Form, Input } from 'antd'
import * as utils from 'utils'
import resources from 'utils/resources'

class VisaInput extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    required: true,
    customRule: null,
    placeholder: '',
    maxLength: 40,
  }

  render() {
    const {
 label, extra, initialValue, field, getFieldDecorator, required, customRule, maxLength, placeholder, tr, ...rest
} = this.props

return (
      <Form.Item label={label} extra={extra} required={required}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: customRule || [{ pattern: /^[A-Za-z0-9#$*%&;!@^?><().',\- ]+$/, message: tr(resources.validations.english) }, { required, message: tr(resources.validations.required) }],
        })(
          <Input placeholder={placeholder} maxLength={maxLength} />,
        )}
      </Form.Item>
    )
  }
}
export default VisaInput
