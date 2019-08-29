import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, Icon } from 'antd';
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
import VisaInputArray from "../../../../components/VisaInputArray";

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
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
          />
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Telephone Number"
                field="data.position_info.address.tel_number"
                initialValue={data.position_info.address.tel_number}
                getFieldDecorator={getFieldDecorator}
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
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_14_Crew_Job = Form.create()(MyForm)
export default Form_DS160_14_Crew_Job;
