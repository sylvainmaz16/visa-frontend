import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaAddress from "../../../../components/VisaAddress";

const { Option } = Select;
const { TextArea } = Input;

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
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onNext(values.data);
      }
    });
  };
  validateEmailConfirm = (rule, value, callback) => {
    if(value != this.props.form.getFieldValue('data.email')) {
      callback('Please input correctly');
      return;
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

    getFieldDecorator('data.b_same_as_home', { initialValue: data.b_same_as_home });
    getFieldDecorator('data.social_media_info.platform', { initialValue: data.social_media_info.platform });
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Applicant Contact Information</h2>
        </div>

        <VisaAddress 
          label="Applicant Home Address"
          field="data.home_addr"
          initialValue={data.home_addr}
          getFieldDecorator={getFieldDecorator}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Primary Phone number">
              {getFieldDecorator('data.phone_info.home', {
                initialValue: data.phone_info.home,
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Primary Phone number", true) }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Secondary Phone number" extra="Leave blank if you do not have a secondary phone number.">
              {getFieldDecorator('data.phone_info.mobile', {
                initialValue: data.phone_info.mobile,
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
                initialValue: data.phone_info.work,
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
                    initialValue: data.email,
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email", true) }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 12 }}>
                <Form.Item extra="Confirm Email">
                  {getFieldDecorator('data.email_confirm', {
                    initialValue: data.email_confirm,
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
          {getFieldDecorator('data.mail_addr.b_same_as_home', {
            initialValue: data.mail_addr.b_same_as_home,
          })(
            <Checkbox>The mailing address is different from the applicant address</Checkbox>
          )}
        </Form.Item>

        {
          this.props.form.getFieldValue('data.mail_addr.b_same_as_home') &&
          <VisaAddress 
            label="Mailing Address"
            field="data.mail_addr.info"
            initialValue={data.mail_addr.info}
            getFieldDecorator={getFieldDecorator}
          />
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Social Media</h2>
          <div className="visa-global-section-description">Do you have a social media presence? Select from the list below each social media platform you have used within the last five years. In the space next to the platform’s name, enter the username or handle you have used on that platform. Please do not provide your passwords. If you have used more than one platform or more than one username or handle on a single platform, click the 'Add Another' button to list each one separately. If you have not used any of the listed social media platforms in the last five years, select 'None.'</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label="Social Media Provider/Platform">
              {getFieldDecorator('data.social_media_info.platform', {
                initialValue: data.social_media_info.platform,
              })(
                <VisaSelect combines={constants.export_list(constants.social_media_options)}/>
              )}
            </Form.Item>
          </Col>
        </Row>

        {
          this.props.form.getFieldValue('data.social_media_info.platform') &&
          <Form.Item label="Social Media Identifier" extra="Enter the username or handle you have used on that platform. Please do not provide your passwords.">
            {getFieldDecorator('data.social_media_info.identifier', {
              initialValue: data.social_media_info.identifier,
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <Input />
            )}
          </Form.Item>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_7_Address_Phone = Form.create()(MyForm)
export default Form_DS160_7_Address_Phone;
