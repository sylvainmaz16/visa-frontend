import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';

class VisaInput extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: initialValue,
          rules: [{ required: required, message: 'This field is required' }],
        })(
          <Input />
        )}
      </Form.Item>
    );
  }
}
export default VisaInput;
