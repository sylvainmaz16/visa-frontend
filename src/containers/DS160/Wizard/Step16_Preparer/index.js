import React, { Component } from 'react'
import {
  Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon,
} from 'antd'
import * as constants from 'utils/constants'
import VisaRadio from 'components/VisaRadio'
import VisaAddress from 'components/VisaAddress'
import VisaInput from 'components/VisaInput'
import * as utils from 'utils'
import resources from 'utils/resources'

const { Option } = Select
const { TextArea } = Input

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
    const {
      showPrev, showNext, onPrev, onNext, data, tr,
    } = this.props
    getFieldDecorator('data.b_assist', { initialValue: utils.getInitialValue(data.b_assist) })
    if (!data.assist_info) {
      data.assist_info = {
        preparer: {
          surname: null,
          given_name: null,
        },
        organization: {
          name: null,
        },
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null,
        },
        relationship: null,
      }
    }
    if (!data.assist_info.organization) {
      data.assist_info.organization = {
        name: null,
      }
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.e_sign.section_title)}</h2>
        </div>

        <VisaRadio
          label={tr(resources.e_sign.b_assist)}
          field="data.b_assist"
          initialValue={data.b_assist}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        {this.props.form.getFieldValue('data.b_assist') &&
          <>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.e_sign.assist_info.preparer.surname)}
                  field="data.assist_info.preparer.surname"
                  initialValue={data.assist_info.preparer.surname}
                  getFieldDecorator={getFieldDecorator}
                  tr={tr}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.e_sign.assist_info.preparer.given_name)}
                  field="data.assist_info.preparer.given_name"
                  initialValue={data.assist_info.preparer.given_name}
                  getFieldDecorator={getFieldDecorator}
                  tr={tr}
                />
              </Col>

            </Row>
            <VisaInput
              label={tr(resources.e_sign.assist_info.organization.name)}
              field="data.assist_info.organization.name"
              initialValue={data.assist_info.organization.name}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, 'Organization Name', true) }]}
              required={false}
              tr={tr}
            />
            <VisaAddress
              label={tr(resources.e_sign.assist_info.address)}
              field="data.assist_info.address"
              initialValue={data.assist_info.address}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              us_address={false}
              tr={tr}
            />
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label={tr(resources.e_sign.assist_info.relationship)}
                  field="data.assist_info.relationship"
                  initialValue={data.assist_info.relationship}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, 'Relationship to you', true) }]}
                  tr={tr}
                />
              </Col>
            </Row>
          </>
        }
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>{tr(resources.first)}</Button>
              {showPrev && <Button id="Prev" style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
              {showNext && <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
            </div>
          )}
          {showPrev && <Button id="Prev" style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    )
  }
}
const Form_DS160_16_Preparer = Form.create()(MyForm)
export default Form_DS160_16_Preparer
