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
    getFieldDecorator('data.b_assist', { initialValue: data.b_assist });
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
            <VisaInput
              label="Organization"
              field="data.assist_info.organization.name"
              initialValue={data.assist_info.organization.name}
              getFieldDecorator={getFieldDecorator}
            />
          </Row>
          <VisaAddress 
            label="Address"
            field="data.assist_info.address"
            initialValue={data.assist_info.address}
            getFieldDecorator={getFieldDecorator}
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
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_15_Preparer = Form.create()(MyForm)
export default Form_DS160_15_Preparer;
