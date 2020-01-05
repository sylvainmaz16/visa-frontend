import React, { Component } from 'react'
import {
  Form, Button, Checkbox, Input, Row, Col,
} from 'antd'
import VisaRadio from 'components/VisaRadio'
import VisaAddress from 'components/VisaAddress'
import VisaInputArray from 'components/VisaInputArray'
import VisaSocialMediaArray from 'components/VisaSocialMediaArray'
import VisaAdditionalSocialMediaArray from 'components/VisaAdditionalSocialMediaArray'
import * as utils from 'utils'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  validateEmailConfirm = (rule, value, callback) => {
    const { form } = this.props
    if (value !== form.getFieldValue('data.email')) {
      callback('Please input correctly')

      return
    }
    callback()
  };

  validatePhoneNumbers = (rule, value, callback, field, required) => {
    const { form } = this.props
    if (!value) {
      if (required) callback('This field is required')
      else callback()

      return
    }
    if (/^\d+$/.test(value) === false) {
      callback(`${field} accepts only numbers (0-9)`)

      return
    }

    const numbers = [form.getFieldValue('data.phone_info.work'), form.getFieldValue('data.phone_info.home'), form.getFieldValue('data.phone_info.mobile')]
    const conflicts = numbers.filter(number => (number !== undefined) && (number === value))
    if (conflicts && conflicts.length > 1) {
      callback('The given phone number has already been entered.')

      return
    }

    callback()
  }

  render() {
    const { form, validators } = this.props
    const { getFieldDecorator, getFieldValue, setFieldsValue } = form

    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }

    const {
      showPrev, showNext, data, tr, handlePrev, handleNext, handleSave,
    } = this.props

    getFieldDecorator('data.b_diff_with_home', { initialValue: utils.getInitialValue(data.b_diff_with_home) })
    getFieldDecorator('data.b_additional_phones', { initialValue: utils.getInitialValue(data.b_additional_phones) })
    getFieldDecorator('data.b_additional_emails', { initialValue: utils.getInitialValue(data.b_additional_emails) })
    getFieldDecorator('data.b_additional_social_media', { initialValue: utils.getInitialValue(data.b_additional_social_media) })

    // getFieldDecorator('data.social_media_info.platform', { initialValue: utils.getInitialValue(data.social_media_info.platform) });
    // if( typeof(data.social_media_info) != 'Array' ) {
    //   let temp = data.social_media_info
    //   data.social_media_info = []
    // }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.address_and_phone.section_title)}</h2>
        </div>

        <VisaAddress
          label={tr(resources.address_and_phone.home_addr.label)}
          field="data.home_addr"
          initialValue={data.home_addr}
          getFieldDecorator={getFieldDecorator}
          validators={validators}
          us_address={false}
          tr={tr}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label={tr(resources.address_and_phone.phone_info.home.label)} required>
              {getFieldDecorator('data.phone_info.home', {
                initialValue: utils.getInitialValue(data.phone_info.home),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, tr(resources.address_and_phone.phone_info.home.label), true) }],
              })(
                <Input maxLength={20} />,
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label={tr(resources.address_and_phone.phone_info.mobile.label)} extra={tr(resources.address_and_phone.phone_info.mobile.extra)}>
              {getFieldDecorator('data.phone_info.mobile', {
                initialValue: utils.getInitialValue(data.phone_info.mobile),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, tr(resources.address_and_phone.phone_info.mobile.label)) }],
              })(
                <Input maxLength={20} />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label={tr(resources.address_and_phone.phone_info.work.label)} extra={tr(resources.address_and_phone.phone_info.work.extra)}>
              {getFieldDecorator('data.phone_info.work', {
                initialValue: utils.getInitialValue(data.phone_info.work),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, tr(resources.address_and_phone.phone_info.work.label)) }],
              })(
                <Input maxLength={20} />,
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} gutter={16}>
            <Form.Item label={tr(resources.address_and_phone.email.label)} required extra={tr(resources.address_and_phone.email.extra)}>
              <Col xs={{ span: 12 }}>
                <Form.Item extra={tr(resources.address_and_phone.enter_email.extra)}>
                  {getFieldDecorator('data.email', {
                    initialValue: utils.getInitialValue(data.email),
                    rules: [{ validator: (rule, value, callback) => validators.validateEmail(rule, value, callback, tr(resources.address_and_phone.email.label), true) }],
                  })(
                    <Input maxLength={50} />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 12 }}>
                <Form.Item extra={tr(resources.address_and_phone.email_confirm.extra)}>
                  {getFieldDecorator('data.email_confirm', {
                    initialValue: utils.getInitialValue(data.email_confirm),
                    rules: [{ validator: this.validateEmailConfirm }],
                  })(
                    <Input maxLength={50} />,
                  )}
                </Form.Item>
              </Col>
            </Form.Item>
          </Col>
        </Row>

        <VisaRadio
          label={tr(resources.address_and_phone.b_additional_phones.label)}
          field="data.b_additional_phones"
          initialValue={data.b_additional_phones}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        {
          form.getFieldValue('data.b_additional_phones') &&
          <VisaInputArray
            label={tr(resources.address_and_phone.additional_phones.label)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_phones}
            arrayField="data.additional_phones"
            keysField="copy.additional_phones"
            validators={validators}
            maxLength={40}
            customRule={[{ validator: (rule, value, callback) => validators.validateNumber(rule, value, callback, 'Phone number', true) }]}
            tr={tr}
          />
        }

        <VisaRadio
          label={tr(resources.address_and_phone.b_additional_emails.label)}
          field="data.b_additional_emails"
          initialValue={data.b_additional_emails}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        {
          form.getFieldValue('data.b_additional_emails') &&
          <VisaInputArray
            label={tr(resources.address_and_phone.additional_emails.label)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_emails}
            arrayField="data.additional_emails"
            keysField="copy.additional_emails"
            validators={validators}
            maxLength={40}
            customRule={[{ validator: (rule, value, callback) => validators.validateEmail(rule, value, callback, 'Email', true) }]}
            tr={tr}
          />
        }

        <Form.Item label={tr(resources.address_and_phone.mail_addr.b_diff_with_home.label)}>
          {getFieldDecorator('data.mail_addr.b_diff_with_home', {
            valuePropName: 'checked',
            // rules: [{
            //   transform: value => (value || undefined),
            //   type: 'boolean'
            // }],
            initialValue: utils.getInitialValue(data.mail_addr.b_diff_with_home),
          })(
            <Checkbox>{tr(resources.address_and_phone.mail_addr.b_diff_with_home.check)}</Checkbox>,
          )}
        </Form.Item>

        {
          form.getFieldValue('data.mail_addr.b_diff_with_home') &&
          <VisaAddress
            label={tr(resources.address_and_phone.mail_addr.info.label)}
            field="data.mail_addr.info"
            initialValue={data.mail_addr.info}
            getFieldDecorator={getFieldDecorator}
            validators={validators}
            us_address={false}
            tr={tr}
          />
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.address_and_phone.section_title_social_media)}</h2>
          <div className="visa-global-section-description">{tr(resources.address_and_phone.section_descr_social_media)}</div>
        </div>

        <VisaSocialMediaArray
          label={tr(resources.address_and_phone.social_media_info.label)}
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.social_media_info}
          arrayField="data.social_media_info"
          keysField="copy.social_media_info"
          tr={tr}
        />

        <VisaRadio
          label={tr(resources.address_and_phone.b_additional_social_media.label)}
          extra={tr(resources.address_and_phone.b_additional_social_media.extra)}
          field="data.b_additional_social_media"
          initialValue={data.b_additional_social_media}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        {
          form.getFieldValue('data.b_additional_social_media') &&
          <VisaAdditionalSocialMediaArray
            label={tr(resources.address_and_phone.additional_social_media.label)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_social_media}
            arrayField="data.additional_social_media"
            keysField="copy.additional_social_media"
            validators={validators}
            tr={tr}
          />
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={e => handleNext(e, form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={e => handleSave(e, form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    )
  }
}
const FormDS1607AddressPhone = Form.create()(MyForm)
export default FormDS1607AddressPhone

