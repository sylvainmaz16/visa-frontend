import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaTravellers from '../../../../components/VisaTravellers'
import * as utils from '../../../../utils'
import resources from "../../../../utils/resources";

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


    const { showPrev, showNext, onPrev, onNext, data, tr } = this.props

    getFieldDecorator('data.b_other_person_travel_with', { initialValue: utils.getInitialValue(data.b_other_person_travel_with) });
    getFieldDecorator('data.b_part_of_group', { initialValue: utils.getInitialValue(data.b_part_of_group) });

    const field = {
      b_other_person_travel_with: this.props.form.getFieldValue('data.b_other_person_travel_with'),
      b_part_of_group: this.props.form.getFieldValue('data.b_part_of_group'),
    }
    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.travel_companion.section_title)}</h2>
        </div>

        <Form.Item label={tr(resources.travel_companion.b_other_person_travel_with.label)}>
          {getFieldDecorator('data.b_other_person_travel_with', {
            initialValue: utils.getInitialValue(data.b_other_person_travel_with),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <Radio.Group>
              <Radio value={true}>{tr(resources.yes)}</Radio>
              <Radio value={false}>{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {field.b_other_person_travel_with &&
          <Form.Item label={tr(resources.travel_companion.b_part_of_group.label)}>
            {getFieldDecorator('data.b_part_of_group', {
              initialValue: utils.getInitialValue(data.b_part_of_group),
              rules: [{ required: true, message: tr(resources.validations.required) }],
            })(
              <Radio.Group>
                <Radio value={true}>{tr(resources.yes)}</Radio>
                <Radio value={false}>{tr(resources.no)}</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        }
        {field.b_other_person_travel_with && field.b_part_of_group && 
        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item label={tr(resources.travel_companion.company.label)}>
              {getFieldDecorator('data.company', {
                initialValue: utils.getInitialValue(data.company),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateStudyCourse(rule, value, callback, "Group Name", true) }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>}

        {field.b_other_person_travel_with && field.b_part_of_group == false && 
        <VisaTravellers 
          label={tr(resources.travel_companion.people.label)}
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
