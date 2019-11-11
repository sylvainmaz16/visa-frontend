import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";
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
        md: { span: 12 }
      },
    };

    const { showPrev, showNext, data, agency } = this.props
    const { countries_option_value_list, countries_option_label_list, agency_support_countries_list} = constants

    let values = [], labels = []

    if(agency) {
      countries_option_label_list.map((label, cntry_index) => {
        const index = agency_support_countries_list.findIndex(support => label.toLowerCase().startsWith(support.toLowerCase()))
        if(index >= 0) {
          values.push(countries_option_value_list[cntry_index])
          labels.push(countries_option_label_list[cntry_index])
        }
      })
    } else {
      values = countries_option_value_list
      labels = countries_option_label_list
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            On this website, you can apply through our agency for a U.S. Non-Immigrant Visa. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER VISA. The estimated average time to complete this submission is 35 minutes per respondent.
          </h2>
        </div>
        <Form.Item label="Please Choose Your Preferred Interview Location" extra="Select preferred US Consulate for your visa interview.">
          {getFieldDecorator('data.interview_location', {
            initialValue: utils.getInitialValue(data.interview_location),
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <VisaSelect values={values} labels={labels} />
          )}
        </Form.Item>
        {/* <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Application Information</h2>
        </div> */}
        
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
const Form_DS160_1 = Form.create()(MyForm)
export default Form_DS160_1;
