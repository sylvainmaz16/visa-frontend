import React, { Component } from 'react'
import {
 Form, Button, Select, Checkbox, Input, Icon, Row, Col,
} from 'antd'
import * as utils from 'utils'
import * as constants from 'utils/constants'
import resources from 'utils/resources'
import VisaSelect from '../VisaSelect'

class VisaSocialMediaArray extends Component {
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
      platform: null,
      identifier: null,
    })
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    })
  };

  render() {
    const {
 label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, arrayField, tr, ...rest
} = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) })
    const platforms = getFieldValue(keysField)
    const formItems = platforms.map((platform, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        <Row gutter={16}>
          <Col xs={{ span: 20 }} sm={{ span: 8 }}>
            <Form.Item label={tr(resources.components.social_media_array.platform)}>
              {getFieldDecorator(`${arrayField}[${index}].platform`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].platform : null),
                validateTrigger: ['onChange', 'onBlur'],
                rules: [
                  {
                    required: true,
                    message: tr(resources.validations.required_input_or_delete),
                  },
                ],
              })(
                <VisaSelect combines={constants.export_list(constants.social_media_options)} tr={tr} />,
              )}
            </Form.Item>
          </Col>

          {
            getFieldValue(`${arrayField}[${index}].platform`) && (getFieldValue(`${arrayField}[${index}].platform`) != 'NONE') &&
            <Col xs={{ span: 20 }} sm={{ span: 12 }}>
              <Form.Item
                label={tr(resources.components.social_media_array.identifier.label)}
                extra={tr(resources.components.social_media_array.identifier.extra)}
              >
                {getFieldDecorator(`${arrayField}[${index}].identifier`, {
                  initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].identifier : null),
                  validateTrigger: ['onChange', 'onBlur'],
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: tr(resources.validations.required_input_or_delete),
                    },
                  ],
                })(
                  <Input maxLength={50} />,
                )}
              </Form.Item>
            </Col>
          }
          {platforms.length > 1 ? (
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
        <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" />
{' '}
{tr(resources.add_another)}
          </Button>
        </Form.Item>
      </>
    )
  }
}

export default VisaSocialMediaArray
