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
import iconCompDefault from '../../assets/images/attrs/icon/company.png'
const UserView =() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    return (
        <Container className="mb-40">
                <Row className="mt-40">
                <Col md={4}>
                        <Card>
                            <CardBody>
                                
                                <div className="widget mb-40">
                                    <div className="about-me text-center">
                                        <img src={iconCompDefault} alt=""/>
                                        <h4>{(userData && userData['vendor_name']) || 'Nama Vendor'}</h4>
                                        <p>{(userData && userData['vendor_code']) || 'Kode Vendor'}</p>
                                        <h6>{(userData && userData['vendor_country_name']) || 'Asal Vendor'}</h6>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Selamat Datang...
                                </CardTitle>
                                <CardSubtitle className="mb-1">Info Terbaru</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row>
                
            </Container>
    )
}

export default UserView