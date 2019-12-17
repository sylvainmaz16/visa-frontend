import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from 'utils/constants'
import VisaSelect from "components/VisaSelect";
import moment from 'moment'
import VisaRadio from "components/VisaRadio";
import VisaAddress from "components/VisaAddress";
import VisaInput from "components/VisaInput";
import VisaSelectItem from "components/VisaSelectItem";
import * as utils from 'utils'
import resources from "utils/resources";

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
    const { showPrev, showNext, onPrev, onNext, data, additional_point_of_contact, sevis_type, tr } = this.props

    getFieldDecorator('data.b_study_in_US', { initialValue: utils.getInitialValue(data.b_study_in_US) });

    return (
      <Form {...formItemLayout}>

        {additional_point_of_contact &&
          <>
            <div className="visa-global-field visa-global-border-bottom">
              <h2 className="visa-global-section-title">{tr(resources.SEVIS.section_title)}</h2>
              <div className="visa-global-section-description">{tr(resources.SEVIS.section_descr)}</div>
            </div>
            {data.point_of_contact.map((contact, index) =>
              <Row gutter={16} key={index}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <Form.Item label="Contact">
                    <VisaInput
                      label={tr(resources.SEVIS.point_of_contact.surname)} 
                      field={`data.point_of_contact[${index}].surname`}
                      initialValue={data.point_of_contact[index].surname}
                      getFieldDecorator={getFieldDecorator}
                      maxLength={33}
                      tr={tr}
                    />
                    <VisaInput
                      label={tr(resources.SEVIS.point_of_contact.given_name)} 
                      field={`data.point_of_contact[${index}].given_name`}
                      initialValue={data.point_of_contact[index].given_name}
                      getFieldDecorator={getFieldDecorator}
                      maxLength={33}
                      tr={tr}
                    />
                    <VisaAddress
                      label={tr(resources.SEVIS.point_of_contact.address)} 
                      field={`data.point_of_contact[${index}].address`}
                      initialValue={data.point_of_contact[index].address}
                      validators={this.props.validators}
                      getFieldDecorator={getFieldDecorator}
                      us_address={false}
                      tr={tr}
                    />
                    <VisaInput
                      label={tr(resources.SEVIS.point_of_contact.tel_number)} 
                      field={`data.point_of_contact[${index}].tel_number`}
                      initialValue={data.point_of_contact[index].tel_number}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                      customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Telephone Number", false) }]}
                      tr={tr}
                    />
                    <VisaInput
                      label={tr(resources.SEVIS.point_of_contact.email)} 
                      extra="(e.g., emailaddress@example.com)"
                      field={`data.point_of_contact[${index}].email`}
                      initialValue={data.point_of_contact[index].email}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                      customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email Address") }]}
                      tr={tr}
                    />
                  </Form.Item>

                </Col>
              </Row>
            )}
          </>
        }

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.SEVIS.section_title_sevis)}</h2>
          <div className="visa-global-section-description">{tr(resources.SEVIS.section_descr_sevis)}</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.SEVIS.id.label)}
              extra={tr(resources.SEVIS.id.extra)}
              field="data.id"
              initialValue={data.id}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSEVIS(rule, value, callback, "SEVIS ID") }]}
              maxLength={11}
              tr={tr}
            />
            {
              (sevis_type == 'B' || sevis_type == 'D') &&
              <VisaInput
                label={tr(resources.SEVIS.principal_id)}
                extra="(e.g., N0123456789)"
                field="data.principal_id"
                initialValue={data.principal_id}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSEVIS(rule, value, callback, "Principal Applicant SEVIS ID") }]}
                maxLength={11}
                tr={tr}
              />
            }
            {
              (sevis_type == 'C' || sevis_type == 'D') &&
              <VisaInput
                label={tr(resources.SEVIS.program_number)}
                extra="(e.g., G-7-12345)"
                field="data.program_number"
                initialValue={data.program_number}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateProgramNumber(rule, value, callback, "Program Number") }]}
                tr={tr}
              />
            }
          </Col>
        </Row>

        {sevis_type == 'C' &&
          <VisaRadio
            label={tr(resources.SEVIS.b_study_in_US)}
            field="data.b_study_in_US"
            initialValue={data.b_study_in_US}
            getFieldDecorator={getFieldDecorator}
            tr={tr}
          />
        }
        {((sevis_type == 'C' && this.props.form.getFieldValue('data.b_study_in_US')) || sevis_type == 'A') &&
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label={tr(resources.SEVIS.school_info.name)}
                field="data.school_info.name"
                initialValue={data.school_info.name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, "Name of School", true) }]}
                tr={tr}
              />
              <VisaInput
                label={tr(resources.SEVIS.school_info.course)}
                field="data.school_info.course"
                initialValue={data.school_info.course}
                getFieldDecorator={getFieldDecorator} 
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, "Course of Study") }]}
                tr={tr}
              />
              <VisaAddress
                label={tr(resources.SEVIS.school_info.address)}
                field="data.school_info.address"
                initialValue={data.school_info.address}
                getFieldDecorator={getFieldDecorator}
                validators={this.props.validators}
                hideCountry
                tr={tr}
              />
            </Col>
          </Row>
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
const Form_DS160_15_SEVIS = Form.create()(MyForm)
export default Form_DS160_15_SEVIS;
