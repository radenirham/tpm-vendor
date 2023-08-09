import React, {useEffect} from "react"
import { Container, Row, Col } from "reactstrap"


import logo from "../../assets/images/logo.png"

import Lottie from 'react-lottie';
import lottie404 from '../../assets/lotties/404.json'

const ErrorEmpty = () => {

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
                                  animationData: lottie404,
                                  rendererSettings: {
                                  preserveAspectRatio: 'xMidYMid slice'
                                  }
                              }}
                              height={180}
                              width={220}
                              />
                          </div>
                          <h3 className="mt-5">Ooops...!!!</h3>
                          <p>Halaman yang anda akses tidak ditemukan</p>
                      </div>
                  </Col>
              </Row>
          </div>
      </React.Fragment>
  )
}

export default ErrorEmpty
