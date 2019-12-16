import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import VisaDatePicker from '../../../../components/VisaDatePicker'
import * as utils from '../../../../utils'
import resources from "../../../../utils/resources";

const { Option } = Select;
const { TextArea } = Input;

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
      callback(tr(resources.validations.required));
    }
    if (this.props.form.getFieldValue('data.nationality') == value || this.props.form.getFieldValue('data.other_nationality') == value) {
      callback('The Other Country/Region of Origin (Nationality) listed has already been (entered or selected).');
    }
    callback();
  };
  handleNationalityChange = (rule, value, callback) => {
    if (!value) {
      callback(tr(resources.validations.required));
    }
    callback();
  };
  handleMoreNationalityChange = (rule, value, callback) => {
    if (!value) {
      callback(tr(resources.validations.required));
    }
    if (this.props.form.getFieldValue('data.nationality') == value) {
      callback('The Other Country/Region of Origin (Nationality) listed has already been (entered or selected)');
    }
    callback();
  };
  handleUsedOtherName = (rule, value, callback, field) => {
    if (!value) {
      callback(tr(resources.validations.required));
      return;
    }

    let currentName = this.props.form.getFieldValue('data.surname') + this.props.form.getFieldValue('data.given_name')
    let otherName = this.props.form.getFieldValue('data.used_other_name.surname') + this.props.form.getFieldValue('data.used_other_name.given_name')

    if( currentName === otherName ) {
      callback('Alias matches Given Name.')
      return;
    }

    if(/^[A-Za-z\s]+$/.test(value) == false) {
      callback(field + ' is invalid. Valid characters include A-Z and single spaces in between names.');
      return;
    }
    callback();
  }
  render() {
    const { getFieldDecorator, isFieldTouched, setFieldsValue, getFieldValue } = this.props.form;
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

    const { showPrev, showNext, onPrev, onNext, data, validators, tr } = this.props

    getFieldDecorator('data.b_ever_used_other_names', { initialValue: utils.getInitialValue(data.b_ever_used_other_names) });
    getFieldDecorator('data.b_has_telecode_of_name', { initialValue: utils.getInitialValue(data.b_has_telecode_of_name) });
    getFieldDecorator('data.b_more_nationality', { initialValue: utils.getInitialValue(data.b_more_nationality) });
    getFieldDecorator('data.b_has_other_nationality_passport', { initialValue: utils.getInitialValue(data.b_has_other_nationality_passport) });
    getFieldDecorator('data.b_permanent_resident_other_than_nationality', { initialValue: utils.getInitialValue(data.b_permanent_resident_other_than_nationality) });

    getFieldDecorator('data.surname', { initialValue: utils.getInitialValue(data.surname) });
    getFieldDecorator('data.given_name', { initialValue: utils.getInitialValue(data.given_name) });

    let currentName = this.props.form.getFieldValue('data.surname') + this.props.form.getFieldValue('data.given_name')
    let otherName = ""

    if(this.props.form.getFieldValue('data.b_ever_used_other_names')) {

      getFieldDecorator('data.used_other_name.surname', { initialValue: utils.getInitialValue(data.used_other_name.surname) });
      getFieldDecorator('data.used_other_name.given_name', { initialValue: utils.getInitialValue(data.used_other_name.given_name) });
      otherName = this.props.form.getFieldValue('data.used_other_name.surname') + this.props.form.getFieldValue('data.used_other_name.given_name')
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.personal.section_title)}</h2>
          <div className="visa-global-section-description">{tr(resources.personal.section_descr)}</div>
        </div>
        <Form.Item label={tr(resources.personal.surname.label)} extra={tr(resources.personal.surname.extra)}>
          {getFieldDecorator('data.surname', {
            initialValue: utils.getInitialValue(data.surname),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, tr(resources.personal.surname.label)) }],
          })(
            <Input maxLength={33}/>
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">{tr(resources.personal.section_descr_2)}</div>
        </div>
        <Form.Item label={tr(resources.personal.given_name.label)} extra={tr(resources.personal.given_name.extra)}>
          {getFieldDecorator('data.given_name', {
            initialValue: utils.getInitialValue(data.given_name),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, tr(resources.personal.given_name.label)) }],
          })(
            <Input maxLength={33}/>
          )}
        </Form.Item>
        <div className="visa-global-field">
          <div className="visa-global-section-description">{tr(resources.personal.section_descr_3)}</div>
        </div>
        <Form.Item label={tr(resources.personal.b_ever_used_other_names.label)}>
          {getFieldDecorator('data.b_ever_used_other_names', {
            initialValue: utils.getInitialValue(data.b_ever_used_other_names),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value={true}>{tr(resources.yes)}</Radio>
              <Radio value={false}>{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_ever_used_other_names') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label={tr(resources.personal.used_other_name.surname.label)} required>
                {getFieldDecorator('data.used_other_name.surname', {
                  initialValue: utils.getInitialValue(data.used_other_name.surname),
                  rules: [{ validator: (rule, value, callback) => this.handleUsedOtherName(rule, value, callback, tr(resources.personal.used_other_name.surname.label)) }],
                })(
                  <Input maxLength={33}/>
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label={tr(resources.personal.used_other_name.given_name.label)} required>
                {getFieldDecorator('data.used_other_name.given_name', {
                  initialValue: utils.getInitialValue(data.used_other_name.given_name),
                  rules: [{ validator: (rule, value, callback) => this.handleUsedOtherName(rule, value, callback, tr(resources.personal.used_other_name.given_name.label)) }],
                })(
                  <Input maxLength={33}/>
                )}
              </Form.Item>
            </Col>
          </Row>}

        <Form.Item label={tr(resources.personal.b_has_telecode_of_name.label)} extra={tr(resources.personal.b_has_telecode_of_name.extra)}>
          {getFieldDecorator('data.b_has_telecode_of_name', {
            initialValue: utils.getInitialValue(data.b_has_telecode_of_name),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value={true}>{tr(resources.yes)}</Radio>
              <Radio value={false}>{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_has_telecode_of_name') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label={tr(resources.personal.telecode_of_name.surname.label)}>
                {getFieldDecorator('data.telecode_of_name.surname', {
                  initialValue: utils.getInitialValue(data.telecode_of_name.surname),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateTelecodeName(rule, value, callback, "Telecode Surname") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label={tr(resources.personal.telecode_of_name.given_name.label)}>
                {getFieldDecorator('data.telecode_of_name.given_name', {
                  initialValue: utils.getInitialValue(data.telecode_of_name.given_name),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateTelecodeName(rule, value, callback, "Telecode Given Name") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>}
        <Form.Item label={tr(resources.personal.sex.label)}>
          {getFieldDecorator('data.sex', {
            initialValue: utils.getInitialValue(data.sex),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value='M'>{tr(resources.personal.sex.male)}</Radio>
              <Radio value='F'>{tr(resources.personal.sex.female)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label={tr(resources.personal.martial_status.label)}>
          {getFieldDecorator('data.martial_status', {
            initialValue: utils.getInitialValue(data.martial_status),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              {tr(martial_status_options).map((option, index) => <Radio value={option.value} key={index}>{option.label}</Radio>)}
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.martial_status') == 'O' && <Form.Item label={tr(resources.personal.martial_other_explain.label)} required>
          {getFieldDecorator('data.martial_other_explain', {
            initialValue: utils.getInitialValue(data.martial_other_explain),
            rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, tr(resources.personal.martial_other_explain.label), true) }]
          })(
            <TextArea style={{textTransform: 'uppercase'}} rows={4}/>
          )}
        </Form.Item>}
        <VisaDatePicker 
          label={tr(resources.personal.date_birth.label)}
          field="data.date_birth"
          initialValue={data.date_birth}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: this.props.validators.validateEarlierDate }]}
          required={true}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.place_of_birth.city.label)}>
              {getFieldDecorator('data.place_of_birth.city', {
                initialValue: utils.getInitialValue(data.place_of_birth.city),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.personal.place_of_birth.city.label), true) }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.place_of_birth.state.label)}>
              {getFieldDecorator('data.place_of_birth.state', {
                initialValue: utils.getInitialValue(data.place_of_birth.state),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.personal.place_of_birth.state.label), true) }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.place_of_birth.country.label)}>
              {getFieldDecorator('data.place_of_birth.country', {
                initialValue: utils.getInitialValue(data.place_of_birth.country),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect values={constants.countries_regions_option_value_list} labels={constants.countries_regions_option_label_list} tr={tr}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.nationality.label)} required>
              {getFieldDecorator('data.nationality', {
                initialValue: utils.getInitialValue(data.nationality),
                rules: [{ validator: this.handleNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()} tr={tr}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label={tr(resources.personal.b_more_nationality.label)}>
          {getFieldDecorator('data.b_more_nationality', {
            initialValue: utils.getInitialValue(data.b_more_nationality),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value={true}>{tr(resources.yes)}</Radio>
              <Radio value={false}>{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.props.form.getFieldValue('data.b_more_nationality') &&
          <>
            <Form.Item label={tr(resources.personal.other_nationality.label)}>
              {getFieldDecorator('data.other_nationality', {
                initialValue: utils.getInitialValue(data.other_nationality),
                rules: [{ validator: this.handleMoreNationalityChange }],
              })(
                <VisaSelect combines={constants.nationality_option_list_func()} tr={tr}/>
              )}
            </Form.Item>
            <Form.Item label={tr(resources.personal.b_has_other_nationality_passport.label)}>
              {getFieldDecorator('data.b_has_other_nationality_passport', {
                initialValue: utils.getInitialValue(data.b_has_other_nationality_passport),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <Radio.Group>
                  <Radio value={true}>{tr(resources.yes)}</Radio>
                  <Radio value={false}>{tr(resources.no)}</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {
              this.props.form.getFieldValue('data.b_has_other_nationality_passport') &&
                <Form.Item label={tr(resources.personal.other_nationality_passport.label)}>
                  {getFieldDecorator('data.other_nationality_passport', {
                    initialValue: utils.getInitialValue(data.other_nationality_passport),
                    rules: [{ required: true, message: tr(resources.validations.required) }],
                  })(
                    <Input maxLength={20}/>
                  )}
                </Form.Item>
            }
          </>
        }
        <Form.Item label={tr(resources.personal.b_permanent_resident_other_than_nationality.label)}>
          {getFieldDecorator('data.b_permanent_resident_other_than_nationality', {
            initialValue: utils.getInitialValue(data.b_permanent_resident_other_than_nationality),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value={true}>{tr(resources.yes)}</Radio>
              <Radio value={false}>{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {
          this.props.form.getFieldValue('data.b_permanent_resident_other_than_nationality') &&
            <Form.Item label={tr(resources.personal.permanent_resident_country.label)}>
              {getFieldDecorator('data.permanent_resident_country', {
                initialValue: utils.getInitialValue(data.permanent_resident_country),
                rules: [{ validator: this.handleOtherResidentChange }],
              })(
                <VisaSelect values={constants.countries_regions_option_value_list} labels={constants.countries_regions_option_label_list} tr={tr}/>
              )}
            </Form.Item>
        }
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.personal.section_title_4)}</h2>
          <div className="visa-global-section-description">{tr(resources.personal.section_descr_4)}</div>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.national_id_number.label)} extra={tr(resources.personal.national_id_number.extra)}>
              {getFieldDecorator('data.national_id_number', {
                initialValue: utils.getInitialValue(data.national_id_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNationalID(rule, value, callback, tr(resources.personal.national_id_number.label), false) }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.social_security_number.label)} extra={tr(resources.personal.social_security_number.extra)}>
              {getFieldDecorator('data.social_security_number', {
                initialValue: utils.getInitialValue(data.social_security_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateSSN(rule, value, callback, tr(resources.personal.social_security_number.label)) }],
              })(
                <Input maxLength={9}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label={tr(resources.personal.tax_id_number.label)} extra={tr(resources.personal.tax_id_number.extra)}>
              {getFieldDecorator('data.tax_id_number', {
                initialValue: utils.getInitialValue(data.tax_id_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, tr(resources.personal.tax_id_number.label)) }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_3 = Form.create()(MyForm)
export default Form_DS160_3;
