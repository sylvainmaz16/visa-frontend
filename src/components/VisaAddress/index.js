import React, { Component } from 'react'
import {
  Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col,
} from 'antd'
import * as constants from 'utils/constants'
import * as utils from 'utils'
import resources from 'utils/resources'
import VisaSelect from '../VisaSelect'
import validators from '../../containers/DS160/Validators/index'
import _ from 'lodash'

class VisaAddress extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    hideCountry: false,
    us_address: true,
    hidePhone: true,
    maxTelLength: 20,
  }

  render() {
    const {
      label, extra, initialValue, field, getFieldDecorator, maxTelLength, hideCountry, us_address, hidePhone, tr, ...rest
    } = this.props

    return (
      <Form.Item label={label} extra={extra} required>
        <Form.Item extra={tr(resources.components.address.street_addr1)}>
          {getFieldDecorator(`${field}.street_addr1`, {
            initialValue: _.get(initialValue, 'street_addr1') || undefined,
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Street Address (Line 1)', true) }],
          })(
            <Input maxLength={40} />,
          )}
        </Form.Item>

        <Form.Item extra={tr(resources.components.address.street_addr2)}>
          {getFieldDecorator(`${field}.street_addr2`, {
            initialValue: _.get(initialValue, 'street_addr2') || undefined,
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Address Line 2', false) }],
            // rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Input maxLength={40} />,
          )}
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra={tr(resources.components.address.city)}>
              {getFieldDecorator(`${field}.city`, {
                initialValue: _.get(initialValue, 'city') || undefined,
                rules: [{ validator: (rule, value, callback) => validators.validateStudyCourse(rule, value, callback, 'City', true) }],
              })(
                <Input maxLength={20} />,
              )}
            </Form.Item>
          </Col>
          {us_address ? <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra={tr(resources.components.address.state)}>
              {getFieldDecorator(`${field}.state`, {
                initialValue: _.get(initialValue, 'state') || undefined,
                rules: [{ validator: (rule, value, callback) => validators.validateStudyCourse(rule, value, callback, 'State / Province', true) }],
              })(
                <VisaSelect combines={constants.state_options_list()} tr={tr} />,
              )}
            </Form.Item>
          </Col> : <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra={tr(resources.components.address.state)}>
                {getFieldDecorator(`${field}.state`, {
                  initialValue: _.get(initialValue, 'state') || undefined,
                  rules: [{ validator: (rule, value, callback) => validators.validateStudyCourse(rule, value, callback, 'State / Province', true) }],
                })(
                  <Input maxLength={20} />,
                )}
              </Form.Item>
            </Col>}

        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra={tr(resources.components.address.zip_code)}>
              {getFieldDecorator(`${field}.zip_code`, {
                initialValue: _.get(initialValue, 'zip_code') || undefined,
                // rules: [{ required: true, message: tr(resources.validations.required) }],
                rules: (hideCountry || us_address)
                  ? [{ validator: (rule, value, callback) => this.props.validators.validateUSZipCode(rule, value, callback, 'ZIP Code', true) }]
                  : [{ validator: (rule, value, callback) => this.props.validators.validateZipCode(rule, value, callback, 'ZIP Code', false) }],
              })(
                <Input maxLength={10} />,
              )}
            </Form.Item>
          </Col>
          {!hidePhone &&
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra={tr(resources.components.address.tel_number)}>
                {getFieldDecorator(`${field}.tel_number`, {
                  initialValue: _.get(initialValue, 'tel_number') || undefined,
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Phone Number', true) }],
                })(
                  <Input maxLength={maxTelLength} />,
                )}
              </Form.Item>
            </Col>
          }
          {!hideCountry &&
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra={tr(resources.components.address.country)}>
                {getFieldDecorator(`${field}.country`, {
                  initialValue: _.get(initialValue, 'country') || undefined,
                  rules: [{ required: true, message: tr(resources.validations.required) }],
                })(
                  <VisaSelect combines={constants.export_list(constants.countries_only_option_list)} tr={tr} />,
                )}
              </Form.Item>
            </Col>
          }
        </Row>
      </Form.Item>
    )
  }
}
export default VisaAddress
