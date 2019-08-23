import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaSelect from "../VisaSelect";

class VisaDateLength extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  }
  render() {

    const { date, period, unit, getFieldDecorator, ...rest } = this.props

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
          <Form.Item label={date.label} extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013">
            {getFieldDecorator(date.field, {
              initialValue: date.initialValue,
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <DatePicker />
            )}
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Length of stay" extra="0 of 3 max characters">
            {getFieldDecorator(period.field, {
              initialValue: period.initialValue,
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <Input />
            )}
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Please Specify">
            {getFieldDecorator(unit.field, {
              initialValue: unit.initialValue,
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
