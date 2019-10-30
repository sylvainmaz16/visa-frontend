import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon } from 'antd';
import VisaBanner from '../../components/VisaBanner';
import VisaHeader from '../../components/VisaHeader';
import { DS160 } from '../../actions/types'

import './index.scss'
class DS160_HOME extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  onStartApplication = () => {
    const { agency } = this.props
    if(agency) {
      this.props.history.push({
        pathname: '/ds-160/application-form', 
        search: `?agency=${agency}`
      });  
    } else {
      this.props.history.push('/ds-160/application-form')
    }
    this.props.resetState(DS160.DS160_INIT_STATE);
  }

  render() {
    return (
      <div className="visa-ds160">
        <VisaHeader />
        <VisaBanner>
          Important: Before You Start
        </VisaBanner>
        <div className="visa-ds160__content container">
          <div className="visa-global-heading-1">You should have the following documents available while you complete your DS-160:</div>
          <ul className="visa-global-ul-1">
            <li><p><span>Passport</span></p></li>
            <li><p><span>Travel itinerary, if you have already made travel arrangements.</span></p></li>
            <li><p><span>Dates of your last five visits or trips to the United States, if you have previously travelled to the United States. You may also be asked for your international travel history for the past five years. </span></p></li>
            <li><p><span>Résumé or Curriculum Vitae - You may be required to provide information about your current and previous education and work history. </span></p></li>
            <li><p><span>Other Information - Some applicants, depending on the intended purpose of travel, will be asked to provide additional information when completing the DS-160.</span></p></li>
            <li><p><span>Our agency charges $165 + Government fee (from $160 to $265 depending on the type of Visa).</span></p></li>
          </ul>
          <div className="visa-global-heading-1">Some applicants will need to have additional information and documents handy while completing the DS-160:</div>
          <ul className="visa-global-ul-1">
            <li><p><span>Students and Exchange Visitors (F, J, and M): You will be asked to provide your SEVIS ID, which is printed on your I-20 or DS-2019, so you should have this form available when completing your DS-160. You also will be asked to provide the address of the school/program at which you intend to study. This information should also be on your I-20 or DS-2019 form. </span></p></li>
            <li><p><span>Petition-based Temporary Workers (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): You should have a copy of your I-129 available when completing your DS-160. </span></p></li>
            <li><p><span>Other Temporary Workers: You will be asked for information about your employer, including the employer’s address, while completing your DS-160.</span></p></li>
          </ul>
          <div className="visa-global-btn-group" style={{textAlign: 'center', margin: '40px 0px'}}>
            <Button type="primary" onClick={this.onStartApplication}>
              Start Your Application
              <Icon type="right" />
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    resetState: (type) => {
      dispatch({ type })
    },
  }
}

const mapStateToProps = state => ({
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_HOME),
)
