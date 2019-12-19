import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, InputNumber } from 'antd';
import * as constants from 'utils/constants'
import VisaSelect from "components/VisaSelect";
import moment from 'moment'
import VisaAddress from "components/VisaAddress";
import VisaDatePicker from 'components/VisaDatePicker'
import * as utils from 'utils'
import resources from "utils/resources";

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  handleDates = (data) => {
    if (data.travel_plan && data.travel_plan.date_of_arrival)
      data.travel_plan.date_of_arrival = data.travel_plan.date_of_arrival.format('DD/MMM/YYYY')
    return data
  }

  onSelect = (e, field) => {
    if (field == 'purpose_of_trip') {
      this.props.form.setFieldsValue({ 'data.other_purpose_of_trip': undefined, 'data.purpose_info_type': undefined, 'data.travel_plan.length_of_stay.length': undefined, 'data.travel_plan.length_of_stay.period': undefined });
    }
    else if (field == 'other_purpose_of_trip') {
      const field = {
        purpose_of_trip: this.props.form.getFieldValue('data.purpose_of_trip'),
        other_purpose_of_trip: e,
      }
      if (field.purpose_of_trip && field.other_purpose_of_trip) {

        let purpose_info_type = constants.purpose_of_trip_advanced_specify_extra[field.purpose_of_trip][field.other_purpose_of_trip]
        this.props.form.setFieldsValue({ 'data.purpose_info_type': purpose_info_type });
      }
    }
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


    const { showPrev, showNext, onPrev, onNext, data, martial_status, tr } = this.props

    getFieldDecorator('data.purpose_of_trip', { initialValue: utils.getInitialValue(data.purpose_of_trip) });
    getFieldDecorator('data.other_purpose_of_trip', { initialValue: utils.getInitialValue(data.other_purpose_of_trip) });
    getFieldDecorator('data.paying_person_for_trip', { initialValue: utils.getInitialValue(data.paying_person_for_trip) });
    getFieldDecorator('data.paying_person_info.b_same_address', { initialValue: utils.getInitialValue(data.paying_person_info.b_same_address) });
    getFieldDecorator('data.purpose_info_type', { initialValue: utils.getInitialValue(data.purpose_info_type) });
    getFieldDecorator('data.travel_plan.length_of_stay.period', { initialValue: utils.getInitialValue(data.travel_plan.length_of_stay.period) });

    const field = {
      purpose_of_trip: this.props.form.getFieldValue('data.purpose_of_trip'),
      other_purpose_of_trip: this.props.form.getFieldValue('data.other_purpose_of_trip'),
      paying_person_for_trip: this.props.form.getFieldValue('data.paying_person_for_trip'),
      paying_person_info_same_addr: this.props.form.getFieldValue('data.paying_person_info.b_same_address'),
      purpose_info_type: this.props.form.getFieldValue('data.purpose_info_type'),
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.travel.section_title)}</h2>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item label={tr(resources.travel.purpose_of_trip.label)} extra={tr(resources.travel.purpose_of_trip.extra)}>
              {getFieldDecorator('data.purpose_of_trip', {
                initialValue: utils.getInitialValue(data.purpose_of_trip),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect
                  combines={constants.purpose_of_trip_advanced_options_func(tr)}
                  onChange={(e) => this.onSelect(e, 'purpose_of_trip')}
                  tr={tr}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        {
          field.purpose_of_trip &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label={tr(resources.travel.other_purpose_of_trip)}>
                {getFieldDecorator('data.other_purpose_of_trip', {
                  initialValue: utils.getInitialValue(data.other_purpose_of_trip),
                  rules: [{ required: true, message: tr(resources.validations.required) }],
                })(
                  <VisaSelect
                    combines={constants.purpose_of_trip_advanced_specify_options_func(field.purpose_of_trip, tr)}
                    onChange={(e) => this.onSelect(e, 'other_purpose_of_trip')}
                    tr={tr}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        }
        <Form.Item style={{ display: 'none' }}>
          {getFieldDecorator('data.purpose_info_type', {
            initialValue: utils.getInitialValue(data.purpose_info_type),
          })(
            <Input />
          )}
        </Form.Item>
        {
          field.purpose_info_type && field.purpose_info_type.includes('N') &&
          <Form.Item label={tr(resources.travel.purpose_info.label)}>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Form.Item label={tr(resources.travel.purpose_info.surname)} required>
                  {getFieldDecorator('data.purpose_info.surname', {
                    initialValue: utils.getInitialValue(data.purpose_info.surname),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surnames") }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Form.Item label={tr(resources.travel.purpose_info.given_name)} required>
                  {getFieldDecorator('data.purpose_info.given_name', {
                    initialValue: utils.getInitialValue(data.purpose_info.given_name),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        }
        {
          field.purpose_info_type && field.purpose_info_type.includes('P') &&
          <Form.Item label={tr(resources.travel.purpose_info.petition.label)} extra={tr(resources.travel.purpose_info.petition.extra)} required>
            {getFieldDecorator('data.purpose_info.petition', {
              initialValue: utils.getInitialValue(data.purpose_info.petition),
              rules: [{ validator: (rule, value, callback) => this.props.validators.validatePetitionNumber(rule, value, callback, true) }],
            })(
              <Input style={{ textTransform: 'uppercase' }} maxLength={13} />
            )}
          </Form.Item>
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.travel.section_title_2)}</h2>
          <div className="visa-global-section-description">{tr(resources.travel.section_descr_2)}</div>
        </div>

        <VisaDatePicker
          label={tr(resources.travel.travel_plan.date_of_arrival.label)}

          field="data.travel_plan.date_of_arrival"
          initialValue={data.travel_plan.date_of_arrival}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateLaterDate(rule, value, callback, "Intended Date of Arrival") }]}
          required={true}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Form.Item label={tr(resources.travel.travel_plan.length_of_stay.length.label)} extra={tr(resources.travel.travel_plan.length_of_stay.length.extra)} required>
              {getFieldDecorator('data.travel_plan.length_of_stay.length', {
                initialValue: utils.getInitialValue(data.travel_plan.length_of_stay.length),
                rules: [{ required: this.props.form.getFieldValue('data.travel_plan.length_of_stay.period') != 'H', message: tr(resources.validations.required) }],
              })(
                <InputNumber min={1} max={100} maxLength={3} disabled={this.props.form.getFieldValue('data.travel_plan.length_of_stay.period') == 'H'} />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 8, offset: 4 }}>
            <Form.Item label={tr(resources.travel.travel_plan.length_of_stay.period.label)}>
              {getFieldDecorator('data.travel_plan.length_of_stay.period', {
                initialValue: utils.getInitialValue(data.travel_plan.length_of_stay.period),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={(field.purpose_of_trip == 'B' || field.purpose_of_trip == 'C' || field.purpose_of_trip == 'D') ? tr(constants.period_unit_options_v2) : tr(constants.period_unit_options)} tr={tr} />
              )}
            </Form.Item>
          </Col>
        </Row>

        {this.props.form.getFieldValue('data.travel_plan.length_of_stay.period') != 'H' &&
          <Form.Item label={tr(resources.travel.address_you_will_stay.label)}>
            <Form.Item extra={tr(resources.travel.address_you_will_stay.street_addr1)}>
              {getFieldDecorator('data.address_you_will_stay.street_addr1', {
                initialValue: utils.getInitialValue(data.address_you_will_stay.street_addr1),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, "Street Address", true) }]
              })(
                <Input maxLength={40} />
              )}
            </Form.Item>
            <Form.Item extra={tr(resources.travel.address_you_will_stay.street_addr2)}>
              {getFieldDecorator('data.address_you_will_stay.street_addr2', {
                initialValue: utils.getInitialValue(data.address_you_will_stay.street_addr2),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, "Address Line 2", false) }]
              })(
                <Input maxLength={40} />
              )}
            </Form.Item>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Form.Item extra={tr(resources.travel.address_you_will_stay.city)}>
                  {getFieldDecorator('data.address_you_will_stay.city', {
                    initialValue: utils.getInitialValue(data.address_you_will_stay.city),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, "City", true) }]
                  })(
                    <Input maxLength={20} />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Form.Item extra={tr(resources.travel.address_you_will_stay.state)}>
                  {getFieldDecorator('data.address_you_will_stay.state', {
                    initialValue: utils.getInitialValue(data.address_you_will_stay.state),
                    rules: [{ required: true, message: tr(resources.validations.required) }],
                  })(
                    <VisaSelect combines={constants.state_options_list()} tr={tr} />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Form.Item extra={tr(resources.travel.address_you_will_stay.zip_code)}>
                  {getFieldDecorator('data.address_you_will_stay.zip_code', {
                    initialValue: utils.getInitialValue(data.address_you_will_stay.zip_code),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateUSZipCode(rule, value, callback, "ZIP Code") }],
                  })(
                    <Input maxLength={10} />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        }

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item label={tr(resources.travel.paying_person_for_trip.label)}>
              {getFieldDecorator('data.paying_person_for_trip', {
                initialValue: utils.getInitialValue(data.paying_person_for_trip),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={tr(constants.paying_person_for_trip_options)} tr={tr} />
              )}
            </Form.Item>
          </Col>
        </Row>

        {
          (field.paying_person_for_trip == 'O' || field.paying_person_for_trip == 'C') &&
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.travel.section_title_financial_support)}</h2>
          </div>
        }

        {
          field.paying_person_for_trip == 'O' ?
            <>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.surname.label)} extra={tr(resources.travel.paying_person_info.surname.extra)}>
                    {getFieldDecorator('data.paying_person_info.surname', {
                      initialValue: utils.getInitialValue(data.paying_person_info.surname),
                      rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surnames") }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.given_name.label)} extra={tr(resources.travel.paying_person_info.given_name.extra)}>
                    {getFieldDecorator('data.paying_person_info.given_name', {
                      initialValue: utils.getInitialValue(data.paying_person_info.given_name),
                      rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.tel_number.label)}>
                    {getFieldDecorator('data.paying_person_info.tel_number', {
                      initialValue: utils.getInitialValue(data.paying_person_info.tel_number),
                      rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Telephone Number", true) }],
                    })(
                      <Input maxLength={20} />
                    )}
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.email.label)} extra={tr(resources.travel.paying_person_info.email.extra)}>
                    {getFieldDecorator('data.paying_person_info.email', {
                      initialValue: utils.getInitialValue(data.paying_person_info.email),
                      rules: [{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email Address") }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.relationship.label)}>
                    {getFieldDecorator('data.paying_person_info.relationship', {
                      initialValue: utils.getInitialValue(data.paying_person_info.relationship),
                      rules: [{ required: true, message: tr(resources.validations.required) }],
                    })(
                      <VisaSelect combines={martial_status == 'M' || martial_status == 'L' ? tr(constants.paying_person_info_relationship_options) : tr(constants.paying_person_info_relationship_without_spouse_options)} tr={tr} />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item label={tr(resources.travel.paying_person_info.b_same_address.label)}>
                    {getFieldDecorator('data.paying_person_info.b_same_address', {
                      initialValue: utils.getInitialValue(data.paying_person_info.b_same_address),
                      rules: [{ required: true, message: tr(resources.validations.required) }],
                    })(
                      <Radio.Group>
                        <Radio value={true}>{tr(resources.yes)}</Radio>
                        <Radio value={false}>{tr(resources.no)}</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </>
            : field.paying_person_for_trip == 'C' ?
              <>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Form.Item label={tr(resources.travel.paying_org_info.name.label)}>
                      {getFieldDecorator('data.paying_org_info.name', {
                        initialValue: utils.getInitialValue(data.paying_org_info.name),
                        rules: [{ required: true, message: tr(resources.validations.required) }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Form.Item label={tr(resources.travel.paying_org_info.tel_number.label)}>
                      {getFieldDecorator('data.paying_org_info.tel_number', {
                        initialValue: utils.getInitialValue(data.paying_org_info.tel_number),
                        rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, tr(resources.travel.paying_org_info.tel_number.label), true) }],
                      })(
                        <Input maxLength={20} />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Form.Item label={tr(resources.travel.paying_org_info.relationship.label)}>
                      {getFieldDecorator('data.paying_org_info.relationship', {
                        initialValue: utils.getInitialValue(data.paying_org_info.relationship),
                        rules: [{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, tr(resources.travel.paying_org_info.relationship.label), true) }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </>
              : ''
        }
        {
          (field.paying_person_for_trip == 'O' && field.paying_person_info_same_addr == false) || field.paying_person_for_trip == 'C' ?
            <Row gutter={16}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <VisaAddress
                  label={field.paying_person_for_trip == 'C' ? tr(resources.travel.paying_person_info.address.company) : tr(resources.travel.paying_person_info.address.person)}
                  field="data.paying_person_info.address"
                  initialValue={data.paying_person_info.address}
                  getFieldDecorator={getFieldDecorator}
                  validators={this.props.validators}
                  us_address={false}
                  tr={tr}
                />
              </Col>
            </Row>
            : ''
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
const Form_DS160_4_Travel = Form.create()(MyForm)
export default Form_DS160_4_Travel;
