import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from 'antd';
import VisaSelect from '../VisaSelect'
import moment from 'moment'
import VisaRadio from "../VisaRadio";
import VisaDatePicker from '../VisaDatePicker'
import * as utils from '../../utils'
import * as constants from '../../utils/constants'
import resources from "../../utils/resources";

class VisaPreviousVisits extends Component {
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
      date: null,
      length_of_stay: {
        period: null,
        unit: null
      }
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, arrayField, birthday, tr, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });
    const visits = getFieldValue(keysField);
    const formItems = visits.map((visit, index) => {
      getFieldDecorator(`${arrayField}[${index}].length_of_stay.unit`, {initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].length_of_stay.unit : null)})
      return (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
      >
        <Row gutter={16}>
          <Col xs={{ span: 20 }} sm={{ span: 8 }}>
            <VisaDatePicker 
              label={tr(resources.components.previous_visits.date)}
              
              field={`${arrayField}[${index}].date`}
              initialValue={initialValue[index] ? initialValue[index].date : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => validators.validatePreviousVisitdDate(rule, value, callback, "Date Arrived", birthday) }]}
              required={true}

              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            <Form.Item 
              label={tr(resources.components.previous_visits.length_of_stay.period.label)} 
              extra={tr(resources.components.previous_visits.length_of_stay.period.extra)} 
              required
            >
              {getFieldDecorator(`${arrayField}[${index}].length_of_stay.period`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].length_of_stay.period : null),
                // validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: (rule, value, callback) => validators.validateLengthOfStay(rule, value, callback, "Length of Stay", getFieldValue(`${arrayField}[${index}].length_of_stay.unit`) != 'H') }],
              })(
                <Input maxLength={3} disabled={getFieldValue(`${arrayField}[${index}].length_of_stay.unit`) == 'H'}/>
              )}
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            <Form.Item label={tr(resources.components.previous_visits.length_of_stay.unit)}>
              {getFieldDecorator(`${arrayField}[${index}].length_of_stay.unit`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].length_of_stay.unit : null),
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={tr(constants.period_unit_options_v2)} tr={tr}/>
              )}
            </Form.Item>
          </Col>
          {visits.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              style={{ fontSize: '24px', marginTop: '40px', marginLeft: '10px' }}
              onClick={() => this.remove(index, keysField, arrayField)}
            />
          ) : null}
        </Row>
        
      </Form.Item>
    )});

    return (
      <>
        {formItems}
        {(visits.length < 5) && <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" /> {tr(resources.add_another)}
          </Button>
        </Form.Item>}
      </>
    );
  }
}

export default VisaPreviousVisits;
