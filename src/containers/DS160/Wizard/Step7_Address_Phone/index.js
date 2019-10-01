import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaAddress from "../../../../components/VisaAddress";
import VisaSocialMediaArray from '../../../../components/VisaSocialMediaArray'
import * as utils from '../../../../utils'

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

    const { martial_status_options } = constants

    const { showPrev, showNext, onPrev, onNext, data } = this.props

    getFieldDecorator('data.b_diff_with_home', { initialValue: utils.getInitialValue(data.b_diff_with_home) });
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
          us_address={false}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Primary Phone number" required>
              {getFieldDecorator('data.phone_info.home', {
                initialValue: utils.getInitialValue(data.phone_info.home),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Primary Phone number", true) }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Secondary Phone number" extra="Leave blank if you do not have a secondary phone number.">
              {getFieldDecorator('data.phone_info.mobile', {
                initialValue: utils.getInitialValue(data.phone_info.mobile),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Secondary Phone number") }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Work Phone number"  extra="Leave blank if you do not have a work phone number.">
              {getFieldDecorator('data.phone_info.work', {
                initialValue: utils.getInitialValue(data.phone_info.work),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Work Phone number") }],
              })(
                <Input />
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
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 12 }}>
                <Form.Item extra="Confirm Email">
                  {getFieldDecorator('data.email_confirm', {
                    initialValue: utils.getInitialValue(data.email_confirm),
                    rules: [{ validator: this.validateEmailConfirm }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Mailing Address">
          {getFieldDecorator('data.mail_addr.b_diff_with_home', {
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