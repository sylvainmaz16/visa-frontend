import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaSelect from "../../../../components/VisaSelect";
import moment from 'moment'
import VisaRadio from "../../../../components/VisaRadio";
import VisaExplain from "../../../../components/VisaExplain";
import VisaDateLength from "../../../../components/VisaDateLength";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaInputArray from "../../../../components/VisaInputArray";
import * as utils from '../../../../utils'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  render() {
    const { getFieldDecorator, getFieldValue, setFieldsValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };
    const { showPrev, showNext, onPrev, onNext, data } = this.props

    const explain = {
      part1: [
        {
          label: 'Do you have a communicable disease of public health significance such as tuberculosis (TB)?',
          radio: 'b_disease',
          text: 'disease_explain'
        },
        {
          label: 'Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?',
          radio: 'b_disorder',
          text: 'disorder_explain'
        },
        {
          label: 'Are you or have you ever been a drug abuser or addict?',
          radio: 'b_druguser',
          text: 'druguser_explain'
        },
      ],
      part2: [
        {
          label: 'Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?',
          radio: 'b_Arrested',
          text: 'arrested_explain'
        },
        {
          label: 'Have you ever violated, or engaged in a conspiracy to violate, any law related to controlled substances?',
          radio: 'b_ControlledSubstances',
          text: 'controlled_substances_explain'
        },
        {
          label: 'Are you coming to the US to engage in prostitution or unlawful commercialized vice or have been engaged in prostitution or procuring prostitutes within the past 10 years?',
          radio: 'b_Prostitution',
          text: 'prostitution_explain'
        },
        {
          label: 'Have you ever been involved in, or do you seek to engage in, money laundering?',
          radio: 'b_MoneyLaundering',
          text: 'money_laundering_explain'
        },
        {
          label: 'Have you ever committed or conspired to commit a human trafficking offense in the US or outside of the US?',
          radio: 'b_HumanTrafficking',
          text: 'human_trafficking_explain'
        },
        {
          label: 'Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a sever human trafficking offense in the US or outside the US?',
          radio: 'b_AssistedSeveral',
          text: 'assisted_several_explain'
        },
        {
          label: 'Are you the spouse, son or daughter of an individual who has committed or conspired to commit a human trafficking offense in the US or outside or the US and have you within the last five years, knowingly benefited from the trafficking activities?',
          radio: 'b_human_related',
          text: 'human_related_explain'
        },
      ],
      part3: [
        "Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the US?",
        "Do you seek to engage in terrorist activities while in the united states or have you ever engaged in terrorist activities?",
        "Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorists organisations?",
        "Are you a member or representative of a terrorist organisation?",
        "Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?",
        "Have you ever ordered, incited, committed, assisted, or otherwise participated in torture?",
        "Have you ever ordered, incited, committed, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?",
        "Have you ever engaged in the recruitment or the use of child soldiers?",
        "Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly sever violations of religious freedom?",
        "Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?",
        "Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?"
      ],
      part4: [
        "Have you ever been the subject of a removal or deportation hearing?",
        "Have you ever sought to obtain or assist others to obtain a visa, entry in the US, or any other US immigration benefit by fraud or willful misrepresentation or other unlawful means?",
        "Have you failed to attend a hearing on removability or inadmissibility within the last five years?",
        "Have you ever been unlawfully present, overstayed the amount of time granted by an immigration official or otherwise violated the terms of a U.S. visa?"
      ],
      part5: [
        "Have you ever withheld custody of a US citizen child outside the US from a person granted legal custody by a US court?",
        "Have you voted in the US in violation of any law or regulation?",
        "Have you ever renounced US citizenship for the purpose of avoiding taxation?",
        "Have you attended a public elementary school on student (F) status or a public secondary school after November 30,1996 without reimbursing the school?",
        "Are you a former exchange visitor (J) who has not yet fulfilled the two-year foreign residence requirement?"
      ]
    }
    if( data.part5.array.length == 4 )
      data.part5.array.push({ radio: null, text: null })
    explain.part1.map((exp, index) => { getFieldDecorator(`data.part1.${exp.radio}`, { initialValue: utils.getInitialValue(data.part1[exp.radio]) })});
    explain.part2.map((exp, index) => { getFieldDecorator(`data.part2.${exp.radio}`, { initialValue: utils.getInitialValue(data.part2[exp.radio]) })});
    explain.part3.map((exp, index) => { getFieldDecorator(`data.part3.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part3.array[index].radio) })});
    explain.part4.map((exp, index) => { getFieldDecorator(`data.part4.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part4.array[index].radio) })});
    explain.part5.map((exp, index) => { getFieldDecorator(`data.part5.array[${index}].radio`, { initialValue: utils.getInitialValue(data.part5.array[index].radio) })});

  
    return (
      <Form {...formItemLayout}>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Security and Background: Part 1</h2>
          <div className="visa-global-section-description">NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.</div>
        </div>

        <>
          {explain.part1.map((exp, index) => 
            <VisaExplain
              label={exp.label}
              radioField={`data.part1.${exp.radio}`}
              radioInitialValue={data.part1[exp.radio]}
              radioValue={getFieldValue(`data.part1.${exp.radio}`)}
              textField={`data.part1.${exp.text}`}
              textInitialValue={data.part1[exp.text]}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
            />
          )}
        </>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Security and Background: Part 2</h2>
          <div className="visa-global-section-description">NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.</div>
        </div>
        <>
          {explain.part2.map((exp, index) => 
            <VisaExplain
              label={exp.label}
              radioField={`data.part2.${exp.radio}`}
              radioInitialValue={data.part2[exp.radio]}
              radioValue={getFieldValue(`data.part2.${exp.radio}`)}
              textField={`data.part2.${exp.text}`}
              textInitialValue={data.part2[exp.text]}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
            />
          )}
        </>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Security and Background: Part 3</h2>
          <div className="visa-global-section-description">NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.</div>
        </div>

        <>
          {explain.part3.map((exp, index) => 
            <VisaExplain
              label={exp}
              radioField={`data.part3.array[${index}].radio`}
              radioInitialValue={data.part3.array[index].radio}
              radioValue={getFieldValue(`data.part3.array[${index}].radio`)}
              textField={`data.part3.array[${index}].text`}
              textInitialValue={data.part3.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
            />
          )}
        </>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Security and Background: Part 4</h2>
          <div className="visa-global-section-description">NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.</div>
        </div>

        <>
          {explain.part4.map((exp, index) => 
            <VisaExplain
              label={exp}
              radioField={`data.part4.array[${index}].radio`}
              radioInitialValue={data.part4.array[index].radio}
              radioValue={getFieldValue(`data.part4.array[${index}].radio`)}
              textField={`data.part4.array[${index}].text`}
              textInitialValue={data.part4.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
            />
          )}
        </>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">Security and Background: Part 5</h2>
          <div className="visa-global-section-description">NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.</div>
        </div>

        <>
          {explain.part5.map((exp, index) => 
            <VisaExplain
              label={exp}
              radioField={`data.part5.array[${index}].radio`}
              radioInitialValue={data.part5.array[index].radio}
              radioValue={getFieldValue(`data.part5.array[${index}].radio`)}
              textField={`data.part5.array[${index}].text`}
              textInitialValue={data.part5.array[index].text}
              getFieldDecorator={getFieldDecorator}
              validators={this.props.validators}
              key={index}
            />
          )}
        </>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>Prev</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>Next</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>Save and Continue Later</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_14_Security = Form.create()(MyForm)
export default Form_DS160_14_Security;
