import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.less'
import DS160_HOME from '../containers/DS160'
import DS160Wizard from '../containers/DS160/Wizard'
import DS160SaveAndContinue from '../containers/DS160/SaveAndContinue'
import AdminBoard from '../containers/Admin'
import { AuthRequired } from '../AuthRequired'
import AuthPage from '../containers/Auth'
import SignupPage from '../containers/Signup'
import { getTheme } from '../utils/themes'

const languageMap = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
  de: 'de-DE',
  it: 'it-IT',
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/board" exact>
          <AuthRequired
            redirectTo="/board"
            orRender={
              <AdminBoard
                menu="ds160"
                pattern=""
                pagination={{
                  pageSize: 10,
                  current: 1,
                  filters: {},
                  serach: null,
                }}
              />
            }
          />
        </Route>
        <Route
          path="/board/:menukey(dashboard|ds160|mail|users|new-kdmid|canada)"
          exact
          children={({ match, location }) => {
            const params = new URLSearchParams(location.search)
            const filters = {}
            let current = parseInt(params.get('current'), 10)

            if (!current) current = 1

            const search = params.get('search')
            const filterParams = ['checkout', 'automation_status', 'agency']

            filterParams.forEach(param => {
              const pvalue = params.get(param)
              if (pvalue) {
                filters[param] = pvalue.split(',')
              }
            })
            const menu = match.params.menukey

            return (
              <AuthRequired
                redirectTo="/board"
                orRender={
                  <AdminBoard
                    menu={menu}
                    pattern={location.search}
                    pagination={{
                      pageSize: 10,
                      current,
                      filters,
                      search,
                    }}
                  />
                }
              />
            )
          }}
        />
        <Route
          path="/ds-160/application-form/:link"
          children={({ location }) => {
            const params = location.pathname.split('/')
            const link = params[3]
            const agency = new URLSearchParams(location.search).get('agency')
            const terms = link.split('=')
            const applicationId = terms[terms.length - 1]

            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160Wizard token={applicationId} agency={agency} />
          }}
        />

        <Route
          path="/ds-160/application-form-later"
          exact
          children={({ location }) => {
            const agency = new URLSearchParams(location.search).get('agency')
            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160SaveAndContinue agency={agency} />
          }}
        />

        <Route
          path="/ds-160/application-form"
          exact
          children={({ location }) => {
            const agency = new URLSearchParams(location.search).get('agency')
            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160Wizard agency={agency} />
          }}
        />

        <Route
          path="/ds-160"
          exact
          children={({ location }) => {
            const agency = new URLSearchParams(location.search).get('agency')
            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160_HOME agency={agency} />
          }}
        />

        <Route
          path="/:language(en|fr|es|de|it)"
          exact
          children={({ location, match }) => {
            const agency = new URLSearchParams(location.search).get('agency')
            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160_HOME agency={agency} initLang={languageMap[match.params.language || 'en']} />
          }}
        />

        <Route
          path="/"
          exact
          children={({ location }) => {
            const agency = new URLSearchParams(location.search).get('agency')

            window.less.modifyVars(getTheme(agency)).then(() => {
              console.log('Theme updated successfully')
            })

            return <DS160_HOME agency={agency} initLang={languageMap.en} />
          }}
        />

        <Route render={() => <Redirect to="/en" />} />
      </Switch>
    </Router>
  )
}

export default Routes
