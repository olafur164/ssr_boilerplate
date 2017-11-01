import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './components/Router/Routes'
import Layout from './Layout'

const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          {Routes()}
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
