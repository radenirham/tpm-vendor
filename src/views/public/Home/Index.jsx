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

const HomeIndex =() => {
    return (
        <React.Fragment>
            <Row className="mt-40">
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <CardTitle>Lebar</CardTitle>
                            <CardSubtitle className="mb-1">Description</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Container className="mb-40">
                <Row className="mt-40">
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <CardTitle>Title</CardTitle>
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