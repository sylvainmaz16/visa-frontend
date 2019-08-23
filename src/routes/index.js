import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import 'antd/dist/antd.css';
import DS160_HOME from '../containers/DS160'
import DS160_Wizard from '../containers/DS160/Wizard'
import DS160_SaveAndContinue from '../containers/DS160/SaveAndContinue'
import DS160_AutoOnlineFill from '../containers/DS160/AutoOnlineFill'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/ds-160/auto-online-form/:link"
            children={({ location }) => {
              let params = location.pathname.split('/')
              let link = params[3]
              
              let terms = link.split('=');
              let applicationId = terms[terms.length - 1]

              return <DS160_AutoOnlineFill token={applicationId} />
            }}
          />
          <Route
            path="/ds-160/application-form/:link"
            children={({ location }) => {
              let params = location.pathname.split('/')
              let link = params[3]
              
              let terms = link.split('=');
              let applicationId = terms[terms.length - 1]

              return <DS160_Wizard token={applicationId} />
            }}
          />
          <Route path="/ds-160/application-form-later" exact component={DS160_SaveAndContinue} />
          <Route path="/ds-160/application-form" exact component={DS160_Wizard} />
          <Route path="/ds-160" exact component={DS160_HOME} />
          <Route path="/" exact component={DS160_HOME} />
          
          {/* <Route
            path="/person/:name"
            children={({ location }) => {
              let params = location.pathname.split('/')
              let name = params[2]

              return <Person name={name} />
            }}
          /> */}
          {/* <Route render={() => <Redirect to="/" />} /> */}
        </Switch>
      </Router>
    )
  }
}
export default Routes
