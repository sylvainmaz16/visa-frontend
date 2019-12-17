import React, { Component } from "react";
import { Form, Button, Checkbox } from 'antd';
import * as utils from 'utils'
import resources from "utils/resources";

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

    const { showPrev, showNext, onPrev, onNext, data, agency, tr } = this.props

    return (
      <Form {...formItemLayout}>
        <Form.Item label={agency ? tr(resources.step_2.disclaimer.agency) : tr(resources.step_2.disclaimer.default)}>
          {getFieldDecorator('data.b_agreement_2_1', {
            initialValue: utils.getInitialValue(data.b_agreement_2_1),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_2.disclaimer.check)}
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item label={tr(resources.step_2.confirm.label)}>
          {getFieldDecorator('data.b_agreement_2_2', {
            initialValue: utils.getInitialValue(data.b_agreement_2_2),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_2.confirm.check)}
            </Checkbox>
          )}
        </Form.Item>
        
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
