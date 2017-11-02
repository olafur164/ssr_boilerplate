if (process.env.NODE_ENV !== 'production') {
  require('babel-register')({ ignore: /node_modules/ })
}

const fs = require('fs')
const path = require('path')

// React
const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router')
const { Provider } = require('react-redux')
const { store }  = process.env.NODE_ENV === 'production'
  ? require('./public/production/client/redux/store')
  : require('./src/client/redux/store')
  const Routes = process.env.NODE_ENV === 'production'
  ? require('./public/production/client/components/Router/CompiledRoutes')
      .default
  : require('./src/client/components/Router/CompiledRoutes').default
const Layout = process.env.NODE_ENV === 'production'
  ? require('./public/production/client/Layout').default
  : require('./src/client/Layout').default


// Template for injecting server-side rendered React markup
const _template = require('lodash/template')
const baseTemplate = fs.readFileSync('./index.html')
const template = _template(baseTemplate)

// App configuration
const config = require('./config')
const fbAppId = config.fbAppId
const author = config.author

const connectMongoose = require('./src/server/db/connectMongoose')
const MONGO_URI = process.env.NODE_ENV === 'production'
  ? config.mongoUriProduction
  : config.mongoUriDev
  
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || config.expressPort
const app = express()

const student = require('./src/server/routes/student')
connectMongoose(MONGO_URI)

// Middleware
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())


// Routes
app.use('/api/student', student)
app.use('/public', express.static('./public'))

/**
 * Handles server requests, and serves per-rendered context-aware
 * React markup based on the url
 */

app.use((req, res) => {
  const context = {}
  /*
  const body = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        <Layout />
      </StaticRouter>
    </Provider>
  )
  */
  const body = renderToString(
    React.createElement(
      Provider,
      { store },
      React.createElement(
        StaticRouter,
        { location: req.url, context: context },
        React.createElement(Layout, null,
        React.createElement(Routes))
      )
    )
  )
  if (context.url) {
    res.redirect(context.url)
  } else {
    res.status(200).send(template({ fbAppId, author, body}))
  }
  /*
  const body = ReactDOMServer.renderToString(
    <Provider>
      <StaticRouter
        location={req.url}
        context={context}>
        <Layout>
          <Routes />
        </Layout>
      </StaticRouter>
    </Provider>
   )
   */
 })

 console.log('node environment:', process.env.NODE_ENV)
 console.log(`Express: Listening on port ${PORT}`)
 app.listen(PORT)