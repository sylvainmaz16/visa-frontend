import React, { Component } from 'react'
import { Form, Input, Checkbox } from 'antd'
import * as utils from 'utils'
import resources from 'utils/resources'

class VisaInputWithCheck extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    required: true,
    customRule: null,
    placeholder: '',
  }

  handleCheck = e => {
    if (e.target.checked) {
      this.props.setFieldsValue({ [this.props.field]: null })
    }
  }

  render() {
    const {
 label, extra, initialValue, field, getFieldDecorator, setFieldsValue, getFieldValue, required, customRule, placeholder, checkField, checkValue, tr, ...rest
} = this.props

    getFieldDecorator(checkField, { initialValue: checkValue })
    const readOnly = getFieldValue(checkField)

    return (
      <>
        <Form.Item label={label} extra={extra} required={required}>
          {getFieldDecorator(field, {
            initialValue: utils.getInitialValue(initialValue),
            rules: customRule || [{ pattern: /^[A-Za-z0-9#$*%&;!@^?><().',\- ]+$/, message: tr(resources.validations.english) }, { required, message: tr(resources.validations.required) }],
          })(
            <Input placeholder={placeholder} disabled={readOnly} maxLength={33} />,
          )}
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          {getFieldDecorator(checkField, {
            initialValue: utils.getInitialValue(checkValue),
            valuePropName: 'checked',
            rules: [{
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox onChange={this.handleCheck}>{tr(resources.do_not_know)}</Checkbox>,
          )}
        </Form.Item>
      </>
    )
  }
}
export default VisaInputWithCheck
