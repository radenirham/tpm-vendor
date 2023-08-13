import React, { useEffect } from "react"
import { Container, Row, Col, Card, Button } from "reactstrap"
import { useTranslation } from 'react-i18next'


import logo from "../assets/images/logo.png"
import bg from "../assets/images/bg-left.png"

import Lottie from 'react-lottie';
import lottieLauncher from '../assets/lotties/launcher.json'

const Preload = (props) => {
    const { t } = useTranslation()

    return (
        <React.Fragment>
            <div id="preloader">
                <Row className="h-100">
                    <Col md={7}
                        style={{
                            backgroundColor: '#0098b0',
                            backgroundImage: 'url('+bg+')',
                            backgroundSize: 'auto 80%',
                            backgroundPosition: 'bottom left',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="h-100 d-none d-md-block"
                    >
                    </Col>
                    <Col md={5}>
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
                                    <div style={{ minHeight: 126 }}>
                                        {/* <p>{props.text}</p> */}
                                        <p>{t(props.text)}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )

}

export default Preload
