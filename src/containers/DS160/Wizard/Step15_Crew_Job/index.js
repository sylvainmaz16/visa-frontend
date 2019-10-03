import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaAddress from "../../../../components/VisaAddress";
import VisaInput from "../../../../components/VisaInput";
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
    const { showPrev, showNext, onPrev, onNext, data } = this.props
    getFieldDecorator('data.b_position', { initialValue: utils.getInitialValue(data.b_position) });
    getFieldDecorator('data.b_vessel', { initialValue: utils.getInitialValue(data.b_vessel) });
    
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Crew Visa Information</h2>
          <div className="visa-global-section-description">NOTE: You have indicated that you are a crew member.</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Specific job title aboard aircraft or vessel"
              field="data.job_title"
              initialValue={data.job_title}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaInput
              label="Name of company that owns the aircraft or vessel you will be working on"
              field="data.company_name"
              initialValue={data.company_name}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaInput
              label="Company Telephone Number"
              field="data.company_tel"
              initialValue={data.company_tel}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <VisaRadio
          label="Did you acquire your position using a recruiting/manning/crewing agency?"
          field="data.b_position"
          initialValue={data.b_position}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_position') &&
        <>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Agency Name"
                field="data.position_info.agency_name"
                initialValue={data.position_info.agency_name}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaInput
                label="Contact Surname(s)"
                extra="Contact Family Name"
                field="data.position_info.surname"
                initialValue={data.position_info.surname}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaInput
                label="Contact Given Name(s)"
                extra="Contact First Name"
                field="data.position_info.given_name"
                initialValue={data.position_info.given_name}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
          <VisaAddress 
            label="Address"
            field="data.position_info.address"
            initialValue={data.position_info.address}
            getFieldDecorator={getFieldDecorator}
            validators={this.props.validators}
            us_address={false}
          />
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Telephone Number"
                field="data.position_info.address.tel_number"
                initialValue={data.position_info.address.tel_number}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Telephone number", true) }]}
              />
            </Col>
          </Row>
        </>
        }

        <VisaRadio
          label="Are you serving aboard a seagoing ship or vessel?"
          field="data.b_vessel"
          initialValue={data.b_vessel}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_vessel') &&
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Seagoing Ship/Vessel Name"
              field="data.vessel_info.vessel_name"
              initialValue={data.vessel_info.vessel_name}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaInput
              label="Seagoing Ship/Vessel Identification Number"
              field="data.vessel_info.vessel_id"
              initialValue={data.vessel_info.vessel_id}
              getFieldDecorator={getFieldDecorator}
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
const Form_DS160_15_Crew_Job = Form.create()(MyForm)
export default Form_DS160_15_Crew_Job;
