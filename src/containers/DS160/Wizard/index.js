import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from '../../../components/VisaBanner';
import VisaHeader from '../../../components/VisaHeader';
import { DS160 } from '../../../actions/types'
import Form_DS160_1 from './Step1';
import Form_DS160_2 from './Step2';

import './index.scss'
import Form_DS160_3 from './Step3';
class DS160_Wizard extends Component {

  constructor(props) {
    super(props)
  }

  onPrev = () => {
    this.props.onPrevStep(DS160.DS160_PREV_STEP);
  }

  onNext = () => {
    this.props.onNextStep(DS160.DS160_NEXT_STEP);
  }

  render() {
    const { step_index } = this.props

    let form_render = ''
    const navigation_funcs = {
      onPrev: this.onPrev,
      onNext: this.onNext
    }
    switch(step_index) {
      case 1:
        form_render = <Form_DS160_1 showPrev={false} {...navigation_funcs}/>
        break;
      case 2:
        form_render = <Form_DS160_2 {...navigation_funcs} />
        break;
      case 3:
        form_render = <Form_DS160_3 {...navigation_funcs} />
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
  }
}

const mapStateToProps = state => ({
  step_index: state.mainData.step_index
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Wizard),
)
