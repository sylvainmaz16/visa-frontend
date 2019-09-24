import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import * as utils from '../../../../utils'

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

    getFieldDecorator('data.doc_type', { initialValue: utils.getInitialValue(data.doc_type) });
    getFieldDecorator('data.b_ever_lost_passport', { initialValue: utils.getInitialValue(data.b_ever_lost_passport) });
    
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
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label="State/Province *If shown on passport"
              field="data.issued_location.state"
              initialValue={data.issued_location.state}
              required={false}
              getFieldDecorator={getFieldDecorator}
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
          extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
          field="data.issuance_date"
          initialValue={data.issuance_date}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback) }]}
        />

        <VisaDatePicker 
          label="Expiration Date"
          extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
          field="data.expiration_date"
          initialValue={data.expiration_date}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateExpirationDate(rule, value, callback, 'Expiration Date', this.props.form.getFieldValue('data.issuance_date')) }]}
        />

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
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label="Lost or stolen Passport/Travel Document Number"
                  extra="Leave blank if you do not know"
                  field="data.lost_info.number"
                  initialValue={data.lost_info.number}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaSelectItem 
                  label="Country/Authority that Issued Passport/Travel Document"
                  field="data.lost_info.country"
                  initialValue={data.lost_info.country}
                  content={{
                    values: constants.countries_regions_option_value_list,
                    labels: constants.countries_regions_option_label_list,
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }}>
                <VisaInput 
                  label="Explain"
                  field="data.lost_info.explain"
                  initialValue={data.lost_info.explain}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            </Row>
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
