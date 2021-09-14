import React, { Component } from 'react'
import {
 Form, Button, Select, Input,
} from 'antd'
import * as constants from 'utils/constants'
import * as utils from 'utils'
import VisaSelect from 'components/VisaSelect'

const { TextArea } = Input
const { Option } = Select

class MyForm extends Component {
  static defaultProps = {
    data: {
      country: null,
      gateway: null,
    },
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

    const {
     onCancel, onOk, data, loading,
    } = this.props

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Country">
          {getFieldDecorator('data.country', {
            initialValue: utils.getInitialValue(data.country),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Select placeholder="Select A Country" showSearch optionFilterProp="children">
              {constants.countries_only_option_label_list.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Payment Gateway">
          {getFieldDecorator('data.gateway', {
            initialValue: utils.getInitialValue(data.gateway),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Select placeholder="Select a payment gateway" showSearch optionFilterProp="children" style={{textTransform: 'capitalize'}}>
              {constants.gateways.map((item, index) => <Option value={item} key={index} style={{textTransform: 'capitalize'}}>{item}</Option>)}
            </Select>
          )}
        </Form.Item>
        <div className="visa-form-bottom-btn-group" style={{ textAlign: 'right' }}>
          <Button style={{ marginRight: 8 }} onClick={onCancel}>Cancel</Button>
          <Button type="primary" onClick={() => onOk(this.props.form)}>Create</Button>
        </div>
      </Form>
    )
  }
}
const PaymentTemplatesAdd = Form.create()(MyForm)
export default PaymentTemplatesAdd
