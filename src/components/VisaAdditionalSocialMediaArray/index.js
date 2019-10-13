import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col } from 'antd';
import VisaInput from '../VisaInput'
import * as utils from '../../utils'
import * as constants from '../../utils/constants'

class VisaAdditionalSocialMediaArray extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
  }

  remove = (k, keysField, dataField) => {
    let keys = this.props.getFieldValue(keysField);
    let data = this.props.getFieldValue(dataField)
    if (keys.length === 1) {
      return;
    }

    keys.splice(k, 1);
    data.splice(k, 1);

    this.props.setFieldsValue({
      [keysField]: keys,
      [dataField]: data
    });
  };

  add = (keysField) => {
    const keys = this.props.getFieldValue(keysField);
    const nextKeys = keys.concat({
      platform: null,
      identifier: null
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, arrayField, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });
    const platforms = getFieldValue(keysField);
    console.log(platforms, initialValue)
    const formItems = platforms.map((platform, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        <Row gutter={16}>
          <Col xs={{ span: 20 }} sm={{ span: 8 }}>
            <VisaInput 
              label="Additional Social Media Platform"
              field={`${arrayField}[${index}].platform`}
              initialValue={initialValue[index] ? initialValue[index].platform : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, "Additional Social Media Platform", true) }]}
              maxLength={20}
            />
          </Col>
          <Col xs={{ span: 20 }} sm={{ span: 8 }}>
            <VisaInput 
              label="Additional Social Media Handle"
              field={`${arrayField}[${index}].identifier`}
              initialValue={initialValue[index] ? initialValue[index].identifier : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, "Additional Social Media Handle", true) }]}
              maxLength={20}
            />
          </Col>
          
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
    ));

    return (
      <>
        {formItems}
        <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" /> Add another
          </Button>
        </Form.Item>
      </>
    );
  }
}

export default VisaAdditionalSocialMediaArray
