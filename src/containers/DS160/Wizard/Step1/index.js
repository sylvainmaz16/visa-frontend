import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'antd'
import * as constants from 'utils/constants'
import * as utils from 'utils'
import VisaSelect from 'components/VisaSelect'
import VisaInput from 'components/VisaInput'
import VisaSelectItem from 'components/VisaSelectItem'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 12 },
      },
    }

    const { showPrev, showNext, data, agency, tr } = this.props
    const { countries_option_value_list, countries_option_label_list, agency_support_countries_list } = constants

    let values = []
    let labels = []

    if (agency === 'uva') {
      countries_option_label_list.map((label, cntry_index) => {
        const index = agency_support_countries_list.findIndex(support => label.toLowerCase().startsWith(support.toLowerCase()))
        if (index >= 0) {
          values.push(countries_option_value_list[cntry_index])
          labels.push(countries_option_label_list[cntry_index])
        }
      })
    } else {
      values = countries_option_value_list
      labels = countries_option_label_list
    }

    return (
      <Form {...formItemLayout}>
        {/* <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_1.section_title)}</h2>
        </div>
        <Form.Item label={tr(resources.language.label)} extra={tr(resources.language.extra)}>
          {getFieldDecorator('data.language', {
            initialValue: utils.getInitialValue(data.language),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(<VisaSelect combines={constants.export_list(constants.hints_and_help_language)} onChange={this.props.handleLanguageChange} />)}
        </Form.Item> */}

        <Form.Item label={tr(resources.step_1.interview_location.label)} extra={tr(resources.step_1.interview_location.extra)}>
          {getFieldDecorator('data.interview_location', {
            initialValue: utils.getInitialValue(data.interview_location),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(<VisaSelect values={values} labels={labels} />)}
        </Form.Item>

        {/*<Form.Item label={tr(resources.step_1.privacy.label)} required>
                  <ul>
                    <li>{tr(resources.step_1.privacy.extra.authorities)}</li>
                    <li>{tr(resources.step_1.privacy.extra.purpose)}</li>
                    <li>{tr(resources.step_1.privacy.extra.routine)}</li>
                    <li>{tr(resources.step_1.privacy.extra.disclosure)}</li>
                  </ul>
                  {getFieldDecorator('data.privacy', {
                    initialValue: data.privacy,
                    valuePropName: 'checked',
                    rules: [
                      {
                        required: true,
                        message: tr(resources.validations.required),
                        transform: value => value || undefined, // Those two lines
                        type: 'boolean',
                      },
                    ],
                  })(<Checkbox>{tr(resources.step_1.privacy.check)}</Checkbox>)}
                </Form.Item>*/}

        <VisaSelectItem
          label={tr(resources.step_1.sq_type.label)}
          extra={tr(resources.step_1.sq_type.extra)}
          field="data.sq_type"
          initialValue={data.sq_type}
          content={{
            combines: constants.export_list(tr(constants.security_question_options)),
          }}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        <VisaInput label={tr(resources.step_1.sq_answer.label)} field="data.sq_answer" initialValue={data.sq_answer} getFieldDecorator={getFieldDecorator} tr={tr} />

        {/*<Form.Item>
                  <p className="visa-global-border-top">{tr(resources.statement.line_1)}</p>
                  <span><b>{tr(resources.statement.line_2)}</b></span>
                  <p>{tr(resources.statement.line_3)}</p>
                </Form.Item>*/}
                
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              {showPrev && (
                <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)} id="Prev">
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
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)} id="Prev">
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
const Form_DS160_1 = Form.create()(MyForm)
export default Form_DS160_1
