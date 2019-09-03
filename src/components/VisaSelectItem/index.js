import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaSelect from '../VisaSelect'
import * as utils from '../../utils'

class VisaSelectItem extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, content, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: required, message: 'This field is required' }],
        })(
          <VisaSelect {...content}/>
        )}
      </Form.Item>
    );
  }
}
export default VisaSelectItem;
