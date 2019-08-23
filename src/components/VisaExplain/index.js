import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
const { TextArea } = Input;

class VisaExplain extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  }
  render() {

    const { label, extra, radioInitialValue, radioField, textField, textInitialValue, getFieldDecorator, radioValue, ...rest } = this.props
    return (
      <>
        <Form.Item label={label} extra={extra}>
          {getFieldDecorator(radioField, {
            initialValue: radioInitialValue,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {radioValue && <Form.Item label="If you answered yes, give details below.">
          {getFieldDecorator(textField, {
            initialValue: textInitialValue,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <TextArea rows={7}/>
          )}
        </Form.Item>}
      </>
    );
  }
}
export default VisaExplain;
