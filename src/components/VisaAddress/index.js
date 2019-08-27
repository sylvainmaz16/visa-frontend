import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../utils/constants'
import VisaSelect from '../VisaSelect'

class VisaAddress extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    hideCountry: false
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, hideCountry, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra} required>
        <Form.Item extra="Street Address">
          {getFieldDecorator( field + '.street_addr1', {
            initialValue: initialValue.street_addr1,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item extra="Address Line 2">
          {getFieldDecorator( field + '.street_addr2', {
            initialValue: initialValue.street_addr2,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="City">
              {getFieldDecorator(field + '.city', {
                initialValue: initialValue.city,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="State / Province / Region">
              {getFieldDecorator( field + '.state', {
                initialValue: initialValue.state,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="ZIP / Postal Code">
              {getFieldDecorator( field + '.zip_code', {
                initialValue: initialValue.zip_code,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          {!hideCountry && 
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra="Country">
                {getFieldDecorator( field + '.country', {
                  initialValue: initialValue.country,
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
