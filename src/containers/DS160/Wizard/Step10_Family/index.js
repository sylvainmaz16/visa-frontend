import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, InputNumber } from 'antd';
import * as constants from 'utils/constants'
import VisaSelect from "components/VisaSelect";
import moment from 'moment'
import VisaRadio from "components/VisaRadio";
import VisaAddress from "components/VisaAddress";
import VisaInput from "components/VisaInput";
import VisaInputWithCheck from 'components/VisaInputWithCheck';
import VisaSelectItem from "components/VisaSelectItem";
import VisaDatePicker from "components/VisaDatePicker";
import VisaDatePickerWithCheck from "components/VisaDatePickerWithCheck";
import VisaOtherRelatives from 'components/VisaOtherRelatives'
import VisaFormerSpouses from "components/VisaFormerSpouses";
import * as utils from 'utils'
import VisaDatePickerWithCheckInline from "components/VisaDatePickerWithCheckInline";
import resources from "utils/resources";

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
    
  handleDates = (data) => {
    if(data.father && data.father.birthday)
      data.father.birthday = data.father.birthday.format('DD/MMM/YYYY')
    if(data.mother && data.mother.birthday)
      data.mother.birthday = data.mother.birthday.format('DD/MMM/YYYY')
    if(data.spouse && data.spouse.birthday)
      data.spouse.birthday = data.spouse.birthday.format('DD/MMM/YYYY')
    if( data.former_spouse ) {
      for(let i = 0; i < data.former_spouse.length; i++) {
        if(data.former_spouse[i] && data.former_spouse[i].birthday)
          data.former_spouse[i].birthday = data.former_spouse[i].birthday.format('DD/MMM/YYYY')
        if(data.former_spouse[i] && data.former_spouse[i].marriage_date)
          data.former_spouse[i].marriage_date = data.former_spouse[i].marriage_date.format('DD/MMM/YYYY')
        if(data.former_spouse[i] && data.former_spouse[i].end_date)
          data.former_spouse[i].end_date = data.former_spouse[i].end_date.format('DD/MMM/YYYY')
      }
    }
    
    
    return data
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

    const { showPrev, showNext, onPrev, onNext, data, date_birth, martial_status, tr } = this.props
    
    getFieldDecorator('data.father.surname_NA', { initialValue: utils.getInitialValue(data.father.surname_NA) });
    getFieldDecorator('data.father.given_name_NA', { initialValue: utils.getInitialValue(data.father.given_name_NA) });
    getFieldDecorator('data.father.birthday_NA', { initialValue: utils.getInitialValue(data.father.birthday_NA) });
    getFieldDecorator('data.father.b_in_US', { initialValue: utils.getInitialValue(data.father.b_in_US) });
    getFieldDecorator('data.mother.surname_NA', { initialValue: utils.getInitialValue(data.mother.surname_NA) });
    getFieldDecorator('data.mother.given_name_NA', { initialValue: utils.getInitialValue(data.mother.given_name_NA) });
    getFieldDecorator('data.mother.birthday_NA', { initialValue: utils.getInitialValue(data.mother.birthday_NA) });
    getFieldDecorator('data.mother.b_in_US', { initialValue: utils.getInitialValue(data.mother.b_in_US) });
    getFieldDecorator('data.b_other_relative', { initialValue: utils.getInitialValue(data.b_other_relative) });
    getFieldDecorator('data.b_more_relatives', { initialValue: utils.getInitialValue(data.b_more_relatives) });
    getFieldDecorator('data.spouse.address_type', { initialValue: utils.getInitialValue(data.spouse.address_type) });

    if(!data.others) {
      data.others = [
        {
          surname: null,
          given_name: null,
          relationship: null,
          status: null
        }
      ]
    }

    const martial_header = {
      'M': 'Spouse',
      'C': 'Spouse',
      'P': 'Partner',
      'W': 'Deceased Spouse',
      'D': 'Former Spouse',
      'L': 'Spouse',
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.family.section_title)}</h2>
        </div>

        <Form.Item label={tr(resources.family.father.label)} required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInputWithCheck
                label={tr(resources.family.father.surname.label)}
                extra={tr(resources.family.father.surname.extra)}
                field="data.father.surname"
                initialValue={data.father.surname}
                getFieldDecorator={getFieldDecorator}
                
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname", !this.props.form.getFieldValue('data.father.surname_NA')) }]}
                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                checkField="data.father.surname_NA"
                checkValue={data.father.surname_NA}
                tr={tr}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInputWithCheck
                label={tr(resources.family.father.given_name.label)}
                extra={tr(resources.family.father.given_name.extra)}
                field="data.father.given_name"
                initialValue={data.father.given_name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name", !this.props.form.getFieldValue('data.father.given_name_NA')) }]}
                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                checkField="data.father.given_name_NA"
                checkValue={data.father.given_name_NA}
                tr={tr}
              />
            </Col>
          </Row>
          {
            (!this.props.form.getFieldValue('data.father.surname_NA') || !this.props.form.getFieldValue('data.father.given_name_NA')) &&
            <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePickerWithCheckInline
                  label={tr(resources.family.father.birthday.label)}
                  field="data.father.birthday"
                  initialValue={data.father.birthday}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateParentBirthDate(rule, value, callback, "Father's date of birth", date_birth, !this.props.form.getFieldValue('data.father.birthday_NA')) }]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  checkField="data.father.birthday_NA"
                  checkValue={data.father.birthday_NA}
                  tr={tr}
                />
              </Col>
            </Row>
            
            <VisaRadio
              label={tr(resources.family.father.b_in_US.label)}
              field="data.father.b_in_US"
              initialValue={data.father.b_in_US}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
            {
              this.props.form.getFieldValue('data.father.b_in_US') &&
              <VisaSelectItem
                label={tr(resources.family.father.status.label)}
                field="data.father.status"
                initialValue={data.father.status}
                content={{
                  combines: constants.export_list(tr(constants.US_Live_Status))
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
            }
            </>
          }
          
        </Form.Item>

        <Form.Item label={tr(resources.family.mother.label)} required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInputWithCheck
                label={tr(resources.family.mother.surname.label)}
                extra={tr(resources.family.mother.surname.extra)}
                field="data.mother.surname"
                initialValue={data.mother.surname}
                getFieldDecorator={getFieldDecorator}
                
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname", !this.props.form.getFieldValue('data.mother.surname_NA')) }]}
                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                checkField="data.mother.surname_NA"
                checkValue={data.mother.surname_NA}
                tr={tr}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInputWithCheck
                label={tr(resources.family.mother.given_name.label)}
                extra={tr(resources.family.mother.given_name.extra)}
                field="data.mother.given_name"
                initialValue={data.mother.given_name}
                getFieldDecorator={getFieldDecorator}

                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name", !this.props.form.getFieldValue('data.mother.given_name_NA')) }]}
                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                checkField="data.mother.given_name_NA"
                checkValue={data.mother.given_name_NA}
                tr={tr}
              />
            </Col>
          </Row>
          {
            (!this.props.form.getFieldValue('data.mother.surname_NA') || !this.props.form.getFieldValue('data.mother.given_name_NA')) &&
            <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePickerWithCheckInline
                  label={tr(resources.family.mother.birthday.label)}
                  field="data.mother.birthday"
                  initialValue={data.mother.birthday}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateParentBirthDate(rule, value, callback, "Mother's date of birth", date_birth, !this.props.form.getFieldValue('data.mother.birthday_NA')) }]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  checkField="data.mother.birthday_NA"
                  checkValue={data.mother.birthday_NA}
                  tr={tr}
                />
              </Col>
            </Row>
            
            <VisaRadio
              label={tr(resources.family.mother.b_in_US.label)}
              field="data.mother.b_in_US"
              initialValue={data.mother.b_in_US}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
            {
              this.props.form.getFieldValue('data.mother.b_in_US') &&
              <VisaSelectItem
                label={tr(resources.family.mother.status.label)}
                field="data.mother.status"
                initialValue={data.mother.status}
                content={{
                  combines: constants.export_list(tr(constants.US_Live_Status))
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
            }
            </>
          }
        </Form.Item>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.family.section_title_relatives)}</h2>
        </div>

        <VisaRadio
          label={tr(resources.family.b_other_relative.label)}
          extra={tr(resources.family.b_other_relative.extra)}
          field="data.b_other_relative"
          initialValue={data.b_other_relative}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        {   
          this.props.form.getFieldValue('data.b_other_relative') &&
          <Form.Item label={tr(resources.family.others.label)}>
            <VisaOtherRelatives 
              getFieldDecorator={getFieldDecorator}
              getFieldValue={getFieldValue}
              setFieldsValue={setFieldsValue}
              initialValue={data.others}
              arrayField="data.others"
              keysField="copy.others"
              validators={this.props.validators}
              martial_status={martial_status}
              tr={tr}
            />
          </Form.Item>
        }

        {
          this.props.form.getFieldValue('data.b_other_relative') == false &&
          <VisaRadio
            label={tr(resources.family.b_more_relatives.label)}
            field="data.b_more_relatives"
            initialValue={data.b_more_relatives}
            getFieldDecorator={getFieldDecorator}
            tr={tr}
          />
        }

        {martial_header[martial_status] && 
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.family.section_title_family_information)}: {martial_header[martial_status]}</h2>
          </div>
        }
        {
          (martial_header[martial_status] == 'Spouse' || martial_header[martial_status] == 'Partner') &&
            <Form.Item label={tr(resources.family.spouse.label)} required>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label={tr(resources.family.spouse.surname.label)}
                    field="data.spouse.surname"
                    initialValue={data.spouse.surname}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                    maxLength={33}
                    tr={tr}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label={tr(resources.family.spouse.given_name.label)}
                    field="data.spouse.given_name"
                    initialValue={data.spouse.given_name}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                    maxLength={33}
                    tr={tr}
                  />
                </Col>
              </Row>
              <VisaDatePicker 
                label={tr(resources.family.spouse.birthday.label)}
                field="data.spouse.birthday"
                initialValue={data.spouse.birthday}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, true) }]}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                tr={tr}
              />
              <VisaSelectItem
                label={tr(resources.family.spouse.nationality.label)}
                field="data.spouse.nationality"
                initialValue={data.spouse.nationality}
                content={{
                  combines: constants.nationality_option_list_func()
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
              <Form.Item label={tr(resources.family.spouse.place_of_birth.label)}>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaInput
                      label={tr(resources.family.spouse.place_of_birth.city.label)}
                      extra={tr(resources.family.spouse.place_of_birth.city.extra)}
                      field="data.spouse.place_of_birth.city"
                      initialValue={data.spouse.place_of_birth.city}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                      maxLength={20}
                      tr={tr}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaSelectItem
                      label={tr(resources.family.spouse.place_of_birth.country.label)}
                      field="data.spouse.place_of_birth.country"
                      initialValue={data.spouse.place_of_birth.country}
                      content={{
                        values: constants.countries_regions_option_value_list,
                        labels: constants.countries_regions_option_label_list,
                      }}
                      getFieldDecorator={getFieldDecorator}
                      tr={tr}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <VisaSelectItem
                label={tr(resources.family.spouse.address_type.label)}
                field="data.spouse.address_type"
                initialValue={data.spouse.address_type}
                content={{
                  combines: constants.export_list(tr(constants.spouse_address_type))
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
              {
                this.props.form.getFieldValue('data.spouse.address_type') == 'O' && 
                <VisaAddress 
                  label={tr(resources.family.spouse.address.label)}
                  field="data.spouse.address"
                  initialValue={data.spouse.address}
                  getFieldDecorator={getFieldDecorator}
                  validators={this.props.validators}
                  us_address={false}
                  tr={tr}
                />
              }
            </Form.Item>
        }

        {
          (martial_header[martial_status] == 'Deceased Spouse') &&
            <Form.Item required>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label={tr(resources.family.spouse.surname.label)}
                    field="data.spouse.surname"
                    initialValue={data.spouse.surname}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                    tr={tr}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label={tr(resources.family.spouse.given_name.label)}
                    field="data.spouse.given_name"
                    initialValue={data.spouse.given_name}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                    tr={tr}
                  />
                </Col>
              </Row>
              <VisaDatePicker 
                label={tr(resources.family.spouse.birthday.label)}
                field="data.spouse.birthday"
                initialValue={data.spouse.birthday}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, true) }]}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                tr={tr}
              />
              <VisaSelectItem
                label={tr(resources.family.spouse.nationality.label)}
                field="data.spouse.nationality"
                initialValue={data.spouse.nationality}
                content={{
                  combines: constants.nationality_option_list_func()
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
              <Form.Item label={tr(resources.family.spouse.place_of_birth.label)}>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaInput
                      label={tr(resources.family.spouse.place_of_birth.city.label)}
                      extra={tr(resources.family.spouse.place_of_birth.city.extra)}
                      field="data.spouse.place_of_birth.city"
                      initialValue={data.spouse.place_of_birth.city}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                      tr={tr}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaSelectItem
                      label={tr(resources.family.spouse.place_of_birth.country.label)}
                      field="data.spouse.place_of_birth.country"
                      initialValue={data.spouse.place_of_birth.country}
                      content={{
                        values: constants.countries_regions_option_value_list,
                        labels: constants.countries_regions_option_label_list,
                      }}
                      getFieldDecorator={getFieldDecorator}
                      tr={tr}
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Form.Item>
        }
        {
          martial_header[martial_status] == 'Former Spouse' &&
          <>
            <Form.Item label={tr(resources.family.former_spouse_number.label)} labelCol={{md: {span: 6}, sm: {span: 12}}} wrapperCol={{md: {span: 6}, sm: {span: 12}}}>
              {getFieldDecorator('data.former_spouse_number', {
                initialValue: utils.getInitialValue(data.former_spouse_number),
                rules: [{ validator: (rule, value, callback) => this.props.validators.formerSpouseNumberValidator(rule, value, callback, this.props.form.getFieldValue('data.former_spouse').length) }],
              })(
                <InputNumber min={1} max={10} maxLength={1} />
              )}
            </Form.Item>
            <VisaFormerSpouses 
              label={tr(resources.family.former_spouse.label)}
              getFieldDecorator={getFieldDecorator}
              getFieldValue={getFieldValue}
              setFieldsValue={setFieldsValue}
              initialValue={data.former_spouse}
              arrayField="data.former_spouse"
              keysField="copy.former_spouse"
              validators={this.props.validators}
              tr={tr}
            />
          </>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_10_Family = Form.create()(MyForm)
export default Form_DS160_10_Family;
