import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon, Form, Select } from 'antd'
import VisaBanner from 'components/VisaBanner'
import VisaHeader from 'components/VisaHeader'
import { DS160 } from 'actions/types'
import resources, { translate } from 'utils/resources'
import Welcome from './Welcome'

import './index.less'

const { Option } = Select

const DS160_HOME = ({ agency, history, resetState, changeLanguage, initLang = 'en-US' }) => {
  const [lang, setLanguage] = useState('en-US')
  const tr = r => translate(r, lang)
  const family = new URLSearchParams(location.search).get('family')

  useEffect(() => {
    setLanguage(initLang)
  }, [initLang])

  function onStartApplication() {    
    history.push({
      pathname: '/ds-160/application-form',
      search: `${agency ? `?agency=${agency}` : '?'}${family ? `&family=${family}` : ''}`,
    })
    resetState(DS160.DS160_INIT_STATE, { ds160: { language: lang } })
  }

  function onChangeLang(lang) {
    setLanguage(lang)
  }

  var customTheme = 'visa-ds160';
  if (agency && agency.toLowerCase() === 'uva') 
    customTheme = 'visa-ds160 visa-ds160-agency visa-uva'
  if (agency && agency.toLowerCase() === 'aes') 
    customTheme = 'visa-ds160 visa-ds160-agency visa-aes'
  if (agency && agency.toLowerCase() === 'ues') 
    customTheme = 'visa-ds160 visa-ds160-agency visa-ues'

  {/*<div className={agency.toLowerCase() === 'uva' ? 'visa-ds160 visa-ds160-agency' : 'visa-ds160'}>*/}
  return (
    <div className={customTheme}>
      <VisaHeader />
      <VisaBanner>
        DS-160 US Visa Online Application <span className="following">for the following Categories:</span>
        <br />
        <span className="categories">B1 - B2 – C – D – F – H – I – J - L - M</span>
      </VisaBanner>
      <div className="visa-ds160__content container">
        <Form.Item label={tr(resources.language.label)} extra={tr(resources.language.extra)}>
          <Select placeholder="Select an Option" value={lang} onChange={onChangeLang} optionFilterProp="children" showSearch style={{ width: '300px' }}>
            <Option value="en-US">ENGLISH</Option>
            <Option value="fr-FR">FRANÇAIS (FRENCH)</Option>
            <Option value="es-ES">ESPAÑOL (SPANISH)</Option>
            <Option value="de-DE">DEUTSCH (GERMAN)</Option>
            <Option value="it-IT">ITALIANO (ITALIAN)</Option>
            
            <Option value="pt-PT">PORTUGUÊS (PORTUGUESE)</Option>
            <Option value="nl-NL">DUTCH (NETHERLAND)</Option>
            <Option value="ru-RU">РУССКИЙ (RUSSIAN)</Option>
            <Option value="zh-Hans-CN">中文 (CHINESE)</Option>
            <Option value="ko-KR">한국어 (KOREAN)</Option>
            <Option value="jp-JP">日本語 (JAPANESE)</Option>
            <Option value="ar-">عربى (ARABIC)</Option>
            <Option value="hi-IN">हिंदी (HINDI)</Option>
            <Option value="bn-BD">বাংলা (BENGALI)</Option>
            <Option value="he-IL">עִברִית (HEBREW)</Option>
          </Select>
        </Form.Item>

        <Welcome lang={lang} agency={agency} tr={tr}/>

        <div className="visa-global-btn-group" style={{ textAlign: 'center', padding: '40px 0' }}>
          <Button type="primary" onClick={onStartApplication}s>
            {tr(resources.before.start_button)}
            <Icon type="right" />
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  resetState: (type, initValue) => {
    dispatch({ type, initValue })
  },
  changeLanguage: (type, lang) => {
    dispatch({ type, lang })
  },
})

export default withRouter(connect(null, mapDispatchToProps)(DS160_HOME))
