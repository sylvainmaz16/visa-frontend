import React, { Component } from "react";
import { Form, Button, Select, Checkbox } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";

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
      },
    };

    const { showPrev, showNext, onPrev, onNext, data, agency } = this.props

    return (
      <Form {...formItemLayout}>
        <Form.Item label={agency ? 
          "Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $280 for this premium processing service which includes your MRV fee. This charge does include the Visa Fee of$160 that needs to be paid directly to the Department of State and is NON-REFUNDABLE. All information provided by you, or on your behalf by a designated third party, must be true and correct.": 
          "DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $165 for this premium processing service that offers 100% Refund Guarantee if your visa is denied. This charge does not include the Visa Fee that needs to be paid directly to the Department of State and is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct."}>
          {getFieldDecorator('data.b_agreement_2_1', {
            initialValue: utils.getInitialValue(data.b_agreement_2_1),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: 'This field is required', 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              I understand that I may be subject to administrative or criminal penalties if I knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in a visa application submitted by me or on my behalf.
            </Checkbox>,
          )}
        </Form.Item>

        

        <Form.Item label="Please confirm that you have read and understand the Disclaimer above.">
          {getFieldDecorator('data.b_agreement_2_2', {
            initialValue: utils.getInitialValue(data.b_agreement_2_2),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: 'This field is required', 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              I have read and understand the Disclaimer above and agree with these terms.
            </Checkbox>
          )}
        </Form.Item>
        {/* <Form.Item label="Indicate the Purpose of Trip to the U.S." extra="PLEASE SELECT A VISA CLASS">
          {getFieldDecorator('data.purpose_of_trip', {
            initialValue: utils.getInitialValue(data.purpose_of_trip),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Select placeholder="Select an Option">
              {constants.purpose_of_trip_options.map((p, index) => <Option value={p.value} key={index}>{p.label}</Option>)}
            </Select>,
          )}
        </Form.Item> */}

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Application Information</h2>
        </div>

        <VisaSelectItem
          label="Security Question"
          field="data.sq_type"
          initialValue={data.sq_type}
          extra="In order to access your application later, however, you will need: (1) your Application ID, and (2) the answer to the security question that you will choose on this page."
          content={{
            combines: constants.export_list(constants.security_question_options)
          }}
          getFieldDecorator={getFieldDecorator}
        />
        <VisaInput 
          label="Answer"
          field="data.sq_answer"
          initialValue={data.sq_answer}
          getFieldDecorator={getFieldDecorator}
          
        />
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_2 = Form.create()(MyForm)
export default Form_DS160_2;
