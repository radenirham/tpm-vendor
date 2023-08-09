import React, {useEffect} from "react"
import { Container, Row, Col } from "reactstrap"


import logo from "../../assets/images/logo-full.png"

import Lottie from 'react-lottie';
import lottieAccess from '../../assets/lotties/access.json'

const ErrorAccess = () => {

  return (
    <React.Fragment>
          <div id="preloader">
              <Row className="h-100">
                  <Col className="my-auto">
                      <div className="mx-auto" style={{textAlign: 'center'}}>
                          <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{width: 220, paddingBottom: 30}} />
                          <div style={{margin: 50, height: 220}}>
                              <Lottie
                              options={{
                                  loop: true,
                                  autoplay: true, 
                                  animationData: lottieAccess,
                                  rendererSettings: {
                                  preserveAspectRatio: 'xMidYMid slice'
                                  }
                              }}
                              height={180}
                              width={220}
                              />
                          </div>
                          <h3 className="mt-5">Anda tidak memiliki Akses</h3>
                          <p>Silahkan hubungi pengelola aplikasi</p>
                      </div>
                  </Col>
              </Row>
          </div>
      </React.Fragment>
  )
}

export default ErrorAccess
