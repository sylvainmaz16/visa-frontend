import React, { Component } from 'react'
import { Form, Input, Row, Col } from 'antd'
import * as utils from 'utils'
import resources from 'utils/resources'
import * as constants from 'utils/constants'
import VisaSelect from '../VisaSelect'

class VisaDateLength extends Component {
  static defaultProps = {
    extra: '',
    label: '',
  }

  render() {
    const { date, period, unit, getFieldDecorator, setFieldsValue, getFieldValue, validators, tr, ...rest } = this.props

    return (
      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <VisaDatePicker
            label={date.label}
            field={date.field}
            initialValue={date.initialValue}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => validators.validateEarlierDate(rule, value, callback, 'Date Arrived') }]}
            required
            setFieldsValue={setFieldsValue}
            getFieldValue={getFieldValue}
            tr={tr}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label={tr(resources.components.date_length.period.label)} extra={tr(resources.components.date_length.period.extra)}>
            {getFieldDecorator(period.field, {
              initialValue: utils.getInitialValue(period.initialValue),
              rules: [{ validator: (rule, value, callback) => validators.validateLengthOfStay(rule, value, callback, 'Length of Stay') }],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label={tr(resources.components.date_length.unit.label)}>
            {getFieldDecorator(unit.field, {
              initialValue: utils.getInitialValue(unit.initialValue),
              rules: [{ required: true, message: tr(resources.validations.required) }],
            })(<VisaSelect combines={tr(constants.period_unit_options_v2)} tr={tr} />)}
          </Form.Item>
        </Col>
      </Row>
    )
  }
}
export default VisaDateLength
