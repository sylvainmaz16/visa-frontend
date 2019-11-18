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
import SignupPage from '../containers/Signup'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/auth" exact children={() => <AuthPage />} />
          <Route path="/signup" exact children={() => <SignupPage />} />
          <Route path="/board"  exact children={({ location }) => 
            <AuthRequired  redirectTo='/board' orRender={<AdminBoard menu='ds160' pattern="" pagination={{ pageSize: 10, current: 1, filters: {}, serach: null}}/>}/>
          }/>
          <Route path="/board/:menukey(ds160|mail|users)" exact children={({ match, location }) => {
            let params = new URLSearchParams(location.search);
            
            let filters = {}
            let current = parseInt(params.get("current"))
            if(!current)
              current = 1
            let search = params.get("search")

            const filterParams = ["checkout", "automation_status", "agency"]

            filterParams.forEach(param => {
              let pvalue = params.get(param)
              if(pvalue) {
                filters[param] = pvalue.split(",")
              }
            })

            let menu = match.params.menukey

            return <AuthRequired  redirectTo='/board' orRender={<AdminBoard menu={menu} pattern={location.search} pagination={{ pageSize: 10, current, filters, search }}/>}/>
          }} />
          <Route
            path="/ds-160/application-form/:link"
            children={({ match, location }) => {
              let params = location.pathname.split('/')
              let link = params[3]

              let agency = new URLSearchParams(location.search).get("agency")
              
              let terms = link.split('=');
              let applicationId = terms[terms.length - 1]

              return <DS160_Wizard token={applicationId} agency={agency}/>
            }}
          />

          <Route path="/ds-160/application-form-later" exact children={({ location }) => {
            let agency = new URLSearchParams(location.search).get("agency")
            return <DS160_SaveAndContinue agency={agency} />
          }} />

          <Route path="/ds-160/application-form" exact children={({ location }) => {
            let agency = new URLSearchParams(location.search).get("agency")
            return <DS160_Wizard agency={agency} />
          }} />

          <Route path="/ds-160" exact children={({ location }) => {
            let agency = new URLSearchParams(location.search).get("agency")
            return <DS160_HOME agency={agency} />
          }}/> */}

          <Route path="/" exact children={({ location }) => {
            let agency = new URLSearchParams(location.search).get("agency")
            return <DS160_HOME agency={agency} />
          }}/>
          
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    )
  }
}
export default Routes
