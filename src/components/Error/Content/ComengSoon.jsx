import React, { Fragment } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap"

import Lottie from 'react-lottie';
import lottieMaintenance from '../../../assets/lotties/maintenance.json'

const ErrorComingSoon = () => {

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
                                          animationData: lottieMaintenance,
                                          rendererSettings: {
                                          preserveAspectRatio: 'xMidYMid slice'
                                          }
                                      }}
                                      height={320}
                                      width={520}
                                      />
                                  </div>
                                </Col>
                              </Row>

                              <h3 className="mt-5">Coming Soon</h3>
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

export default ErrorComingSoon
