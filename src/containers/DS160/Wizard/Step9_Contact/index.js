import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'antd'
import * as constants from 'utils/constants'
import VisaAddress from 'components/VisaAddress'
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
    const { getFieldDecorator, getFieldValue } = form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }

    const { showPrev, showNext, onPrev, onNext, data, martial_status, tr } = this.props

    getFieldDecorator('data.relationship', { initialValue: data.relationship })
    const field = {
      relationship: getFieldValue('data.relationship'),
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.contact.section_title)}</h2>
          <div className="visa-global-section-description">{tr(resources.contact.section_descr)}</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem
              label={tr(resources.contact.relationship)}
              field="data.relationship"
              initialValue={data.relationship}
              content={{
                combines: constants.export_list(
                  martial_status === 'M' || martial_status === 'C' || martial_status === 'L' ? tr(constants.relationship_options) : tr(constants.relationship_options_except_Spouse),
                ),
              }}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
            {field.relationship ? (
              field.relationship === 'R' || field.relationship === 'S' || field.relationship === 'C' ? (
                <>
                  <VisaInput
                    label={tr(resources.contact.surname)}
                    field="data.surname"
                    initialValue={data.surname}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, tr(resources.contact.surname)) }]}
                    maxLength={33}
                    tr={tr}
                  />
                  <VisaInput
                    label={tr(resources.contact.given_name)}
                    field="data.given_name"
                    initialValue={data.given_name}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, tr(resources.contact.given_name)) }]}
                    maxLength={33}
                    tr={tr}
                  />
                </>
              ) : (
                <VisaInput
                  label={tr(resources.contact.organization)}
                  field="data.organization"
                  initialValue={data.organization}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, tr(resources.contact.organization)) }]}
                  maxLength={33}
                  tr={tr}
                />
              )
            ) : (
              ''
            )}
          </Col>
        </Row>

        <VisaAddress
          label={tr(resources.contact.address)}
          field="data.address"
          initialValue={data.address}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          hideCountry
          tr={tr}
        />

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.contact.tel_number)}
              field="data.tel_number"
              initialValue={data.tel_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, tr(resources.contact.tel_number), true) }]}
              maxLength={10}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.contact.email)}
              field="data.email"
              initialValue={data.email}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, tr(resources.contact.email)) }]}
              required={false}
              tr={tr}
            />
          </Col>
        </Row>

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
const FormContact = Form.create()(MyForm)
export default FormContact
