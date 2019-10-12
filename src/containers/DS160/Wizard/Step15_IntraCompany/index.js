import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaAddress from "../../../../components/VisaAddress";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
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
    const { showPrev, showNext, onPrev, onNext, data, intracompany_type } = this.props
    
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Intracompany Transferee Information</h2>
          {/* <div className="visa-global-section-description">NOTE: You have indicated that you are a crew member.</div> */}
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            {intracompany_type == 'A' &&
            <>
              <VisaInput
                label="Application Receipt/Petition Number"
                field="data.petition"
                initialValue={data.petition}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaInput
                label="Name of Person/Company who Filed your Petition"
                field="data.name_filed_petition"
                initialValue={data.name_filed_petition}
                getFieldDecorator={getFieldDecorator}
              />
            </>
            }
            <VisaInput
              label="Name of Employer where you intend to Work"
              field="data.employer"
              initialValue={data.employer}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <VisaAddress 
          label="Address"
          field="data.address"
          initialValue={data.address}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          hideCountry
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Phone Number"
              field="data.tel_number"
              initialValue={data.tel_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Telephone number", true) }]}
              maxLength={12}
            />
            <VisaInput
              label="Enter Monthly Income (In USD)"
              field="data.income"
              initialValue={data.income}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Monthly Income", true) }]}
              maxLength={15}
            />
          </Col>
        </Row>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_15_IntraCompany = Form.create()(MyForm)
export default Form_DS160_15_IntraCompany;
