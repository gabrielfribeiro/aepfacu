import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import { Login } from 'src/modules/Login'

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  </>
)

export default Routes
