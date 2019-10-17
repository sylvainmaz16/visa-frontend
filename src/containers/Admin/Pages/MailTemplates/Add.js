import React, { Component } from "react";
import { Form, Button, Select, Input } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";

const { TextArea } = Input;
const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    data: {
      country: null,
      content: null
    }
  }
  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };

    const { onCancel, onOk, data, loading } = this.props

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Country">
          {getFieldDecorator('data.country', {
            initialValue: utils.getInitialValue(data.country),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Content">
          {getFieldDecorator('data.content', {
            initialValue: utils.getInitialValue(data.content),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <TextArea rows={12}/>
          )}
        </Form.Item>
        <div className="visa-form-bottom-btn-group" style={{ textAlign: 'right' }}>
          <Button style={{ marginRight: 8 }} onClick={onCancel}>Cancel</Button>
          <Button type="primary" onClick={() => onOk(this.props.form)}>Create</Button>
        </div>
      </Form>
    );
  }
}
const MailTemplatesAdd = Form.create()(MyForm)
export default MailTemplatesAdd;
