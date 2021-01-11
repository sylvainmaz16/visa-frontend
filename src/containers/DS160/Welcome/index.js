import React from 'react'
import resources, { translate } from 'utils/resources'

function welcome({ lang, agency, tr }) {
  return (
    <>
      <div className="visa-global-heading-1">{tr(resources.welcome.how_to_apply.title)}</div>
      <ul className="visa-global-ul-1">
        <li>
          <p><span>{tr(resources.welcome.how_to_apply.first_prev)}<a href={agency ? `https://ds-160.us/ds-160/application-form?agency=${agency}` : 'https://ds-160.us/ds-160/application-form'}>DS160</a>{tr(resources.welcome.how_to_apply.first_back)}
            </span></p>
        </li>
        <li><p><span>{tr(resources.welcome.how_to_apply.second)}</span></p></li>
        <li><p><span>{tr(resources.welcome.how_to_apply.third)}</span></p></li>
        <li><p><span>{tr(resources.welcome.how_to_apply.fourth)}</span></p></li>
      </ul>
      <div className="visa-global-heading-1">{tr(resources.welcome.documents.title)}</div>
      <ul className="visa-global-ul-1">
        <li><p><span>{tr(resources.welcome.documents.first)}</span></p></li>
        <li><p><span>{tr(resources.welcome.documents.second)}</span></p></li>
        <li><p><span>{tr(resources.welcome.documents.third)}</span></p></li>
        <li><p><span>{tr(resources.welcome.documents.fourth)}</span></p></li>
        <li><p><span>{tr(resources.welcome.documents.fifth)}</span></p></li>
        {agency === 'uva' && (
          <li><p><span>{tr(resources.welcome.documents.sixth)}</span></p></li>
        )}
      </ul>
      <div className="visa-global-heading-1">{tr(resources.welcome.information.title)}</div>
      <ul className="visa-global-ul-1">
        <li><p><span>{tr(resources.welcome.information.first)}</span></p></li>
        <li><p><span>{tr(resources.welcome.information.second)}</span></p></li>
        <li><p><span>{tr(resources.welcome.information.third)}</span></p></li>
      </ul>
    </>
  )
}
export default welcome
