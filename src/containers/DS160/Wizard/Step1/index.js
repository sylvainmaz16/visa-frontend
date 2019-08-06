import React, { Component } from "react";
import { Form, Button, Select } from 'antd';

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
        md: { span: 12 }
      },
    };

    const { showPrev, showNext, onPrev, onNext } = this.props

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            On this website, you can apply through our agency for a U.S. Non-Immigrant Visa. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER VISA. The estimated average time to complete this submission is 35 minutes per respondent.
          </h2>
        </div>
        <Form.Item label="Please Choose Your Preferred Interview Location" extra="Select preferred US Consulate for your visa interview.">
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Select placeholder="Select an Option">
              <Option value="AFGHANISTAN-KABUL">AFGHANISTAN, KABUL</Option>
              <Option value="ALBANIA-TIRANA">ALBANIA, TIRANA</Option>
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
const Form_DS160_1 = Form.create()(MyForm)
export default Form_DS160_1;
