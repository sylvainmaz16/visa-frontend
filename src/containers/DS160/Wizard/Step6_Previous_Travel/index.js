import React, { Component } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import * as constants from "utils/constants";
import VisaSelect from "components/VisaSelect";
import VisaRadio from "components/VisaRadio";
import VisaExplain from "components/VisaExplain";
import VisaDatePicker from "components/VisaDatePicker";
import VisaPreviousVisits from "components/VisaPreviousVisits";
import * as utils from "utils";
import resources from "utils/resources";

const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };

  handleDates = data => {
    if (data.US_Visa && data.US_Visa.date) data.US_Visa.date = data.US_Visa.date.format("DD/MMM/YYYY");

    if (data.prev_visit_info) {
      for (let i = 0; i < data.prev_visit_info.length; i += 1) {
        if (data.prev_visit_info[i].date) data.prev_visit_info[i].date = data.prev_visit_info[i].date.format("DD/MMM/YYYY");
      }
    }

    return data;
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator, getFieldValue, setFieldsValue } = form;
    const formItemLayout = {
      layout: "vertical",
      labelCol: {
        xs: { span: 24 }
      },
      wrapperCol: {
        sm: { span: 24 }
      }
    };

    const { showPrev, showNext, data, date_birth, tr, validators, handleNext, handleSave, handlePrev } = this.props;

    getFieldDecorator("data.b_ever_been_in_US", { initialValue: utils.getInitialValue(data.b_ever_been_in_US) });
    getFieldDecorator("data.b_ever_hold_Driver_License", { initialValue: utils.getInitialValue(data.b_ever_hold_Driver_License) });
    getFieldDecorator("data.b_ever_been_issued_US_Visa", { initialValue: utils.getInitialValue(data.b_ever_been_issued_US_Visa) });
    getFieldDecorator("data.US_Visa.b_ever_been_lost", { initialValue: utils.getInitialValue(data.US_Visa.b_ever_been_lost) });
    getFieldDecorator("data.b_ever_been_refused_US_Visa", { initialValue: utils.getInitialValue(data.b_ever_been_refused_US_Visa) });
    getFieldDecorator("data.b_ever_been_denied_travel_auth", { initialValue: utils.getInitialValue(data.b_ever_been_denied_travel_auth) });
    getFieldDecorator("data.b_petition", { initialValue: utils.getInitialValue(data.b_petition) });
    getFieldDecorator("data.US_Visa.b_ever_been_cancelled", { initialValue: utils.getInitialValue(data.US_Visa.b_ever_been_cancelled) });

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.previous_travel.section_title)}</h2>
        </div>

        <VisaRadio label={tr(resources.previous_travel.b_ever_been_in_US.label)} extra={tr(resources.previous_travel.b_ever_been_in_US.extra)} field="data.b_ever_been_in_US" initialValue={data.b_ever_been_in_US} getFieldDecorator={getFieldDecorator} tr={tr} />
        {form.getFieldValue("data.b_ever_been_in_US") && (
          <VisaPreviousVisits label={tr(resources.previous_travel.prev_visit_info.label)} getFieldDecorator={getFieldDecorator} getFieldValue={getFieldValue} setFieldsValue={setFieldsValue} initialValue={data.prev_visit_info} arrayField="data.prev_visit_info" keysField="copy.prev_visit_info" validators={validators} birthday={date_birth} tr={tr} />
        )}

        <VisaRadio label={tr(resources.previous_travel.b_ever_hold_Driver_License.label)} field="data.b_ever_hold_Driver_License" initialValue={data.b_ever_hold_Driver_License} getFieldDecorator={getFieldDecorator} tr={tr} />

        {form.getFieldValue("data.b_ever_hold_Driver_License") && (
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item label={tr(resources.previous_travel.prev_DL_info.number.label)} extra={tr(resources.previous_travel.prev_DL_info.number.extra)}>
                  {getFieldDecorator("data.prev_DL_info.number", {
                    initialValue: utils.getInitialValue(data.prev_DL_info.number)
                    // rules: [{ required: true, message: tr(resources.validations.required) }],
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item label={tr(resources.previous_travel.prev_DL_info.state.label)}>
                  {getFieldDecorator("data.prev_DL_info.state", {
                    initialValue: utils.getInitialValue(data.prev_DL_info.state),
                    rules: [{ required: true, message: tr(resources.validations.required) }]
                  })(<VisaSelect combines={constants.state_options_list()} tr={tr} />)}
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        <VisaRadio label={tr(resources.previous_travel.b_ever_been_issued_US_Visa.label)} field="data.b_ever_been_issued_US_Visa" initialValue={data.b_ever_been_issued_US_Visa} getFieldDecorator={getFieldDecorator} tr={tr} />

        {form.getFieldValue("data.b_ever_been_issued_US_Visa") && (
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 8 }}>
                <VisaDatePicker
                  label={tr(resources.previous_travel.US_Visa.date.label)}
                  field="data.US_Visa.date"
                  initialValue={data.US_Visa.date}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => validators.validateLastVisaIssuedDate(rule, value, callback, tr(resources.previous_travel.US_Visa.date.label), date_birth) }]}
                  required
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 16 }} md={{ span: 12 }}>
                <Form.Item label={tr(resources.previous_travel.US_Visa.number.label)} extra={tr(resources.previous_travel.US_Visa.number.extra)}>
                  {getFieldDecorator("data.US_Visa.number", {
                    initialValue: utils.getInitialValue(data.US_Visa.number),
                    rules: [{ validator: (rule, value, callback) => validators.validateVisaNumber(rule, value, callback, tr(resources.previous_travel.US_Visa.number.label)) }]
                  })(<Input maxLength={12} />)}
                </Form.Item>
              </Col>
            </Row>
            <VisaRadio label={tr(resources.previous_travel.US_Visa.b_same_type_visa.label)} field="data.US_Visa.b_same_type_visa" initialValue={data.US_Visa.b_same_type_visa} getFieldDecorator={getFieldDecorator} tr={tr} />
            <VisaRadio label={tr(resources.previous_travel.US_Visa.b_same_cntry_visa.label)} field="data.US_Visa.b_same_cntry_visa" initialValue={data.US_Visa.b_same_cntry_visa} getFieldDecorator={getFieldDecorator} tr={tr} />
            <VisaRadio label={tr(resources.previous_travel.US_Visa.b_been_ten_printed.label)} field="data.US_Visa.b_been_ten_printed" initialValue={data.US_Visa.b_been_ten_printed} getFieldDecorator={getFieldDecorator} tr={tr} />
            <VisaRadio label={tr(resources.previous_travel.US_Visa.b_ever_been_lost.label)} field="data.US_Visa.b_ever_been_lost" initialValue={data.US_Visa.b_ever_been_lost} getFieldDecorator={getFieldDecorator} tr={tr} />
            {form.getFieldValue("data.US_Visa.b_ever_been_lost") && (
              <>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Form.Item label={tr(resources.previous_travel.US_Visa.lost_info.year.label)} required>
                      {getFieldDecorator("data.US_Visa.lost_info.year", {
                        initialValue: utils.getInitialValue(data.US_Visa.lost_info.year),
                        rules: [{ validator: (rule, value, callback) => validators.validateVisaLostYear(rule, value, callback, "Year", date_birth) }]
                      })(<Input maxLength={4} />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label={tr(resources.previous_travel.US_Visa.lost_info.explain.label)}>
                  {getFieldDecorator("data.US_Visa.lost_info.explain", {
                    initialValue: utils.getInitialValue(data.US_Visa.lost_info.explain),
                    // rules: [{ required: true, message: tr(resources.validations.required) }],
                    rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, tr(resources.previous_travel.US_Visa.lost_info.explain.label), true) }]
                  })(<TextArea rows={7} />)}
                </Form.Item>
              </>
            )}
            <VisaExplain
              label={tr(resources.previous_travel.US_Visa.b_ever_been_cancelled.label)}
              radioField="data.US_Visa.b_ever_been_cancelled"
              radioInitialValue={data.US_Visa.b_ever_been_cancelled}
              radioValue={form.getFieldValue("data.US_Visa.b_ever_been_cancelled")}
              textField="data.US_Visa.cancel_info.explain"
              textInitialValue={data.US_Visa.cancel_info.explain}
              getFieldDecorator={getFieldDecorator}
              validators={validators}
              tr={tr}
            />
          </>
        )}

        <VisaExplain
          label={tr(resources.previous_travel.b_ever_been_refused_US_Visa.label)}
          radioField="data.b_ever_been_refused_US_Visa"
          radioInitialValue={data.b_ever_been_refused_US_Visa}
          radioValue={form.getFieldValue("data.b_ever_been_refused_US_Visa")}
          textField="data.refuse_info.explain"
          textInitialValue={data.refuse_info.explain}
          getFieldDecorator={getFieldDecorator}
          validators={validators}
          tr={tr}
        />

        <VisaExplain
          label={tr(resources.previous_travel.b_ever_been_denied_travel_auth.label)}
          radioField="data.b_ever_been_denied_travel_auth"
          radioInitialValue={data.b_ever_been_denied_travel_auth}
          radioValue={form.getFieldValue("data.b_ever_been_denied_travel_auth")}
          textField="data.denied_info.explain"
          textInitialValue={data.denied_info.explain}
          getFieldDecorator={getFieldDecorator}
          validators={validators}
          tr={tr}
        />

        <VisaExplain
          label={tr(resources.previous_travel.b_petition.label)}
          radioField="data.b_petition"
          radioInitialValue={data.b_petition}
          radioValue={form.getFieldValue("data.b_petition")}
          textField="data.petition_info.explain"
          textInitialValue={data.petition_info ? data.petition_info.explain : null}
          getFieldDecorator={getFieldDecorator}
          validators={validators}
          tr={tr}
        />

        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: "absolute", right: "50px", top: "20px" }}>
              <Button type="primary" style={{ marginRight: "10px" }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
                FIRST
              </Button>
              {showPrev && (
                <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
                  Prev
                </Button>
              )}
              {showNext && (
                <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
                  Next
                </Button>
              )}
            </div>
          )}
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>
              Prev
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => handleNext(e, form, this.handleDates)}>
              Next
            </Button>
          )}
          <Button type="link" onClick={e => handleSave(e, form, this.handleDates)}>
            Save and Continue Later
          </Button>
        </div>
      </Form>
    );
  }
}
const FormDS1606PreviousTravel = Form.create()(MyForm);
export default FormDS1606PreviousTravel;
