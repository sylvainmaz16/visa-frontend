import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";
import { withCookies } from 'react-cookie';

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 12 }
      },
    };

    const { showPrev, showNext, data, agency } = this.props
    const { countries_option_value_list, countries_option_label_list} = constants

    // const token = this.props.cookies.get('immigration4us_token')
    const token = localStorage.getItem('immigration4us_token')
    const user = JSON.parse(localStorage.getItem('user'))

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            Submit your application
          </h2>
        </div>
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleSubmit(e, this.props.form, this.handleDates)}>{agency ? 'Continue to Your Appointment Information': 'SUBMIT AND MAKE YOUR PAYMENT'}</Button>}
          {token && user.role == constants.USER_ROLE.ADMIN && <Button type="danger" style={{marginLeft: '10px'}} onClick={(e) => this.props.handleSubmitWithoutPayment(e, this.props.form, this.handleDates)}>SUBMIT WITHOUT PAYMENT</Button>}
        </div>
      </Form>

    );
  }
}
const Form_Final = withCookies(Form.create()(MyForm))
export default Form_Final;
