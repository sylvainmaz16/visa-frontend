import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  constructor(props) {
    super(props)
    this.state = {
      type: ""
    }
  }
  handleTypeChange = value => {
    this.setState({
      type: value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onNext();
      }
    });
  };
  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };

    const martial_status_options = [
      { value: 'single', label: 'Single' },
      { value: 'married', label: 'Married' },
      { value: 'common-law-marriage', label: 'Common Law Marriage' },
      { value: 'civil-union-domestic-partnership', label: 'Civil Union/Domestic Partnership' },
      { value: 'divorced', label: 'Divorced' },
      { value: 'legally-separated', label: 'Legally Separated' },
      { value: 'widowed', label: 'Widowed' },
      { value: 'other', label: 'Other' },
    ]

    const { showPrev, showNext, onPrev, onNext } = this.props

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Personal Information</h2>
          <div className="visa-global-section-description">Note: Data on this page must match exactly the information in your passport.</div>
        </div>
        <Form.Item label="Surname(s) (Last Name)" extra="Last Name (Family Name)">
          {getFieldDecorator('surname', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input/>
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">Enter all surnames (or family names) exactly as they are written in your passport. If only one name is written in your passport, enter that as your “Surname” (e.g, FERNANDEZ GARCIA)</div>
        </div>
        <Form.Item label="Given Name(s) (First Name(s))" extra="First Name(s)">
          {getFieldDecorator('givenname', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input/>
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">(e.g., JUAN MIGUEL), If your passport does not include a first or given name, please enter 'FNU' (meaning “first name unknown”) in the space for “Given Names”</div>
        </div>
        <Form.Item label="Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?">
          {getFieldDecorator('b_ever_used_other_names', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Do you have a telecode that represents your name?" extra="Telecodes are 4 digits numbers that represent characters in some non-Roman alphabet names.">
          {getFieldDecorator('b_has_telecode_of_name', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Sex">
          {getFieldDecorator('s_sex', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Marital Status">
          {getFieldDecorator('s_sex', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              {martial_status_options.map((option, index) => <Radio value={option.value} key={index}>{option.label}</Radio>)}
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Date of birth" extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013">
          {getFieldDecorator('date_birth', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <DatePicker />
          )}
        </Form.Item>
        <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="City of birth">
                {getFieldDecorator('s_city_of_birth', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Province / State of birth">
                {getFieldDecorator('s_province_of_birth', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Country of birth">
                {getFieldDecorator('s_country_of_birth', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Select placeholder="Select an Option">
                    <Option value="AFGHANISTAN-KABUL">AFGHANISTAN, KABUL</Option>
                    <Option value="ALBANIA-TIRANA">ALBANIA, TIRANA</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Country/Region of Origin (Nationality)">
                {getFieldDecorator('s_country_of_nationality', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Select placeholder="Select an Option">
                    <Option value="AFGHANISTAN-KABUL">AFGHANISTAN, KABUL</Option>
                    <Option value="ALBANIA-TIRANA">ALBANIA, TIRANA</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
        </Row>
        <Form.Item label="Do you hold or have you held any nationality other than the one indicated above on nationality?">
          {getFieldDecorator('b_more_nationality', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Are you a permanent resident of a country/region other than country/region of origin (nationality) indicated above?">
          {getFieldDecorator('b_permanent_resident', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Document Information</h2>
          <div className="visa-global-section-description">Your National ID Number is a unique number that your government provides. The U.S Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers</div>
        </div>
        <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="National ID Number" extra="Your National ID Number is a unique number that your government provides. Leave blank if you do not have any of these numbers">
                {getFieldDecorator('s_national_id_number', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="US Social Security Number" extra="Leave blank if you do not have any of these numbers">
                {getFieldDecorator('s_social_security_number', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="US Tax ID Number" extra="Leave blank if you do not have any of these numbers">
                {getFieldDecorator('s_tax_id_number', {
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input/>
                )}
              </Form.Item>
            </Col>
        </Row>
        <div
          style={{
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
          }}
        >
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.props.onPrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link">Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_3 = Form.create()(MyForm)
export default Form_DS160_3;
