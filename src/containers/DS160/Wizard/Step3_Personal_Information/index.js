import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import * as utils from '../../../../utils'

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  handleDates = (data) => {
    if(data.date_birth)
      data.date_birth = data.date_birth.format('DD/MMM/YYYY')
    return data
  }
  handleOtherResidentChange = (rule, value, callback) => {
    if (!value) {
      callback('This field is required');
    }
    if (this.props.form.getFieldValue('data.nationality') == value) {
      callback('The Other Country/Region of Origin (Nationality) listed has already been (entered or selected).');
    }
    callback();
  };
  handleMoreNationalityChange = (rule, value, callback) => {
    if (!value) {
      callback('This field is required');
    }
    if (this.props.form.getFieldValue('data.nationality') == value) {
      callback('The Other Country/Region of Origin (Nationality) listed has already been (entered or selected)');
    }
    callback();
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

    const { martial_status_options } = constants

    const { showPrev, showNext, onPrev, onNext, data, validators } = this.props

    getFieldDecorator('data.b_ever_used_other_names', { initialValue: utils.getInitialValue(data.b_ever_used_other_names) });
    getFieldDecorator('data.b_has_telecode_of_name', { initialValue: utils.getInitialValue(data.b_has_telecode_of_name) });
    getFieldDecorator('data.b_more_nationality', { initialValue: utils.getInitialValue(data.b_more_nationality) });
    getFieldDecorator('data.b_has_other_nationality_passport', { initialValue: utils.getInitialValue(data.b_has_other_nationality_passport) });
    getFieldDecorator('data.b_permanent_resident_other_than_nationality', { initialValue: utils.getInitialValue(data.b_permanent_resident_other_than_nationality) });
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Personal Information</h2>
          <div className="visa-global-section-description">Note: Data on this page must match exactly the information in your passport.</div>
        </div>
        <Form.Item label="Surname(s) (Last Name)" extra="Last Name (Family Name)">
          {getFieldDecorator('data.surname', {
            initialValue: utils.getInitialValue(data.surname),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname(s) (Last Name)") }],
          })(
            <Input />
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">Enter all surnames (or family names) exactly as they are written in your passport. If only one name is written in your passport, enter that as your “Surname” (e.g, FERNANDEZ GARCIA)</div>
        </div>
        <Form.Item label="Given Name(s) (First Name(s))" extra="First Name(s)">
          {getFieldDecorator('data.given_name', {
            initialValue: utils.getInitialValue(data.given_name),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name(s) (First Name(s))") }],
          })(
            <Input />
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">(e.g., JUAN MIGUEL), If your passport does not include a first or given name, please enter 'FNU' (meaning “first name unknown”) in the space for “Given Names”</div>
        </div>
        <Form.Item label="Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?">
          {getFieldDecorator('data.b_ever_used_other_names', {
            initialValue: utils.getInitialValue(data.b_ever_used_other_names),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_ever_used_other_names') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Other Surnames Used (maiden, religious, professional, aliases, etc.)">
                {getFieldDecorator('data.used_other_name.surname', {
                  initialValue: utils.getInitialValue(data.used_other_name.surname),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Other Surnames Used (maiden, religious, professional, aliases, etc.)") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Other Given Names Used">
                {getFieldDecorator('data.used_other_name.given_name', {
                  initialValue: utils.getInitialValue(data.used_other_name.given_name),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Other Given Names Used") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>}

        <Form.Item label="Do you have a telecode that represents your name?" extra="Telecodes are 4 digits numbers that represent characters in some non-Roman alphabet names.">
          {getFieldDecorator('data.b_has_telecode_of_name', {
            initialValue: utils.getInitialValue(data.b_has_telecode_of_name),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_has_telecode_of_name') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Please provide your Telecode Surname">
                {getFieldDecorator('data.telecode_of_name.surname', {
                  initialValue: utils.getInitialValue(data.telecode_of_name.surname),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateTelecodeName(rule, value, callback, "Telecode Surname") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Please provide your Telecode Given Name">
                {getFieldDecorator('data.telecode_of_name.given_name', {
                  initialValue: utils.getInitialValue(data.telecode_of_name.given_name),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateTelecodeName(rule, value, callback, "Telecode Given Name") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>}
        <Form.Item label="Sex">
          {getFieldDecorator('data.sex', {
            initialValue: utils.getInitialValue(data.sex),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value='M'>Male</Radio>
              <Radio value='F'>Female</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Marital Status">
          {getFieldDecorator('data.martial_status', {
            initialValue: utils.getInitialValue(data.martial_status),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              {martial_status_options.map((option, index) => <Radio value={option.value} key={index}>{option.label}</Radio>)}
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Date of birth" extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013">
          {getFieldDecorator('data.date_birth', {
            initialValue: data.date_birth ? moment( data.date_birth, 'DD/MMM/YYYY' ) : null,
            rules: [{ validator: this.props.validators.validateEarlierDate }],
          })(
            <DatePicker />
          )}
        </Form.Item>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="City of birth">
              {getFieldDecorator('data.place_of_birth.city', {
                initialValue: utils.getInitialValue(data.place_of_birth.city),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Province / State of birth">
              {getFieldDecorator('data.place_of_birth.state', {
                initialValue: utils.getInitialValue(data.place_of_birth.state)
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Country of birth">
              {getFieldDecorator('data.place_of_birth.country', {
                initialValue: utils.getInitialValue(data.place_of_birth.country),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <VisaSelect values={constants.countries_regions_option_value_list} labels={constants.countries_regions_option_label_list} />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Country/Region of Origin (Nationality)">
              {getFieldDecorator('data.nationality', {
                initialValue: utils.getInitialValue(data.nationality),
                rules: [{ validator: this.handleNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Do you hold or have you held any nationality other than the one indicated above on nationality?">
          {getFieldDecorator('data.b_more_nationality', {
            initialValue: utils.getInitialValue(data.b_more_nationality),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_more_nationality') &&
          <>
            <Form.Item label="Other Country/Region of Origin (Nationality)">
              {getFieldDecorator('data.other_nationality', {
                initialValue: utils.getInitialValue(data.other_nationality),
                rules: [{ validator: this.handleMoreNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()}/>
              )}
            </Form.Item>
            <Form.Item label="Do you hold a passport for the other country/region of origin (nationality) above?">
              {getFieldDecorator('data.b_has_other_nationality_passport', {
                initialValue: utils.getInitialValue(data.b_has_other_nationality_passport),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {
              this.props.form.getFieldValue('data.b_has_other_nationality_passport') &&
                <Form.Item label="Passport Number">
                  {getFieldDecorator('data.other_nationality_passport', {
                    initialValue: utils.getInitialValue(data.other_nationality_passport),
                    rules: [{ required: true, message: 'This field is required' }],
                  })(
                    <Input />
                  )}
                </Form.Item>
            }
          </>
        }
        <Form.Item label="Are you a permanent resident of a country/region other than country/region of origin (nationality) indicated above?">
          {getFieldDecorator('data.b_permanent_resident_other_than_nationality', {
            initialValue: utils.getInitialValue(data.b_permanent_resident_other_than_nationality),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {
          this.props.form.getFieldValue('data.b_permanent_resident_other_than_nationality') &&
            <Form.Item label="Other Permanent Resident Country/Region">
              {getFieldDecorator('data.permanent_resident_country', {
                initialValue: utils.getInitialValue(data.permanent_resident_country),
                rules: [{ validator: this.handleOtherResidentChange }],
              })(
                <VisaSelect values={constants.countries_regions_option_value_list} labels={constants.countries_regions_option_label_list} />
              )}
            </Form.Item>
        }
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Document Information</h2>
          <div className="visa-global-section-description">Your National ID Number is a unique number that your government provides. The U.S Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers</div>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label="National ID Number" extra="Your National ID Number is a unique number that your government provides. Leave blank if you do not have any of these numbers">
              {getFieldDecorator('data.national_id_number', {
                initialValue: utils.getInitialValue(data.national_id_number),
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label="US Social Security Number" extra="Leave blank if you do not have any of these numbers">
              {getFieldDecorator('data.social_security_number', {
                initialValue: utils.getInitialValue(data.social_security_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateSSN(rule, value, callback, "U.S. Social Security Number") }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label="US Tax ID Number" extra="Leave blank if you do not have any of these numbers">
              {getFieldDecorator('data.tax_id_number', {
                initialValue: utils.getInitialValue(data.tax_id_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "U.S. Taxpayer ID Number") }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleSubmit(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_3 = Form.create()(MyForm)
export default Form_DS160_3;
