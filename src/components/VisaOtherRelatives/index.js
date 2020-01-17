import React, { Component } from 'react'
import {
  Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker,
} from 'antd'
import moment from 'moment'
import * as utils from 'utils'
import * as constants from 'utils/constants'
import resources from 'utils/resources'
import VisaSelect from '../VisaSelect'
import VisaRadio from '../VisaRadio'

class VisaOtherRelatives extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    required: true,
  }

  remove = (k, keysField, dataField) => {
    const keys = this.props.getFieldValue(keysField)
    const data = this.props.getFieldValue(dataField)
    if (keys.length === 1) {
      return
    }

    keys.splice(k, 1)
    data.splice(k, 1)

    this.props.setFieldsValue({
      [keysField]: keys,
      [dataField]: data,
    })
  };

  add = keysField => {
    const keys = this.props.getFieldValue(keysField)
    const nextKeys = keys.concat({
      surname: null,
      given_name: null,
      relationship: null,
      status: null,
    })
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    })
  };

  render() {
    const {
      label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, martial_status, arrayField, tr, ...rest
    } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) })
    const people = getFieldValue(keysField)
    const formItems = people.map((person, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        <Row gutter={16}>
          <Col xs={{ span: 20 }} sm={{ span: 10 }} md={{ span: 3 }}>
            <Form.Item label={tr(resources.components.other_relatives.surname)} required>
              {getFieldDecorator(`${arrayField}[${index}].surname`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].surname : null),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Surnames') }],
              })(
                <Input />,
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 20 }} sm={{ span: 10 }} md={{ span: 3 }}>
            <Form.Item label={tr(resources.components.other_relatives.given_name)}>
              {getFieldDecorator(`${arrayField}[${index}].given_name`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].given_name : null),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Given Name') }],
              })(
                <Input />,
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 20 }} sm={{ span: 10 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.components.other_relatives.relationship)}>
              {getFieldDecorator(`${arrayField}[${index}].relationship`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].relationship : null),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={constants.export_list((martial_status == 'M' || martial_status == 'L') ? tr(constants.relative_relationship_options) : tr(constants.relative_relationship_options_except_Spouse))} tr={tr} />,
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 20 }} sm={{ span: 10 }} md={{ span: 8 }}>
            <Form.Item label={tr(resources.components.other_relatives.status)}>
              {getFieldDecorator(`${arrayField}[${index}].status`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].status : null),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={constants.export_list(tr(constants.US_Live_Status))} tr={tr} />,
              )}
            </Form.Item>
          </Col>
          {people.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              style={{ fontSize: '24px', marginTop: '40px', marginLeft: '10px' }}
              onClick={() => this.remove(index, keysField, arrayField)}
            />
          ) : null}
        </Row>

      </Form.Item>
    ))

    return (
      <>
        {formItems}
        {(people.length < 5) && <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" />
            {' '}
            {tr(resources.add_another)}
          </Button>
        </Form.Item>}
      </>
    )
  }
}

export default VisaOtherRelatives
