import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import VisaInputArray from "../../../../components/VisaInputArray";
import * as utils from '../../../../utils'
import VisaSelectArray from "../../../../components/VisaSelectArray";

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.militaries && data.militaries[0] && data.militaries[0].date_from)
      data.militaries[0].date_from = data.militaries[0].date_from.format('DD/MMM/YYYY')
    if(data.militaries && data.militaries[0] && data.militaries[0].date_to)
      data.militaries[0].date_to = data.militaries[0].date_to.format('DD/MMM/YYYY')
    return data
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
    getFieldDecorator('data.b_belong_to_clan', { initialValue: utils.getInitialValue(data.b_belong_to_clan) });
    getFieldDecorator('data.b_travel_last_five_years', { initialValue: utils.getInitialValue(data.b_travel_last_five_years) });
    getFieldDecorator('data.b_belong_to_org', { initialValue: utils.getInitialValue(data.b_belong_to_org) });
    getFieldDecorator('data.b_military', { initialValue: utils.getInitialValue(data.b_military) });
    getFieldDecorator('data.b_special_skill', { initialValue: utils.getInitialValue(data.b_special_skill) });
    getFieldDecorator('data.b_rebel_group', { initialValue: utils.getInitialValue(data.b_rebel_group) });
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Additional Work / Education / Training Information</h2>
        </div>

        <VisaExplain
          label="Do you belong to a clan or tribe?"
          radioField="data.b_belong_to_clan"
          radioInitialValue={data.b_belong_to_clan}
          radioValue={this.props.form.getFieldValue('data.b_belong_to_clan')}
          textField="data.clan_name"
          textLabel="If you answer Yes, please give the name of the clan or tribe"
          textInitialValue={data.clan_name}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <VisaInputArray 
          label="Provide a list of languages you speak"
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.languages}
          arrayField="data.languages"
          keysField="copy.languages"
        />

        <VisaRadio
          label="Have you travelled to any countries within the last five years?"
          field="data.b_travel_last_five_years"
          initialValue={data.b_travel_last_five_years}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_travel_last_five_years') &&
          <VisaSelectArray 
            label="List of Countries"
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.countries}
            arrayField="data.countries"
            keysField="copy.countries"
          />
        }

        <VisaRadio
          label="Have you belonged to, contributed to, or worked for any professional, social, or charitable organisation?"
          field="data.b_belong_to_org"
          initialValue={data.b_belong_to_org}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_belong_to_org') &&
          <VisaInputArray 
            label="List of Organizations"
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.organizations}
            arrayField="data.organizations"
            keysField="copy.organizations"
          />
        }

        <VisaRadio
          label="Have you ever served in the military?"
          field="data.b_military"
          initialValue={data.b_military}
          getFieldDecorator={getFieldDecorator}
        />

        {this.props.form.getFieldValue('data.b_military') &&
        <>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaSelectItem
                label="Name of Country/Region"
                field="data.militaries[0].country"
                initialValue={data.militaries[0].country}
                content={{
                  labels: constants.countries_regions_option_label_list,
                  values: constants.countries_regions_option_value_list,
                }}
                getFieldDecorator={getFieldDecorator}
              />
              <VisaInput
                label="Branch of Service"
                field="data.militaries[0].service"
                initialValue={data.militaries[0].service}
                getFieldDecorator={getFieldDecorator}
                maxLength={40}
              />
              <VisaInput
                label="Rank/Position"
                field="data.militaries[0].rank"
                initialValue={data.militaries[0].rank}
                getFieldDecorator={getFieldDecorator}
                maxLength={40}
              />
              <VisaInput
                label="Military Speciality"
                field="data.militaries[0].speciality"
                initialValue={data.militaries[0].speciality}
                getFieldDecorator={getFieldDecorator}
                maxLength={40}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Date of Attendance From"
                field="data.militaries[0].date_from"
                initialValue={data.militaries[0].date_from}
                getFieldDecorator={getFieldDecorator}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaDatePicker 
                label="Date of Attendance To"
                field="data.militaries[0].date_to"
                initialValue={data.militaries[0].date_to}
                getFieldDecorator={getFieldDecorator}

                setFieldsValue={setFieldsValue}
                getFieldValue={getFieldValue}
              />
            </Col>
          </Row>
        </>
        }

        <VisaExplain
          label="Have you ever been a member of the Taliban?"
          radioField="data.b_taliban"
          radioInitialValue={data.b_taliban}
          radioValue={this.props.form.getFieldValue('data.b_taliban')}
          textField="data.taliban_explain"
          textInitialValue={data.taliban_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <VisaExplain
          label="Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?"
          radioField="data.b_special_skill"
          radioInitialValue={data.b_special_skill}
          radioValue={this.props.form.getFieldValue('data.b_special_skill')}
          textField="data.special_skill_explain"
          textInitialValue={data.special_skill_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <VisaExplain
          label="Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerilla group, or insurgent organisation?"
          radioField="data.b_rebel_group"
          radioInitialValue={data.b_rebel_group}
          radioValue={this.props.form.getFieldValue('data.b_rebel_group')}
          textField="data.rebel_group_explain"
          textInitialValue={data.rebel_group_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
        />

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_13_Additional_Work_Edu = Form.create()(MyForm)
export default Form_DS160_13_Additional_Work_Edu;
