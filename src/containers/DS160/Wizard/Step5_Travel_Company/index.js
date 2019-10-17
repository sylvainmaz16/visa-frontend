import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaTravellers from '../../../../components/VisaTravellers'
import * as utils from '../../../../utils'

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
    const { getFieldDecorator, isFieldTouched, getFieldValue, setFieldsValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };


    const { showPrev, showNext, onPrev, onNext, data } = this.props

    getFieldDecorator('data.b_other_person_travel_with', { initialValue: utils.getInitialValue(data.b_other_person_travel_with) });
    getFieldDecorator('data.b_part_of_group', { initialValue: utils.getInitialValue(data.b_part_of_group) });

    const field = {
      b_other_person_travel_with: this.props.form.getFieldValue('data.b_other_person_travel_with'),
      b_part_of_group: this.props.form.getFieldValue('data.b_part_of_group'),
    }
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Information about your travel companions</h2>
        </div>

        <Form.Item label="Are there other persons traveling with you?">
          {getFieldDecorator('data.b_other_person_travel_with', {
            initialValue: utils.getInitialValue(data.b_other_person_travel_with),
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
              initialValue: utils.getInitialValue(data.b_part_of_group),
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
                initialValue: utils.getInitialValue(data.company),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>}

        {field.b_other_person_travel_with && field.b_part_of_group == false && 
        <VisaTravellers 
          label="List of people traveling with you. (EACH TRAVELLER MUST COMPLETE HIS OWN APPLICATION)"
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.people}
          arrayField="data.people"
          keysField="copy.people"
          validators={this.props.validators}
        />
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_5_Travel_Company = Form.create()(MyForm)
export default Form_DS160_5_Travel_Company;
