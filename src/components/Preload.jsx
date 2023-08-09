import React, { useEffect } from "react"
import { Container, Row, Col, Card, Button } from "reactstrap"


import logo from "../assets/images/logo.png"

import Lottie from 'react-lottie';
import lottieLauncher from '../assets/lotties/launcher.json'

const Preload = (props) => {

    return (
        <React.Fragment>
            <div id="preloader">
                <Row className="h-100">
                    <Col className="my-auto">
                        <div className="mx-auto" style={{textAlign: 'center'}}>
                            <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{width: 220, height:92}} />
                            <div style={{margin: 50, height: 220}}>
                                <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true, 
                                    animationData: lottieLauncher,
                                    rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                height={220}
                                width={220}
                                />
                            </div>
                            <p>{props.text}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )

}

export default Preload
