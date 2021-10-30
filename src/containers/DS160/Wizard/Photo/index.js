import React, { Component } from 'react'
import {
  Form, Button, Upload, Icon, message, Checkbox, Row, Col,
} from 'antd'
import * as constants from 'utils/constants'
import * as utils from 'utils'
import VisaRadio from 'components/VisaRadio'
import VisaInput from 'components/VisaInput'
import VisaAddress from 'components/VisaAddress'

import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'
import resources from 'utils/resources'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg'
  if (!isJpgOrPng) {
    message.error('You can only upload JPEG file!')

    return true
  }
  const isLt2M = file.size / 1024 / 1024 < 0.24
  if (!isLt2M) {
    message.error('Image must smaller than 240KB!')

    return true
  }

  return false
}

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  state = {
    loading: false,
  };

  uploadFileToS3 = file => new Promise(async (resolve, reject) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileType', 'jpeg')
    await axios
      .post(
        `${constants.apiURL.default}assets`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(response => {
        resolve(response.data.Location)
      })
      .catch(error => {
        message.error('Failed to upload photo')
        reject(error)
      })
  })

  handleChange = info => {
    if (status !== 'uploading') {
      this.setState({ loading: true })
      this.uploadFileToS3(info.file)
        .then(imageUrl => {
          this.props.form.setFieldsValue({ data: { url: imageUrl } })
          this.setState({ loading: false })
        })
        .catch(err => {
          this.setState({ loading: false })
        })
    }
  };

  clearSign = () => {
    this.sigCanvas.clear()
    this.props.form.setFieldsValue({ data: { signature: null } })
  }

  handleSign = e => {
    this.props.form.setFieldsValue({ data: { signature: this.sigCanvas.toDataURL('image/png') } })
  }

  componentDidMount = () => {
    const { signature } = this.props.data
    if (signature) { this.sigCanvas.fromDataURL(signature) }
  }

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 24 },
      },
    }

    const {
      showPrev, showNext, data, interview_location, country_of_birth, purpose_of_trip, other_purpose_of_trip, sex, tr,
    } = this.props
    const { countries_option_value_list, countries_option_label_list } = constants

    const interview_location_label_index = countries_option_value_list.findIndex(value => value == interview_location)
    const interview_location_label = interview_location_label_index >= 0 ? countries_option_label_list[interview_location_label_index] : ''

    const country_of_birth_label_index = constants.countries_regions_option_value_list.findIndex(value => value == country_of_birth)
    const country_of_birth_label = country_of_birth_label_index >= 0 ? constants.countries_regions_option_label_list[country_of_birth_label_index] : ''

    const b_FGMC = (sex == 'F') && (constants.FGMC_countries_list.findIndex(country => country == country_of_birth_label) >= 0)

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { loading } = this.state
    getFieldDecorator('data.b_photo', { initialValue: utils.getInitialValue(data.b_photo) })
    getFieldDecorator('data.url', { initialValue: utils.getInitialValue(data.url) })
    getFieldDecorator('data.FGMC', { initialValue: utils.getInitialValue(data.FGMC) })
    getFieldDecorator('data.HTP', { initialValue: utils.getInitialValue(data.HTP) })

    const imageUrl = this.props.form.getFieldValue('data.url')

    if (!data.payer.address) {
      data.payer.address = {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        country: null,
      }
    }

    const section_descr = []

    for (let i = 0; i < 11; i++) { section_descr.push(<li key={i}><p><span>{tr(resources.photo.section_descr[i])}</span></p></li>) }

    return (
      <Form {...formItemLayout}>

        {!interview_location_label.startsWith('MEXICO') && !interview_location_label.startsWith('INDIA') &&
          <>
            <div className="visa-global-heading-1">
              {tr(resources.photo.section_title['0'])}
              <br />
              {tr(resources.photo.section_title['1'])}
            </div>
            <ul className="visa-global-ul-1">
              {section_descr}
            </ul>

            <VisaRadio
              label={tr(resources.photo.b_photo.label)}
              extra={tr(resources.photo.b_photo.extra)}
              field="data.b_photo"
              initialValue={data.b_photo}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />

            {
              this.props.form.getFieldValue('data.b_photo') &&
              <Form.Item label={tr(resources.photo.avatar.label)} extra={tr(resources.photo.b_photo.extra)} required>
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
                    rules: [{ required: true, message: tr(resources.validations.required_photo) }],
                  })(
                    <>
                    </>,
                  )
                }
              </Form.Item>
            }
          </>
        }

        {b_FGMC && <Form.Item label={tr(resources.photo.FGMC.label)}>
          {getFieldDecorator('data.FGMC', {
            initialValue: utils.getInitialValue(data.FGMC),
            valuePropName: 'checked',
            rules: [{
              required: true,
              message: tr(resources.validations.required),
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox>
              {tr(resources.photo.FGMC.check)}
            </Checkbox>,
          )}
        </Form.Item>}

        {purpose_of_trip == 'J' && other_purpose_of_trip == 'J1-J1' && <Form.Item label={tr(resources.photo.HTP.label)}>
          {getFieldDecorator('data.HTP', {
            initialValue: utils.getInitialValue(data.HTP),
            valuePropName: 'checked',
            rules: [{
              required: true,
              message: tr(resources.validations.required),
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox>
              {tr(resources.photo.HTP.check)}
            </Checkbox>,
          )}
        </Form.Item>}

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.photo.section_title_payment)}</h2>
          <div className="visa-global-section-description">{tr(resources.photo.section_descr_payment)}</div>
        </div>

        <Form.Item label={tr(resources.photo.payer.label)} required style={{ margin: '0px' }}>
          <Row gutter={16} style={{ margin: '0px' }}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra={tr(resources.photo.payer.surname)}
                field="data.payer.surname"
                initialValue={data.payer.surname}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'First Name') }]}
                tr={tr}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra={tr(resources.photo.payer.given_name)}
                field="data.payer.given_name"
                initialValue={data.payer.given_name}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, 'Last Name') }]}
                tr={tr}
              />
            </Col>
          </Row>
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.photo.payer.phone)}
              field="data.payer.phone"
              initialValue={data.payer.phone}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Phone Number', true) }]}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.photo.payer.passport)}
              field="data.payer.passport"
              initialValue={data.payer.passport}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.photo.payer.email)}
              field="data.payer.email"
              initialValue={data.payer.email}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, 'Email Address', true) }]}
              tr={tr}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaAddress
              label={tr(resources.photo.payer.address)}
              field="data.payer.address"
              initialValue={data.payer.address}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              us_address={false}
              tr={tr}
            />
          </Col>
        </Row>

        <Form.Item label={tr(resources.photo.b_info_confirm.label)}>
          {getFieldDecorator('data.b_info_confirm', {
            initialValue: utils.getInitialValue(data.b_info_confirm),
            valuePropName: 'checked',
            rules: [{
              required: true,
              message: tr(resources.validations.required),
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox>
              {tr(resources.photo.b_info_confirm.check)}
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item label={tr(resources.photo.signature)}>
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              width: 500, height: 200, className: 'sigCanvas',
            }}
            onEnd={this.handleSign}
            ref={ref => { this.sigCanvas = ref }}
          />
          <Button shape="circle" icon="sync" style={{ marginLeft: '10px', paddingBottom: '2px' }} onClick={this.clearSign} />
          {
            getFieldDecorator('data.signature', {
              initialValue: utils.getInitialValue(data.signature),
              rules: [{ 
                required: true, 
                message: tr(resources.validations.required_sign),
                validator: (rule, value, callback) => {
                  let size = 4 * Math.ceil((this.sigCanvas.toDataURL('image/png').length / 3)) * 0.5624896334383812 / 1000                  
                  if ((this.sigCanvas.getTrimmedCanvas().width < 40 && this.sigCanvas.getTrimmedCanvas().height < 40 )||
                    size < 3.1)
                    callback('invalid')
                  callback()
                }
              }],
            })(
              <>
              </>,
            )
          }
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.photo.fullname_sign.label)}
              extra={tr(resources.photo.fullname_sign.extra)}
              field="data.fullname_sign"
              initialValue={data.fullname_sign}
              getFieldDecorator={getFieldDecorator}
              tr={tr}
            />
          </Col>
        </Row>

        <strong id="customer-ip-addr" style={{ display: 'none', marginBottom: '20px' }} />

        <Form.Item label={tr(resources.photo.b_certify.label)}>
          {getFieldDecorator('data.b_certify', {
            initialValue: utils.getInitialValue(data.b_certify),
            valuePropName: 'checked',
            rules: [{
              required: true,
              message: tr(resources.validations.required),
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox>
              {tr(resources.photo.b_certify.check)}
            </Checkbox>,
          )}
        </Form.Item>
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>{tr(resources.first)}</Button>
              {showPrev && <Button id="Prev" style={{ marginRight: 8 }} disabled={loading} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
              {showNext && <Button type="primary" disabled={loading} onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
            </div>
          )}
          {showPrev && <Button id="Prev" style={{ marginRight: 8 }} disabled={loading} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" disabled={loading} onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          {/* <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button> */}
        </div>
      </Form>

    )
  }
}
const Form_Photo = Form.create()(MyForm)
export default Form_Photo
