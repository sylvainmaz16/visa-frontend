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

import './index.scss'
import Form_DS160_4_Travel from './Step4_Travel';
import Form_DS160_5_Travel_Company from './Step5_Travel_Company';
import Form_DS160_6_Previous_Travel from './Step6_Previous_Travel';
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
  }

  onNext = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, {...this.props.ds160, [field]: data} );
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onNextStep(DS160.DS160_NEXT_STEP);
    this.props.history.push('/ds-160/application-form');
  }

  onSaveAndContinue = (data, field) => {
    const payload = {
      email: '',
      completed: false,
      step_index: this.props.step_index,
      data: field != '' ? { ...this.props.ds160, [field]: data } : {...this.props.ds160, data}
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
    let fields_list = [null, "", "", "form_personal_info", "form_travel", "form_travel_company", "form_prev_travel_info"]
    let field = fields_list[step_index]
    let shared_params = {
      onPrev: (e) => this.onPrev(e, field),
      onNext: (e) => this.onNext(e, field),
      onSaveAndContinue: (e) => this.onSaveAndContinue(e, field),
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
        form_render = <Form_DS160_6_Previous_Travel {...shared_params} data={ds160.form_prev_travel_info} />
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
