import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import Routes from './routes/index'
import { createBrowserHistory } from 'history'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const history = createBrowserHistory()
const { persistor, store } = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    )
  }
}
export default App
