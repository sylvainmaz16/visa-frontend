import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from '../../../components/VisaBanner';
import VisaHeader from '../../../components/VisaHeader';
import { DS160 } from '../../../actions/types'
import Form_DS160_1 from './Step1';
import Form_DS160_2 from './Step2';
import Form_DS160_3 from './Step3_Personal_Information';
import { Spin } from 'antd';

import Form_DS160_4_Travel from './Step4_Travel';
import Form_DS160_5_Travel_Company from './Step5_Travel_Company';
import Form_DS160_6_Previous_Travel from './Step6_Previous_Travel';
import Form_DS160_7_Address_Phone from './Step7_Address_Phone';
import Form_DS160_8_Passport from './Step8_Passport';
import Form_DS160_9_Contact from './Step9_Contact';
import Form_DS160_10_Family from './Step10_Family';
import Form_DS160_14_SEVIS from './Step15_SEVIS';
import Form_DS160_14_IntraCompany from './Step15_IntraCompany';
import objectAssignDeep from 'object-assign-deep'

import ds160_validators from '../Validators'

import './index.scss'
import Form_DS160_16_Preparer from './Step16_Preparer';
import Form_DS160_15_IntraCompany from './Step15_IntraCompany';
import Form_DS160_15_Crew_Job from './Step15_Crew_Job';
import Form_DS160_14_Security from './Step14_Security';
import Form_DS160_13_Additional_Work_Edu from './Step13_Additional_Work_Edu';
import Form_DS160_11_Work_Edu from './Step11_Work_Edu';
import Form_Final from './Final';
import Form_DS160_12_Previous_Work_Edu from './Step12_Previous_Work_Edu';
import Form_DS160_15_SEVIS from './Step15_SEVIS';
import Form_Photo from './Photo';

class DS160_Wizard extends Component {
  static defaultProps = {
    token: null
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { token } = this.props
    if( token )
      this.props.loadApplicationFromDB( DS160.DS160_GET_REQUEST, token )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if( this.props.token != nextProps.token ) {
      if( nextProps.token )
        this.props.loadApplicationFromDB( DS160.DS160_GET_REQUEST, token )
    }
  }

  onPrev = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, {[field]: data}));
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onPrevStep(DS160.DS160_PREV_STEP);
    this.props.history.push('/ds-160/application-form');
    window.scrollTo(0, 0); 
  }

  onNext = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, {[field]: data}) );
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onNextStep(DS160.DS160_NEXT_STEP);
    this.props.history.push('/ds-160/application-form');
    window.scrollTo(0, 0); 
  }

  onSaveAndContinue = (data, field) => {
    const payload = {
      email: '',
      completed: false,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, {[field]: data }) : objectAssignDeep(this.props.ds160, data)
    }
    console.log(field, payload)
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId)
    this.props.history.push('/ds-160/application-form-later');
  }

  onSubmit = (data, field) => {
    const payload = {
      email: '',
      completed: true,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, {[field]: data }) : objectAssignDeep(this.props.ds160, data),
    }
    console.log('onSubmit: ', field, payload)
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId)
    this.props.history.push('/ds-160/checkout');
  }

  handleSubmit = (e, form, handleDates, field) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      console.log(err, values)
      if (!err) {
        if( handleDates )
          this.onSubmit(handleDates(values.data), field)
        else 
          this.onSubmit(values.data, field)
      }
    });
  }

  handlePrev = (e, form, handleDates, field) => {
    e.preventDefault();
    const values = form.getFieldsValue();
    if(handleDates)
      this.onPrev(handleDates(values.data), field)
    else
      this.onPrev(values.data, field)
  }

  handleSave = (e, form, handleDates, field) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      console.log(err, values)
      if (!err) {
        if( handleDates )
          this.onSaveAndContinue(handleDates(values.data), field)
        else 
          this.onSaveAndContinue(values.data, field)
      }
    });
  }

  handleNext = (e, form, handleDates, field) => {
    e.preventDefault();
    console.log( e, form, handleDates, field)
    form.validateFieldsAndScroll((err, values) => {
      console.log('has Error', err)
      if (!err) {
        if(handleDates)
          this.onNext(handleDates(values.data), field);
        else
          this.onNext(values.data, field);
      }
    });
  };

  render() {
    const { step_index, ds160, bWaitLoadFromDB, token } = this.props

    if(token && bWaitLoadFromDB) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin">
      </Spin>
    }

    console.log(step_index)

    let form_render = ''
    let intracompany_type = '', sevis_type = '', additional_point_of_contact = false

    let fields_list = [
      null, "", "", 
      "form_personal_info", 
      "form_travel", 
      "form_travel_company", 
      "form_prev_travel_info", 
      "form_addr_and_phone",
      "form_passport",
      "form_contact",
      "form_family",
      "form_work_or_edu",
      "form_prev_work_or_edu",
      "form_additional_work",
      "form_security",
      "",
      "form_e_sign",
      "form_photo",
      "form_final"
    ]

    const {purpose_of_trip, other_purpose_of_trip} = ds160.form_travel
    if(
      purpose_of_trip == 'F' || 
      purpose_of_trip == 'H' || 
      purpose_of_trip == 'L' || 
      purpose_of_trip == 'M' || 
      (purpose_of_trip == 'I' && other_purpose_of_trip == 'I-FR') || 
      (purpose_of_trip == 'J' && other_purpose_of_trip == 'J1-J1')
    ) {
      fields_list = [
        null, "", "", 
        "form_personal_info", 
        "form_travel", 
        "form_travel_company", 
        "form_prev_travel_info", 
        "form_addr_and_phone",
        "form_passport",
        "form_contact",
        "form_family",
        "form_work_or_edu",
        "form_prev_work_or_edu",
        "form_additional_work",
        "form_security",
        "extra",
        "form_e_sign",
        "form_photo",
        "form_final"
      ]
    } else {
      fields_list = [
        null, "", "", 
        "form_personal_info", 
        "form_travel", 
        "form_travel_company", 
        "form_prev_travel_info", 
        "form_addr_and_phone",
        "form_passport",
        "form_contact",
        "form_family",
        "form_work_or_edu",
        "form_prev_work_or_edu",
        "form_additional_work",
        "form_security",
        "extra",
        "form_e_sign",
        "form_photo",
        "form_final"
      ]
    }

    let extra_index = fields_list.findIndex(field => field == 'extra')

    if( step_index > 4 ) {

      switch(purpose_of_trip) {
        case 'B':
        case 'I':
          break;
        case 'C':
          if(other_purpose_of_trip == 'C1-D') {
            fields_list[extra_index] = 'form_crew_visa'
          }
          break;
        case 'D':
          fields_list[extra_index] = 'form_crew_visa'
          break;
        case 'F':
          fields_list[extra_index] = 'form_SEVIS'
          switch(other_purpose_of_trip) {
            case 'F1-F1':
              additional_point_of_contact = true;
              sevis_type = 'A'
              break;
            case 'F2-CH':
            case 'F2-SP':
              sevis_type = 'B'
              break;
          }
          break;
        case 'H':
          switch(other_purpose_of_trip) {
            case "H1B-H1B":
            case "H1C-NR":
            case "H2A-AG":
            case "H2B-NA":
            case "H3-TR":
              fields_list[extra_index] = 'form_intracompany'
              intracompany_type = 'A'
              break;
            case "H1B1-CHL":
            case "H1B1-SGP":
              fields_list[extra_index] = 'form_intracompany'
              intracompany_type = 'B'
              break;
            case "H4-CH":
            case "H4-SP":
              break;
          }
          break;
        case 'J':
          fields_list[extra_index] = 'form_SEVIS'
          switch(other_purpose_of_trip) {
            case 'J1-J1':
              additional_point_of_contact = true;
              sevis_type = 'C'
              break;
            case 'J2-CH':
            case 'J2-SP':
              sevis_type = 'D'
              break;
          }
          break;
        case 'L':
          if(other_purpose_of_trip == 'L1-L1'){
            fields_list[extra_index] = 'form_intracompany'
            intracompany_type = 'A'
          }
          break;
        case 'M':
          fields_list[extra_index] = 'form_SEVIS'
          switch(other_purpose_of_trip) {
            case 'M1-M1':
              additional_point_of_contact = true;
              sevis_type = 'A'
              break;
            case 'M2-CH':
            case 'M2-SP':
              sevis_type = 'B'
              break;
            case 'M3-M3':
              sevis_type = 'A'
              break;
          }
          break;
      }
    }

    if(fields_list[extra_index] == 'extra') {
      fields_list.splice(extra_index, 1)
    }

    let field = fields_list[step_index]    
    
    let shared_params = {
      handlePrev: (e, form, handleDates) => this.handlePrev(e, form, handleDates, field),
      handleNext: (e, form, handleDates) => this.handleNext(e, form, handleDates, field),
      handleSave: (e, form, handleDates) => this.handleSave(e, form, handleDates, field),
      validators: ds160_validators
    }

    console.log(step_index, field)

    switch(step_index) {
      case 1:
        form_render = <Form_DS160_1 showPrev={false} {...shared_params} data={ds160}/>
        break;
      case 2:
        form_render = <Form_DS160_2 {...shared_params} data={ds160}/>
        break;
      case 3:
        form_render = <Form_DS160_3 {...shared_params} data={ds160.form_personal_info}/>
        break;
      case 4:
        form_render = <Form_DS160_4_Travel {...shared_params} data={ds160.form_travel} />
        break;
      case 5:
        form_render = <Form_DS160_5_Travel_Company {...shared_params} data={ds160.form_travel_company} />
        break;
      case 6:
        form_render = <Form_DS160_6_Previous_Travel {...shared_params} data={ds160.form_prev_travel_info} date_birth={ds160.form_personal_info.date_birth}/>
        break;
      case 7:
        form_render = <Form_DS160_7_Address_Phone {...shared_params} data={ds160.form_addr_and_phone} />
        break;
      case 8:
        form_render = <Form_DS160_8_Passport {...shared_params} data={ds160.form_passport}  date_birth={ds160.form_personal_info.date_birth}/>
        break;
      case 9:
        form_render = <Form_DS160_9_Contact {...shared_params} data={ds160.form_contact} martial_status={ds160.form_personal_info.martial_status}/>
        break;
      case 10:
        form_render = <Form_DS160_10_Family {...shared_params} data={ds160.form_family} date_birth={ds160.form_personal_info.date_birth} martial_status={ds160.form_personal_info.martial_status}/>
        break;
      default:
        switch(field) {
          case 'form_work_or_edu':
            form_render = <Form_DS160_11_Work_Edu {...shared_params} data={ds160.form_work_or_edu} />
            break;
          case 'form_prev_work_or_edu':
            form_render = <Form_DS160_12_Previous_Work_Edu {...shared_params} data={ds160.form_prev_work_or_edu} date_birth={ds160.form_personal_info.date_birth}/>
            break;
          case 'form_additional_work':
            form_render = <Form_DS160_13_Additional_Work_Edu {...shared_params} data={ds160.form_additional_work} />
            break;
          case 'form_security':
            form_render = <Form_DS160_14_Security {...shared_params} data={ds160.form_security} />
            break;
          case 'form_crew_visa':
            form_render = <Form_DS160_15_Crew_Job {...shared_params} data={ds160.form_crew_visa} />
            break;
          case 'form_SEVIS':
            form_render = <Form_DS160_15_SEVIS {...shared_params} data={ds160.form_SEVIS} additional_point_of_contact={additional_point_of_contact} sevis_type={sevis_type}/>
            break;
          case 'form_intracompany':
            form_render = <Form_DS160_15_IntraCompany {...shared_params} data={ds160.form_intracompany} intracompany_type={intracompany_type}/>
            break;
          case 'form_e_sign':
            form_render = <Form_DS160_16_Preparer {...shared_params} data={ds160.form_e_sign} />
            break;
          case 'form_photo':
            form_render = <Form_Photo {...shared_params} data={ds160.form_photo} />
            break;
          case 'form_final':
            form_render = <Form_Final {...shared_params} handleSubmit={(e, form, handleDates) => this.handleSubmit(e, form, handleDates, field)}/>
            break;
          default:
            console.log('EXCEPTION could not find form')
            break;
        }
        break;
    }

    return (
      <div className="visa-ds160">
        <VisaHeader />
        <VisaBanner backgroundColor="#428bca">
          DS 160 US Visa Online Application
        </VisaBanner>
        <div className="visa-ds160__content container">
          {form_render}
        </div>
        
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onNextStep: (type) => {
      dispatch({ type })
    },
    onPrevStep: (type) => {
      dispatch({ type })
    },
    updateValues: (type, values) => {
      dispatch({ type, values })
    },
    onSaveAndContinueLater: (type, payload, applicationId) => {
      dispatch({ type, payload, applicationId })
    },
    loadApplicationFromDB: (type, applicationId) => {
      dispatch({ type, applicationId })
    }
  }
}

const mapStateToProps = state => ({
  step_index: state.main.step_index,
  ds160: state.main.ds160,
  bWaitLoadFromDB: state.main.bWaitLoadFromDB,
  applicationId: state.main.applicationId
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Wizard),
)
