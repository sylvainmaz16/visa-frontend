import React, { Component } from 'react'
import { Form, Button } from 'antd'
import { withCookies } from 'react-cookie'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
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

    const { showPrev, showNext, agency, tr, handlePrev, handleSubmit, handleSubmitWithoutPayment, form } = this.props

    const token = localStorage.getItem('immigration4us_token')

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.final.section_title)}</h2>
        </div>
        <div className="visa-form-bottom-btn-group">
          {token && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
                FIRST
              </Button>
              <Button type="default" style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>
                PREV
              </Button>
            </div>
          )}
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>
              Prev
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => handleSubmit(e, form, this.handleDates)}>
              {agency === 'uva' ? tr(resources.continue_to_appointment) : tr(resources.submit_with_payment)}
            </Button>
          )}
          {token && (
            <Button type="danger" style={{ marginLeft: '10px' }} onClick={e => handleSubmitWithoutPayment(e, form, this.handleDates)}>
              SUBMIT WITHOUT PAYMENT
            </Button>
          )}
        </div>
      </Form>
    )
  }
}
const FormFinal = withCookies(Form.create()(MyForm))
export default FormFinal
