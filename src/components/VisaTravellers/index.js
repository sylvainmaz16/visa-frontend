import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from 'antd';
import VisaSelect from '../VisaSelect'
import moment from 'moment'
import VisaRadio from "../VisaRadio";
import * as utils from '../../utils'
import * as constants from '../../utils/constants'
class VisaTravellers extends Component {
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
      surname: null,
      given_name: null,
      relationship: null,
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, arrayField, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });
    const people = getFieldValue(keysField);
    const formItems = people.map((person, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 6 }}>
            <Form.Item label="Given Name (First Name)" required>
              {getFieldDecorator(`${arrayField}[${index}].surname`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].surname : null),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 6 }}>
            <Form.Item label="Surname (Last Name)">
              {getFieldDecorator(`${arrayField}[${index}].given_name`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].given_name : null),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 10 }}>
            <Form.Item label="Relationship to you">
              {getFieldDecorator(`${arrayField}[${index}].relationship`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].relationship : null),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <VisaSelect combines={constants.person_travel_with_relationship_options} />
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
    ));

    return (
      <>
        {formItems}
        {(people.length < 5) && <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" /> Add another
          </Button>
        </Form.Item>}
      </>
    );
  }
}

export default VisaTravellers;
