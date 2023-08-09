import React, { Fragment } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap"

import Lottie from 'react-lottie';
import lottieAccess from '../../../assets/lotties/access.json'

const ErrorAccess = () => {

  return (
    <Fragment>
        <Container fluid>
            <Row>
                <Col className="col-12">
                    <Card>
                        <CardBody>
                          <Row>
                            <Col lg={12}>
                            <div className="text-center">
                              <Row className="justify-content-center mt-5">
                                <Col lg={4} sm={5}>
                                  <div className="maintenance-img">
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
                                </Col>
                              </Row>

                              <h3 className="mt-5">Anda tidak memiliki Akses</h3>
                              <p>Silahkan hubungi pengelola aplikasi</p>
                            </div>
                          </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
        </Container>
    </Fragment>
  )
}

export default ErrorAccess
