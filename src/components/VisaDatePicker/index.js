import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import moment from 'moment'
import VisaSelect from '../VisaSelect'
import * as utils from '../../utils'

const DAYS_LIST = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
  '31'
]
const MONTH_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class VisaDatePicker extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
    customRules: null,
    readOnly: false
  }
  onChange = (s, t) => {
    const { field, getFieldValue, setFieldsValue } = this.props
    const DD = s == 'DD' ? t : getFieldValue(field + '_v2.DD')
    const MMM = s == 'MMM' ? t : getFieldValue(field + '_v2.MMM')
    const YYYY = s == 'YYYY' ? t : getFieldValue(field + '_v2.YYYY')
    const date = DD + '/' + MMM + '/' + YYYY
    setFieldsValue({ [field]: moment(date, 'DD/MMM/YYYY') })
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, customRule, readOnly, validators, ...rest } = this.props
    return (
      <Form.Item label={label} extra={extra} required={required} >
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Form.Item>
            {getFieldDecorator(field + '_v2.DD', {
              initialValue: utils.getInitialValue( initialValue ? initialValue.split('/')[0] : null ),
              rules: readOnly ? null : [{ required: required, message: 'Required' }],
            })(
              <VisaSelect values={DAYS_LIST} labels={DAYS_LIST} disabled={readOnly} style={{width: '75px', marginRight: '10px'}} placeholder="DAY" onChange={(value) => this.onChange('DD', value)}/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(field + '_v2.MMM', {
              initialValue: utils.getInitialValue( initialValue ? initialValue.split('/')[1] : null ),
              rules: readOnly ? null : [{ required: required, message: 'Required' }],
            })(
              <VisaSelect values={MONTH_LIST} labels={MONTH_LIST} disabled={readOnly} style={{width: '100px', marginRight: '10px'}} placeholder="MONTH" onChange={(value) => this.onChange('MMM', value)}/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(field + '_v2.YYYY', {
              initialValue: utils.getInitialValue( initialValue ? initialValue.split('/')[2] : null ),
              rules: readOnly ? null : [{ required: required, message: 'Invalid', len: 4, pattern: /^\d{4}$/ }],
            })(
              <Input disabled={readOnly} style={{width: '100px'}} placeholder="YEAR" maxLength={4} onChange={(e)=>this.onChange('YYYY', e.target.value)}/>
            )}
          </Form.Item>
        </div>
        {getFieldDecorator(field, {
          initialValue: initialValue ? moment(initialValue, 'DD/MMM/YYYYY') : null ,
          rules: readOnly ? null : (customRule ? customRule : [{ required: required, message: 'This field is required' }]),
        })(
          <></>
        )}
      </Form.Item>
    );
  }
}
export default VisaDatePicker;
