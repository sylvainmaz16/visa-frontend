import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
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
    getFieldDecorator('data.b_assist', { initialValue: utils.getInitialValue(data.b_assist) });
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Preparer of Application</h2>
        </div>

        <VisaRadio
          label="Did anyone assist you in filling out this application?"
          field="data.b_assist"
          initialValue={data.b_assist}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_assist') &&
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="Surname"
                  field="data.assist_info.preparer.surname"
                  initialValue={data.assist_info.preparer.surname}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="Given Name"
                  field="data.assist_info.preparer.given_name"
                  initialValue={data.assist_info.preparer.given_name}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>

            </Row>
            <VisaInput
              label="Organization"
              field="data.assist_info.organization.name"
              initialValue={data.assist_info.organization.name}
              getFieldDecorator={getFieldDecorator}
              required={false}
            />
            <VisaAddress
              label="Address"
              field="data.assist_info.address"
              initialValue={data.assist_info.address}
              getFieldDecorator={getFieldDecorator}
              us_address={false}
            />
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="Relationship to you"
                  field="data.assist_info.relationship"
                  initialValue={data.assist_info.relationship}
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
const Form_DS160_16_Preparer = Form.create()(MyForm)
export default Form_DS160_16_Preparer;
