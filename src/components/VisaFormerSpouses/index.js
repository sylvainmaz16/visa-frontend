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
import resources from "../../utils/resources";
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

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, martial_status, arrayField, tr, ...rest } = this.props

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
              label={tr(resources.components.former_spouses.surname)}
              field={`${arrayField}[${index}].surname`}
              initialValue={initialValue[index] ? initialValue[index].surname : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.components.former_spouses.given_name)}
              field={`${arrayField}[${index}].given_name`}
              initialValue={initialValue[index] ? initialValue[index].given_name : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
              tr={tr}
            />
          </Col>
        </Row>
        <VisaDatePicker 
          label={tr(resources.components.former_spouses.birthday)}
          field={`${arrayField}[${index}].birthday`}
          initialValue={initialValue[index] ? initialValue[index].birthday : null}
          getFieldDecorator={getFieldDecorator}
          required={false}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />
        <VisaSelectItem
          label={tr(resources.components.former_spouses.nationality)}
          field={`${arrayField}[${index}].nationality`}
          initialValue={initialValue[index] ? initialValue[index].nationality : null}
          content={{
            combines: constants.nationality_option_list_func()
          }}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        <Form.Item label={tr(resources.components.former_spouses.place_of_birth.label)}>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label={tr(resources.components.former_spouses.place_of_birth.city.label)}
                extra={tr(resources.components.former_spouses.place_of_birth.city.extra)}
                field={`${arrayField}[${index}].place_of_birth.city`}
                initialValue={initialValue[index] && initialValue[index].place_of_birth ? initialValue[index].place_of_birth.city : null}
                getFieldDecorator={getFieldDecorator}
                required={false}
                tr={tr}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaSelectItem
                label={tr(resources.components.former_spouses.place_of_birth.country)}
                field={`${arrayField}[${index}].place_of_birth.country`}
                initialValue={initialValue[index] && initialValue[index].place_of_birth ? initialValue[index].place_of_birth.country : null}
                content={{
                  values: constants.countries_regions_option_value_list,
                  labels: constants.countries_regions_option_label_list,
                }}
                getFieldDecorator={getFieldDecorator}
                tr={tr}
              />
            </Col>
          </Row>
        </Form.Item>
        <VisaAddress 
          label={tr(resources.components.former_spouses.address)}
          field={`${arrayField}[${index}].address`}
          initialValue={initialValue[index] ? initialValue[index].address : {}}
          getFieldDecorator={getFieldDecorator}
          validators={this.props.validators}
          us_address={false}
          tr={tr}
        />
        <VisaDatePicker 
          label={tr(resources.components.former_spouses.marriage_date)}

          field={`${arrayField}[${index}].marriage_date`}
          initialValue={initialValue[index] ? initialValue[index].marriage_date : null}
          getFieldDecorator={getFieldDecorator}
          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />
        <VisaDatePicker 
          label={tr(resources.components.former_spouses.end_date)}
          field={`${arrayField}[${index}].end_date`}
          initialValue={initialValue[index] ? initialValue[index].end_date : null}
          getFieldDecorator={getFieldDecorator}

          customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}

          setFieldsValue={setFieldsValue}
          getFieldValue={getFieldValue}
          tr={tr}
        />
        <Form.Item label={tr(resources.components.former_spouses.end_explain)} required>
          {getFieldDecorator(`${arrayField}[${index}].end_explain`, {
            initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].end_explain : null),
            rules: [ { pattern: /^[A-Za-z0-9#$*%&;!@^?><().',\- ]+$/, message: tr(resources.validations.english) }, { required: true, message: 'This field is required' }],
          })(
            <TextArea rows={3}/>
          )}
        </Form.Item>
        <VisaSelectItem
          label={tr(resources.components.former_spouses.end_country)}
          field={`${arrayField}[${index}].end_country`}
          initialValue={initialValue[index] ? initialValue[index].end_country : null}
          content={{
            values: constants.countries_only_option_value_list,
            labels: constants.countries_only_option_label_list,
          }}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />
        <Row>
          {people.length > 1 ? (
            <Button type="danger" onClick={() => this.remove(index, keysField, arrayField)} >
              <Icon type="minus-circle-o" /> {tr(resources.remove)}
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
            <Icon type="plus" /> {tr(resources.add_another)}
          </Button>
        </Form.Item>}
      </>
    );
  }
}

export default VisaFormerSpouses;
