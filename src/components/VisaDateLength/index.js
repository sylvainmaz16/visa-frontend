import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaSelect from "../VisaSelect";
import * as utils from '../../utils'
import moment from "moment";

class VisaDateLength extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  }
  render() {

    const { date, period, unit, getFieldDecorator, setFieldsValue, getFieldValue, validators, ...rest } = this.props

    const unit_options = [
      { value: 'Y', label: 'Year(s)' },
      { value: 'M', label: 'Month(s)' },
      { value: 'D', label: 'Week(s)' },
      { value: 'W', label: 'Day(s)' },
      { value: 'H', label: 'Less Than 24 Hours' },
    ]

    return (
      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <VisaDatePicker 
            label={date.label}
            
            field={date.field}
            initialValue={date.initialValue}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => validators.validateEarlierDate(rule, value, callback, "Date Arrived") }]}
            required={true}

            setFieldsValue={setFieldsValue}
            getFieldValue={getFieldValue}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Length of stay" extra="0 of 3 max characters">
            {getFieldDecorator(period.field, {
              initialValue: utils.getInitialValue(period.initialValue),
              rules: [{ validator: (rule, value, callback) => validators.validateLengthOfStay(rule, value, callback, "Length of Stay") }],
            })(
              <Input />
            )}
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Please Specify">
            {getFieldDecorator(unit.field, {
              initialValue: utils.getInitialValue(unit.initialValue),
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <VisaSelect combines={unit_options}/>
            )}
          </Form.Item>
        </Col>
      </Row>
    );
  }
}
export default VisaDateLength;
