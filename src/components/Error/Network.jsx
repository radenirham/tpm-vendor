import React, { useEffect } from "react"
import { Button, Row, Col } from "reactstrap"


import logo from "../../assets/images/logo-full.png"

import Lottie from 'react-lottie';
import lottieDisconnect from '../../assets/lotties/disconected.json'

import { authContext } from '../../services/adalConfig'

const ErrorNetwork = () => {

  const reloadAplikasi = () => {
    authContext.logOut()
    sessionStorage.clear()
    localStorage.clear()
  }


  return (
    <React.Fragment>
      <div id="preloader">
        <Row className="h-100">
          <Col className="my-auto">
            <div className="mx-auto" style={{ textAlign: 'center' }}>
              <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{ width: 220, paddingBottom: 30 }} />
              <div style={{ margin: 50, height: 220 }}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: lottieDisconnect,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={220}
                  width={220}
                />
              </div>
              <h3 className="mt-5">Tidak terkoneksi dengan Service</h3>
              <p>Silahkan hubungi pengelola aplikasi.</p>
              <p>
                <Button color="danger"
                  onClick={() => {
                    reloadAplikasi()
                  }}
                >
                  Klik disini untuk memuat ulang Aplikasi
                </Button>
              </p>

            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )

  /* return (
    <React.Fragment>
      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Row className="justify-content-center mt-5">
                  <Col lg={4} sm={5}>
                    <div className="maintenance-img">
                      <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{width: 220, paddingBottom: 30}} />
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true, 
                          animationData: lottieDisconnect,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                          }
                        }}
                        height={320}
                        width={320}
                      />
                    </div>
                  </Col>
                </Row>

                <h3 className="mt-5">Tidak terkoneksi dengan Service</h3>
                <p>Silahkan hubungi pengelola aplikasi.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  ) */
}

export default ErrorNetwork
