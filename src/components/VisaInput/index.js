import React, { Component } from "react";
import { Form, Input } from 'antd';
import * as utils from '../../utils'

class VisaInput extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
    customRule: null,
    placeholder: ""
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, customRule, placeholder, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra} required={required}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: customRule ? customRule : [{ required: required, message: 'This field is required' }],
        })(
          <Input placeholder={placeholder}/>
        )}
      </Form.Item>
    );
  }
}
export default VisaInput;
