import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaAddress from "../../../../components/VisaAddress";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import * as utils from '../../../../utils'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  
  handleDates = (data) => {
    if(data.father && data.father.birthday)
      data.father.birthday = data.father.birthday.format('DD/MMM/YYYY')
    if(data.mother && data.mother.birthday)
      data.mother.birthday = data.mother.birthday.format('DD/MMM/YYYY')
    if(data.spouse && data.spouse.birthday)
      data.spouse.birthday = data.spouse.birthday.format('DD/MMM/YYYY')
    return data
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

    const { martial_status_options } = constants

    const { showPrev, showNext, onPrev, onNext, data, date_birth, martial_status } = this.props

    getFieldDecorator('data.father.b_in_US', { initialValue: utils.getInitialValue(data.father.b_in_US) });
    getFieldDecorator('data.mother.b_in_US', { initialValue: utils.getInitialValue(data.mother.b_in_US) });
    getFieldDecorator('data.b_other_relative', { initialValue: utils.getInitialValue(data.b_other_relative) });
    getFieldDecorator('data.b_more_relatives', { initialValue: utils.getInitialValue(data.b_more_relatives) });

    const martial_header = {
      'M': 'Spouse',
      'C': 'Spouse',
      'P': 'Partner',
      'W': 'Deceased Spouse',
      'D': 'Former Spouse',
      'L': 'Spouse',
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Family Information : Your Parents</h2>
        </div>

        <Form.Item label="List your Father's information here" required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Father's First Name"
                extra="Leave blank if you do not know"
                field="data.father.surname"
                initialValue={data.father.surname}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Father's Last Name"
                extra="Leave blank if you do not know"
                field="data.father.given_name"
                initialValue={data.father.given_name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
              />
            </Col>
          </Row>
          <VisaDatePicker 
            label="Father's date of birth (If known)"
            extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
            field="data.father.birthday"
            initialValue={data.father.birthday}
            getFieldDecorator={getFieldDecorator}
            required={false}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateParentBirthDate(rule, value, callback, "Father's date of birth", date_birth) }]}
          />
          <VisaRadio
            label="Is your Father in the US?"
            field="data.father.b_in_US"
            initialValue={data.father.b_in_US}
            getFieldDecorator={getFieldDecorator}
          />
          {
            this.props.form.getFieldValue('data.father.b_in_US') &&
            <VisaSelectItem
              label="Father's Status"
              field="data.father.status"
              initialValue={data.father.status}
              content={{
                combines: constants.export_list(constants.US_Live_Status)
              }}
              getFieldDecorator={getFieldDecorator}
            />
          }
        </Form.Item>

        <Form.Item label="List your Mother's information here" required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Mother's First Name"
                extra="Leave blank if you do not know"
                field="data.mother.surname"
                initialValue={data.mother.surname}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                label="Mother's Last Name"
                extra="Leave blank if you do not know"
                field="data.mother.given_name"
                initialValue={data.mother.given_name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
              />
            </Col>
          </Row>
          <VisaDatePicker 
            label="Mother's date of birth (If known)"
            extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
            field="data.mother.birthday"
            initialValue={data.mother.birthday}
            getFieldDecorator={getFieldDecorator}
            required={false}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateParentBirthDate(rule, value, callback, "Mother's date of birth", date_birth) }]}
          />
          <VisaRadio
            label="Is your Mother in the US?"
            field="data.mother.b_in_US"
            initialValue={data.mother.b_in_US}
            getFieldDecorator={getFieldDecorator}
          />
          {
            this.props.form.getFieldValue('data.mother.b_in_US') &&
            <VisaSelectItem
              label="Mother's Status"
              field="data.mother.status"
              initialValue={data.mother.status}
              content={{
                combines: constants.export_list(constants.US_Live_Status)
              }}
              getFieldDecorator={getFieldDecorator}
            />
          }
        </Form.Item>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Family information : Your Relatives</h2>
        </div>

        <VisaRadio
          label="Do you have any immediate relatives other than parents living in the United States?"
          extra="Means fiancé/fiancée, spouse (husband/wife), child (son/daughter) or sibling (brother/sister)"
          field="data.b_other_relative"
          initialValue={data.b_other_relative}
          getFieldDecorator={getFieldDecorator}
        />

        {   
          this.props.form.getFieldValue('data.b_other_relative') &&
          <Form.Item label="Enter Full Name, Relationship to you, Immigration Status">
            <Row gutter={16}>
              <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 3 }}>
                <VisaInput
                  label="First Name"
                  field="data.other.surname"
                  initialValue={data.other.surname}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                />
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 3 }}>
                <VisaInput
                  label="Last Name"
                  field="data.other.given_name"
                  initialValue={data.other.given_name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                <VisaSelectItem
                  label="Relationship to you"
                  field="data.other.relationship"
                  initialValue={data.other.relationship}
                  content={{
                    combines: constants.export_list(constants.relative_relationship_options)
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaSelectItem
                  label="Immigration Status"
                  field="data.other.status"
                  initialValue={data.other.status}
                  content={{
                    combines: constants.export_list(constants.US_Live_Status)
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            </Row>
          </Form.Item>
        }

        {
          this.props.form.getFieldValue('data.b_other_relative') == false &&
          <VisaRadio
            label="Do you have any other relatives in the United States?"
            field="data.b_more_relatives"
            initialValue={data.b_more_relatives}
            getFieldDecorator={getFieldDecorator}
          />
        }

        {martial_header[martial_status] && 
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">Family Information: {martial_header[martial_status]}</h2>
          </div>
        }
        {
          (martial_header[martial_status] == 'Spouse' || martial_header[martial_status] == 'Partner') &&
            <Form.Item label="List your Spouse/Partner's information here" required>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label="Spouse/Partner's First Name"
                    extra="Leave blank if you do not know"
                    field="data.spouse.surname"
                    initialValue={data.spouse.surname}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label="Spouse/Partner's Last Name"
                    extra="Leave blank if you do not know"
                    field="data.spouse.given_name"
                    initialValue={data.spouse.given_name}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                  />
                </Col>
              </Row>
              <VisaDatePicker 
                label="Spouse/Partner's date of birth (If known)"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.spouse.birthday"
                initialValue={data.spouse.birthday}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}
              />
              <VisaSelectItem
                label="Nationality"
                field="data.spouse.nationality"
                initialValue={data.spouse.nationality}
                content={{
                  combines: constants.nationality_option_list_func()
                }}
                getFieldDecorator={getFieldDecorator}
              />
              <Form.Item label="Place of birth">
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaInput
                      label="City"
                      extra="Leave blank if you do not know"
                      field="data.spouse.place_of_birth.city"
                      initialValue={data.spouse.place_of_birth.city}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaSelectItem
                      label="Country"
                      field="data.spouse.place_of_birth.country"
                      initialValue={data.spouse.place_of_birth.country}
                      content={{
                        values: constants.countries_regions_option_value_list,
                        labels: constants.countries_regions_option_label_list,
                      }}
                      getFieldDecorator={getFieldDecorator}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <VisaAddress 
                label="Address"
                field="data.spouse.address"
                initialValue={data.spouse.address}
                getFieldDecorator={getFieldDecorator}
                us_address={false}
              />
            </Form.Item>
        }

        {
          (martial_header[martial_status] == 'Spouse' || martial_header[martial_status] == 'Partner' || martial_header[martial_status] == 'Deceased Spouse') &&
            <Form.Item required>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label="First Name"
                    extra="Leave blank if you do not know"
                    field="data.spouse.surname"
                    initialValue={data.spouse.surname}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label="Last Name"
                    extra="Leave blank if you do not know"
                    field="data.spouse.given_name"
                    initialValue={data.spouse.given_name}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                  />
                </Col>
              </Row>
              <VisaDatePicker 
                label="Date of birth (If known)"
                extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
                field="data.spouse.birthday"
                initialValue={data.spouse.birthday}
                getFieldDecorator={getFieldDecorator}
                required={false}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}
              />
              <VisaSelectItem
                label="Nationality"
                field="data.spouse.nationality"
                initialValue={data.spouse.nationality}
                content={{
                  combines: constants.nationality_option_list_func()
                }}
                getFieldDecorator={getFieldDecorator}
              />
              <Form.Item label="Place of birth">
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaInput
                      label="City"
                      extra="Leave blank if you do not know"
                      field="data.spouse.place_of_birth.city"
                      initialValue={data.spouse.place_of_birth.city}
                      getFieldDecorator={getFieldDecorator}
                      required={false}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <VisaSelectItem
                      label="Country"
                      field="data.spouse.place_of_birth.country"
                      initialValue={data.spouse.place_of_birth.country}
                      content={{
                        values: constants.countries_regions_option_value_list,
                        labels: constants.countries_regions_option_label_list,
                      }}
                      getFieldDecorator={getFieldDecorator}
                    />
                  </Col>
                </Row>
              </Form.Item>
              {martial_header[martial_status] != 'Deceased Spouse' &&
                <VisaAddress 
                  label="Address"
                  field="data.spouse.address"
                  initialValue={data.spouse.address}
                  getFieldDecorator={getFieldDecorator}
                  us_address={false}
                />
              }            
            </Form.Item>
        }
        {
          martial_header[martial_status] == 'Former Spouse' &&
          <Form.Item label="Former Spouse's Information" required>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="First Name"
                  extra="Leave blank if you do not know"
                  field="data.former_spouse.surname"
                  initialValue={data.former_spouse.surname}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Surname") }]}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput
                  label="Last Name"
                  extra="Leave blank if you do not know"
                  field="data.former_spouse.given_name"
                  initialValue={data.former_spouse.given_name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Given Name") }]}
                />
              </Col>
            </Row>
            <VisaDatePicker 
              label="Date of birth (If known)"
              extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
              field="data.former_spouse.birthday"
              initialValue={data.former_spouse.birthday}
              getFieldDecorator={getFieldDecorator}
              required={false}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}
            />
            <VisaSelectItem
              label="Nationality"
              field="data.former_spouse.nationality"
              initialValue={data.former_spouse.nationality}
              content={{
                combines: constants.nationality_option_list_func()
              }}
              getFieldDecorator={getFieldDecorator}
            />
            <Form.Item label="Place of birth">
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaInput
                    label="City"
                    extra="Leave blank if you do not know"
                    field="data.former_spouse.place_of_birth.city"
                    initialValue={data.former_spouse.place_of_birth.city}
                    getFieldDecorator={getFieldDecorator}
                    required={false}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <VisaSelectItem
                    label="Country"
                    field="data.former_spouse.place_of_birth.country"
                    initialValue={data.former_spouse.place_of_birth.country}
                    content={{
                      values: constants.countries_regions_option_value_list,
                      labels: constants.countries_regions_option_label_list,
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
              </Row>
            </Form.Item>
            <VisaAddress 
              label="Address"
              field="data.former_spouse.address"
              initialValue={data.former_spouse.address}
              getFieldDecorator={getFieldDecorator}
              us_address={false}
            />
            <VisaDatePicker 
              label="Date of Marriage"
              extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
              field="data.former_spouse.marriage_date"
              initialValue={data.former_spouse.marriage_date}
              getFieldDecorator={getFieldDecorator}
              required={false}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}
            />
            <VisaDatePicker 
              label="Date Marriage End"
              extra="Please enter the Date Format as Day/Month/Year For example January 12 2013 enter 12/01/2013"
              field="data.former_spouse.end_date"
              initialValue={data.former_spouse.end_date}
              getFieldDecorator={getFieldDecorator}
              required={false}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, false) }]}
            />
            <Form.Item label="How the Marriage Ended" required>
              {getFieldDecorator('data.former_spouse.end_explain', {
                initialValue: utils.getInitialValue(data.former_spouse.end_explain),
                rules: [{ required: true, message: 'This field is required' }],
              })(
                <TextArea rows={3}/>
              )}
            </Form.Item>
            <VisaSelectItem
              label="Country/Region Marriage was Terminated"
              field="data.former_spouse.end_country"
              initialValue={data.former_spouse.end_country}
              content={{
                values: constants.countries_regions_option_value_list,
                labels: constants.countries_regions_option_label_list,
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Form.Item>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleSubmit(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_10_Family = Form.create()(MyForm)
export default Form_DS160_10_Family;
