import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import oauth from '../../utils/oauth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      oauth.getToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default PrivateRoute
