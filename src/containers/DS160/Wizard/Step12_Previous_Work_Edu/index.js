import React, { Component } from 'react'
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd'
import * as constants from 'utils/constants'
import VisaRadio from 'components/VisaRadio'
import VisaAddress from 'components/VisaAddress'
import VisaInput from 'components/VisaInput'
import VisaDatePicker from 'components/VisaDatePicker'
import * as utils from 'utils'
import resources from 'utils/resources'
import _ from 'lodash'

const { Option } = Select
const { TextArea } = Input

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  handleDates = data => {
    if (data.emp_info && data.emp_info.date_from) {
      data.emp_info.date_from = data.emp_info.date_from.format('DD/MMM/YYYY')
    }
    if (data.emp_info && data.emp_info.date_to) {
      data.emp_info.date_to = data.emp_info.date_to.format('DD/MMM/YYYY')
    }
    if (data.edu_info && data.edu_info.date_from) {
      data.edu_info.date_from = data.edu_info.date_from.format('DD/MMM/YYYY')
    }
    if (data.edu_info && data.edu_info.date_to) {
      data.edu_info.date_to = data.edu_info.date_to.format('DD/MMM/YYYY')
    }

    return data
  }

  render() {
    const { getFieldDecorator, isFieldTouched, setFieldsValue, getFieldValue } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }

    const { showPrev, showNext, onPrev, onNext, data, date_birth, tr } = this.props
    getFieldDecorator('data.b_previously_employed', { initialValue: utils.getInitialValue(data.b_previously_employed) })
    getFieldDecorator('data.b_edu_secondary_level', { initialValue: utils.getInitialValue(data.b_edu_secondary_level) })

    if (this.props.form.getFieldValue('data.b_previously_employed') && data.emp_info.supervisor == null) {
      data.emp_info.supervisor = {
        surname: null,
        given_name: null,
      }
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.prev_work_or_edu.section_title)}</h2>
        </div>

        <VisaRadio
          label={tr(resources.prev_work_or_edu.b_previously_employed.label)}
          field="data.b_previously_employed"
          initialValue={data.b_previously_employed}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        {this.props.form.getFieldValue('data.b_previously_employed') && (
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.prev_work_or_edu.emp_info.name.label)}
                  field="data.emp_info.name"
                  initialValue={data.emp_info.name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, 'Employer Name', true) }]}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaAddress
                  label={tr(resources.prev_work_or_edu.emp_info.address.label)}
                  field="data.emp_info.address"
                  initialValue={data.emp_info.address}
                  getFieldDecorator={getFieldDecorator}
                  validators={this.props.validators}
                  us_address={false}
                  tr={tr}
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.prev_work_or_edu.emp_info.address.tel_number)}
                  field="data.emp_info.address.tel_number"
                  initialValue={_.get(data, 'emp_info.address.tel_number')}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Telephone number', true) }]}
                  maxLength={20}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.prev_work_or_edu.emp_info.job_title.label)}
                  field="data.emp_info.job_title"
                  initialValue={data.emp_info.job_title}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, 'Job Title', true) }]}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.prev_work_or_edu.emp_info.supervisor.surname.label)}
                  extra={tr(resources.prev_work_or_edu.emp_info.supervisor.surname.extra)}
                  field="data.emp_info.supervisor.surname"
                  initialValue={data.emp_info.supervisor.surname}
                  getFieldDecorator={getFieldDecorator}
                  required={false}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Surname', false) }]}
                  maxLength={33}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.prev_work_or_edu.emp_info.supervisor.given_name.label)}
                  extra={tr(resources.prev_work_or_edu.emp_info.supervisor.given_name.extra)}
                  field="data.emp_info.supervisor.given_name"
                  initialValue={data.emp_info.supervisor.given_name}
                  getFieldDecorator={getFieldDecorator}
                  required={false}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Given Name', false) }]}
                  maxLength={33}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.prev_work_or_edu.emp_info.date_from.label)}
                  field="data.emp_info.date_from"
                  initialValue={data.emp_info.date_from}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePreviousVisitdDate(rule, value, callback, 'Employment Date From', date_birth) }]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.prev_work_or_edu.emp_info.date_to.label)}
                  field="data.emp_info.date_to"
                  initialValue={data.emp_info.date_to}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[
                    {
                      validator: (rule, value, callback) =>
                        this.props.validators.validateBetweenDate(rule, value, callback, 'Employment Date To', this.props.form.getFieldValue('data.emp_info.date_from'), true),
                    },
                  ]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item label={tr(resources.prev_work_or_edu.emp_info.duty_explain.label)} extra={tr(resources.prev_work_or_edu.emp_info.duty_explain.extra)}>
                  {getFieldDecorator('data.emp_info.duty_explain', {
                    initialValue: utils.getInitialValue(data.emp_info.duty_explain),
                    rules: [{ required: true, message: tr(resources.validations.required) }],
                  })(<TextArea style={{ textTransform: 'uppercase' }} rows={3} />)}
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        <VisaRadio
          label={tr(resources.prev_work_or_edu.b_edu_secondary_level.label)}
          field="data.b_edu_secondary_level"
          initialValue={data.b_edu_secondary_level}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        {this.props.form.getFieldValue('data.b_edu_secondary_level') && (
          <>
            <VisaInput
              label={tr(resources.prev_work_or_edu.edu_info.name.label)}
              field="data.edu_info.name"
              initialValue={data.edu_info.name}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, 'Name of Institution', true) }]}
              tr={tr}
            />

            <VisaAddress
              label={tr(resources.prev_work_or_edu.edu_info.address.label)}
              field="data.edu_info.address"
              initialValue={data.edu_info.address}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              us_address={false}
              tr={tr}
            />

            <VisaInput
              label={tr(resources.prev_work_or_edu.edu_info.course.label)}
              field="data.edu_info.course"
              initialValue={data.edu_info.course}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, tr(resources.prev_work_or_edu.edu_info.course.label), true) }]}
              tr={tr}
            />

            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.prev_work_or_edu.edu_info.date_from.label)}
                  field="data.edu_info.date_from"
                  initialValue={data.edu_info.date_from}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, 'Date of Attendance From', false) }]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.prev_work_or_edu.edu_info.date_to.label)}
                  field="data.edu_info.date_to"
                  initialValue={data.edu_info.date_to}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[
                    {
                      validator: (rule, value, callback) =>
                        this.props.validators.validateAttendanceTo(rule, value, callback, 'Date of Attendance To', this.props.form.getFieldValue('data.edu_info.date_from'), false),
                    },
                  ]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
            </Row>
          </>
        )}

        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
                FIRST
              </Button>
              {showPrev && (
                <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
                  Prev
                </Button>
              )}
              {showNext && (
                <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
                  Next
                </Button>
              )}
            </div>
          )}
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
              Prev
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
              Next
            </Button>
          )}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>
            Save and Continue Later
          </Button>
        </div>
      </Form>
    )
  }
}
const Form_DS160_12_Previous_Work_Edu = Form.create()(MyForm)
export default Form_DS160_12_Previous_Work_Edu
