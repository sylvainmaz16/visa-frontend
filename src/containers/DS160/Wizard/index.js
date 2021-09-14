import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from 'components/VisaBanner'
import VisaHeader from 'components/VisaHeader'
import { DS160 } from 'actions/types'
import { Spin, notification, Progress, Button } from 'antd'
import objectAssignDeep from 'object-assign-deep'
import { withCookies } from 'react-cookie'
import { translate } from 'utils/resources'
import moment from 'moment'
import Form_DS160_1 from './Step1'
import Form_DS160_2 from './Step2'
import Form_DS160_3 from './Step3_Personal_Information'

import Form_DS160_4_Travel from './Step4_Travel'
import Form_DS160_5_Travel_Company from './Step5_Travel_Company'
import Form_DS160_6_Previous_Travel from './Step6_Previous_Travel'
import Form_DS160_7_Address_Phone from './Step7_Address_Phone'
import Form_DS160_8_Passport from './Step8_Passport'
import Form_DS160_9_Contact from './Step9_Contact'
import Form_DS160_10_Family from './Step10_Family'

import ds160_validators from '../Validators'

import Form_DS160_16_Preparer from './Step16_Preparer'
import Form_DS160_15_IntraCompany from './Step15_IntraCompany'
import Form_DS160_15_Crew_Job from './Step15_Crew_Job'
import Form_DS160_14_Security from './Step14_Security'
import Form_DS160_13_Additional_Work_Edu from './Step13_Additional_Work_Edu'
import Form_DS160_11_Work_Edu from './Step11_Work_Edu'
import Form_Final from './Final'
import Form_DS160_12_Previous_Work_Edu from './Step12_Previous_Work_Edu'
import Form_DS160_15_SEVIS from './Step15_SEVIS'
import Form_Photo from './Photo'

import './index.less'

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Submit without payment',
    description: type == 'success' ? 'Successfully submitted. It may take few minutes to process' : 'Failed to submit',
  })
}

class DS160_Wizard extends Component {
  static defaultProps = {
    token: null,
  }

  componentDidMount() {
    const { token, loadApplicationFromDB, lang, changeLanguage } = this.props
    if (token) {
      loadApplicationFromDB(DS160.DS160_GET_REQUEST, token, this.cbGetRequest)
    }
    if (lang) {
      changeLanguage(DS160.DS160_CHANGE_LANGUAGE, lang)
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { token, loadApplicationFromDB } = this.props
    if (token != nextProps.token) {
      if (nextProps.token) {
        loadApplicationFromDB(DS160.DS160_GET_REQUEST, token, this.cbGetRequest)
      }
    }
  }

  cbGetRequest = result => {
    const { history, agency } = this.props
    const adminToken = localStorage.getItem('immigration4us_token')
    const family = new URLSearchParams(location.search).get('family')
    if (result.success === false || (!adminToken && result.data && result.data.automation_status && result.data.automation_status.result === 'success')) {
      history.push({
        pathname: '/',
        search: `${agency ? `?agency=${agency}` : '?'}${family ? `&family=${family}` : ''}`,
      })
    }
  }

  onPrev = (data, field) => {
    if (field != '') {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, { [field]: data }))
    } else {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, data)
    }
    this.props.onPrevStep(DS160.DS160_PREV_STEP)

    const { agency } = this.props
    const family = new URLSearchParams(location.search).get('family')
    this.props.history.push({
      pathname: '/ds-160/application-form',
      search: `${agency ? `?agency=${agency}` : '?'}${family ? `&family=${family}` : ''}`,
    })

    window.scrollTo(0, 0)
  }

  onFirst = (data, field) => {
    if (field != '') {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, { [field]: data }))
    } else {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, data)
    }
    this.props.onFirstStep(DS160.DS160_FIRST_STEP)

    const { agency } = this.props
    const family = new URLSearchParams(location.search).get('family')
    this.props.history.push({
      pathname: '/ds-160/application-form',
      search: `${agency ? `?agency=${agency}` : '?'}${family ? `&family=${family}` : ''}`,
    })

    window.scrollTo(0, 0)
  }

  onNext = (data, field) => {
    if (field != '') {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, { [field]: data }))
    } else {
      this.props.updateValues(DS160.DS160_UPDATE_VALUES, data)
    }
    this.props.onNextStep(DS160.DS160_NEXT_STEP)

    const { agency } = this.props
    const family = new URLSearchParams(location.search).get('family')
    this.props.history.push({
      pathname: '/ds-160/application-form',
      search: `${agency ? `?agency=${agency}` : '?'}${family ? `&family=${family}` : ''}`,
    })
    window.scrollTo(0, 0)
  }

  onSaveAndContinue = (data, field, newAdd) => {
    const { agency } = this.props
    let family = new URLSearchParams(location.search).get('family')
    const payload = {
      email: '',
      completed: newAdd? true: false,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, { [field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency,
      family
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, result => {
      if (!family)
        family = this.props.applicationId;
      if (newAdd)
        this.props.history.push({
          pathname: '/',
          search: `?${agency ? `agency=${agency}` : ''}&family=${family}`,
        })
      else
        this.props.history.push({
          pathname: '/ds-160/application-form-later',
          search: agency ? `?agency=${agency}` : '',
        })
    })
  }

  onSubmit = (data, field, bulk) => {
    const { agency } = this.props
    let family = new URLSearchParams(location.search).get('family')
    const payload = {
      email: '',
      completed: true,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, { [field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency,
      family
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, result => {
      if (bulk && result.siblings.length == 0){
        notification['warning']({
          message: 'Information',
          description: "There is no application completed or unpaid",
        })
        return
      }
      let numbers = [];
      let fullnames = [];
      let passports = [];
      let quantity = 1;
      if (result.siblings) {
        quantity = result.siblings.length;
        for(let i=0;i<quantity;i++){
          let sibling = result.siblings[i];
          if (bulk) {
            numbers.push(sibling.app_id)
            fullnames.push(sibling.fullname)
            passports.push(sibling.passport)
          }
          else {
            if (sibling.id === result._id) {
              numbers.push(sibling.app_id)
              fullnames.push(sibling.fullname)
              passports.push(sibling.passport)
            }
          }
        }
      }
      if (!agency) {
        window.location.href = `https://evisa-forms.com/checkout/?add-to-cart=291&application_number=${result.app_id}&token=${result._id}&quantity=${bulk? quantity: 1}&bulk=${bulk}&numbers=${numbers.join(',')}&fullnames=${fullnames.join(',')}&passports=${passports.join(',')}`
        return
      }
      switch (agency.toLowerCase()) {
        case 'uva':
          window.location.href = 'https://apply.usvisaappointments.com/us-visa-interview/'
          break
        case 'aes':
          window.location.href = `http://eforms-online.com/checkout/?add-to-cart=3023&application_number=${result.app_id}&token=${result._id}&quantity=1&bulk=${bulk}&numbers=${numbers.join(',')}&fullnames=${fullnames.join(',')}&passports=${passports.join(',')}`
          break
        default:
          window.location.href = `https://evisa-forms.com/checkout/?add-to-cart=291&application_number=${result.app_id}&token=${result._id}&quantity=${bulk? quantity: 1}&bulk=${bulk}&numbers=${numbers.join(',')}&fullnames=${fullnames.join(',')}&passports=${passports.join(',')}`
          break
      }
    })
  }

  onSubmitWithoutPayment = (data, field) => {
    const { agency } = this.props
    let family = new URLSearchParams(location.search).get('family')
    const payload = {
      email: '',
      completed: true,
      step_index: this.props.step_index,
      withoutPayment: true,
      data: field != '' ? objectAssignDeep(this.props.ds160, { [field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency,
      family
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, result => {
      openNotificationWithIcon('success')
    })
  }

  validateForms = () => {
    const ds160 = this.props.ds160;
    var spouse = null;
    if (ds160.form_travel.paying_person_info && ds160.form_travel.paying_person_info.relationship === "S") {
        spouse = ds160.form_travel.paying_person_info;
    }
    var flag = true;    
    ds160.form_travel_company.people.map(person => {
      if (person.relationship === "S") {
        if (spouse) {
          if (spouse.surname.toLowerCase() !== person.surname.toLowerCase() || spouse.given_name.toLowerCase() !== person.given_name.toLowerCase()){
            flag = false;
            return
          }
        }
        else {
          spouse = person;
        }
        return
      }
    })    
    if (ds160.form_contact && ds160.form_contact.relationship === "S") {
      if (spouse) {
        if (spouse.surname.toLowerCase() !== ds160.form_contact.surname.toLowerCase() || spouse.given_name.toLowerCase() !== ds160.form_contact.given_name.toLowerCase()){
          flag = false;          
        }
      }
      else {
        spouse = ds160.form_contact;
      }
    }    
    if (ds160.form_family && ds160.form_family.spouse) {
      if (spouse) {
        if (spouse.surname.toLowerCase() !== ds160.form_family.spouse.surname.toLowerCase() || spouse.given_name.toLowerCase() !== ds160.form_family.spouse.given_name.toLowerCase()){
          flag = false;          
        }
      }
      else {
        spouse = ds160.form_family.spouse;
      }
    }
    ds160.form_family.others.map(person => {
      if (person.relationship === "S") {
        if (spouse) {
          if (spouse.surname.toLowerCase() !== person.surname.toLowerCase() || spouse.given_name.toLowerCase() !== person.given_name.toLowerCase()){
            flag = false;
            return
          }
        }
        else {
          spouse = person;
        }
      }
    });
    return flag;
  }

  handleSubmitWithoutPayment = (e, form, handleDates, field) => {
    e.preventDefault();
    if(this.validateForms())
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (handleDates) {
            this.onSubmitWithoutPayment(handleDates(values.data), field)
          } else {
            this.onSubmitWithoutPayment(values.data, field)
          }
        }
      })
    else
      alert('Please make sure you have provided same information for all the spouse fields')
  }

  handleSubmit = (e, form, handleDates, field, bulk) => {
    e.preventDefault()
    if(this.validateForms)
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (handleDates) {
            this.onSubmit(handleDates(values.data), field, bulk)
          } else {
            this.onSubmit(values.data, field, bulk)
          }
        }
      })
    else
      alert('Please make sure you have provided same information for all the spouse fields')
  }

  handlePrev = (e, form, handleDates, field) => {
    e.preventDefault()
    const values = form.getFieldsValue()
    if (handleDates) {
      this.onPrev(handleDates(values.data), field)
    } else {
      this.onPrev(values.data, field)
    }
  }

  handleFirst = (e, form, handleDates, field) => {
    e.preventDefault()
    const values = form.getFieldsValue()
    if (handleDates) {
      this.onFirst(handleDates(values.data), field)
    } else {
      this.onFirst(values.data, field)
    }
  }

  handleSave = (e, form, handleDates, field, newAdd=false) => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (handleDates) {
          this.onSaveAndContinue(handleDates(values.data), field, newAdd)
        } else {
          this.onSaveAndContinue(values.data, field, newAdd)
        }
      }
    })
  }

  handleNext = (e, form, handleDates, field) => {
    e.preventDefault()    
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (handleDates) {
          this.onNext(handleDates(values.data), field)
        } else {
          this.onNext(values.data, field)
        }
      }
    })
  }

  handleLanguageChange = lang => {
    this.props.changeLanguage(DS160.DS160_CHANGE_LANGUAGE, lang)
  }

  render() {
    const { step_index, ds160, loading, token, agency } = this.props    

    if (loading) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin" />
    }

    let formRender = ''
    let intracompany_type = ''
    let sevis_type = ''
    let additional_point_of_contact = false

    const adminToken = localStorage.getItem('immigration4us_token')

    let fieldsList = [
      null,
      '',
      '',
      'form_personal_info',
      'form_travel',
      'form_travel_company',
      'form_prev_travel_info',
      'form_addr_and_phone',
      'form_passport',
      'form_contact',
      'form_family',
      'form_work_or_edu',
      'form_prev_work_or_edu',
      'form_additional_work',
      'form_security_0',
      'form_security_1',
      'form_security_2',
      'form_security_3',
      'form_security_4',
      '',
      'form_e_sign',
      'form_photo',
      'form_final',
    ]

    const { purpose_of_trip, other_purpose_of_trip } = ds160.form_travel
    if (
      purpose_of_trip == 'F' ||
      purpose_of_trip == 'H' ||
      purpose_of_trip == 'L' ||
      purpose_of_trip == 'M' ||
      (purpose_of_trip == 'I' && other_purpose_of_trip == 'I-FR') ||
      (purpose_of_trip == 'J' && other_purpose_of_trip == 'J1-J1')
    ) {
      fieldsList = [
        null,
        '',
        '',
        'form_personal_info',
        'form_travel',
        'form_travel_company',
        'form_prev_travel_info',
        'form_addr_and_phone',
        'form_passport',
        'form_contact',
        'form_family',
        'form_work_or_edu',
        'form_prev_work_or_edu',
        'form_additional_work',
        'form_security_0',
        'form_security_1',
        'form_security_2',
        'form_security_3',
        'form_security_4',
        'extra',
        'form_e_sign',
        'form_photo',
        'form_final',
      ]
    } else {
      fieldsList = [
        null,
        '',
        '',
        'form_personal_info',
        'form_travel',
        'form_travel_company',
        'form_prev_travel_info',
        'form_addr_and_phone',
        'form_passport',
        'form_contact',
        'form_family',
        'form_work_or_edu',
        'form_prev_work_or_edu',
        'form_additional_work',
        'form_security_0',
        'form_security_1',
        'form_security_2',
        'form_security_3',
        'form_security_4',
        'extra',
        'form_e_sign',
        'form_photo',
        'form_final',
      ]
    }

    let age = 0
    if (step_index > 3) {
      age = moment().diff(moment(ds160.form_personal_info.date_birth, 'DD/MMM/YYYY'), 'years', true)
      if (age <= 14) {
        fieldsList = fieldsList.filter(field => field != 'form_work_or_edu' && field != 'form_prev_work_or_edu' && field != 'form_additional_work')
      }
    }

    const extraIndex = fieldsList.findIndex(field => field == 'extra')

    if (step_index > 4) {
      switch (purpose_of_trip) {
        case 'B':
        case 'I':
          break
        case 'C':
          if (other_purpose_of_trip == 'C1-D') {
            fieldsList[extraIndex] = 'form_crew_visa'
          }
          break
        case 'D':
          fieldsList[extraIndex] = 'form_crew_visa'
          break
        case 'F':
          fieldsList[extraIndex] = 'form_SEVIS'
          switch (other_purpose_of_trip) {
            case 'F1-F1':
              additional_point_of_contact = true
              sevis_type = 'A'
              break
            case 'F2-CH':
            case 'F2-SP':
              sevis_type = 'B'
              break
            default:
              break
          }
          break
        case 'H':
          switch (other_purpose_of_trip) {
            case 'H1B-H1B':
            case 'H1C-NR':
            case 'H2A-AG':
            case 'H2B-NA':
            case 'H3-TR':
              fieldsList[extraIndex] = 'form_intracompany'
              intracompany_type = 'A'
              break
            case 'H1B1-CHL':
            case 'H1B1-SGP':
              fieldsList[extraIndex] = 'form_intracompany'
              intracompany_type = 'B'
              break
            case 'H4-CH':
            case 'H4-SP':
              break
            default:
              break
          }
          break
        case 'J':
          fieldsList[extraIndex] = 'form_SEVIS'
          switch (other_purpose_of_trip) {
            case 'J1-J1':
              additional_point_of_contact = true
              sevis_type = 'C'
              break
            case 'J2-CH':
            case 'J2-SP':
              sevis_type = 'D'
              break
            default:
              break
          }
          break
        case 'L':
          if (other_purpose_of_trip == 'L1-L1') {
            fieldsList[extraIndex] = 'form_intracompany'
            intracompany_type = 'A'
          }
          break
        case 'M':
          fieldsList[extraIndex] = 'form_SEVIS'
          switch (other_purpose_of_trip) {
            case 'M1-M1':
              additional_point_of_contact = true
              sevis_type = 'A'
              break
            case 'M2-CH':
            case 'M2-SP':
              sevis_type = 'B'
              break
            case 'M3-M3':
              sevis_type = 'A'
              break
            default:
              break
          }
          break
        default:
          break
      }
    }

    if (fieldsList[extraIndex] === 'extra') {
      fieldsList.splice(extraIndex, 1)
    }

    const field = fieldsList[step_index]

    let sharedParams = {
      handlePrev: (e, form, handleDates) => this.handlePrev(e, form, handleDates, field),
      handleFirst: (e, form, handleDates) => this.handleFirst(e, form, handleDates, field),
      handleNext: (e, form, handleDates) => this.handleNext(e, form, handleDates, field),
      handleSave: (e, form, handleDates) => this.handleSave(e, form, handleDates, field),
      validators: ds160_validators,
      agency,
      handleLanguageChange: this.handleLanguageChange,
      tr: r => translate(r, ds160.language),
      adminToken,
    }

    if (field.startsWith('form_security')) {
      sharedParams = {
        handlePrev: (e, form, handleDates) => this.handlePrev(e, form, handleDates, 'form_security'),
        handleFirst: (e, form, handleDates) => this.handleFirst(e, form, handleDates, 'form_security'),
        handleNext: (e, form, handleDates) => this.handleNext(e, form, handleDates, 'form_security'),
        handleSave: (e, form, handleDates) => this.handleSave(e, form, handleDates, 'form_security'),
        validators: ds160_validators,
        agency,
        handleLanguageChange: this.handleLanguageChange,
        tr: r => translate(r, ds160.language),
        adminToken,
      }
    }

    switch (step_index) {
      case 1:
        formRender = <Form_DS160_2 showPrev={false} {...sharedParams} data={ds160} />
        break
      case 2:
        formRender = <Form_DS160_1 {...sharedParams} data={ds160} />
        break
      case 3:
        formRender = <Form_DS160_3 {...sharedParams} data={ds160.form_personal_info} />
        break
      case 4:
        formRender = <Form_DS160_4_Travel {...sharedParams} data={ds160.form_travel} martial_status={ds160.form_personal_info.martial_status} />
        break
      case 5:
        formRender = <Form_DS160_5_Travel_Company {...sharedParams} data={ds160.form_travel_company} />
        break
      case 6:
        formRender = <Form_DS160_6_Previous_Travel {...sharedParams} data={ds160.form_prev_travel_info} date_birth={ds160.form_personal_info.date_birth} />
        break
      case 7:
        formRender = <Form_DS160_7_Address_Phone {...sharedParams} data={ds160.form_addr_and_phone} />
        break
      case 8:
        formRender = <Form_DS160_8_Passport {...sharedParams} data={ds160.form_passport} date_birth={ds160.form_personal_info.date_birth} />
        break
      case 9:
        formRender = <Form_DS160_9_Contact {...sharedParams} data={ds160.form_contact} martial_status={ds160.form_personal_info.martial_status} />
        break
      case 10:
        formRender = <Form_DS160_10_Family {...sharedParams} data={ds160.form_family} date_birth={ds160.form_personal_info.date_birth} martial_status={ds160.form_personal_info.martial_status} />
        break
      default:
        switch (field) {
          case 'form_work_or_edu':
            formRender = <Form_DS160_11_Work_Edu {...sharedParams} data={ds160.form_work_or_edu} date_birth={ds160.form_personal_info.date_birth} />
            break
          case 'form_prev_work_or_edu':
            formRender = <Form_DS160_12_Previous_Work_Edu {...sharedParams} data={ds160.form_prev_work_or_edu} date_birth={ds160.form_personal_info.date_birth} />
            break
          case 'form_additional_work':
            formRender = <Form_DS160_13_Additional_Work_Edu {...sharedParams} data={ds160.form_additional_work} />
            break
          case 'form_security_0':
            formRender = <Form_DS160_14_Security {...sharedParams} data={ds160.form_security} SQIndex={0} />
            break
          case 'form_security_1':
            formRender = <Form_DS160_14_Security {...sharedParams} data={ds160.form_security} SQIndex={1} />
            break
          case 'form_security_2':
            formRender = <Form_DS160_14_Security {...sharedParams} data={ds160.form_security} SQIndex={2} />
            break
          case 'form_security_3':
            formRender = <Form_DS160_14_Security {...sharedParams} data={ds160.form_security} SQIndex={3} />
            break
          case 'form_security_4':
            formRender = <Form_DS160_14_Security {...sharedParams} data={ds160.form_security} SQIndex={4} />
            break
          case 'form_crew_visa':
            formRender = <Form_DS160_15_Crew_Job {...sharedParams} data={ds160.form_crew_visa} />
            break
          case 'form_SEVIS':
            formRender = <Form_DS160_15_SEVIS {...sharedParams} data={ds160.form_SEVIS} additional_point_of_contact={additional_point_of_contact} sevis_type={sevis_type} />
            break
          case 'form_intracompany':
            formRender = <Form_DS160_15_IntraCompany {...sharedParams} data={ds160.form_intracompany} intracompany_type={intracompany_type} />
            break
          case 'form_e_sign':
            formRender = <Form_DS160_16_Preparer {...sharedParams} data={ds160.form_e_sign} />
            break
          case 'form_photo':
            formRender = (
              <Form_Photo
                {...sharedParams}
                data={ds160.form_photo}
                interview_location={ds160.interview_location}
                sex={ds160.form_personal_info.sex}
                country_of_birth={ds160.form_personal_info.place_of_birth.country}
                purpose_of_trip={ds160.form_travel.purpose_of_trip}
                other_purpose_of_trip={ds160.form_travel.other_purpose_of_trip}
              />
            )
            break
          case 'form_final':
            formRender = (
              <Form_Final
                {...sharedParams}
                handleSubmit={(e, form, handleDates, bulk) => this.handleSubmit(e, form, handleDates, field, bulk)}
                handleSubmitWithoutPayment={(e, form, handleDates) => this.handleSubmitWithoutPayment(e, form, handleDates, field)}
                handleNewApplicant={(e, form, handleDates) => this.handleSave(e, form, handleDates, field, true)}
              />
            )
            break
          default:
            break
        }
        break
    }

  var customTheme = 'visa-ds160';
  if (agency && agency.toLowerCase() === 'uva') 
    customTheme = 'visa-ds160 visa-ds160-agency visa-uva'
  if (agency && agency.toLowerCase() === 'aes') 
    customTheme = 'visa-ds160 visa-ds160-agency visa-aes'

  {/*<div className={agency.toLowerCase() === 'uva' ? 'visa-ds160 visa-ds160-agency' : 'visa-ds160'}>*/}
  return (
    <div className={customTheme}>
        <VisaHeader className={step_index == 1 ? 'visa-com-header-first' : 'visa-com-header-not-first'} />
        <VisaBanner className={step_index == 1 ? 'visa-com-banner-first' : 'visa-com-banner-not-first'}>DS 160 US Visa Online Application</VisaBanner>
        <Progress
          strokeColor={{ '0%': agency === 'uva' ? '#239aac' : '#3668A9' /* '#108ee9' */, '100%': '#87d068' }}
          percent={parseInt((step_index * 100.0) / (fieldsList.length - 1))}
          status="active"
          style={{ width: '80%', left: '10%' }}
        />
        <div className="visa-ds160__content container">{formRender}</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNextStep: type => {
    dispatch({ type })
  },
  onPrevStep: type => {
    dispatch({ type })
  },
  onFirstStep: type => {
    dispatch({ type })
  },
  updateValues: (type, values) => {
    dispatch({ type, values })
  },
  onSaveAndContinueLater: (type, payload, applicationId, cb) => {
    dispatch({
      type,
      payload,
      applicationId,
      cb,
    })
  },
  loadApplicationFromDB: (type, applicationId, cb) => {
    dispatch({ type, applicationId, cb })
  },
  changeLanguage: (type, lang) => {
    dispatch({ type, lang })
  },
})

const mapStateToProps = state => ({
  step_index: state.main.step_index,
  ds160: state.main.ds160,
  loading: state.main.loading,
  applicationId: state.main.applicationId,
})

export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(DS160_Wizard)))
