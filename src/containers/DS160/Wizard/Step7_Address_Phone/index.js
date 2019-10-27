import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaInputArray from '../../../../components/VisaInputArray'
import VisaAddress from "../../../../components/VisaAddress";
import VisaSocialMediaArray from '../../../../components/VisaSocialMediaArray'
import * as utils from '../../../../utils'
import VisaAdditionalSocialMediaArray from "../../../../components/VisaAdditionalSocialMediaArray";

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  validateEmailConfirm = (rule, value, callback) => {
    if(value != this.props.form.getFieldValue('data.email')) {
      callback('Please input correctly');
      return;
    }
    callback();
  };

  validatePhoneNumbers = (rule, value, callback, field, required) => {
    if (!value) {
      if(required)
          callback('This field is required');
      else
          callback();
      return;
    }
    if(/^\d+$/.test(value)== false) {
        callback(field + ' accepts only numbers (0-9)');
        return;
    }

    const numbers = [this.props.form.getFieldValue('data.phone_info.work'),this.props.form.getFieldValue('data.phone_info.home'), this.props.form.getFieldValue('data.phone_info.mobile')]
    const conflicts = numbers.filter(number => (number != undefined) && (number == value))
    if(conflicts && conflicts.length > 1)
    {
      callback('The given phone number has already been entered.')
      return;
    }

    callback();
  }

  render() {
    const { getFieldDecorator, isFieldTouched, getFieldValue, setFieldsValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };

    const { showPrev, showNext, onPrev, onNext, data } = this.props

    getFieldDecorator('data.b_diff_with_home', { initialValue: utils.getInitialValue(data.b_diff_with_home) });
    getFieldDecorator('data.b_additional_phones', { initialValue: utils.getInitialValue(data.b_additional_phones) });
    getFieldDecorator('data.b_additional_emails', { initialValue: utils.getInitialValue(data.b_additional_emails) });
    getFieldDecorator('data.b_additional_social_media', { initialValue: utils.getInitialValue(data.b_additional_social_media) });
    
    // getFieldDecorator('data.social_media_info.platform', { initialValue: utils.getInitialValue(data.social_media_info.platform) });
    // if( typeof(data.social_media_info) != 'Array' ) {
    //   let temp = data.social_media_info
    //   data.social_media_info = []
    // }
    
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Applicant Contact Information</h2>
        </div>

        <VisaAddress 
          label="Applicant Home Address"
          field="data.home_addr"
          initialValue={data.home_addr}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          us_address={false}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Primary Phone number" required>
              {getFieldDecorator('data.phone_info.home', {
                initialValue: utils.getInitialValue(data.phone_info.home),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, "Primary Phone number", true) }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Secondary Phone number" extra="Leave blank if you do not have a secondary phone number.">
              {getFieldDecorator('data.phone_info.mobile', {
                initialValue: utils.getInitialValue(data.phone_info.mobile),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, "Secondary Phone number") }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Work Phone number"  extra="Leave blank if you do not have a work phone number.">
              {getFieldDecorator('data.phone_info.work', {
                initialValue: utils.getInitialValue(data.phone_info.work),
                rules: [{ validator: (rule, value, callback) => this.validatePhoneNumbers(rule, value, callback, "Work Phone number") }],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} gutter={16}>
            <Form.Item label="Email" required extra="Please enter a valid email address. It will be used to contact you about your application.">
              <Col xs={{ span: 12 }}>
                <Form.Item extra="Enter Email">
                  {getFieldDecorator('data.email', {
                    initialValue: utils.getInitialValue(data.email),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email", true) }],
                  })(
                    <Input maxLength={50}/>
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 12 }}>
                <Form.Item extra="Confirm Email">
                  {getFieldDecorator('data.email_confirm', {
                    initialValue: utils.getInitialValue(data.email_confirm),
                    rules: [{ validator: this.validateEmailConfirm }],
                  })(
                    <Input maxLength={50}/>
                  )}
                </Form.Item>
              </Col>
            </Form.Item>
          </Col>
        </Row>
        
        <VisaRadio
          label="Have you used any other phone numbers in the last five years?"
          field="data.b_additional_phones"
          initialValue={data.b_additional_phones}
          getFieldDecorator={getFieldDecorator}
        />
        {
          this.props.form.getFieldValue('data.b_additional_phones') &&
          <VisaInputArray 
            label="Provide a list of additional phone numbers"
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_phones}
            arrayField="data.additional_phones"
            keysField="copy.additional_phones"
            validators={this.props.validators}
            maxLength={40}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone number", true) }]}
          />
        }

        <VisaRadio
          label="Have you used any other email addresses in the last five years?"
          field="data.b_additional_emails"
          initialValue={data.b_additional_emails}
          getFieldDecorator={getFieldDecorator}
        />
        {
          this.props.form.getFieldValue('data.b_additional_emails') &&
          <VisaInputArray 
            label="Provide a list of additional emails"
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_emails}
            arrayField="data.additional_emails"
            keysField="copy.additional_emails"
            validators={this.props.validators}
            maxLength={40}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email", true) }]}
          />
        }

        <Form.Item label="Mailing Address">
          {getFieldDecorator('data.mail_addr.b_diff_with_home', {
            valuePropName: "checked",
            // rules: [{
            //   transform: value => (value || undefined),
            //   type: 'boolean'
            // }],
            initialValue: utils.getInitialValue(data.mail_addr.b_diff_with_home),
          })(
            <Checkbox>The mailing address is different from the applicant address</Checkbox>
          )}
        </Form.Item>

        {
          this.props.form.getFieldValue('data.mail_addr.b_diff_with_home') &&
          <VisaAddress 
            label="Mailing Address"
            field="data.mail_addr.info"
            initialValue={data.mail_addr.info}
            getFieldDecorator={getFieldDecorator}
            validators={this.props.validators}
            us_address={false}
          />
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Social Media</h2>
          <div className="visa-global-section-description">Do you have a social media presence? Select from the list below each social media platform you have used within the last five years. In the space next to the platform’s name, enter the username or handle you have used on that platform. Please do not provide your passwords. If you have used more than one platform or more than one username or handle on a single platform, click the 'Add Another' button to list each one separately. If you have not used any of the listed social media platforms in the last five years, select 'None.'</div>
        </div>

        <VisaSocialMediaArray 
          label="Provide a list of social media platforms"
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.social_media_info}
          arrayField="data.social_media_info"
          keysField="copy.social_media_info"
        />

        <VisaRadio
          label="Do you wish to provide information about your presence on any other websites or applications you have used within the last five years to create or share content (photos, videos, status updates, etc.)?"
          extra="Please provide the name of the platform and the associated unique social media identifier (username or handle) for each social media platform you would like to list. This does not include private messaging on person-to-person messaging services, such as WhatsApp."
          field="data.b_additional_social_media"
          initialValue={data.b_additional_social_media}
          getFieldDecorator={getFieldDecorator}
        />
        {
          this.props.form.getFieldValue('data.b_additional_social_media') &&
          <VisaAdditionalSocialMediaArray
            label="Provide a list of additional social media"
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.additional_social_media}
            arrayField="data.additional_social_media"
            keysField="copy.additional_social_media"
            validators={this.props.validators}
          />
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
const Form_DS160_7_Address_Phone = Form.create()(MyForm)
export default Form_DS160_7_Address_Phone;
