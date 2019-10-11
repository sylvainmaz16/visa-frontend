import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaInput from "../../../../components/VisaInput";
import VisaInputWithCheck from '../../../../components/VisaInputWithCheck';
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import VisaDatePickerWithCheck from '../../../../components/VisaDatePickerWithCheck';
import * as utils from '../../../../utils'
import VisaLostPassports from "../../../../components/VisaLostPassports";

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.issuance_date)
      data.issuance_date = data.issuance_date.format('DD/MMM/YYYY')
    if(data.expiration_date)
      data.expiration_date = data.expiration_date.format('DD/MMM/YYYY')
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

    const { martial_status_options } = constants

    const { showPrev, showNext, onPrev, onNext, data, date_birth } = this.props

    if(data.lost_info.constructor != Array)
      data.lost_info = [{ 
        number: null,
        number_NA: null,
        country: null,
        explain: null
      }]

    getFieldDecorator('data.doc_type', { initialValue: utils.getInitialValue(data.doc_type) });
    getFieldDecorator('data.b_ever_lost_passport', { initialValue: utils.getInitialValue(data.b_ever_lost_passport) });
    getFieldDecorator('data.expiration_date_NA', { initialValue: utils.getInitialValue(data.expiration_date_NA) })
    // getFieldDecorator('data.lost_info.number_NA', { initialValue: utils.getInitialValue(data.lost_info.number_NA) })
    
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Passport Information</h2>
        </div>
        
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label="Passport/Travel Document Type"
              field="data.doc_type"
              initialValue={data.doc_type}
              content={{
                combines: constants.export_list(constants.passport_type_options)
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        {
          this.props.form.getFieldValue('data.doc_type') == 'T' &&
          <Form.Item label="Explain">
            {getFieldDecorator('data.doc_type_explain', {
              initialValue: utils.getInitialValue(data.doc_type_explain),
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <TextArea rows={5}/>
            )}
          </Form.Item>
        }

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label="Passport/Travel Document Number"
              field="data.doc_number"
              initialValue={data.doc_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, "Passport/Travel Document Number", true) }]}
              maxLength={20}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label="Passport Book Number"
              extra="Leave blank if does not apply"
              field="data.book_number"
              initialValue={data.book_number}
              getFieldDecorator={getFieldDecorator}
              required={false}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, "Passport Book Number", false) }]}
              maxLength={20}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label="Country/Authority that Issued Passport/Travel Document"
              field="data.doc_authority"
              initialValue={data.doc_authority}
              content={{
                values: constants.countries_regions_option_value_list,
                labels: constants.countries_regions_option_label_list,
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label="City of Issue"
              field="data.issued_location.city"
              initialValue={data.issued_location.city}
              getFieldDecorator={getFieldDecorator}
              maxLength={25}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label="State/Province *If shown on passport"
              field="data.issued_location.state"
              initialValue={data.issued_location.state}
              required={false}
              getFieldDecorator={getFieldDecorator}
              maxLength={25}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label="Country/Region"
              field="data.issued_location.country"
              initialValue={data.issued_location.country}
              content={{
                values: constants.countries_regions_option_value_list,
                labels: constants.countries_regions_option_label_list,
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <VisaDatePicker 
          label="Issuance Date"
          
          field="data.issuance_date"
          initialValue={data.issuance_date}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePreviousVisitdDate(rule, value, callback, 'Issued Date', date_birth) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ display: 'flex', alignItems: 'center'}}>
            <VisaDatePickerWithCheck
              label="Expiration Date"
              field="data.expiration_date"
              initialValue={data.expiration_date}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateExpirationDate(rule, value, callback, 'Expiration Date', this.props.form.getFieldValue('data.issuance_date')) }]}
              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}

              checkField="data.expiration_date_NA"
              checkValue={data.expiration_date_NA}
              checkLabel="No Expiration"

            />
          </Col>
        </Row>

        <VisaRadio
          label="Have you ever lost a passport or had one stolen?"
          field="data.b_ever_lost_passport"
          initialValue={data.b_ever_lost_passport}
          getFieldDecorator={getFieldDecorator}
        />

        {
          this.props.form.getFieldValue('data.b_ever_lost_passport') && 
          <>
            <div className="visa-global-field visa-global-border-bottom">
              <h2 className="visa-global-section-title">Lost or Stolen Passport Information</h2>
            </div>
            <VisaLostPassports 
              label="List of lost or stolen passports"
              getFieldDecorator={getFieldDecorator}
              getFieldValue={getFieldValue}
              setFieldsValue={setFieldsValue}
              initialValue={data.lost_info}
              arrayField="data.lost_info"
              keysField="copy.lost_info"
              validators={this.props.validators}
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
const Form_DS160_8_Passport = Form.create()(MyForm)
export default Form_DS160_8_Passport;
