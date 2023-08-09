import React from "react"
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap"

import logo from "../../../assets/images/logo-full.png"

import Lottie from 'react-lottie';
import lottieIdle from '../../../assets/lotties/idle.json'

const ErrorIdle = (props) => {

  return (
    <React.Fragment>
        <Row className="h-100">
            <Col className="my-auto">
                <div className="mx-auto" style={{textAlign: 'center'}}>
                    <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{width: 220, paddingBottom: 30}} />
                    <div style={{margin: 50, height: 220}}>
                        <Lottie
                        options={{
                            loop: true,
                            autoplay: true, 
                            animationData: lottieIdle,
                            rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={220}
                        width={220}
                        />
                    </div>
                    <h3 className="mt-5">Tidak ada aktifitas</h3>
                    <a href="#" onClick={props.handleOnActive}>Klik disini untuk membuka aplikasi kembali</a>
                </div>
            </Col>
        </Row>
    </React.Fragment>
  )
}
export default ErrorIdle
