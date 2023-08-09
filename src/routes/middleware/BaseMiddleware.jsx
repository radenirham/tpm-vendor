import React from "react"
import PropTypes from "prop-types"

import { Route } from "react-router-dom"

const BaseMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

BaseMiddleware.propTypes = {
  accessRole: PropTypes.any,
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default BaseMiddleware
