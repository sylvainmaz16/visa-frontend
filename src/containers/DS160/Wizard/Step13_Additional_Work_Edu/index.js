import React, { Component } from 'react'
import {
 Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, Icon,
} from 'antd'
import * as constants from 'utils/constants'
import VisaRadio from 'components/VisaRadio'
import VisaExplain from 'components/VisaExplain'
import VisaInput from 'components/VisaInput'
import VisaSelectItem from 'components/VisaSelectItem'
import VisaDatePicker from 'components/VisaDatePicker'
import VisaInputArray from 'components/VisaInputArray'
import * as utils from 'utils'
import VisaSelectArray from 'components/VisaSelectArray'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  handleDates = data => {
    if (data.militaries && data.militaries[0] && data.militaries[0].date_from) {
      data.militaries[0].date_from = data.militaries[0].date_from.format('DD/MMM/YYYY')
    }
    if (data.militaries && data.militaries[0] && data.militaries[0].date_to) {
      data.militaries[0].date_to = data.militaries[0].date_to.format('DD/MMM/YYYY')
    }

    return data
  }

  render() {
    const { getFieldDecorator, getFieldValue, setFieldsValue } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }
    const {
 showPrev, showNext, onPrev, onNext, data, tr,
} = this.props

    getFieldDecorator('data.b_belong_to_clan', { initialValue: utils.getInitialValue(data.b_belong_to_clan) })
    getFieldDecorator('data.b_travel_last_five_years', { initialValue: utils.getInitialValue(data.b_travel_last_five_years) })
    getFieldDecorator('data.b_belong_to_org', { initialValue: utils.getInitialValue(data.b_belong_to_org) })
    getFieldDecorator('data.b_military', { initialValue: utils.getInitialValue(data.b_military) })
    getFieldDecorator('data.b_special_skill', { initialValue: utils.getInitialValue(data.b_special_skill) })
    getFieldDecorator('data.b_rebel_group', { initialValue: utils.getInitialValue(data.b_rebel_group) })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.additional_work.section_title)}</h2>
        </div>

        <VisaRadio label={tr(resources.additional_work.b_belong_to_clan)} field="data.b_belong_to_clan" initialValue={data.b_belong_to_clan} getFieldDecorator={getFieldDecorator} tr={tr} />

        {getFieldValue('data.b_belong_to_clan') && (
          <VisaInput
            label={tr(resources.additional_work.clan_name)}
            field="data.clan_name"
            initialValue={data.clan_name}
            getFieldDecorator={getFieldDecorator}
            maxLength={40}
            tr={tr}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, tr(resources.additional_work.clan_name), true) }]}
          />
        )}

        <VisaInputArray
          label={tr(resources.additional_work.languages.label)}
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.languages}
          arrayField="data.languages"
          keysField="copy.languages"
          validators={this.props.validators}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, 'Language Name', true) }]}
          tr={tr}
        />

        <VisaRadio
          label={tr(resources.additional_work.b_travel_last_five_years)}
          field="data.b_travel_last_five_years"
          initialValue={data.b_travel_last_five_years}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        {this.props.form.getFieldValue('data.b_travel_last_five_years') && (
          <VisaSelectArray
            label={tr(resources.additional_work.countries.label)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.countries}
            arrayField="data.countries"
            keysField="copy.countries"
            tr={tr}
          />
        )}

        <VisaRadio label={tr(resources.additional_work.b_belong_to_org)} field="data.b_belong_to_org" initialValue={data.b_belong_to_org} getFieldDecorator={getFieldDecorator} tr={tr} />

        {this.props.form.getFieldValue('data.b_belong_to_org') && (
          <VisaInputArray
            label={tr(resources.additional_work.organizations.label)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.organizations}
            arrayField="data.organizations"
            keysField="copy.organizations"
            validators={this.props.validators}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, 'Organization Name', true) }]}
            tr={tr}
          />
        )}

        <VisaRadio label={tr(resources.additional_work.b_military)} field="data.b_military" initialValue={data.b_military} getFieldDecorator={getFieldDecorator} tr={tr} />

        {this.props.form.getFieldValue('data.b_military') && (
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaSelectItem
                  label={tr(resources.additional_work.militaries.country)}
                  field="data.militaries[0].country"
                  initialValue={data.militaries[0].country}
                  content={{
                    labels: constants.countries_regions_option_label_list,
                    values: constants.countries_regions_option_value_list,
                  }}
                  getFieldDecorator={getFieldDecorator}
                  tr={tr}
                />
                <VisaInput
                  label={tr(resources.additional_work.militaries.service)}
                  field="data.militaries[0].service"
                  initialValue={data.militaries[0].service}
                  getFieldDecorator={getFieldDecorator}
                  maxLength={40}
                  tr={tr}
                />
                <VisaInput
                  label={tr(resources.additional_work.militaries.rank)}
                  field="data.militaries[0].rank"
                  initialValue={data.militaries[0].rank}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, tr(resources.additional_work.militaries.rank), true) }]}
                  maxLength={40}
                  tr={tr}
                />
                <VisaInput
                  label={tr(resources.additional_work.militaries.speciality)}
                  field="data.militaries[0].speciality"
                  initialValue={data.militaries[0].speciality}
                  getFieldDecorator={getFieldDecorator}
                  maxLength={40}
                  tr={tr}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.additional_work.militaries.date_from)}
                  field="data.militaries[0].date_from"
                  initialValue={data.militaries[0].date_from}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, 'Date of Attendance From', false) }]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker
                  label={tr(resources.additional_work.militaries.date_to)}
                  field="data.militaries[0].date_to"
                  initialValue={data.militaries[0].date_to}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[
                    {
                      validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, 'Date of Attendance To', this.props.form.getFieldValue('data.militaries[0].date_from'), false),
                    },
                  ]}
                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                  tr={tr}
                />
              </Col>
            </Row>
          </>
        )}

        <VisaExplain
          label={tr(resources.additional_work.b_taliban)}
          radioField="data.b_taliban"
          radioInitialValue={data.b_taliban}
          radioValue={this.props.form.getFieldValue('data.b_taliban')}
          textField="data.taliban_explain"
          textInitialValue={data.taliban_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          tr={tr}
        />

        <VisaExplain
          label={tr(resources.additional_work.b_special_skill)}
          radioField="data.b_special_skill"
          radioInitialValue={data.b_special_skill}
          radioValue={this.props.form.getFieldValue('data.b_special_skill')}
          textField="data.special_skill_explain"
          textInitialValue={data.special_skill_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          tr={tr}
        />

        <VisaExplain
          label={tr(resources.additional_work.b_rebel_group)}
          radioField="data.b_rebel_group"
          radioInitialValue={data.b_rebel_group}
          radioValue={this.props.form.getFieldValue('data.b_rebel_group')}
          textField="data.rebel_group_explain"
          textInitialValue={data.rebel_group_explain}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          tr={tr}
        />
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
                {tr(resources.first)}
              </Button>
              {showPrev && (
                <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
                  {tr(resources.prev)}
                </Button>
              )}
              {showNext && (
                <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
                  {tr(resources.next)}
                </Button>
              )}
            </div>
          )}
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
              {tr(resources.prev)}
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
              {tr(resources.next)}
            </Button>
          )}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>
            {tr(resources.save_and_continue_later)}
          </Button>
        </div>
      </Form>
    )
  }
}
const Form_DS160_13_Additional_Work_Edu = Form.create()(MyForm)
export default Form_DS160_13_Additional_Work_Edu
