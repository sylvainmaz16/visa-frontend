import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import 'antd/dist/antd.css';
import DS160 from '../containers/DS160'
import DS160_Wizard from '../containers/DS160/Wizard'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/ds-160/application-form" exact component={DS160_Wizard} />
          <Route path="/ds-160" exact component={DS160} />
          <Route path="/" exact component={DS160} />
          
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
