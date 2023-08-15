import React, { Component } from "react"
import { Card, Row, Col, CardBody, CardTitle, CardText, Form, Alert, Label, Input, Button, InputGroup, InputGroupText } from 'reactstrap'
import { Link } from 'react-router-dom';
import { AvForm, AvInput, AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"

import Shimmer from "react-shimmer-effect"

import logo from "../../../../assets/images/logo.png"
import bg from "../../../../assets/images/bg-left.png"


import { FiUser, FiEye, FiEyeOff, FiKey } from 'react-icons/fi'

import { AvRecaptcha } from '../../../../helpers/ui/AvCustom';


import AuthBloc from '../Blocs/AuthBloc'
import apiResponse from '../../../../services/apiResponse'

class LoginView extends Component {
    authBloc = new AuthBloc()

    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            username: 'DRM-JP.23.000014',
            password: 'password.1',
            responseMessage: '',
            statusLogin: apiResponse.INITIAL
        }
    }

    handlerOnSubmit = (e, values) => {
        e.preventDefault()
        this.setState({
            username: values.username,
            password: values.password,
            statusLogin: apiResponse.LOADING
        }, () => {
            localStorage.setItem('remember', values.remember[0] == 1 ? '1' : '0')
            this.doLogin()
        });
    }

    doLogin = () => {
        this.authBloc.fetchAuth(this.state.username, this.state.password)
    }

    componentDidMount() {
        this.authBloc.authLoginChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.COMPLETED:
                    const response = result.data.response
                    localStorage.setItem('userData', JSON.stringify(response.userdata))
                    localStorage.setItem('tokenId', response.token);
                    this.setState({
                        statusLogin: apiResponse.COMPLETED
                    }, () => {
                        window.location.href=localStorage.getItem('refLogin')
                    });
                    break
                case apiResponse.ERROR:
                    this.setState({
                        responseMessage: result.data.message,
                        statusLogin: apiResponse.ERROR
                    })
                    break
                default:
                    break
            }
        })
    }

    componentWillUnmount() {
        this.authBloc.authLoginChannel.unsubscribe()
    }

    render() {
        return (
            <React.Fragment>
                <div id="preloader">
                    <Row className="h-100">
                        <Col md={7}
                            style={{
                                backgroundColor: '#0098b0',
                                backgroundImage: 'url('+bg+')',
                                backgroundSize: 'auto 80%',
                                backgroundPosition: 'bottom left',
                                backgroundRepeat: 'no-repeat'
                            }}
                            className="h-100 d-none d-md-block"
                        >
                        </Col>
                        <Col md={5}>
                            <Row className="h-100">
                                <Col className="my-auto">
                                    <div className="mx-auto">
                                        <div className="pb-5">
                                            <img src={logo} alt="" className="img-fluid mx-auto d-block" style={{width: 220, height:92}} />
                                        </div>
                                        
                                        <div style={{maxWidth: 400, margin: '0 auto'}} >
                                            <h4>Welcome to Biofarma eProcurement</h4>
                                            <p className="pb-3">
                                                Please sign-in to your account and start the adventure
                                            </p>
                                            {
                                                this.state.statusLogin === apiResponse.ERROR ?
                                                    <Alert color="danger" className='p-1'><small>{this.state.responseMessage}</small></Alert>
                                                :
                                                <></>
                                            }
                                            <AvForm
                                                className="needs-validation"
                                                onValidSubmit={(e, values) => this.handlerOnSubmit(e, values)}
                                            >
                                                <div className='mb-4'>
                                                    <Label className='form-label' for='loginEmail'>
                                                        Username
                                                    </Label>
                                                    <InputGroup>
                                                        <AvInput
                                                            name="username"
                                                            placeholder="000000"
                                                            type="text"
                                                            className="form-control"
                                                            id="loginEmail"
                                                            validate={{ required: { value: true } }}
                                                            autoComplete="off"
                                                            value={this.state.username}
                                                            autoFocus
                                                        />
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
                                                        <AvCheckboxGroup name="remember">
                                                            <AvCheckbox label="Remember" value="1" />
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
                                                            <i className="uil-arrow-up-right"></i> Login
                                                        </Button>
                                                    }
                                                </div>
                                                <div className="text-center">New on our platform? <strong><Link to="/auth/register.html">Create an Account</Link></strong></div>
                                            </AvForm>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginView
