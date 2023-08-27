import React, { Component } from "react"
import { Container, Card, Row, Col, CardBody, CardTitle, Badge, CardSubtitle, Form, Alert, Label, Input, Button, InputGroup, InputGroupText } from 'reactstrap'
import { Link } from 'react-router-dom';
import ConfirmAlert from "../../../../helpers/ui/ConfirmAlert";
import { AvForm, AvInput, AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"
import { cancelToken } from "../../../../services/adapters/base"

import { AvSelect } from '../../../../helpers/ui/AvCustom'

import Shimmer from "react-shimmer-effect"

import { FiUser, FiEye, FiEyeOff, FiKey } from 'react-icons/fi'

import { AvRecaptcha } from '../../../../helpers/ui/AvCustom';
import apiResponse from '../../../../services/apiResponse'
import IndexBloc from '../Blocs/IndexBloc'              

import preregis from "../../../../assets/images/pre-regis.png"
import aktivasiemail from "../../../../assets/images/aktivasiemail.png"
import inputdata from "../../../../assets/images/inputdata.png"
import verifikasi from "../../../../assets/images/verifikasi.png"
import SKT from "../../../../assets/images/SKT.png"


class RegisterView extends Component {
    indexBloc = new IndexBloc()
    source = cancelToken()
    constructor(props) {
        super(props)
        this.state = {
            vendorarea: {},
            AreaList: {},
            province: {},
            city: {},
            companytype: {},
            suppliercategories: {},
            success: null,
            loadingArea: null,
            loadingProvince: null,
            loadingCity: null,
            loading: null,
            loadingCompanyType: null,
            loadingSupplier: null
        }
    }

    handlerOnSubmit = () => {
        console.log()
    }

    

    loadData = async () => {
        const query = {
        }
        await this.indexBloc.fetchVendorAreas(query, this.source.token)
        await this.indexBloc.fetchProvince(query, this.source.token)
        await this.indexBloc.fetchCity(query, this.source.token)
        await this.indexBloc.fetchCompanyType(query, this.source.token)
        await this.indexBloc.fetchSupplierCategories(query, this.source.token)
    }

    setTokenAPI = () => {
        if (typeof this.source !== typeof undefined) {
            this.source.cancel()
        }
        this.source = cancelToken()
        this.loadData()
    }

    deleteData = async () => {
    }

    componentDidMount() {
        this.setTokenAPI()
        

        this.indexBloc.getVendorAreas.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loadingArea: false
                    });
                    break;
                case apiResponse.LOADING:
                    this.setState({
                        loadingArea: true
                    });
                    break;
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {};
                    this.setState({
                        vendorarea: response,
                        loadingArea: false,
                    });
                    break;
                case apiResponse.ERROR:
                    this.setState({
                        loadingArea: true
                    })
                    break;
                default:
                    break;
            }
        })
        

        this.indexBloc.getProvince.subscribe((result) => {
            switch (result.status){
                case apiResponse.INITIAL:
                    this.setState({
                        loadingProvince: false
                    });
                    break;
                case apiResponse.LOADING:
                    this.setState({
                        loadingProvince: true
                    });
                    break;
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {};
                    this.setState({
                        province: response,
                        loadingProvince: false
                    });
                    break;
                case apiResponse.ERROR:
                    break;
                default:
                    break;  
            }
        })

        this.indexBloc.getCity.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loadingCity: false
                    });
                    break;
                case apiResponse.LOADING:
                    this.setState({
                        loadingCity: true
                    });
                    break;
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {};
                    this.setState({
                        city: response,
                        loadingCity: false
                    });
                    break;
                case apiResponse.ERROR:
                    break;
                default:
                    break;
            }
        })

        this.indexBloc.getCompanyType.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loadingCompanyType: false
                    });
                    break;
                case apiResponse.LOADING:
                    this.setState({
                        loadingCompanyType: true
                    });
                    break;
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {};
                    this.setState({
                        companytype: response,
                        loadingCompanyType: false
                    });
                    break;
                case apiResponse.ERROR:
                    break;
                default:
                    break;
            }
        })

        this.indexBloc.getSupplierCategories.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loadingSupplier: false
                    });
                    break;
                case apiResponse.LOADING:
                    this.setState({
                        loadingSupplier: true
                    });
                    break;
                case apiResponse.COMPLETED:
                    const response = result.data.response ?? {};
                    this.setState({
                        suppliercategories: response,
                        loadingSupplier: false
                    });
                    break;
                case apiResponse.ERROR:
                    break;
                default:
                    break;
            }
        })

        this.indexBloc.postPreregisterVendor.subscribe((result) => {
            switch (result.status) {
                case apiResponse.COMPLETED:
                    console.log(result)
                    this.setState({
                        submitLoading: false,
                        submitSuccess: true,
                    });
                    break
                case apiResponse.ERROR:
                    this.setState({
                        submitLoading: false,
                        submitFailed: true,
                    });
                    break
                default:
                    break
            }
        })

    }   

    confirmResponse = (response) => {
        let forState = {}
        switch (response) {
            case 'cancel':
                forState = {
                    submitConfirm: false
                }
                break;
            case 'confirm':
                forState = {
                    submitLoading: true,
                    submitConfirm: false
                }
                this.submitData()
                break;
            case 'success':
                forState = {
                    submitSuccess: false,
                    submitRedirect: true
                }
                break;
            case 'failed':
                forState = {
                    submitFailed: false
                }
                break;
            default:
        }
        this.setState(forState)
    }

    // componentWillUnmount() {
    //     this.IndexBloc.getVendorAreas.unsubscribe()
    // }

    render() {
        return (
            <React.Fragment>
                <Container className="mb-40">
                <Row className="mt-40">
                    <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>Daftar Penyedia</CardTitle>
                                <AvForm
                                    className="needs-validation"
                                    onValidSubmit={(e, values) => this.handlerOnSubmit(e, values)}
                                >
                                    <div className='mb-4'>
                                        <Label className='form-label' htmlFor='loginEmail'>
                                            Area Vendor
                                        </Label>
                                            {this.state.loadingArea ? (
                                                <Shimmer>
                                                    <div
                                                        className="shimmer button"
                                                        style={{
                                                            width: "14%",
                                                            height: 14,
                                                            paddingBottom: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    ></div>
                                                </Shimmer>
                                            ) : (
                                                <AvSelect
                                                name="area"
                                                placeholder="Pilih..."
                                                options={this.state.vendorarea}
                                                errorMessage="Data harus dipilih"
                                                validate={{ required: { value: true } }}
                                                />  ??
                                                "-"
                                            )}
                                    </div>
                                    <div className='mb-4'>
                                        <Label className='form-label' htmlFor='loginEmail'>
                                            Kategori Penyedia
                                        </Label>
                                        {this.state.loadingSupplier ? (
                                                <Shimmer>
                                                    <div
                                                        className="shimmer button"
                                                        style={{
                                                            width: "14%",
                                                            height: 14,
                                                            paddingBottom: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    ></div>
                                                </Shimmer>
                                            ) : (
                                                <AvSelect
                                                name="suppliercategories"
                                                placeholder="Pilih..."
                                                options={this.state.suppliercategories}
                                                errorMessage="Data harus dipilih"
                                                validate={{ required: { value: true } }}
                                            />  ??
                                                "-"
                                            )}
                                    </div>
                                    <div className='mb-4'>
                                        <Label className='form-label' htmlFor='loginEmail'>
                                            Bentuk Perusahaan
                                        </Label>
                                        {this.state.loadingCompanyType ? (
                                                <Shimmer>
                                                    <div
                                                        className="shimmer button"
                                                        style={{
                                                            width: "14%",
                                                            height: 14,
                                                            paddingBottom: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    ></div>
                                                </Shimmer>
                                            ) : (
                                                <AvSelect
                                                name="companytype"
                                                placeholder="Pilih..."
                                                options={this.state.companytype}
                                                errorMessage="Data harus dipilih"
                                                validate={{ required: { value: true } }}
                                            />  ??
                                                "-"
                                            )}
                                    </div>
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='provinsi'>
                                            Provinsi
                                        </label>
                                        {this.state.loadingProvince ? (
                                                <Shimmer>
                                                    <div
                                                        className="shimmer button"
                                                        style={{
                                                            width: "14%",
                                                            height: 14,
                                                            paddingBottom: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    ></div>
                                                </Shimmer>
                                            ) : (
                                                <AvSelect
                                                name="provinsi"
                                                placeholder="Pilih..."
                                                options={this.state.province}
                                                errorMessage="Data harus dipilih"
                                                validate={{ required: { value: true } }}
                                            />  ??
                                                "-"
                                            )}
            
                                    </div>
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='kotakabupaten'>
                                            Kota/Kabupaten
                                        </label>
                                        {this.state.loadingCity ? (
                                                <Shimmer>
                                                    <div
                                                        className="shimmer button"
                                                        style={{
                                                            width: "14%",
                                                            height: 14,
                                                            paddingBottom: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    ></div>
                                                </Shimmer>
                                            ) : (
                                                <AvSelect
                                                name="kotakabupaten"
                                                placeholder="Pilih..."
                                                options={this.state.city}
                                                errorMessage="Data harus dipilih"
                                                validate={{ required: { value: true } }}
                                            />  ??
                                                "-"
                                            )}
                                    </div>
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='npwptax'>
                                            NPWP/Tax ID
                                        </label>
                                        <AvInput
                                            name="npwptax"
                                            placeholder="......."
                                            type="text"
                                            className="form-control"
                                            id="npwptax"
                                            validate={{ required: { value: true } }}
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='perusahaan'>
                                            Nama Perusahaan
                                        </label>
                                        <AvInput
                                            name="perusahaan"
                                            placeholder="......."
                                            type="text"
                                            className="form-control"
                                            id="perusahaan"
                                            validate={{ required: { value: true } }}
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='email'>
                                            Email
                                        </label>
                                        <AvInput
                                            name="email"
                                            placeholder="......."
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            validate={{ required: { value: true } }}
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <Label className='form-label' htmlFor='username'>
                                            Username
                                        </Label>
                                        <InputGroup>
                                            <AvInput
                                                name="username"
                                                placeholder="......."
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                validate={{ required: { value: true } }}
                                                autoComplete="off"
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className='mb-4'>
                                        <Label className='form-label' htmlFor='loginPassword'>
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
                                    <div className='mb-4'>
                                        <label className='form-label' htmlFor='confirmpassword'>
                                            Konfirmasi Password
                                        </label>
                                        <AvInput
                                            name="confirmpassword"
                                            placeholder="......."
                                            type="password"
                                            className="form-control"
                                            id="confirmpassword"
                                            validate={{ required: { value: true } }}
                                        />
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
                    <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>Proses Penyedia</CardTitle>
                                <div style={{height:150}} className="mb-4">
                                    <Badge color="info">Pertama</Badge><h4>Daftar Pre-Registrasi</h4>
                                    <div className='d-flex justify-content'>
                                        <Badge color="info"><img src={preregis} alt="" className="rounded float-start" 
                                        style={{width: 50, height:50}}/></Badge>
                                        <p>Lakukan pre-registrasi dengan mengisi data disamping Dengan User ID dan kata sandi sementara</p>
                                    </div>
                                </div>
                                <div style={{height:150}} className="mb-4">
                                    
                                    <Badge color="info">Kedua</Badge><h4>Konfirmasi Email</h4>
                                    <div className='d-flex justify-content'>
                                        <Badge color="info"><img src={aktivasiemail} alt="" className="rounded float-start"
                                        style={{width: 50, height:50}}/></Badge>
                                        <p>Periksa Email yang didaftarkan, klik link aktivasi dalam 1 x 24jam.</p>
                                    </div>
                                </div>
                                <div style={{height:150}} className="mb-4">
                                    <Badge color="info">Ketiga</Badge><h4>Input Data Penyedia</h4>
                                    <div className='d-flex justify-content'>
                                        <Badge color="info"><img src={inputdata} alt="" className="rounded float-start"
                                        style={{width: 50, height:50}}/></Badge>
                                        <p>Login kembali menggunakan User ID dan kata sandi sementara. Lengkapi data Pelaku Usaha</p>
                                    </div>
                                </div>
                                <div style={{height:150}} className="mb-4">
                                    <Badge color="info">Keempat</Badge><h4>Proses Verifikasi</h4>
                                    <div className='d-flex justify-content'>
                                        <Badge color="info"><img src={verifikasi} alt="" className="rounded float-start"
                                        style={{width: 50, height:50}}/></Badge>
                                        <p>Lakukan Verifikasi dengan menunjukan dokumen asli kepada verifikator</p>
                                    </div>
                                </div>
                                <div style={{height:150}} className="mb-4">
                                    <Badge color="info">Kelima</Badge><h4>SKT (Surat Keterangan Terdaftar)</h4>
                                    <div className='d-flex justify-content'>
                                        <Badge color="info"><img src={SKT} alt="" className="rounded float-start"
                                        style={{width: 50, height:50}}/></Badge>
                                        <p>Jika Lolos verifikasi, anda akan mendapatkan SKT melalui email.Jika gagal, mohon perbaharui data</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <ConfirmAlert
                        confirmTitle="Konfirmasi!"
                        confirmInfo="Apakah anda yakin akan menyimpan data ini?"

                        loadingTitle="Mengirim data..."
                        loadingInfo="Tunggu beberapa saat"

                        successTitle="Berhasil!"
                        successInfo="Data berhasil disimpan"

                        failedTitle="Gagal!"
                        failedInfo="Data gagal disimpan"

                        showConfirm={this.state.submitConfirm}
                        showLoading={this.state.submitLoading}
                        showSuccess={this.state.submitSuccess}
                        showFailed={this.state.submitFailed}

                        response={this.confirmResponse}
                    />

                </Container>
            </React.Fragment>
        )
    }
}

export default RegisterView
