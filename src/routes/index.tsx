import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import { Login } from 'src/modules/Login'
import { Institution } from 'src/modules/Institution'
import { Dashboard } from 'src/modules/Dashboard'
import { Student } from 'src/modules/Student'

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/institution" isPrivate exact component={Institution} />
      <Route path="/dashboard" isPrivate exact component={Dashboard} />
      <Route path="/student" isPrivate exact component={Student} />
    </Switch>
  </>
)

export default Routes
