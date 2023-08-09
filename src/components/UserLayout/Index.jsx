import React, { Component } from 'react'
import { withRouter } from "react-router";

class UserLayoutIndex extends Component {
  
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default withRouter(UserLayoutIndex)
