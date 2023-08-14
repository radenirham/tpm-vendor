import React, { Fragment, Component } from 'react'
import Shimmer from "react-shimmer-effect"
import { Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, Alert, Button, Modal, Label } from 'reactstrap'

import { Link, Navigate } from "react-router-dom"

import { HiBackspace } from 'react-icons/hi'

import moment from 'moment'

import DetailBloc from './Blocs/DetailBloc'
import apiResponse from '../../../../services/apiResponse'

import StoragePreview from '../../../../helpers/ui/StoragePreview'

class DetailView extends Component {
    detailBloc = new DetailBloc()
    t = this.props.lang;

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            detail: {},
        }
    }

    componentDidMount() {
        this.detailBloc.detailChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loading: true
                    })
                    break
                case apiResponse.LOADING:
                    this.setState({
                        loading: true
                    })
                    break
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {}
                    var datas = []
                    this.setState({
                        detail: response,
                        loading: false
                    })
                    break
                case apiResponse.ERROR:
                    break
                default:
                    break
            }
        })
        this.detailBloc.fetchDetail({ uuid: this.props.uuid })
    }

    componentWillUnmount() {
        this.detailBloc.detailChannel.unsubscribe()
    }

    render() {
        return (
            <Fragment>
                <Container className="mb-4 mt-4">
                    <Row>
                        <Col className="col-12">
                            <Card className='ps-3 pe-3'>
                                <CardBody>
                                    <CardTitle>Detil Contoh</CardTitle>
                                    <CardSubtitle className="mb-1">
                                        {this.t('index--->description')}
                                    </CardSubtitle>
                                    <hr />
                                    {
                                        !this.state.loading && Object.keys(this.state.detail).length === 0 ?
                                            <Row className="mb-5 mt-5">
                                                <Col md="12">
                                                    <center>Sepertinya data yang anda cari tidak sesuai</center>
                                                </Col>
                                            </Row>
                                            :
                                            <>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldNama"
                                                        className="col-md-2"
                                                    >
                                                        <strong>{this.t('code')}</strong>
                                                    </Label>
                                                    <Col md="10">
                                                        {
                                                            this.state.loading ? <Shimmer><div className="shimmer button" style={{ width: '14%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                : this.state.detail.sample_code ?? '-'
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldTitle"
                                                        className="col-md-2"
                                                    >
                                                        <strong>{this.t('text')}</strong>
                                                    </Label>
                                                    <Col md="10">
                                                        {
                                                            this.state.loading ? <>
                                                                <Shimmer><div className="shimmer button" style={{ width: '100%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                <Shimmer><div className="shimmer button" style={{ width: '20%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                            </>
                                                                : this.state.detail.sample_text ?? '-'
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldAbout"
                                                        className="col-md-2"
                                                        for='default-picker'
                                                    >
                                                        <strong>{this.t('date')}</strong>
                                                    </Label>
                                                    <Col md="10">
                                                        {
                                                            this.state.loading ? <Shimmer><div className="shimmer button" style={{ width: '10%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                : (this.state.detail.sample_date ?? '') !== '' ? moment(this.state.detail.sample_date).locale(localStorage.getItem('i18nextLng')).format('D MMMM YYYY') : '-'
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldAbout"
                                                        className="col-md-2"
                                                        for='default-picker'
                                                    >
                                                        <strong>{this.t('datetime')}</strong>
                                                    </Label>
                                                    <Col md="10">
                                                        {
                                                            this.state.loading ? <Shimmer><div className="shimmer button" style={{ width: '20%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                : (this.state.detail.sample_datetime ?? '') !== '' ? moment(this.state.detail.sample_datetime).locale(localStorage.getItem('i18nextLng')).fromNow() : '-'
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldAbout"
                                                        className="col-md-2"
                                                        for='default-picker'
                                                    >
                                                        <strong>{this.t('Select')}</strong>
                                                    </Label>
                                                    <Col md="10">
                                                        {
                                                            this.state.loading ? <Shimmer><div className="shimmer button" style={{ width: '40%', height: 14, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                : this.state.detail.sample_category_name ?? '-'
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1 mt-1">
                                                    <Label
                                                        htmlFor="fieldAbout"
                                                        className="col-md-2"
                                                        for='default-picker'
                                                    >
                                                        <strong>{this.t('File')}</strong>
                                                    </Label>
                                                    <Col md="5">
                                                        {
                                                            this.state.loading ? <Shimmer><div className="shimmer button" style={{ width: '100%', height: 38, paddingBottom: 0, marginBottom: 0 }}></div></Shimmer>
                                                                : (this.state.detail.sample_file_name ?? '') !== '' ? <StoragePreview inline={true} name={this.state.detail.sample_file_name} size={this.state.detail.sample_file_size} path={this.state.detail.sample_file_path} mime={this.state.detail.sample_file_mime} /> : '-'
                                                        }
                                                    </Col>
                                                </Row>
                                            </>
                                    }
                                    <hr />
                                    <Row className="mb-2">
                                        <Col md="12">
                                            <Link to="sample.html">
                                                <Button color="primary" type="button">
                                                    <HiBackspace /> Kembali
                                                </Button>
                                            </Link>
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
}

export default DetailView