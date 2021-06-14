import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import { Login } from 'src/modules/Login'
import { Reports } from 'src/modules/Reports'

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/reports" isPrivate exact component={Reports} />
    </Switch>
  </>
)

export default Routes
