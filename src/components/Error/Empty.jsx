import React, { useEffect, useState, Component } from "react"
import { Container, Row, Col, Button } from "reactstrap"


import logo from "../../assets/images/logo.png"
import bg from "../../assets/images/bg-left.png"

import Lottie from 'react-lottie';
import lottie404 from '../../assets/lotties/404.json'

class ErrorEmpty extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timer: 10
        }
        this.coolDown()
    }

    coolDown = () => {
        var newTimer = this.state.timer-1;
        setTimeout(() => {
            if(newTimer < 0) {
                window.location.href="/"
            } else {
                this.setState({
                    timer: newTimer
                })
                this.coolDown()
            }
        }, 1000)
    }

    render() {
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
                                                    animationData: lottie404,
                                                    rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice'
                                                    }
                                                }}
                                                height={180}
                                                width={220}
                                            />
                                        </div>
                                        <div style={{ minHeight: 126 }}>
                                            <h5>Ooops...!!!</h5>
                                            <p>Halaman yang anda akses tidak ditemukan</p>
                                            <Button color="primary" onClick={() => { window.location.href="/" }}>Back to Home ({this.state.timer})</Button>
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
}

export default ErrorEmpty
