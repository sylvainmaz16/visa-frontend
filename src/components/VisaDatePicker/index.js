import React, { Component } from 'react'
import { Form, Input } from 'antd'
import moment from 'moment'
import * as utils from 'utils'
import VisaSelect from '../VisaSelect'

const DAYS_LIST = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
]
const MONTH_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class VisaDatePicker extends Component {
  static defaultProps = {
    extra: '',
    label: '',
    required: true,
    customRules: null,
    readOnly: false,
  }

  onChange = (s, t) => {
    const { field, getFieldValue, setFieldsValue, visitDates } = this.props
    const DD = s == 'DD' ? t : getFieldValue(`${field}_v2.DD`)
    const MMM = s == 'MMM' ? t : getFieldValue(`${field}_v2.MMM`)
    const YYYY = s == 'YYYY' ? t : getFieldValue(`${field}_v2.YYYY`)
    const date = `${DD}/${MMM}/${YYYY}`
    if (visitDates && visitDates.indexOf(date) > -1) {
      setFieldsValue({ [`${field}_v2.YYYY`]: '' })
    }
    else
      setFieldsValue({ [field]: moment(date, 'DD/MMM/YYYY') })
  }

  render() {
    const { label, extra, initialValue, field, getFieldDecorator, required, customRule, readOnly, validators, tr, ...rest } = this.props

    return (
      <Form.Item label={label} extra={extra} required={required}>
        <div style={{ display: 'inline-flex', flexDirection: 'row',position: 'relative', top: '-9px'}}>
          <Form.Item>
            {getFieldDecorator(`${field}_v2.DD`, {
              initialValue: utils.getInitialValue(initialValue ? initialValue.split('/')[0] : null),
              rules: readOnly ? null : [{ required, message: 'Required' }],
            })(
              <VisaSelect
                values={DAYS_LIST}
                labels={DAYS_LIST}
                disabled={readOnly}
                style={{ width: '75px', marginRight: '10px' }}
                placeholder="DAY"
                onChange={value => this.onChange('DD', value)}
                tr={tr}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(`${field}_v2.MMM`, {
              initialValue: utils.getInitialValue(initialValue ? initialValue.split('/')[1] : null),
              rules: readOnly ? null : [{ required, message: 'Required' }],
            })(
              <VisaSelect
                values={MONTH_LIST}
                labels={MONTH_LIST}
                disabled={readOnly}
                style={{ width: '100px', marginRight: '10px' }}
                placeholder="MONTH"
                onChange={value => this.onChange('MMM', value)}
                tr={tr}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(`${field}_v2.YYYY`, {
              initialValue: utils.getInitialValue(initialValue ? initialValue.split('/')[2] : null),
              rules: readOnly
                ? null
                : [
                    {
                      required,
                      message: 'Invalid',
                      len: 4,
                      pattern: /^\d{4}$/,
                    },
                  ],
            })(<Input disabled={readOnly} style={{ width: '100px' }} placeholder="YEAR" maxLength={4} onChange={e => this.onChange('YYYY', e.target.value)} />)}
          </Form.Item>
        </div>
        {getFieldDecorator(field, {
          initialValue: initialValue ? moment(initialValue, 'DD/MMM/YYYYY') : null,
          rules: readOnly ? null : customRule || [{ required, message: 'This field is required' }],
        })(<></>)}
      </Form.Item>
    )
  }
}
export default VisaDatePicker
