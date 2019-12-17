import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import moment from 'moment'
import VisaDatePicker from '../VisaDatePicker'
import * as utils from 'utils'

class VisaDatePickerWithCheck extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
    customRules: null,
    checkLabel: "Do Not Know",
    inline: false
  }
  handleCheck = (e) => {
    if(e.target.checked) {
      this.props.setFieldsValue({ 
        [this.props.field]: null, 
        [this.props.field + '_v2.DD']: null,
        [this.props.field + '_v2.MMM']: null,
        [this.props.field + '_v2.YYYY']: null,
      })
    }
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, getFieldValue, setFieldsValue, checkValue, checkField, required, customRule, checkLabel, inline, tr, ...rest } = this.props
    const readOnly = getFieldValue(checkField)
    return (
      <>
        <VisaDatePicker 
          label={label}
          extra={extra}
          field={field}
          initialValue={initialValue}
          getFieldDecorator={getFieldDecorator}
          customRule={customRule}
          readOnly={readOnly}
          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />
        <Form.Item style={{textAlign: 'right'}}>
          {getFieldDecorator(checkField, {
            initialValue: utils.getInitialValue(checkValue),
            valuePropName: "checked",
            rules: [{
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox onChange={this.handleCheck}>{checkLabel}</Checkbox>
          )}
        </Form.Item>
      </>
    );
  }
}
export default VisaDatePickerWithCheck;
