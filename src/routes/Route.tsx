import React from 'react'

import { Route, RouteComponentProps } from 'react-router-dom'

const RouteWrapper = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => (
        <div>
          <Component {...props} />
        </div>
      )}
    />
  )
}

export default RouteWrapper
