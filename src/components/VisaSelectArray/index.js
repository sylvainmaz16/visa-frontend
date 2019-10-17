import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon } from 'antd';
import VisaSelect from '../VisaSelect'
import * as constants from '../../utils/constants'
import * as utils from '../../utils'

class VisaSelectArray extends Component {
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
    const nextKeys = keys.concat("");
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, arrayField, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });
    const languages = getFieldValue(keysField);

    let countryValues = constants.countries_only_option_value_list
    let countryLabels = constants.countries_only_option_label_list

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
              message: "Please input or delete this field.",
            },
          ],
        })(<VisaSelect values={countryValues} labels={countryLabels} style={{ width: '60%', marginRight: 8 }}/>)}
        {languages.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(index, keysField, arrayField)}
          />
        ) : null}
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
export default VisaSelectArray;
