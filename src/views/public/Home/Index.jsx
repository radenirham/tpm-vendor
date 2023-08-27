import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap'
//import logo from "../../../assets/images/logo.png"
import bgHome from '../../../assets/images/attrs/bg/bg_home1.png'
import iconInfo from '../../../assets/images/attrs/icon/info.png'
import iconInfo2 from '../../../assets/images/attrs/icon/info2.png'
const HomeIndex =() => {
    return (
        <React.Fragment>
            {/* bikin slider */}
            <div>
                <img src={bgHome} alt="" className="img-fluid mx-auto d-block" style={{width: "100%"}} />
            </div>
            <Container className="mb-40">
                <Row className="mt-40">
                    <Col md={8}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <span><img src={iconInfo} alt=""style={{width: 36}} />&emsp;Daftar Paket Tender/Seleksi</span>
                                </CardTitle>
                                <CardSubtitle className="mb-1">Description</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardBody>
                                <CardTitle>Berita</CardTitle>
                                <CardSubtitle className="mb-1">Description</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-20">
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                <span><img src={iconInfo2} alt=""style={{width: 36}} />&emsp;Daftar Kebutuhan Barang/Jasa</span>
                                </CardTitle>
                                <CardSubtitle className="mb-1">Description</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>                    
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomeIndex