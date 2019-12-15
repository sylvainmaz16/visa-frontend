import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaSelect from "../VisaSelect";
import * as utils from '../../utils'
import moment from "moment";
import resources from "../../utils/resources";

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
            tr={tr}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label={tr(resources.components.date_length.period.label)} extra={tr(resources.components.date_length.period.extra)}>
            {getFieldDecorator(period.field, {
              initialValue: utils.getInitialValue(period.initialValue),
              rules: [{ validator: (rule, value, callback) => validators.validateLengthOfStay(rule, value, callback, "Length of Stay") }],
            })(
              <Input />
            )}
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label={tr(resources.components.date_length.unit.label)}>
            {getFieldDecorator(unit.field, {
              initialValue: utils.getInitialValue(unit.initialValue),
              rules: [{ required: true, message: tr(resources.validations.required) }],
            })(
              <VisaSelect combines={unit_options} tr={tr}/>
            )}
          </Form.Item>
        </Col>
      </Row>
    );
  }
}
export default VisaDateLength;
