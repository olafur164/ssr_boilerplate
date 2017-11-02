import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../../containers/Home'
import Students from '../../containers/Students'
import NotFound from './NotFound'

/**
 * Run `yarn run compile-routes` after altering any Routes in this file.
 *
 * CompiledRoutes.js is the transpiled version of this file
 * which gets used when the app renders on the server.
 */

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/students' component={Students} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
