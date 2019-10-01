import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
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

    const { showPrev, showNext, onPrev, onNext, data, martial_status } = this.props

    getFieldDecorator('data.relationship', { initialValue: data.relationship });
    const field = {
      relationship: this.props.form.getFieldValue('data.relationship'),
    }
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">US Point of contact</h2>
          <div className="visa-global-section-description">Give the name of a contact person or Hotel or organisation in the US. This may be different from the place or person you intend to stay with.</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem
              label="Relationship to you"
              field="data.relationship"
              initialValue={data.relationship}
              content={{
                combines: constants.export_list( (martial_status == 'M' || martial_status == 'C' || martial_status == 'L') ? constants.relationship_options : constants.relationship_options_except_Spouse)
              }}
              getFieldDecorator={getFieldDecorator}
            />
            {field.relationship ? ((field.relationship == 'R' || field.relationship == 'S' || field.relationship == 'C') ?
              <>
                <VisaInput
                  label="Surname(s)"
                  field="data.surname"
                  initialValue={data.surname}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                />
                <VisaInput
                  label="Given Name(s)"
                  field="data.given_name"
                  initialValue={data.given_name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                />
              </> :
              <VisaInput
                label="Hotel or Organisation Name"
                field="data.organization"
                initialValue={data.organization}
                getFieldDecorator={getFieldDecorator}
              />) : ''
            }
          </Col>
        </Row>

        <VisaAddress 
          label="Address"
          field="data.address"
          initialValue={data.address}
          getFieldDecorator={getFieldDecorator}
          hideCountry
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Phone Number"
              field="data.tel_number"
              initialValue={data.tel_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone Number", true) }]}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Email if known"
              field="data.email"
              initialValue={data.email}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email") }]}
              required={false}
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
const Form_DS160_9_Contact = Form.create()(MyForm)
export default Form_DS160_9_Contact;
