import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import { Upload, Icon, message, Checkbox, Row, Col } from 'antd';
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPEG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 0.24;
  if (!isLt2M) {
    message.error('Image must smaller than 240KB!');
  }
  return false
}
const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  state = {
    loading: false,
  };
  uploadFileToS3 = (file) => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData()
      formData.append('file', file)
      await axios
        .post(
          constants.apiURL + "assets",
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(response => {
          resolve(response.data.Location);
        })
        .catch(error => {
          message.error('Failed to upload photo');
          reject(error);
        })
    })
  }
  handleChange = info => {
    console.log(info)
    if (status !== 'uploading') {
      this.setState({ loading: true })
      this.uploadFileToS3(info.file)
          .then(imageUrl => {
              console.log('successed', imageUrl)
              this.props.form.setFieldsValue( { data: { url: imageUrl } })
              this.setState({ loading: false })
          })
          .catch(err => {
              this.setState({ loading: false })
          })
    }
  };

  clearSign = () => {
    this.sigCanvas.clear()
    this.props.form.setFieldsValue({ data: { signature: null}})
  }

  handleSign = (e) => {
    this.props.form.setFieldsValue({ data: { signature: this.sigCanvas.toDataURL('image/png')}})
  }

  componentDidMount = () => {
    const {signature} = this.props.data
    if(signature)
      this.sigCanvas.fromDataURL(signature)
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
        md: { span: 24 }
      },
    };

    const { showPrev, showNext, data } = this.props
    const { countries_option_value_list, countries_option_label_list } = constants

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { loading } = this.state;
    getFieldDecorator('data.b_photo', { initialValue: utils.getInitialValue(data.b_photo) });
    getFieldDecorator('data.url', { initialValue: utils.getInitialValue(data.url) });
    const imageUrl = this.props.form.getFieldValue('data.url')

    return (
      <Form {...formItemLayout}>
        {/* <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            Upload your Photo
          </h2>
        </div> */}

        <div className="visa-global-heading-1">
          A digital photo is required for each applicant while applying for a US visitor visa.<br/>
          The photo must meet certain criteria:
        </div>
        <ul className="visa-global-ul-1">
          <li><p><span>Eyes glasses will no longer be allowed in new visa photo.</span></p></li>
          <li><p><span>Size of photo: 2 x 2 inches (51 x 51 mm)</span></p></li>
          <li><p><span>Head must be between 1 -1 3/8 inches (25 - 35 mm) from the bottom of the chin to the top of the head.</span></p></li>
          <li><p><span>Recent, taken in the last 6 months to reflect current appearance</span></p></li>
          <li><p><span>Plain white or off-white background</span></p></li>
          <li><p><span>Head must face the camera directly with full face in view</span></p></li>
          <li><p><span>Taken with a neutral facial expression or a natural smile, with both eyes open</span></p></li>
          <li><p><span>Photo in color</span></p></li>
          <li><p><span>Taken in clothing normally worn on a daily basis</span></p></li>
          <li><p><span>No hats or head coverings (Unless worn daily for religious or medical purposes. Submit a signed statement that verifies that the hat or head covering is part of recognized, traditional religious attire that is customarily or required to be worn continuously in public or a signed doctor's statement verifying the item is used daily for medical purposes. Your full face must be visible and your hat or head covering cannot obscure your hairline or cast shadows on your face.)</span></p></li>
          <li><p><span>No headphones or wireless hands-free devices.</span></p></li>
        </ul>

        <VisaRadio
          label="Are you ready to Upload your Photo?"
          extra="RECOMMENDED YES. If NO, you should bring your photo during the interview"
          field="data.b_photo"
          initialValue={data.b_photo}
          getFieldDecorator={getFieldDecorator}
        />

        {
          this.props.form.getFieldValue('data.b_photo') &&
          <Form.Item label="US Passport type photo ID" extra="Upload your US passport type photo here, must be at least 600x600px. It must be a US passport type photo ID." required>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
              multiple={false}
              name="file"
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            {
              getFieldDecorator('data.url', {
                initialValue: utils.getInitialValue(data.url),
                rules: [{ required: true, message: 'Please select your photo' }]
              })(
                <>
                </>
              )
            }
          </Form.Item>
        }

        <Form.Item label="Payer's Name" extra="Please enter the first and last name of the person who makes the payment." required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra="First"
                field="data.payer.surname"
                initialValue={data.payer.surname}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "First Name") }]}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra="Last"
                field="data.payer.given_name"
                initialValue={data.payer.given_name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Last Name") }]}
              />
            </Col>
          </Row>
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Payer Phone Number"
              field="data.payer.phone"
              initialValue={data.payer.phone}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone Number", true) }]}
            />
            <VisaInput
              label="Payer's Passport Number"
              field="data.payer.passport"
              initialValue={data.payer.passport}
              getFieldDecorator={getFieldDecorator}
            />
            <VisaInput
              label="Payer's Email"
              field="data.payer.email"
              initialValue={data.payer.email}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email Address") }]}
            />
          </Col>
        </Row>

        <Form.Item label="Information Confirmation">
          {getFieldDecorator('data.b_info_confirm', {
            initialValue: utils.getInitialValue(data.b_info_confirm),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: 'This field is required', 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              I confirm that the information provided on this form is correct and accurate to the best of my knowledge. I have read and agreed with the Disclaimer, the Terms and Conditions and the Refund Policy. I understand that this transaction is Non-Refundable. This site is not a US Government entity and is in no way associated with any US Embassy or Consulate and if a cardholder attempts to falsely report that a transaction was fraudulent and requests a chargeback of an application fee, the Embassy will be informed and it may result in cancellation of any visas already scheduled. Your submission of credit card information, or any kind of payment card information, constitutes your authorization for our agency to charge your card for the services ordered and for any related fees or expenses. You further agree to abide by the terms of your card issuer’s agreement. This applies to any fee charged, incurred or paid by our agency for or in any way relating to publication requirements for any document we prepare and/or file at your request whether the filing is ultimately accepted or not.
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item label="Signature">
          <SignatureCanvas 
            penColor='black' 
            canvasProps={{
              width: 500, height: 200, className: 'sigCanvas'
            }}  
            onEnd={this.handleSign}
            ref={(ref) => { this.sigCanvas = ref }}
          />
          <Button shape="circle" icon="sync" style={{marginLeft: '10px', paddingBottom: '2px'}} onClick={this.clearSign}/>
          {
            getFieldDecorator('data.signature', {
              initialValue: utils.getInitialValue(data.signature),
              rules: [{ required: true, message: 'Please sign' }]
            })(
              <>
              </>
            )
          }
        </Form.Item>
        

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="E-Signature of Applicant"
              extra="Enter your full name as a digital signature."
              field="data.fullname_sign"
              initialValue={data.fullname_sign}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <Form.Item label="Digital Signature Acknowledgment">
          {getFieldDecorator('data.b_certify', {
            initialValue: utils.getInitialValue(data.b_certify),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: 'This field is required', 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              I certify under penalty of perjury under the laws of the United States of America that the foregoing is true and correct. I acknowledge and approve that entering my name in the signature field legally replace my physical signature.
            </Checkbox>,
          )}
        </Form.Item>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} disabled={loading} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" disabled={loading} onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          {/* <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button> */}
        </div>
      </Form>

    );
  }
}
const Form_Photo = Form.create()(MyForm)
export default Form_Photo;