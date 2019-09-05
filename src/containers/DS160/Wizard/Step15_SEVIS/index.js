import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaAddress from "../../../../components/VisaAddress";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaInputArray from "../../../../components/VisaInputArray";
import * as utils from '../../../../utils'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  render() {
    const { getFieldDecorator, getFieldValue, setFieldsValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };
    const { showPrev, showNext, onPrev, onNext, data, additional_point_of_contact, sevis_type } = this.props

    getFieldDecorator('data.b_study_in_US', { initialValue: utils.getInitialValue(data.b_study_in_US) });
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        {additional_point_of_contact &&
        <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">Additional Point of Contact Information</h2>
            <div className="visa-global-section-description">NOTE: You have indicated that you will be studying in some capacity while in the United States. List at least two contacts in your country of residence who can verify the information that you have provided on this application. Do not list immediate family members or other relatives. Postal office box numbers are unacceptable. </div>
          </div>
          {data.point_of_contact.map((contact,index) => 
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="Surnames"
                  field={`data.point_of_contact[${index}].surname`}
                  initialValue={data.point_of_contact[index].surname}
                  getFieldDecorator={getFieldDecorator}
                />
                <VisaInput
                  label="Given Names"
                  field={`data.point_of_contact[${index}].given_name`}
                  initialValue={data.point_of_contact[index].given_name}
                  getFieldDecorator={getFieldDecorator}
                />
                <VisaAddress 
                  label="Address"
                  field={`data.point_of_contact[${index}].address`}
                  initialValue={data.point_of_contact[index].address}
                  getFieldDecorator={getFieldDecorator}
                />
                <VisaInput
                  label="Telephone Number"
                  field={`data.point_of_contact[${index}].tel_number`}
                  initialValue={data.point_of_contact[index].tel_number}
                  getFieldDecorator={getFieldDecorator}
                  required={false}
                />
                <VisaInput
                  label="Email Address"
                  extra="(e.g., emailaddress@example.com)"
                  field={`data.point_of_contact[${index}].email`}
                  initialValue={data.point_of_contact[index].email}
                  getFieldDecorator={getFieldDecorator}
                  required={false}
                />
              </Col>
            </Row>
          )}
        </>
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">SEVIS Information</h2>
          <div className="visa-global-section-description">NOTE: You have indicated that the purpose of your trip to the U.S. is to be a student or exchange visitor. Provide the following information regarding the institution at which you intend to study.</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="SEVIS ID"
              extra="All SEVIS ID numbers start with the letter N. On the Form I-20, the number is on the top right hand side of the first page under the words Student’s Copy and above the barcode. On the DS-2019, the number is on the top right hand side of the page in the box above the barcode. (e.g., N0123456789)"
              field="data.id"
              initialValue={data.id}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSEVIS(rule, value, callback, "SEVIS ID") }]}
            />
            {
              (sevis_type == 'B' || sevis_type == 'D') &&
              <VisaInput
                label="Principal Applicant SEVIS ID"
                extra="(e.g., N0123456789)"
                field="data.principal_id"
                initialValue={data.principal_id}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSEVIS(rule, value, callback, "Principal Applicant SEVIS ID") }]}
              />
            }
            {
              (sevis_type == 'C' || sevis_type == 'D') &&
              <VisaInput
                label="Program Number"
                extra="(e.g., G-7-12345)"
                field="data.program_number"
                initialValue={data.program_number}
                getFieldDecorator={getFieldDecorator}
              />
            }
          </Col>
        </Row>

        {sevis_type == 'C' && 
        <VisaRadio
          label="Do you intend to study in the U.S.?"
          field="data.b_study_in_US"
          initialValue={data.b_study_in_US}
          getFieldDecorator={getFieldDecorator}
        />
        }
        {((sevis_type == 'C' && this.props.form.getFieldValue('data.b_study_in_US')) || sevis_type == 'A') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Name of School"
                field="data.school_info.name"
                initialValue={data.school_info.name}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaInput
                label="Course of Study"
                field="data.school_info.course"
                initialValue={data.school_info.course}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaAddress 
                label="Address"
                field="data.school_info.address"
                initialValue={data.school_info.address}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleSubmit(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_15_SEVIS = Form.create()(MyForm)
export default Form_DS160_15_SEVIS;
