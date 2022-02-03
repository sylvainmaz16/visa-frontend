import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'antd'
import * as utils from 'utils'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }

    const { showPrev, showNext, onPrev, onNext, data, agency, tr } = this.props

    let label = tr(resources.step_2.disclaimer.default)

    if (agency === 'uva') label = tr(resources.step_2.disclaimer.uva)
    else if (agency === 'AES') label = tr(resources.step_2.disclaimer.AES)
    else if (agency && agency.toLowerCase() === 'ues') label = tr(resources.step_2.disclaimer.UES)
    else label = tr(resources.step_2.disclaimer.default)

    return (
      <Form {...formItemLayout}>
        <Form.Item label={label}>
          {getFieldDecorator('data.b_agreement_2_1', {
            initialValue: utils.getInitialValue(data.b_agreement_2_1),
            valuePropName: 'checked',
            rules: [
              {
                required: true,
                message: tr(resources.validations.required),
                transform: value => value || undefined, // Those two lines
                type: 'boolean',
              },
            ],
          })(<Checkbox>{tr(resources.step_2.disclaimer.check)}</Checkbox>)}
        </Form.Item>

        <Form.Item className="visa-global-border-top">
          <p>{tr(resources.statement.line_1)}</p>
          <p>{tr(resources.statement.line_2)}</p>
          <p>{tr(resources.statement.line_3)}</p>
          <p>{tr(resources.statement.line_4)}</p>
          <ul>
            <li>{tr(resources.statement.line_5)}</li>
            <li>{tr(resources.statement.line_6)}</li>
          </ul>
          <br />
          <p><b>{tr(resources.statement.line_7)}</b></p>
          <span style={{ fontStyle: "italic" }}>
            Public Communication Division <br />
            PA/PL, Room 2206 <br />
            U.S. Department of State <br />
            Washington, D.C. 20520 <br />
            202-647-6575
          </span>
        </Form.Item>

        <Form.Item label={tr(resources.step_2.confirm.label)}>
          {getFieldDecorator('data.b_agreement_2_2', {
            initialValue: utils.getInitialValue(data.b_agreement_2_2),
            valuePropName: 'checked',
            rules: [
              {
                required: true,
                message: tr(resources.validations.required),
                transform: value => value || undefined, // Those two lines
                type: 'boolean',
              },
            ],
          })(<Checkbox>{tr(resources.step_2.confirm.check)}</Checkbox>)}
        </Form.Item>
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
                {tr(resources.first)}
              </Button>
              {showPrev && (
                <Button id="Prev" style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
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
            <Button id="Prev" style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
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
const Form_DS160_2 = Form.create()(MyForm)
export default Form_DS160_2
