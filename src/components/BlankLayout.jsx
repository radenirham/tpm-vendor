import React, { Component } from 'react'
import { withRouter } from "react-router";

class BlankLayoutIndex extends Component {
  
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default withRouter(BlankLayoutIndex)
