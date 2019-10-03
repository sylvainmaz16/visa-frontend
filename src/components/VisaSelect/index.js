import React, { Component } from "react";
import { Select } from 'antd';

const { Option } = Select;

class VisaSelect extends Component {
  static defaultProps = {
      placeholder: "Select an Option",
      disabled: false
  }

  render() {

    const { values, labels, combines, placeholder, onChange, disabled, ...rest } = this.props
    return (
        <Select placeholder={placeholder} showSearch {...rest} onChange={onChange} optionFilterProp="children" disabled={disabled}>
            {combines == undefined ? values.map((value, index) => <Option value={value} key={index}>{labels[index]}</Option>) : combines.map((item, index) => <Option value={item.value} key={index}>{item.label}</Option>)}
        </Select>
    );
  }
}
export default VisaSelect;
