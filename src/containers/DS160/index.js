import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon, Form, Checkbox, Select } from 'antd';
import VisaBanner from '../../components/VisaBanner';
import VisaHeader from '../../components/VisaHeader';
import { DS160 } from '../../actions/types'
import resources, { translate } from '../../utils/resources'
import Welcome from './Welcome'

const { Option } = Select

import './index.less'
class DS160_HOME extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'en-US'
    }
  }

  componentDidMount() {
  }

  onStartApplication = () => {
    const { agency } = this.props
    const { lang } = this.state
    if(agency) {
      this.props.history.push({
        pathname: '/ds-160/application-form', 
        search: `?agency=${agency}`
      });  
    } else {
      this.props.history.push('/ds-160/application-form')
    }
    this.props.resetState(DS160.DS160_INIT_STATE, { ds160: { language: lang } });
  }

  onChangeLang = (lang) => {
    this.setState({ lang })
  }

  render() {
    const { agency } = this.props
    const { lang } = this.state
    const tr = (r) => translate(r, lang);
    return (
      <div className={agency ? `visa-ds160 visa-ds160-agency` : `visa-ds160`}>
        <VisaHeader/>
        <VisaBanner>
          Important: Before You Start
        </VisaBanner>
        <div className="visa-ds160__content container">
          <Form.Item label={tr(resources.language.label)} extra={tr(resources.language.extra)}>
            <Select placeholder="Select an Option" value={lang} onChange={this.onChangeLang} optionFilterProp="children" showSearch style={{ width: '300px' }}>
              <Option value="en-US">ENGLISH</Option>
              <Option value="fr-FR">FRANÇAIS (FRENCH)</Option>
              <Option value="es-ES">ESPAÑOL (SPANISH)</Option>
              <Option value="de-DE">DEUTSCH (GERMAN)</Option>
              <Option value="it-IT">ITALIANO (ITALIAN)</Option>
            </Select>
          </Form.Item>

          <Welcome lang={lang} agency={agency}/>
          
          <div className="visa-global-btn-group" style={{textAlign: 'center', margin: '40px 0px'}}>
            <Button type="primary" onClick={this.onStartApplication}>
              {tr(resources.before.start_button)}
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
    resetState: (type, initValue) => {
      dispatch({ type, initValue })
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
