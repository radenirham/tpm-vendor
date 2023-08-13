import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import classnames from "classnames"

import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Container
} from 'reactstrap'

import { BiMessageSquareAdd } from 'react-icons/bi'

import SampleIndexActiveListComponent from "./Components/IndexActiveListComponent"
import SampleIndexInactiveListComponent from "./Components/IndexInactiveListComponent"

const IndexView = (props) => {

    const [activeTab, setActiveTab] = useState('1')
    
    const t = props.lang
    return (
        <Fragment>
            <Container className="mb-4 mt-4">
                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>
                                <div className="float-end">
                                    <Link to="/setting/users?create">
                                        <Button color="warning"><BiMessageSquareAdd /> {t('buttonAdd')}</Button>
                                    </Link>
                                </div>
                                <CardTitle>{t('index--->title')}</CardTitle>
                                <CardSubtitle className="mb-1">
                                    {t('index--->description')}
                                </CardSubtitle>
                                <hr />
                                <Row>
                                    <Col md="12" className="mb-2 mt-2">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        active: activeTab === '1',
                                                    })}
                                                    onClick={() => {
                                                        setActiveTab('1')
                                                    }}
                                                >
                                                    <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                    <span className="d-none d-sm-block">Aktif</span>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        active: activeTab === '2',
                                                    })}
                                                    onClick={() => {
                                                        setActiveTab('2')
                                                    }}
                                                >
                                                    <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                    <span className="d-none d-sm-block">Tidak Aktif</span>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1">
                                                <SampleIndexActiveListComponent lang={t} />
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <SampleIndexInactiveListComponent lang={t} />
                                            </TabPane>
                                        </TabContent>
                                        
                                    </Col>
                                </Row>
                                <hr />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default IndexView