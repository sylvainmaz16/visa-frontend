import React, { Component } from 'react'
import { Form, Button, Icon } from 'antd'
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

    const { showPrev, showNext, agency, tr, handlePrev, handleNewApplicant, handleSubmit, handleSubmitWithoutPayment, form } = this.props
    const family = new URLSearchParams(location.search).get('family');

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
                {tr(resources.first)}
              </Button>
              <Button type="default" id="Prev" style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>
                {tr(resources.prev)}
              </Button>
            </div>
          )}
          {showPrev && (
            <Button id="Prev" style={{ marginRight: 8 }} onClick={e => handlePrev(e, form, this.handleDates)}>
              {tr(resources.prev)}
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => handleSubmit(e, form, this.handleDates, false)}>
              {agency === 'uva' ? tr(resources.continue_to_appointment) : tr(resources.submit_with_payment)}
            </Button>
          )}
          {token && (
            <Button type="danger" style={{ marginLeft: '10px' }} onClick={e => handleSubmitWithoutPayment(e, form, this.handleDates)}>
              SUBMIT WITHOUT PAYMENT
            </Button>
          )}
          {/* showNext && (agency === '' || agency === null) && family && (
            <Button type="primary" style={{ float: 'right', marginRight: 15, background: 'lightseagreen', border: 'lightseagreen' }} onClick={e => handleSubmit(e, form, this.handleDates, true)}>
              {tr(resources.submit_all)}
            </Button>
          ) */}
        </div>

        {/*(agency === '' || agency === null) &&
          <div className="visa-global-btn-group" style={{ textAlign: 'center', padding: '40px 0' }}>
            <Button type="primary" onClick={(e) => handleNewApplicant(e, form, this.handleDates)}>
              {tr(resources.add_new)}
              <Icon type="right" />
            </Button>
          </div>
        */}
      </Form>
    )
  }
}
const FormFinal = withCookies(Form.create()(MyForm))
export default FormFinal
