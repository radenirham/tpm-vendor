import React, { Component } from 'react'
import { withRouter } from "react-router";

import NavBar from './NavBar/NavBar';

import Footer from '../Shared/Footer';

class PublicLayoutIndex extends Component {
  
    render() {
        return (
            <React.Fragment>
                <NavBar />
                {this.props.children}
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withRouter(PublicLayoutIndex)
