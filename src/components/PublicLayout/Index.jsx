import React, { Component } from 'react'
import { withRouter } from "react-router";

class PublicLayoutIndex extends Component {
  
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default withRouter(PublicLayoutIndex)
