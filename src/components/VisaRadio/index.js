import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as utils from '../../utils'

class VisaRadio extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: true, message: 'This field is required' }],
        })(
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        )}
      </Form.Item>
    );
  }
}
export default VisaRadio;
