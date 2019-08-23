import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  handlePrev = e => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    
    this.props.onPrev(values.data)
  }
  handleSave = e => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    this.props.onSaveAndContinue(values.data)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        this.props.onNext(values.data);
      }
    });
  };
  handleBirthDateChange = (rule, value, callback) => {
    if (!value) {
      callback('This field is required');
    }
    if (moment().diff(value) > 0 && !moment(value).isSame(moment(), 'day')) {
      callback();
    }
    callback('Date must be earlier than today');
  };
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

    const { showPrev, showNext, onPrev, onNext, data } = this.props

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Personal Information</h2>
          <div className="visa-global-section-description">Note: Data on this page must match exactly the information in your passport.</div>
        </div>
        <Form.Item label="Surname(s) (Last Name)" extra="Last Name (Family Name)">
          {getFieldDecorator('data.surname', {
            initialValue: data.surname,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input />
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">Enter all surnames (or family names) exactly as they are written in your passport. If only one name is written in your passport, enter that as your “Surname” (e.g, FERNANDEZ GARCIA)</div>
        </div>
        <Form.Item label="Given Name(s) (First Name(s))" extra="First Name(s)">
          {getFieldDecorator('data.given_name', {
            initialValue: data.given_name,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input />
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">(e.g., JUAN MIGUEL), If your passport does not include a first or given name, please enter 'FNU' (meaning “first name unknown”) in the space for “Given Names”</div>
        </div>
        <Form.Item label="Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?">
          {getFieldDecorator('data.b_ever_used_other_names', {
            initialValue: data.b_ever_used_other_names,
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
                  initialValue: data.used_other_name.surname,
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Other Given Names Used">
                {getFieldDecorator('data.used_other_name.given_name', {
                  initialValue: data.used_other_name.given_name,
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>}

        <Form.Item label="Do you have a telecode that represents your name?" extra="Telecodes are 4 digits numbers that represent characters in some non-Roman alphabet names.">
          {getFieldDecorator('data.b_has_telecode_of_name', {
            initialValue: data.b_has_telecode_of_name,
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
              <Form.Item label="Please provide your Telecode Last Name">
                {getFieldDecorator('data.telecode_of_name.surname', {
                  initialValue: data.telecode_of_name.surname,
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Please provide your Telecode First Name">
                {getFieldDecorator('data.telecode_of_name.given_name', {
                  initialValue: data.telecode_of_name.given_name,
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>}
        <Form.Item label="Sex">
          {getFieldDecorator('data.sex', {
            initialValue: data.sex,
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
            initialValue: data.martial_status,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              {martial_status_options.map((option, index) => <Radio value={option.value} key={index}>{option.label}</Radio>)}
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Date of birth" extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013">
          {getFieldDecorator('data.date_birth', {
            initialValue: moment(data.date_birth),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <DatePicker />
          )}
        </Form.Item>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="City of birth">
              {getFieldDecorator('data.place_of_birth.city', {
                initialValue: data.place_of_birth.city,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Province / State of birth">
              {getFieldDecorator('data.place_of_birth.state', {
                initialValue: data.place_of_birth.state
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Country of birth">
              {getFieldDecorator('data.place_of_birth.country', {
                initialValue: data.place_of_birth.country,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <VisaSelect values={constants.countries_regions_option_value_list} labels={constants.countries_regions_option_label_list} />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Country/Region of Origin (Nationality)">
              {getFieldDecorator('data.nationality', {
                initialValue: data.nationality,
                rules: [{ validator: this.handleNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Do you hold or have you held any nationality other than the one indicated above on nationality?">
          {getFieldDecorator('data.b_more_nationality', {
            initialValue: data.b_more_nationality,
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
                initialValue: data.other_nationality,
                rules: [{ validator: this.handleMoreNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()}/>
              )}
            </Form.Item>
            <Form.Item label="Do you hold a passport for the other country/region of origin (nationality) above?">
              {getFieldDecorator('data.b_has_other_nationality_passport', {
                initialValue: data.b_has_other_nationality_passport,
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
                    initialValue: data.other_nationality_passport,
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
            initialValue: data.b_permanent_resident_other_than_nationality,
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
                initialValue: data.permanent_resident_country,
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
                initialValue: data.national_id_number,
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label="US Social Security Number" extra="Leave blank if you do not have any of these numbers">
              {getFieldDecorator('data.social_security_number', {
                initialValue: data.social_security_number,
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label="US Tax ID Number" extra="Leave blank if you do not have any of these numbers">
              {getFieldDecorator('data.tax_id_number', {
                initialValue: data.tax_id_number,
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_3 = Form.create()(MyForm)
export default Form_DS160_3;
