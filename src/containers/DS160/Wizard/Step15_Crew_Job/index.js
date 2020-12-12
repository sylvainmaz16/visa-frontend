import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'antd'
import VisaRadio from 'components/VisaRadio'
import VisaAddress from 'components/VisaAddress'
import VisaInput from 'components/VisaInput'
import * as utils from 'utils'
import resources from 'utils/resources'

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
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
    const { showPrev, showNext, onPrev, onNext, data, tr } = this.props
    getFieldDecorator('data.b_position', { initialValue: utils.getInitialValue(data.b_position) })
    getFieldDecorator('data.b_vessel', { initialValue: utils.getInitialValue(data.b_vessel) })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.crew_visa.section_title)}</h2>
          <div className="visa-global-section-description">{tr(resources.crew_visa.section_descr)}</div>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.crew_visa.job_title)}
              field="data.job_title"
              initialValue={data.job_title}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.crew_visa.job_title), true) }]}
            />
            <VisaInput
              label={tr(resources.crew_visa.company_name)}
              field="data.company_name"
              initialValue={data.company_name}
              getFieldDecorator={getFieldDecorator}
              customRule={[
                { validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Name of company that owns the aircraft or vessel you will be working on', true) },
              ]}
              tr={tr}
            />
            <VisaInput
              label={tr(resources.crew_visa.company_tel)}
              field="data.company_tel"
              initialValue={data.company_tel}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Company Telephone Number', true) }]}
              tr={tr}
            />
          </Col>
        </Row>

        <VisaRadio label={tr(resources.crew_visa.b_position)} field="data.b_position" initialValue={data.b_position} getFieldDecorator={getFieldDecorator} tr={tr} />

        {this.props.form.getFieldValue('data.b_position') && (
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.crew_visa.position_info.agency_name)}
                  field="data.position_info.agency_name"
                  initialValue={data.position_info.agency_name}
                  getFieldDecorator={getFieldDecorator}
                  tr={tr}
                />
                <VisaInput
                  label={tr(resources.crew_visa.position_info.surname.label)}
                  extra={tr(resources.crew_visa.position_info.surname.extra)}
                  field="data.position_info.surname"
                  initialValue={data.position_info.surname}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Contact Surname(s)', true) }]}
                  tr={tr}
                />
                <VisaInput
                  label={tr(resources.crew_visa.position_info.given_name.label)}
                  extra={tr(resources.crew_visa.position_info.given_name.extra)}
                  field="data.position_info.given_name"
                  initialValue={data.position_info.given_name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Contact Given Name(s)', true) }]}
                  tr={tr}
                />
              </Col>
            </Row>
            <VisaAddress
              label={tr(resources.crew_visa.position_info.address.label)}
              field="data.position_info.address"
              initialValue={data.position_info.address}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              us_address={false}
              tr={tr}
            />
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.crew_visa.position_info.address.tel_number)}
                  field="data.position_info.address.tel_number"
                  initialValue={data.position_info.address.tel_number}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Telephone number', true) }]}
                  maxLength={20}
                  tr={tr}
                />
              </Col>
            </Row>
          </>
        )}

        <VisaRadio label={tr(resources.crew_visa.b_vessel)} field="data.b_vessel" initialValue={data.b_vessel} getFieldDecorator={getFieldDecorator} tr={tr} />

        {this.props.form.getFieldValue('data.b_vessel') && (
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label={tr(resources.crew_visa.vessel_info.vessel_name)}
                field="data.vessel_info.vessel_name"
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, tr(resources.crew_visa.vessel_info.vessel_name), true) }]}
                initialValue={data.vessel_info.vessel_name}
                getFieldDecorator={getFieldDecorator}
                maxLength={40}
                tr={tr}
              />
              <VisaInput
                label={tr(resources.crew_visa.vessel_info.vessel_id)}
                field="data.vessel_info.vessel_id"
                initialValue={data.vessel_info.vessel_id}
                getFieldDecorator={getFieldDecorator}
                maxLength={20}
                tr={tr}
              />
            </Col>
          </Row>
        )}

        <Form.Item className="visa-global-border-top">
          <p>{tr(resources.statement.line_1)}</p>
          <span><b>{tr(resources.statement.line_2)}</b></span>
          <p>{tr(resources.statement.line_3)}</p>
        </Form.Item>
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>
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
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
              Prev
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
              Next
            </Button>
          )}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>
            Save and Continue Later
          </Button>
        </div>
      </Form>
    )
  }
}
const Form_DS160_15_Crew_Job = Form.create()(MyForm)
export default Form_DS160_15_Crew_Job
