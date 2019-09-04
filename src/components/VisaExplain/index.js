import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
const { TextArea } = Input;
import * as utils from '../../utils'

class VisaExplain extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    textLabel: "If you answered yes, give details below."
  }
  render() {

    const { label, extra, radioInitialValue, radioField, textField, textInitialValue, getFieldDecorator, radioValue, textLabel, validators, ...rest } = this.props
    return (
      <>
        <Form.Item label={label} extra={extra}>
          {getFieldDecorator(radioField, {
            initialValue: utils.getInitialValue(radioInitialValue),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {radioValue && <Form.Item label={textLabel} required>
          {getFieldDecorator(textField, {
            initialValue: utils.getInitialValue(textInitialValue),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, label, true) }]
          })(
            <TextArea style={{textTransform: 'uppercase'}} rows={7}/>
          )}
        </Form.Item>}
      </>
    );
  }
}
export default VisaExplain;
