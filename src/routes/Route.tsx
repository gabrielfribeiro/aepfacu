import React from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route = ({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteProps): JSX.Element => {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return (
          <div>
            <Component />
          </div>
        )
      }}
    />
  )
}

export default Route
