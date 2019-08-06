import React, { Component } from "react";
import { Form, Button, Select, Checkbox } from 'antd';

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  constructor(props) {
    super(props)
    this.state = {
      type: ""
    }
  }
  handleTypeChange = value => {
    this.setState({
      type: value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onNext();
      }
    });
  };
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

    const { showPrev, showNext, onPrev, onNext } = this.props

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $165 for this premium processing service that offers 100% Refund Guarantee if your visa is denied. This charge does not include the Visa Fee that needs to be paid directly to the Department of State and is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.">
          {getFieldDecorator('agreement', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Checkbox>
              I understand that I may be subject to administrative or criminal penalties if I knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in a visa application submitted by me or on my behalf.
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item label="Please confirm that you have read and understand the Disclaimer above.">
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Checkbox>
              I have read and understand the Disclaimer above and agree with these terms.
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item label="Indicate the Purpose of Trip to the U.S." extra="PLEASE SELECT A VISA CLASS">
          {getFieldDecorator('purpose', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Select placeholder="Select an Option">
              <Option value="B1/B2">TEMP. BUSINESS PLEASURE VISITOR (B1/B2)</Option>
              <Option value="C">ALIEN IN TRANSIT (C)</Option>
            </Select>,
          )}
        </Form.Item>
        <div
          style={{
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
          }}
        >
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.props.onPrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link">Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_2 = Form.create()(MyForm)
export default Form_DS160_2;
