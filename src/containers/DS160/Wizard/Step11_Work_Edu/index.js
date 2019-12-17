import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from 'utils/constants'
import VisaAddress from "components/VisaAddress";
import VisaInput from "components/VisaInput";
import VisaSelectItem from "components/VisaSelectItem";
import VisaDatePicker from "components/VisaDatePicker";
import * as utils from 'utils';
import resources from "utils/resources";

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

    const { showPrev, showNext, onPrev, onNext, data, date_birth, tr } = this.props
    getFieldDecorator('data.occupation', { initialValue: utils.getInitialValue(data.occupation) });

    const occupation = this.props.form.getFieldValue('data.occupation')
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.work_or_edu.section_title)}</h2>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <VisaSelectItem
              label={tr(resources.work_or_edu.occupation.label)}
              field="data.occupation"
              initialValue={data.occupation}
              content={{
                combines: constants.export_list(tr(constants.occupation_options))
              }}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
            {occupation == 'O' &&
              <Form.Item label={tr(resources.work_or_edu.specify_other_explain.other)}>
                {getFieldDecorator('data.specify_other_explain', {
                  initialValue: utils.getInitialValue(data.specify_other_explain),
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, 'Specify Other', true) }]
                })(
                  <TextArea rows={3}/>
                )}
              </Form.Item>
            }
            {occupation == 'N' &&
              <Form.Item label={tr(resources.work_or_edu.specify_other_explain.explain)}>
                {getFieldDecorator('data.specify_other_explain', {
                  initialValue: utils.getInitialValue(data.specify_other_explain),
                  rules: [{ required: true, message: tr(resources.validations.required) }],
                })(
                  <TextArea rows={3}/>
                )}
              </Form.Item>
            }
            {(occupation != 'N' && occupation != 'RT' && occupation != 'H') && 
            <>
              <VisaInput
                label={tr(resources.work_or_edu.name.label)}
                field="data.name"
                initialValue={data.name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, "Employer or School Name") }]}
                tr={tr}
              />

              <VisaAddress 
                label={tr(resources.work_or_edu.address.label)}
                field="data.address"
                initialValue={data.address}
                getFieldDecorator={getFieldDecorator}
                us_address={false}
                hidePhone={false}
                validators={this.props.validators}
                maxTelLength={12}
                tr={tr}
              />

              <VisaDatePicker 
                label={tr(resources.work_or_edu.start_date.label)}
                field="data.start_date"
                initialValue={data.start_date}
                getFieldDecorator={getFieldDecorator}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePreviousVisitdDate(rule, value, callback, "Start Date", date_birth) }]}
                tr={tr}
              />

              <VisaInput
                label={tr(resources.work_or_edu.monthly_income.label)}
                field="data.monthly_income"
                initialValue={data.monthly_income}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Monthly Income") }]}
                maxLength={15}
                tr={tr}
              />

              <Form.Item label={tr(resources.work_or_edu.duty_explain.label)}>
                {getFieldDecorator('data.duty_explain', {
                  initialValue: utils.getInitialValue(data.duty_explain),
                  rules: [{ required: true, message: tr(resources.validations.required) }],
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
