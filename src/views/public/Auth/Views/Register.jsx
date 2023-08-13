import React, { Component } from "react"
import { Card, Row, Col, CardBody, CardTitle, CardSubtitle, Form, Alert, Label, Input, Button, InputGroup, InputGroupText } from 'reactstrap'
import { Link } from 'react-router-dom';
import { AvForm, AvInput, AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"

import { AvSelect } from '../../../../helpers/ui/AvCustom'

import Shimmer from "react-shimmer-effect"

import { FiUser, FiEye, FiEyeOff, FiKey } from 'react-icons/fi'

import { AvRecaptcha } from '../../../../helpers/ui/AvCustom';


import apiResponse from '../../../../services/apiResponse'

class RegisterView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sampleOptionData: [],
        }
    }

    handlerOnSubmit = () => {
        console.log()
    }


    render() {
        return (
            <Row className="mt-40">
                <Col md={5}>
                    <Card>
                        <CardBody>
                            <CardTitle>Daftar Penyedia</CardTitle>
                            <AvForm
                                className="needs-validation"
                                onValidSubmit={(e, values) => this.handlerOnSubmit(e, values)}
                            >
                                <div className='mb-4'>
                                    <Label className='form-label' for='loginEmail'>
                                        Area Vendor
                                    </Label>
                                    <AvSelect
                                        name="sample_category"
                                        placeholder="Pilih..."
                                        options={this.state.sampleOptionData}
                                        errorMessage="Data harus dipilih"
                                        validate={{ required: { value: true } }}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <Label className='form-label' for='loginEmail'>
                                        Kategori Penyedia
                                    </Label>
                                    <AvSelect
                                        name="sample_category"
                                        placeholder="Pilih..."
                                        options={this.state.sampleOptionData}
                                        errorMessage="Data harus dipilih"
                                        validate={{ required: { value: true } }}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <Label className='form-label' for='loginEmail'>
                                        Bentuk Perusahaan
                                    </Label>
                                    <AvSelect
                                        name="sample_category"
                                        placeholder="Pilih..."
                                        options={this.state.sampleOptionData}
                                        errorMessage="Data harus dipilih"
                                        validate={{ required: { value: true } }}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <Label className='form-label' for='loginPassword'>
                                        Username
                                    </Label>
                                    <InputGroup>
                                        <AvInput
                                            name="password"
                                            placeholder="......."
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="loginPassword"
                                            validate={{ required: { value: true } }}
                                            autoComplete="off"
                                            value={this.state.password}
                                        />
                                        <InputGroupText style={{cursor:'pointer'}}
                                            onClick={() => {
                                                this.setState({
                                                    showPassword: !this.state.showPassword
                                                })
                                            }}
                                        >
                                            { this.state.showPassword ? <FiEyeOff size={14} /> : <FiEye size={14} /> }
                                        </InputGroupText>
                                    </InputGroup>
                                </div>
                                <div className='mb-4'>
                                    <Label className='form-label' for='loginPassword'>
                                        Password
                                    </Label>
                                    <InputGroup>
                                        <AvInput
                                            name="password"
                                            placeholder="......."
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="loginPassword"
                                            validate={{ required: { value: true } }}
                                            autoComplete="off"
                                            value={this.state.password}
                                        />
                                        <InputGroupText style={{cursor:'pointer'}}
                                            onClick={() => {
                                                this.setState({
                                                    showPassword: !this.state.showPassword
                                                })
                                            }}
                                        >
                                            { this.state.showPassword ? <FiEyeOff size={14} /> : <FiEye size={14} /> }
                                        </InputGroupText>
                                    </InputGroup>
                                </div>
                                <div className='d-flex justify-content-between flex-row'>
                                    <div className="form-check form-switch mb-3" style={{paddingLeft: '1.2em'}}>
                                        <AvCheckboxGroup name="checkboxAgreement">
                                            <AvCheckbox label="Remember &nbsp;&nbsp;" value="1" />
                                        </AvCheckboxGroup>
                                    </div>
                                    <div className="float-end mb-3"><Link to="/auth/forgot.html">Forgot Password?</Link></div>
                                </div>
                                <div className='mb-4'>
                                    <AvRecaptcha />
                                </div>
                                
                                
                                <div style={{height:36}} className="mb-3">
                                    {
                                        this.state.statusLogin === apiResponse.LOADING ?
                                        <Shimmer><div className="shimmer button" style={{width: '100%', height: 36, paddingBottom: 0}}></div></Shimmer>
                                        :
                                        <Button color="primary" type="submit" block>
                                            <i className="uil-arrow-up-right"></i> Register
                                        </Button>
                                    }
                                </div>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>
                        <CardBody>
                            <CardTitle>Proses Penyedia</CardTitle>
                            Blablablabla...
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default RegisterView
