import React, { Component } from "react";
import { Form, Radio } from 'antd';
import * as utils from 'utils'
import resources from "utils/resources";

class VisaRadio extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, tr, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: true, message: tr(resources.validations.required) }],
        })(
          <Radio.Group>
            <Radio value={true}>{tr(resources.yes)}</Radio>
            <Radio value={false}>{tr(resources.no)}</Radio>
          </Radio.Group>
        )}
      </Form.Item>
    );
  }
}
export default VisaRadio;
