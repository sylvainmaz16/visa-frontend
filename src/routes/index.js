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
import DS160_Checkout from '../containers/DS160/Checkout'
import AdminBoard from '../containers/Admin'
import AuthRequired from '../AuthRequired'
import AuthPage from '../containers/Auth'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/auth" exact children={() => <AuthPage />} />
          <Route path="/board"  exact children={({ location }) => 
            <AuthRequired  redirectTo='/board' orRender={<AdminBoard menu='ds160'/>}/>
          }/>
          <Route path="/board/:menukey(ds160|mail)" exact children={({ match, location }) => {
            let params = new URLSearchParams(location.search);
            let menu = match.params.menukey
            let current = parseInt(params.get("current"))

            if(!current)
              current = 1
              
            return <AuthRequired  redirectTo='/board' orRender={<AdminBoard menu={menu} pagination={{ pageSize: 10, current: current }}/>}/>
          }} />
          {/* <Route
            path="/ds-160/auto-online-form/:link"
            children={({ location }) => {
              let params = location.pathname.split('/')
              let link = params[3]
              
              let terms = link.split('=');
              let applicationId = terms[terms.length - 1]

              return <DS160_AutoOnlineFill token={applicationId} />
            }}
          /> */}
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
          <Route path="/ds-160/checkout" exact component={DS160_Checkout} />
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
