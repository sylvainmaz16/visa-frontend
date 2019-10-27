import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from 'antd';
import VisaSelect from '../VisaSelect'
import moment from 'moment'
import VisaRadio from "../VisaRadio";
import VisaInput from '../VisaInput'
import VisaAddress from "../VisaAddress";
import VisaSelectItem from "../VisaSelectItem";
import VisaDatePicker from "../VisaDatePicker";
import * as utils from '../../utils'
import * as constants from '../../utils/constants'
const { TextArea } = Input;
class VisaFormerSpouses extends Component {
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
      birthday: null,
      nationality: null,
      place_of_birth: {
        city: null,
        country: null
      },
      marriage_date: null,
      end_date: null,
      end_explain: null,
      end_country: null,
      address: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        country: null
      }
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, martial_status, arrayField, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });
    const people = getFieldValue(keysField);

    const formItems = people.map((person, index) => { 
      return (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
        style={{ background: 'oldlace', padding: '10px' }}
      >
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="First Name"
              field={`${arrayField}[${index}].surname`}
              initialValue={initialValue[index] ? initialValue[index].surname : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Last Name"
              field={`${arrayField}[${index}].given_name`}
              initialValue={initialValue[index] ? initialValue[index].given_name : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
            />
          </Col>
        </Row>
        <VisaDatePicker 
          label="Date of birth"
          field={`${arrayField}[${index}].birthday`}
          initialValue={initialValue[index] ? initialValue[index].birthday : null}
          getFieldDecorator={getFieldDecorator}
          required={false}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
        />
        <VisaSelectItem
          label="Nationality"
          field={`${arrayField}[${index}].nationality`}
          initialValue={initialValue[index] ? initialValue[index].nationality : null}
          content={{
            combines: constants.nationality_option_list_func()
          }}
          getFieldDecorator={getFieldDecorator}
        />
        <Form.Item label="Place of birth">
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="City"
                extra="Leave blank if you do not know"
                field={`${arrayField}[${index}].place_of_birth.city`}
                initialValue={initialValue[index] && initialValue[index].place_of_birth ? initialValue[index].place_of_birth.city : null}
                getFieldDecorator={getFieldDecorator}
                required={false}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaSelectItem
                label="Country"
                field={`${arrayField}[${index}].place_of_birth.country`}
                initialValue={initialValue[index] && initialValue[index].place_of_birth ? initialValue[index].place_of_birth.country : null}
                content={{
                  values: constants.countries_regions_option_value_list,
                  labels: constants.countries_regions_option_label_list,
                }}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
        </Form.Item>
        <VisaAddress 
          label="Address"
          field={`${arrayField}[${index}].address`}
          initialValue={initialValue[index] ? initialValue[index].address : {}}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          us_address={false}
        />
        <VisaDatePicker 
          label="Date of Marriage"

          field={`${arrayField}[${index}].marriage_date`}
          initialValue={initialValue[index] ? initialValue[index].marriage_date : null}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
        />
        <VisaDatePicker 
          label="Date Marriage End"
          field={`${arrayField}[${index}].end_date`}
          initialValue={initialValue[index] ? initialValue[index].end_date : null}
          getFieldDecorator={getFieldDecorator}

          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
        />
        <Form.Item label="How the Marriage Ended" required>
          {getFieldDecorator(`${arrayField}[${index}].end_explain`, {
            initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].end_explain : null),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <TextArea rows={3}/>
          )}
        </Form.Item>
        <VisaSelectItem
          label="Country/Region Marriage was Terminated"
          field={`${arrayField}[${index}].end_country`}
          initialValue={initialValue[index] ? initialValue[index].end_country : null}
          content={{
            values: constants.countries_regions_option_value_list,
            labels: constants.countries_regions_option_label_list,
          }}
          getFieldDecorator={getFieldDecorator}
        />
        <Row>
          {people.length > 1 ? (
            <Button type="danger" onClick={() => this.remove(index, keysField, arrayField)} >
              <Icon type="minus-circle-o" /> Remove
            </Button>
          ) : null}
        </Row>
        
      </Form.Item>
    )});

    return (
      <>
        {formItems}
        {(people.length < 5) && <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%', marginLeft: '15%' }}>
            <Icon type="plus" /> Add another
          </Button>
        </Form.Item>}
      </>
    );
  }
}

export default VisaFormerSpouses;
