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
import Form_DS160_11_Previous_Work_Edu from './Step11_Previous_Work_Edu';
import Form_DS160_12_Additional_Work_Edu from './Step12_Additional_Work_Edu';
import Form_DS160_13_Security from './Step13_Security';
import Form_DS160_14_Crew_Job from './Step14_Crew_Job';
import Form_DS160_15_Preparer from './Step15_Preparer';
import objectAssignDeep from 'object-assign-deep'

import ds160_validators from '../Validators'

import './index.scss'
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

  componentWillReceiveProps(nextProps) {
    if( this.props.token != nextProps.token ) {
      if( nextProps.token )
        this.props.loadApplicationFromDB( DS160.DS160_GET_REQUEST, token )
    }
  }

  onPrev = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, {...this.props.ds160, [field]: data} );
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onPrevStep(DS160.DS160_PREV_STEP);
    this.props.history.push('/ds-160/application-form');
    window.scrollTo(0, 0); 
  }

  onNext = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, {...this.props.ds160, [field]: data} );
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
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload)
    this.props.history.push('/ds-160/application-form-later');
  }

  render() {
    const { step_index, ds160, bWaitLoadFromDB, token } = this.props

    if(token && bWaitLoadFromDB) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin">
      </Spin>
    }

    let form_render = ''
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
      "form_prev_work_or_edu",
      "form_additional_work",
      "form_security",
      "form_crew_visa",
      "form_e_sign"
    ]
    let field = fields_list[step_index]
    let shared_params = {
      onPrev: (e) => this.onPrev(e, field),
      onNext: (e) => this.onNext(e, field),
      onSaveAndContinue: (e) => this.onSaveAndContinue(e, field),
      validators: ds160_validators
    }

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
        form_render = <Form_DS160_8_Passport {...shared_params} data={ds160.form_passport} />
        break;
      case 9:
        form_render = <Form_DS160_9_Contact {...shared_params} data={ds160.form_contact} />
        break;
      case 10:
        form_render = <Form_DS160_10_Family {...shared_params} data={ds160.form_family} date_birth={ds160.form_personal_info.date_birth}/>
        break;
      case 11:
        form_render = <Form_DS160_11_Previous_Work_Edu {...shared_params} data={ds160.form_prev_work_or_edu} />
        break;
      case 12:
        form_render = <Form_DS160_12_Additional_Work_Edu {...shared_params} data={ds160.form_additional_work} />
        break;
      case 13:
        form_render = <Form_DS160_13_Security {...shared_params} data={ds160.form_security} />
        break;
      case 14:
        form_render = <Form_DS160_14_Crew_Job {...shared_params} data={ds160.form_crew_visa} />
        break;
      case 15:
        form_render = <Form_DS160_15_Preparer {...shared_params} data={ds160.form_e_sign} />
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
    onSaveAndContinueLater: (type, payload) => {
      dispatch({ type, payload })
    },
    loadApplicationFromDB: (type, applicationId) => {
      dispatch({ type, applicationId })
    }
  }
}

const mapStateToProps = state => ({
  step_index: state.mainData.step_index,
  ds160: state.mainData.ds160,
  bWaitLoadFromDB: state.mainData.bWaitLoadFromDB
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Wizard),
)
