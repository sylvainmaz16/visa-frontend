import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import * as utils from '../../../../utils'

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

    const { showPrev, showNext, onPrev, onNext, data, date_birth } = this.props

    getFieldDecorator('data.b_ever_been_in_US', { initialValue: utils.getInitialValue(data.b_ever_been_in_US) });
    getFieldDecorator('data.b_ever_hold_Driver_License', { initialValue: utils.getInitialValue(data.b_ever_hold_Driver_License) });
    getFieldDecorator('data.b_ever_been_issued_US_Visa', { initialValue: utils.getInitialValue(data.b_ever_been_issued_US_Visa) });
    getFieldDecorator('data.US_Visa.b_ever_been_lost', { initialValue: utils.getInitialValue(data.US_Visa.b_ever_been_lost) });
    getFieldDecorator('data.b_ever_been_refused_US_Visa', { initialValue: utils.getInitialValue(data.b_ever_been_refused_US_Visa) });
    getFieldDecorator('data.b_ever_been_denied_travel_auth', { initialValue: utils.getInitialValue(data.b_ever_been_denied_travel_auth) });
    getFieldDecorator('data.b_petition', { initialValue: utils.getInitialValue(data.b_petition) });
    getFieldDecorator('data.US_Visa.b_ever_been_cancelled', { initialValue: utils.getInitialValue(data.US_Visa.b_ever_been_cancelled) });
    
    console.log(data)
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Previous US Travel</h2>
        </div>

        <VisaRadio
          label="Have you ever been to the US before?"
          extra="Check if you have been in the US before and fill out the details of your last 5 visits below"
          field="data.b_ever_been_in_US"
          initialValue={data.b_ever_been_in_US}
          getFieldDecorator={getFieldDecorator}
        />
        {
          this.props.form.getFieldValue('data.b_ever_been_in_US') &&
          <VisaDateLength
            getFieldDecorator={getFieldDecorator}
            validators={this.props.validators}
            date={{
              label: 'Date of arrival (last visit to the US)',
              field: 'data.prev_visit_info.date',
              initialValue: data.prev_visit_info.date,
            }}
            period={{
              field: 'data.prev_visit_info.length_of_stay.period',
              initialValue: data.prev_visit_info.length_of_stay.period
            }}
            unit={{
              field: 'data.prev_visit_info.length_of_stay.unit',
              initialValue: data.prev_visit_info.length_of_stay.unit
            }}
          />
        }

        <VisaRadio
          label="Do you or did you ever hold a U.S. Driver’s License?"
          field="data.b_ever_hold_Driver_License"
          initialValue={data.b_ever_hold_Driver_License}
          getFieldDecorator={getFieldDecorator}
        />

        {
          this.props.form.getFieldValue('data.b_ever_hold_Driver_License') &&
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item label="Driver's License number" extra="Leave it blank if you do not know">
                  {getFieldDecorator('data.prev_DL_info.number', {
                    initialValue: utils.getInitialValue(data.prev_DL_info.number),
                    rules: [{ required: true, message: 'This field is required' }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item label="State of Driver's License">
                  {getFieldDecorator('data.prev_DL_info.state', {
                    initialValue: utils.getInitialValue(data.prev_DL_info.state),
                    rules: [{ required: true, message: 'This field is required' }],
                  })(
                    <VisaSelect combines={constants.state_options_list()} />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </>
        }

        <VisaRadio
          label="Have you ever been issued a US visa?"
          field="data.b_ever_been_issued_US_Visa"
          initialValue={data.b_ever_been_issued_US_Visa}
          getFieldDecorator={getFieldDecorator}
        />

        {
          this.props.form.getFieldValue('data.b_ever_been_issued_US_Visa') &&
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item label="Date Last Visa Was Issued" extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013">
                  {getFieldDecorator('data.US_Visa.date', {
                    initialValue: utils.getInitialValue(data.US_Visa.date),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateLastVisaIssuedDate(rule, value, callback, "Date Last Visa Was Issued", date_birth) }],
                  })(
                    <DatePicker />
                  )}
                </Form.Item>
              </Col>
              <Col xs={{ span: 16 }} md={{ span: 12 }}>
                <Form.Item label="Visa Number" extra="Leave blank if you do not know">
                  {getFieldDecorator('data.US_Visa.number', {
                    initialValue: utils.getInitialValue(data.US_Visa.number),
                    rules: [{ validator: (rule, value, callback) => this.props.validators.validateVisaNumber(rule, value, callback, "The Visa Number") }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <VisaRadio
              label="Are you applying for the same type of visa?"
              field="data.US_Visa.b_same_type_visa"
              initialValue={data.US_Visa.b_same_type_visa}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaRadio
              label="Are you applying in the same country or location where the visa above was issued, and is this country or location your place of principal of residence?"
              field="data.US_Visa.b_same_cntry_visa"
              initialValue={data.US_Visa.b_same_cntry_visa}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaRadio
              label="Have you been ten-printed?"
              field="data.US_Visa.b_been_ten_printed"
              initialValue={data.US_Visa.b_been_ten_printed}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaRadio
              label="Has your US Visa ever been lost or stolen?"
              field="data.US_Visa.b_ever_been_lost"
              initialValue={data.US_Visa.b_ever_been_lost}
              getFieldDecorator={getFieldDecorator}
            />
            {
              this.props.form.getFieldValue('data.US_Visa.b_ever_been_lost') &&
              <>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Form.Item label="Which Year">
                      {getFieldDecorator('data.US_Visa.lost_info.year', {
                        initialValue: utils.getInitialValue(data.US_Visa.lost_info.year),
                        rules: [{ validator: (rule, value, callback) => this.props.validators.validateVisaLostYear(rule, value, callback, "Year", date_birth) }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="If you answered yes, give details below.">
                  {getFieldDecorator('data.US_Visa.lost_info.explain', {
                    initialValue: utils.getInitialValue(data.US_Visa.lost_info.explain),
                    rules: [{ required: true, message: 'This field is required' }],
                  })(
                    <TextArea rows={7}/>
                  )}
                </Form.Item>
              </>
            }
            <VisaExplain
              label="Have you ever had a US Visa cancelled or revoked?"
              radioField="data.US_Visa.b_ever_been_cancelled"
              radioInitialValue={data.US_Visa.b_ever_been_cancelled}
              radioValue={this.props.form.getFieldValue('data.b_ever_been_cancelled')}
              textField="data.US_Visa.cancel_info.explain"
              textInitialValue={data.US_Visa.cancel_info.explain}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
            />
          </>
        }

        <VisaExplain
          label="Have you ever been refused a US Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?"
          radioField="data.b_ever_been_refused_US_Visa"
          radioInitialValue={data.b_ever_been_refused_US_Visa}
          radioValue={this.props.form.getFieldValue('data.b_ever_been_refused_US_Visa')}
          textField="data.refuse_info.explain"
          textInitialValue={data.refuse_info.explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <VisaExplain
          label="Have you ever been denied travel authorization by the Department of Homeland Security through the Electronic System fo Travel Authorization (ESTA)?"
          radioField="data.b_ever_been_denied_travel_auth"
          radioInitialValue={data.b_ever_been_denied_travel_auth}
          radioValue={this.props.form.getFieldValue('data.b_ever_been_denied_travel_auth')}
          textField="data.denied_info.explain"
          textInitialValue={data.denied_info.explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <VisaExplain
          label="Has anyone ever filled an immigrant petition on your behalf with the US Citizenship and Immigration Services?"
          radioField="data.b_petition"
          radioInitialValue={data.b_petition}
          radioValue={this.props.form.getFieldValue('data.b_petition')}
          textField="data.petition_info.explain"
          textInitialValue={data.petition_info.explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_6_Previous_Travel = Form.create()(MyForm)
export default Form_DS160_6_Previous_Travel;
