import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  handlePrev = e => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();

    this.props.onPrev(values.data)
  }
  handleSave = e => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    this.props.onSaveAndContinue(values.data)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onNext(values.data);
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

    const { martial_status_options } = constants

    const { showPrev, showNext, onPrev, onNext, data } = this.props

    getFieldDecorator('data.b_other_person_travel_with', { initialValue: data.b_other_person_travel_with });
    getFieldDecorator('data.b_part_of_group', { initialValue: data.b_part_of_group });

    const field = {
      b_other_person_travel_with: this.props.form.getFieldValue('data.b_other_person_travel_with'),
      b_part_of_group: this.props.form.getFieldValue('data.b_part_of_group'),
    }
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Information about your travel companions</h2>
        </div>

        <Form.Item label="Are there other persons traveling with you?">
          {getFieldDecorator('data.b_other_person_travel_with', {
            initialValue: data.b_other_person_travel_with,
            rules: [{ required: true, message: 'This field is required' }],
          })(
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {field.b_other_person_travel_with &&
          <Form.Item label="Are you traveling as part of a group or organization?">
            {getFieldDecorator('data.b_part_of_group', {
              initialValue: data.b_part_of_group,
              rules: [{ required: true, message: 'This field is required' }],
            })(
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        }
        {field.b_other_person_travel_with && field.b_part_of_group && 
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item label="Name of group or organisation if traveling as part of a group or organization">
              {getFieldDecorator('data.company', {
                initialValue: data.company,
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>}

        {field.b_other_person_travel_with && field.b_part_of_group == false && 
        <Form.Item label="List of people traveling with you. (EACH TRAVELLER MUST COMPLETE HIS OWN APPLICATION)">
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 6 }}>
              <Form.Item label="Given Name (First Name)">
                {getFieldDecorator('data.surname', {
                  initialValue: data.surname,
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surnames") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 6 }}>
              <Form.Item label="Surname (Last Name)">
                {getFieldDecorator('data.given_name', {
                  initialValue: data.given_name,
                  rules: [{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item label="Relationship to you (Parent, Spouse, Child, Other Relative, Friend, Business Associate, Other)">
                {getFieldDecorator('data.relationship', {
                  initialValue: data.relationship,
                  rules: [{ required: true, message: 'This field is required' }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={this.handlePrev}>Prev</Button>}
          {showNext && <Button type="primary" htmlType="submit">Next</Button>}
          <Button type="link" onClick={this.handleSave}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_5_Travel_Company = Form.create()(MyForm)
export default Form_DS160_5_Travel_Company;
