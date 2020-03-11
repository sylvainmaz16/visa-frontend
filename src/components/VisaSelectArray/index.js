import React, { Component } from 'react'
import {
  Form, Button, Select, Checkbox, Input, Icon,
} from 'antd'
import * as constants from 'utils/constants'
import * as utils from 'utils'
import resources from 'utils/resources'
import VisaSelect from '../VisaSelect'

class VisaSelectArray extends Component {
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
    const nextKeys = keys.concat('')
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    })
  };

  render() {
    const {
      label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, arrayField, tr, ...rest
    } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) })
    const languages = getFieldValue(keysField)

    const formItems = languages.map((lang, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        {getFieldDecorator(`${arrayField}[${index}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          initialValue: utils.getInitialValue(initialValue[index]),
          rules: [
            {
              required: true,
              whitespace: true,
              message: tr(resources.validations.required_input_or_delete),
            },
            {
              validator: (rule, value, callback) => {
                const prevs = []
                for (let i = 0; i < index - 1; i++) { prevs.push(getFieldValue(`${arrayField}[${i}]`)) }
                if (prevs.includes(value)) {
                  callback('The given country has already been listed.')

                  return
                }

                callback()
              },
            },
          ],
        })(<VisaSelect combines={constants.export_list(constants.past_travel_countries_options)} style={{ width: '60%', marginRight: 8 }} tr={tr} />)}
        {languages.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(index, keysField, arrayField)}
          />
        ) : null}
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
export default VisaSelectArray
