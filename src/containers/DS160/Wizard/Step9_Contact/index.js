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
    this.props.form.validateFields((err, values) => {
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

    const { showPrev, showNext, onPrev, onNext, data } = this.props

    const field = {
      relationship: this.props.form.getFieldValue('data.relationship'),
    }
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                combines: constants.export_list(constants.relationship_options)
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
                />
                <VisaInput
                  label="Given Name(s)"
                  field="data.given_name"
                  initialValue={data.given_name}
                  getFieldDecorator={getFieldDecorator}
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
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Phone Number"
              field="data.tel_number"
              initialValue={data.tel_number}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Email if known"
              field="data.email"
              initialValue={data.email}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_9_Contact = Form.create()(MyForm)
export default Form_DS160_9_Contact;
