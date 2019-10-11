import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
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
    if(data.start_date)
      data.start_date = data.start_date.format('DD/MMM/YYYY')
    return data
  }

  render() {
    const { getFieldDecorator, isFieldTouched, setFieldsValue, getFieldValue } = this.props.form;
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

    const { showPrev, showNext, onPrev, onNext, data, date_birth } = this.props
    getFieldDecorator('data.occupation', { initialValue: utils.getInitialValue(data.occupation) });

    const occupation = this.props.form.getFieldValue('data.occupation')
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Present Work/Education/Training Information</h2>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <VisaSelectItem
              label="Primary Occupation"
              field="data.occupation"
              initialValue={data.occupation}
              content={{
                combines: constants.export_list(constants.occupation_options)
              }}
              getFieldDecorator={getFieldDecorator}
            />
            {occupation == 'O' &&
              <Form.Item label="Specify Other ">
                {getFieldDecorator('data.specify_other_explain', {
                  initialValue: utils.getInitialValue(data.specify_other_explain),
                  // rules: [{ required: true, message: 'This field is required' }],
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, 'Specify Other', true) }]
                })(
                  <TextArea rows={3}/>
                )}
              </Form.Item>
            }
            {occupation == 'N' &&
              <Form.Item label="Explain">
                {getFieldDecorator('data.specify_other_explain', {
                  initialValue: utils.getInitialValue(data.specify_other_explain),
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <TextArea rows={3}/>
                )}
              </Form.Item>
            }
            {(occupation != 'N' && occupation != 'RT' && occupation != 'H') && 
            <>
              <VisaInput
                label="Present Employer or School Name"
                field="data.name"
                initialValue={data.name}
                getFieldDecorator={getFieldDecorator}
              />

              <VisaAddress 
                label="Present employer or school address"
                field="data.address"
                initialValue={data.address}
                getFieldDecorator={getFieldDecorator}
                us_address={false}
                hidePhone={false}
                validators={this.props.validators}
                maxTelLength={12}
              />

              <VisaDatePicker 
                label="Start Date"
                field="data.start_date"
                initialValue={data.start_date}
                getFieldDecorator={getFieldDecorator}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePreviousVisitdDate(rule, value, callback, "Start Date", date_birth) }]}
              />

              <VisaInput
                label="Monthly Income in Local Currency (if employed) "
                field="data.monthly_income"
                initialValue={data.monthly_income}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Monthly Income") }]}
                maxLength={15}
              />

              <Form.Item label="Briefly describe your duties:">
                {getFieldDecorator('data.duty_explain', {
                  initialValue: utils.getInitialValue(data.duty_explain),
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <TextArea rows={3}/>
                )}
              </Form.Item>
            </>
            }
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
const Form_DS160_11_Work_Edu = Form.create()(MyForm)
export default Form_DS160_11_Work_Edu;
