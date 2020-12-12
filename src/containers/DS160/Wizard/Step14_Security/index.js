import React, { Component } from 'react'
import {
  Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon,
} from 'antd'
import * as constants from 'utils/constants'
import VisaSelect from 'components/VisaSelect'
import moment from 'moment'
import VisaExplain from 'components/VisaExplain'
import VisaInput from 'components/VisaInput'
import VisaSelectItem from 'components/VisaSelectItem'
import * as utils from 'utils'
import resources from 'utils/resources'

const { Option } = Select
const { TextArea } = Input

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
    const { getFieldDecorator, getFieldValue, setFieldsValue } = this.props.form
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    }
    const {
      showPrev, showNext, onPrev, onNext, data, SQIndex, tr,
    } = this.props

    const explain = {
      part1: [
        {
          label: 'Do you have a communicable disease of public health significance such as tuberculosis (TB)?',
          radio: 'b_disease',
          text: 'disease_explain',
        },
        {
          label: 'Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?',
          radio: 'b_disorder',
          text: 'disorder_explain',
        },
        {
          label: 'Are you or have you ever been a drug abuser or addict?',
          radio: 'b_druguser',
          text: 'druguser_explain',
        },
      ],
      part2: [
        {
          label: 'Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?',
          radio: 'b_Arrested',
          text: 'arrested_explain',
        },
        {
          label: 'Have you ever violated, or engaged in a conspiracy to violate, any law related to controlled substances?',
          radio: 'b_ControlledSubstances',
          text: 'controlled_substances_explain',
        },
        {
          label: 'Are you coming to the US to engage in prostitution or unlawful commercialized vice or have been engaged in prostitution or procuring prostitutes within the past 10 years?',
          radio: 'b_Prostitution',
          text: 'prostitution_explain',
        },
        {
          label: 'Have you ever been involved in, or do you seek to engage in, money laundering?',
          radio: 'b_MoneyLaundering',
          text: 'money_laundering_explain',
        },
        {
          label: 'Have you ever committed or conspired to commit a human trafficking offense in the US or outside of the US?',
          radio: 'b_HumanTrafficking',
          text: 'human_trafficking_explain',
        },
        {
          label: 'Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a sever human trafficking offense in the US or outside the US?',
          radio: 'b_AssistedSeveral',
          text: 'assisted_several_explain',
        },
        {
          label: 'Are you the spouse, son or daughter of an individual who has committed or conspired to commit a human trafficking offense in the US or outside or the US and have you within the last five years, knowingly benefited from the trafficking activities?',
          radio: 'b_human_related',
          text: 'human_related_explain',
        },
      ],
      part3: [
        'Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the US?',
        'Do you seek to engage in terrorist activities while in the united states or have you ever engaged in terrorist activities?',
        'Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorists organisations?',
        'Are you a member or representative of a terrorist organisation?',
        'Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?',
        'Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?',
        'Have you ever ordered, incited, committed, assisted, or otherwise participated in torture?',
        'Have you ever ordered, incited, committed, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?',
        'Have you ever engaged in the recruitment or the use of child soldiers?',
        'Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly sever violations of religious freedom?',
        'Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?',
        'Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?',
      ],
      part4: [
        'Have you ever been the subject of a removal or deportation hearing?',
        'Have you ever sought to obtain or assist others to obtain a visa, entry in the US, or any other US immigration benefit by fraud or willful misrepresentation or other unlawful means?',
        'Have you failed to attend a hearing on removability or inadmissibility within the last five years?',
        'Have you ever been unlawfully present, overstayed the amount of time granted by an immigration official or otherwise violated the terms of a U.S. visa?',
        'Have you ever been removed or deported from any country?',
      ],
      part5: [
        'Have you ever withheld custody of a US citizen child outside the US from a person granted legal custody by a US court?',
        'Have you voted in the US in violation of any law or regulation?',
        'Have you ever renounced US citizenship for the purpose of avoiding taxation?',
        'Have you attended a public elementary school on student (F) status or a public secondary school after November 30,1996 without reimbursing the school?',
        'Are you a former exchange visitor (J) who has not yet fulfilled the two-year foreign residence requirement?',
      ],
    }
    if (SQIndex == 0) {
      explain.part1.map((exp, index) => { getFieldDecorator(`data.part1.${exp.radio}`, { initialValue: utils.getInitialValue(data.part1[exp.radio]) }) })
    }

    if (SQIndex == 1) {
      explain.part2.map((exp, index) => { getFieldDecorator(`data.part2.${exp.radio}`, { initialValue: utils.getInitialValue(data.part2[exp.radio]) }) })
    }

    if (SQIndex == 2) {
      explain.part3.map((exp, index) => {
        getFieldDecorator(`data.part3.array[${index}].text`, { initialValue: utils.getInitialValue(data.part3.array[index].text) })
        getFieldDecorator(`data.part3.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part3.array[index].radio) })
      })
    }
    if (SQIndex == 3) {
      explain.part4.map((exp, index) => {
        getFieldDecorator(`data.part4.array[${index}].text`, { initialValue: utils.getInitialValue(data.part4.array[index].text) })
        getFieldDecorator(`data.part4.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part4.array[index].radio) })
      })
    }
    if (SQIndex == 4) {
      explain.part5.map((exp, index) => {
        getFieldDecorator(`data.part5.array[${index}].text`, { initialValue: utils.getInitialValue(data.part5.array[index].text) })
        getFieldDecorator(`data.part5.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part5.array[index].radio) })
      })
    }

    return (
      <Form {...formItemLayout}>

        {SQIndex == 0 && <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.security.part1.section_title)}</h2>
            <div className="visa-global-section-description">{tr(resources.security.part1.section_descr)}</div>
          </div>

          <>
            {explain.part1.map((exp, index) => <VisaExplain
              label={tr(resources.security.part1[index])}
              radioField={`data.part1.${exp.radio}`}
              radioInitialValue={data.part1[exp.radio]}
              radioValue={getFieldValue(`data.part1.${exp.radio}`)}
              textField={`data.part1.${exp.text}`}
              textInitialValue={data.part1[exp.text]}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
              tr={tr}
            />)}
          </>
        </>}

        {SQIndex == 1 && <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.security.part2.section_title)}</h2>
            <div className="visa-global-section-description">{tr(resources.security.part2.section_descr)}</div>
          </div>
          <>
            {explain.part2.map((exp, index) => <VisaExplain
              label={tr(resources.security.part2[index])}
              radioField={`data.part2.${exp.radio}`}
              radioInitialValue={data.part2[exp.radio]}
              radioValue={getFieldValue(`data.part2.${exp.radio}`)}
              textField={`data.part2.${exp.text}`}
              textInitialValue={data.part2[exp.text]}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
              tr={tr}
            />)}
          </>
        </>}

        {SQIndex == 2 && <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.security.part3.section_title)}</h2>
            <div className="visa-global-section-description">{tr(resources.security.part3.section_descr)}</div>
          </div>

          <>
            {explain.part3.map((exp, index) => <VisaExplain
              label={tr(resources.security.part3[index])}
              radioField={`data.part3.array[${index}].radio`}
              radioInitialValue={data.part3.array[index].radio}
              radioValue={getFieldValue(`data.part3.array[${index}].radio`)}
              textField={`data.part3.array[${index}].text`}
              textInitialValue={data.part3.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
              tr={tr}
            />)}
          </>
        </>}

        {SQIndex == 3 && <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.security.part4.section_title)}</h2>
            <div className="visa-global-section-description">{tr(resources.security.part4.section_descr)}</div>
          </div>

          <>
            {explain.part4.map((exp, index) => <VisaExplain
              label={tr(resources.security.part4[index])}
              radioField={`data.part4.array[${index}].radio`}
              radioInitialValue={data.part4.array[index].radio}
              radioValue={getFieldValue(`data.part4.array[${index}].radio`)}
              textField={`data.part4.array[${index}].text`}
              textInitialValue={data.part4.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
              tr={tr}
            />)}
          </>
        </>}

        {SQIndex == 4 && <>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title">{tr(resources.security.part5.section_title)}</h2>
            <div className="visa-global-section-description">{tr(resources.security.part5.section_descr)}</div>
          </div>

          <>
            {explain.part5.map((exp, index) => <VisaExplain
              label={tr(resources.security.part5[index])}
              radioField={`data.part5.array[${index}].radio`}
              radioInitialValue={data.part5.array[index].radio}
              radioValue={getFieldValue(`data.part5.array[${index}].radio`)}
              textField={`data.part5.array[${index}].text`}
              textInitialValue={data.part5.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
              tr={tr}
            />)}
          </>
        </>}

        <Form.Item className="visa-global-border-top">
          <p>{tr(resources.statement.line_1)}</p>
          <span><b>{tr(resources.statement.line_2)}</b></span>
          <p>{tr(resources.statement.line_3)}</p>
        </Form.Item>
        
        <div className="visa-form-bottom-btn-group">
          {this.props.adminToken && (
            <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>FIRST</Button>
              {showPrev && <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
              {showNext && <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
            </div>
          )}
          {showPrev && <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    )
  }
}
const Form_DS160_14_Security = Form.create()(MyForm)
export default Form_DS160_14_Security
