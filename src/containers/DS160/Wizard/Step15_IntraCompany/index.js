import React, { Component } from 'react'
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd'
import * as constants from 'utils/constants'
import VisaSelect from 'components/VisaSelect'
import moment from 'moment'
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
    const { showPrev, showNext, onPrev, onNext, data, intracompany_type, tr } = this.props

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.intracompany.section_title)}</h2>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            {intracompany_type == 'A' && (
              <>
                <VisaInput label={tr(resources.intracompany.petition)} field="data.petition" initialValue={data.petition} getFieldDecorator={getFieldDecorator} tr={tr} />
                <VisaInput
                  label={tr(resources.intracompany.name_filed_petition)}
                  field="data.name_filed_petition"
                  initialValue={data.name_filed_petition}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, tr(resources.intracompany.name_filed_petition)) }]}
                  tr={tr}
                />
              </>
            )}
            <VisaInput
              label={tr(resources.intracompany.employer)}
              field="data.employer"
              initialValue={data.employer}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateSchoolName(rule, value, callback, tr(resources.intracompany.employer), true) }]}
            />
          </Col>
        </Row>

        <VisaAddress
          label={tr(resources.intracompany.address.label)}
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
              label={tr(resources.intracompany.tel_number)}
              field="data.tel_number"
              initialValue={data.tel_number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Telephone number', true) }]}
              maxLength={12}
              tr={tr}
            />
            <VisaInput
              label={tr(resources.intracompany.income)}
              field="data.income"
              initialValue={data.income}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Monthly Income', true) }]}
              maxLength={15}
              tr={tr}
            />
          </Col>
        </Row>
        
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
const Form_DS160_15_IntraCompany = Form.create()(MyForm)
export default Form_DS160_15_IntraCompany
