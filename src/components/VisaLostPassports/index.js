import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from 'antd';
import VisaSelect from '../VisaSelect'
import moment from 'moment'
import VisaRadio from "../VisaRadio";
import VisaInput from '../VisaInput';
import VisaInputWithCheck from '../VisaInputWithCheck';
import VisaAddress from "../VisaAddress";
import VisaSelectItem from "../VisaSelectItem";
import VisaDatePicker from "../VisaDatePicker";
import * as utils from '../../utils'
import * as constants from '../../utils/constants'
const { TextArea } = Input;
class VisaLostPassports extends Component {
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
      number: null,
      number_NA: null,
      country: null,
      explain: null
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
            <VisaInputWithCheck
              label="Lost or stolen Passport/Travel Document Number"
              extra="Please check if you do not know"
              field={`${arrayField}[${index}].number`}
              initialValue={initialValue[index] ? initialValue[index].number : null}
              getFieldDecorator={getFieldDecorator}
              
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, "Passport/Travel Document Number", !getFieldValue(`${arrayField}[${index}].number_NA`)) }]}
              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
              checkField={`${arrayField}[${index}].number_NA`}
              checkValue={initialValue[index] ? initialValue[index].number_NA : null}
              maxLength={20}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label="Country/Authority that Issued Passport/Travel Document"
              field={`${arrayField}[${index}].country`}
              initialValue={initialValue[index] ? initialValue[index].country : null}
              content={{
                values: constants.countries_regions_option_value_list,
                labels: constants.countries_regions_option_label_list,
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <Form.Item label="Explain" required>
              {getFieldDecorator(`${arrayField}[${index}].explain`, {
                initialValue: utils.getInitialValue(initialValue[index] ? initialValue[index].explain : null),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateExplain(rule, value, callback, label, true) }]
              })(
                <TextArea style={{textTransform: 'uppercase'}} rows={3} />
              )}
            </Form.Item>
          </Col>
        </Row>
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

export default VisaLostPassports;
