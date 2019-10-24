import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../utils/constants'
import VisaSelect from '../VisaSelect'
import validators from '../../containers/DS160/Validators/index'
import * as utils from '../../utils'

class VisaAddress extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    hideCountry: false,
    us_address: true,
    hidePhone: true,
    maxTelLength: 20
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, maxTelLength, hideCountry, us_address, hidePhone, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra} required>
        <Form.Item extra="Street Address">
          {getFieldDecorator( field + '.street_addr1', {
            initialValue: utils.getInitialValue(initialValue.street_addr1),
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Street Address (Line 1)', true) }]
          })(
            <Input maxLength={40}/>
          )}
        </Form.Item>

        <Form.Item extra="Address Line 2 (Optional)">
          {getFieldDecorator( field + '.street_addr2', {
            initialValue: utils.getInitialValue(initialValue.street_addr2),
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Address Line 2', false) }]
            // rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input maxLength={40}/>
          )}
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="City">
              {getFieldDecorator(field + '.city', {
                initialValue: utils.getInitialValue(initialValue.city),
                rules: [{ validator: (rule, value, callback) => validators.validateStudyCourse(rule, value, callback, 'City', true)}],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          {us_address ? <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="State / Province / Region">
              {getFieldDecorator( field + '.state', {
                initialValue: utils.getInitialValue(initialValue.state),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <VisaSelect combines={constants.state_options_list()} />
              )}
            </Form.Item>
          </Col> : <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="State / Province / Region">
              {getFieldDecorator( field + '.state', {
                initialValue: utils.getInitialValue(initialValue.state),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, "State / Province", true) }]
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>}
          
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="ZIP / Postal Code">
              {getFieldDecorator( field + '.zip_code', {
                initialValue: utils.getInitialValue(initialValue.zip_code),
                // rules: [{ required: true, message: 'This field is required' }],
                rules: (hideCountry || us_address) 
                  ? [{ validator: (rule, value, callback) => this.props.validators.validateUSZipCode(rule, value, callback, "ZIP Code", true) }] 
                  : [{ validator: (rule, value, callback) => this.props.validators.validateZipCode(rule, value, callback, "ZIP Code", false) }],
              })(
                <Input maxLength={10}/>
              )}
            </Form.Item>
          </Col>
          {!hidePhone &&
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="Phone">
              {getFieldDecorator( field + '.tel_number', {
                initialValue: utils.getInitialValue(initialValue.tel_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone Number", true) }]
              })(
                <Input maxLength={maxTelLength}/>
              )}
            </Form.Item>
          </Col>
          }
          {!hideCountry && 
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra="Country">
                {getFieldDecorator( field + '.country', {
                  initialValue: utils.getInitialValue(initialValue.country),
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <VisaSelect values={constants.countries_only_option_value_list} labels={constants.countries_only_option_label_list} />
                )}
              </Form.Item>
            </Col>
          }
        </Row>
      </Form.Item>
    );
  }
}
export default VisaAddress;
