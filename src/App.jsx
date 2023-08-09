import PropTypes from 'prop-types'
import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"



// Import all middleware
import BaseMiddleware from "./routes/middleware/BaseMiddleware"

import BlankLayout from "./components/BlankLayout"

import ErrorEmpty from './components/Error/Empty'

import 'moment/locale/id'


const App = (props) => {

  return (
    <React.Fragment>
      <Router>

        <Switch>
          {props.routes.map((route, idx) => {
            const Layout = (route.blank ?? false) ? BlankLayout : props.wrapper
            return (
              <BaseMiddleware
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                exact
              />
            )
          })}

          <BaseMiddleware
              layout={BlankLayout}
              component={ErrorEmpty}
            />
        </Switch>

      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  routes: PropTypes.any,
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  }
}

export default connect(mapStateToProps, null)(App)