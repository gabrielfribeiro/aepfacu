import React from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom'
import { PageContent } from 'src/components/PageContent'

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
      render={() => {
        return (
          <>
            {isPrivate ? (
              <PageContent>
                <Component />
              </PageContent>
            ) : (
              <div>
                <Component />
              </div>
            )}
          </>
        )
      }}
    />
  )
}

export default Route
