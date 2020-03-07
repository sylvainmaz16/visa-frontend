import React, { Component } from 'react'
import { Form, Button, Input, Row, Col } from 'antd'
import * as constants from 'utils/constants'
import VisaRadio from 'components/VisaRadio'
import VisaInput from 'components/VisaInput'
import VisaSelectItem from 'components/VisaSelectItem'
import VisaDatePicker from 'components/VisaDatePicker'
import VisaDatePickerWithCheck from 'components/VisaDatePickerWithCheck'
import * as utils from 'utils'
import VisaLostPassports from 'components/VisaLostPassports'
import resources from 'utils/resources'
import _ from 'lodash'

const { TextArea } = Input

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  handleDates = data => {
    if (data.issuance_date) {
      data.issuance_date = data.issuance_date.format('DD/MMM/YYYY')
    }
    if (data.expiration_date) {
      data.expiration_date = data.expiration_date.format('DD/MMM/YYYY')
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

    if (data.lost_info.constructor != Array) {
      data.lost_info = [
        {
          number: null,
          number_NA: null,
          country: null,
          explain: null,
        },
      ]
    }

    getFieldDecorator('data.doc_type', { initialValue: utils.getInitialValue(data.doc_type) })
    getFieldDecorator('data.b_ever_lost_passport', { initialValue: utils.getInitialValue(data.b_ever_lost_passport) })
    getFieldDecorator('data.expiration_date_NA', { initialValue: utils.getInitialValue(data.expiration_date_NA) })
    // getFieldDecorator('data.lost_info.number_NA', { initialValue: utils.getInitialValue(data.lost_info.number_NA) })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.passport.section_title)}</h2>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem
              label={tr(resources.passport.doc_type.label)}
              field="data.doc_type"
              initialValue={data.doc_type}
              content={{
                combines: constants.export_list(tr(constants.passport_type_options)),
              }}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
          </Col>
        </Row>

        {this.props.form.getFieldValue('data.doc_type') == 'T' && (
          <Form.Item label={tr(resources.passport.doc_type_explain.label)}>
            {getFieldDecorator('data.doc_type_explain', {
              initialValue: utils.getInitialValue(data.doc_type_explain),
              rules: [{ required: true, message: tr(resources.validations.required) }],
            })(<TextArea rows={5} />)}
          </Form.Item>
        )}

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.passport.doc_number.label)}
              field="data.doc_number"
              initialValue={data.doc_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, tr(resources.passport.doc_number.label), true) }]}
              maxLength={20}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.passport.book_number.label)}
              extra={tr(resources.passport.book_number.extra)}
              field="data.book_number"
              initialValue={data.book_number}
              getFieldDecorator={getFieldDecorator}
              required={false}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, tr(resources.passport.book_number.label), false) }]}
              maxLength={20}
              tr={tr}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem
              label={tr(resources.passport.doc_authority.label)}
              field="data.doc_authority"
              initialValue={data.doc_authority}
              content={{ combines: constants.export_list(constants.passport_authority_list) }}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.passport.issued_location.city)}
              field="data.issued_location.city"
              initialValue={_.get(data, 'issued_location.city')}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.passport.issued_location.city), true) }]}
              maxLength={25}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.passport.issued_location.state)}
              field="data.issued_location.state"
              initialValue={_.get(data, 'issued_location.state')}
              required={false}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.passport.issued_location.state), true) }]}
              maxLength={25}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem
              label={tr(resources.passport.issued_location.country)}
              field="data.issued_location.country"
              initialValue={_.get(data, 'issued_location.country')}
              content={{
                values: constants.countries_regions_option_value_list,
                labels: constants.countries_regions_option_label_list,
              }}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
          </Col>
        </Row>

        <VisaDatePicker
          label={tr(resources.passport.issuance_date.label)}
          field="data.issuance_date"
          initialValue={data.issuance_date}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePreviousVisitdDate(rule, value, callback, tr(resources.passport.issuance_date.label), date_birth) }]}
          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 24 }} style={{ display: 'flex', alignItems: 'center' }}>
            <VisaDatePickerWithCheck
              label={tr(resources.passport.expiration_date.label)}
              field="data.expiration_date"
              initialValue={data.expiration_date}
              getFieldDecorator={getFieldDecorator}
              customRule={[
                {
                  validator: (rule, value, callback) =>
                    this.props.validators.validateExpirationDate(rule, value, callback, tr(resources.passport.expiration_date.label), this.props.form.getFieldValue('data.issuance_date')),
                },
              ]}
              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
              checkField="data.expiration_date_NA"
              checkValue={data.expiration_date_NA}
              checkLabel={tr(resources.passport.expiration_date.check)}
              tr={tr}
            />
          </Col>
        </Row>

        <VisaRadio label={tr(resources.passport.b_ever_lost_passport.label)} field="data.b_ever_lost_passport" initialValue={data.b_ever_lost_passport} getFieldDecorator={getFieldDecorator} tr={tr} />

        {this.props.form.getFieldValue('data.b_ever_lost_passport') && (
          <>
            <div className="visa-global-field visa-global-border-bottom">
              <h2 className="visa-global-section-title">{tr(resources.passport.section_title_lost_passport)}</h2>
            </div>
            <VisaLostPassports
              label={tr(resources.passport.lost_info.label)}
              getFieldDecorator={getFieldDecorator}
              getFieldValue={getFieldValue}
              setFieldsValue={setFieldsValue}
              initialValue={data.lost_info}
              arrayField="data.lost_info"
              keysField="copy.lost_info"
              validators={this.props.validators}
              tr={tr}
            />
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
const Form_DS160_8_Passport = Form.create()(MyForm)
export default Form_DS160_8_Passport
