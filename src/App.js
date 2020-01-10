import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider } from 'antd'
import frFR from 'antd/es/locale/fr_FR'
import configureStore from './store'
import Routes from './routes/index'

const history = createBrowserHistory()
const { persistor, store } = configureStore()

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </CookiesProvider>
    )
  }
}
export default App
