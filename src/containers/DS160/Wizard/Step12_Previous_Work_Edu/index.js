import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaAddress from "../../../../components/VisaAddress";
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
    if(data.emp_info && data.emp_info.date_from)
      data.emp_info.date_from = data.emp_info.date_from.format('DD/MMM/YYYY')
    if(data.emp_info && data.emp_info.date_to)
      data.emp_info.date_to = data.emp_info.date_to.format('DD/MMM/YYYY')
    if(data.edu_info && data.edu_info.date_from)
      data.edu_info.date_from = data.edu_info.date_from.format('DD/MMM/YYYY')
    if(data.edu_info && data.edu_info.date_to)
      data.edu_info.date_to = data.edu_info.date_to.format('DD/MMM/YYYY')
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
    getFieldDecorator('data.b_previously_employed', { initialValue: utils.getInitialValue(data.b_previously_employed) });
    getFieldDecorator('data.b_edu_secondary_level', { initialValue: utils.getInitialValue(data.b_edu_secondary_level) });
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Previous Work / Education / Training Information</h2>
        </div>

        <VisaRadio
          label="Were you previously employed?"
          field="data.b_previously_employed"
          initialValue={data.b_previously_employed}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_previously_employed') &&
        <>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Previous Employer Name"
                field="data.emp_info.name"
                initialValue={data.emp_info.name}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaAddress 
                label="Previous Employer Address"
                field="data.emp_info.address"
                initialValue={data.emp_info.address}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Telephone number"
                field="data.emp_info.address.tel_number"
                initialValue={data.emp_info.address.tel_number}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Telephone number", true) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Job Title"
                field="data.emp_info.job_title"
                initialValue={data.emp_info.job_title}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Supervisor's Surname(s) (Last Name)"
                extra="Leave blank if you do not know"
                field="data.emp_info.supervisor.surname"
                initialValue={data.emp_info.supervisor.surname}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname", false) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Supervisor's Given Name(s) (First Name)"
                extra="Leave blank if you do not know"
                field="data.emp_info.supervisor.given_name"
                initialValue={data.emp_info.supervisor.given_name}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name", false) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Employment Date From"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.emp_info.date_from"
                initialValue={data.emp_info.date_from}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, "Employment Date From", false) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Employment Date To"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.emp_info.date_to"
                initialValue={data.emp_info.date_to}
                getFieldDecorator={getFieldDecorator}
                required={false}
                
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, "Employment Date To", this.props.form.getFieldValue('data.emp_info.date_from'), false) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label="Describe your duties IN FEW WORDS (3 lines maximum)" extra="0 of 300 max characters">
                {getFieldDecorator('data.emp_info.duty_explain', {
                  initialValue: utils.getInitialValue(data.emp_info.duty_explain),
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <TextArea style={{textTransform: 'uppercase'}} rows={3} />
                )}
              </Form.Item>
            </Col>
          </Row>
        </>
        }

        <VisaRadio
          label="Have you attended any educational institutions at a secondary level or above?"
          field="data.b_edu_secondary_level"
          initialValue={data.b_edu_secondary_level}
          getFieldDecorator={getFieldDecorator}
        />
        {this.props.form.getFieldValue('data.b_edu_secondary_level') &&
        <>
          <VisaInput
            label="Name of Institution"
            field="data.edu_info.name"
            initialValue={data.edu_info.name}
            getFieldDecorator={getFieldDecorator}
          />

          <VisaAddress 
            label="Institution's Address"
            field="data.edu_info.address"
            initialValue={data.edu_info.address}
            getFieldDecorator={getFieldDecorator}
          />

          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Date of Attendance From"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.edu_info.date_from"
                initialValue={data.edu_info.date_from}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, "Date of Attendance From", false) }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Date of Attendance To"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.edu_info.date_to"
                initialValue={data.edu_info.date_to}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, "Date of Attendance To", this.props.form.getFieldValue('data.edu_info.date_from'), false) }]}
              />
            </Col>
          </Row>
        </>
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
const Form_DS160_12_Previous_Work_Edu = Form.create()(MyForm)
export default Form_DS160_12_Previous_Work_Edu;
