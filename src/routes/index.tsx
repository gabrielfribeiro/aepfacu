import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { Switch } from 'react-router'
import Route from './Route'
import { Login } from '../modules/Login'

interface RouterProps {
  history: History
}

const Routes = (props: RouterProps) => {
  const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes
