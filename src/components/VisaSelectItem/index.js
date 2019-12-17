import React, { Component } from "react";
import { Form } from 'antd';
import VisaSelect from '../VisaSelect'
import * as utils from 'utils'
import resources from "utils/resources";

class VisaSelectItem extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, content, tr, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: required, message: tr(resources.validations.required) }],
        })(
          <VisaSelect {...content} tr={tr}/>
        )}
      </Form.Item>
    );
  }
}
export default VisaSelectItem;
