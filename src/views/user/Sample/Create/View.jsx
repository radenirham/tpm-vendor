import React, { Fragment, Component } from 'react'
import Shimmer from "react-shimmer-effect"
import { Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, Alert, Button, Modal, Label } from 'reactstrap'

import { Link, Redirect } from "react-router-dom"

import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"
import { AvFlatpickr, AvGenerateFormData, AvDropzone, AvSelect } from '../../../../helpers/ui/AvCustom'

import ConfirmAlert from '../../../../helpers/ui/ConfirmAlert'

import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { HiBackspace } from 'react-icons/hi'

import CreateBloc from './Blocs/CreateBloc'
import apiResponse from '../../../../services/apiResponse'

class CreateView extends Component {
    createBloc = new CreateBloc()
    t = this.props.lang;

    constructor(props) {
        super(props)
        this.state = {
            categoryLoading: true,
            categoryData: [],
            dataForm: {},
        }
    }

    submitData = async () => {
        const formData = AvGenerateFormData(this.state.dataForm, { field: 'sample_file', name: 'temp/Test' })
        await this.createBloc.fetchCreate(formData)
    }

    handlerOnSubmit = (e, values) => {
        e.preventDefault()
        this.setState({
            dataForm: {
                ...values
            },
            submitConfirm: true
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

    componentDidMount() {
        this.createBloc.categoryChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        categoryLoading: true
                    })
                    break
                case apiResponse.LOADING:
                    this.setState({
                        categoryLoading: true
                    })
                    break
                case apiResponse.COMPLETED:
                    const response = result.data.response
                    var datas = []
                    response.map((item) => {
                        datas.push({value: item.category_uuid, label: item.category_name})
                    })
                    this.setState({
                        categoryData: datas,
                        categoryLoading: false
                    })
                    break
                case apiResponse.ERROR:
                    
                    break
                default:
                    break
            }
        })
        this.createBloc.fetchCategory()

        this.createBloc.createChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.COMPLETED:
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

    componentWillUnmount() {
        this.createBloc.categoryChannel.unsubscribe()
        this.createBloc.createChannel.unsubscribe()
    }

    render() {
        return (
            <Fragment>
                <Container className="mb-4 mt-4">
                    <Row>
                        <Col className="col-12">
                            <Card className='ps-3 pe-3'>
                                <CardBody>
                                    <CardTitle>Tambah Data Contoh</CardTitle>
                                    <CardSubtitle className="mb-1">
                                        Setiap bidang yang bertanda (<span className="text-danger">*</span>) adalah wajib diisi.
                                    </CardSubtitle>
                                    <hr />
                                    <AvForm
                                        className="needs-validation"
                                        onValidSubmit={(e, values) => this.handlerOnSubmit(e, values)}
                                    >
                                        <Row>
                                            <Label
                                                htmlFor="fieldNama"
                                                className="col-md-2 mt-1"
                                            >
                                                <strong>{this.t('code')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="2">
                                                <AvInput
                                                    name="sample_code"
                                                    placeholder="Kode"
                                                    errorMessage="Masukkan Kode"
                                                    type="text"
                                                    className="form-control mb-3"
                                                    id="fieldNumber"
                                                    validate={{ required: { value: true } }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Label
                                                htmlFor="fieldTitle"
                                                className="col-md-2 mt-1"
                                            >
                                                <strong>{this.t('text')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="6">
                                                <Row>
                                                    <Col md="12">
                                                        <Label className='form-label' for='InputHelp'>
                                                            Input text with help
                                                        </Label>{' '}
                                                        <small className='text-muted'>
                                                            eg. <i>someone@example.com</i>
                                                        </small>
                                                        <AvInput
                                                            name="sample_text"
                                                            help="asa"
                                                            placeholder="Nomor Surat Keputusan"
                                                            errorMessage="Masukkan Nomor Surat Keputusan"
                                                            type="textarea"
                                                            className="form-control mb-3"
                                                            id="fieldNumber"
                                                            validate={{ required: { value: true } }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Label
                                                htmlFor="fieldAbout"
                                                className="col-md-2 mt-1"
                                                for='default-picker'
                                            >
                                                <strong>{this.t('date')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="2">
                                                <AvFlatpickr
                                                    name="sample_date"
                                                    placeholder="Pilih tanggal"
                                                    errorMessage="Tanggal harus dipilih"
                                                    className="form-control mb-3"
                                                    id="fieldNumber"
                                                    validate={{ required: { value: true } }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Label
                                                htmlFor="fieldAbout"
                                                className="col-md-2 mt-1"
                                                for='default-picker'
                                            >
                                                <strong>{this.t('datetime')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="3">
                                                <AvFlatpickr
                                                    enableTime={true}
                                                    name="sample_datetime"
                                                    placeholder="Pilih tanggal dan jam"
                                                    errorMessage="Atur tanggal dan jam"
                                                    className="form-control mb-3"
                                                    id="fieldNumber"
                                                    validate={{ required: { value: true } }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Label
                                                htmlFor="fieldAbout"
                                                className="col-md-2 mt-1"
                                                for='default-picker'
                                            >
                                                <strong>{this.t('Select')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="4">
                                                { this.state.categoryLoading ?
                                                <Shimmer><div className="shimmer button mb-3" style={{width: '100%', height: 38, paddingBottom: 0, marginBottom: 0}}></div></Shimmer>
                                                :
                                                <AvSelect
                                                    name="sample_category"
                                                    placeholder="Pilih data"
                                                    options={this.state.categoryData}
                                                    errorMessage="Data harus dipilih"
                                                    validate={{ required: { value: true } }}
                                                />
                                            }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Label
                                                htmlFor="fieldAbout"
                                                className="col-md-2 mt-1"
                                                for='default-picker'
                                            >
                                                <strong>{this.t('File')}</strong> <span className="text-danger">*</span>
                                            </Label>
                                            <Col md="4">
                                                <AvDropzone
                                                    inline={true}
                                                    name="sample_file"
                                                    errorMessage="File harus dipilih"
                                                    validate={{ required: { value: true } }}
                                                    multiple={true}
                                                    /* accept={{
                                                        'image/*': ['.png', '.jpg', '.jpeg', '.gif']
                                                    }} */
                                                />
                                            </Col>
                                            <Col md="4">
                                                <AvDropzone
                                                    inline={true}
                                                    name="sample_file"
                                                    errorMessage="File harus dipilih"
                                                    validate={{ required: { value: true } }}
                                                    multiple={true}
                                                    /* accept={{
                                                        'image/*': ['.png', '.jpg', '.jpeg', '.gif']
                                                    }} */
                                                />
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row>
                                            <Col md="10" className="offset-md-2">
                                                <div className="form-check form-switch mb-3">
                                                    <AvCheckboxGroup name="checkboxAgreement" required errorMessage="Agreement harus disetujui">
                                                        <AvCheckbox label={this.t('translation:agreement')} value="1" />
                                                    </AvCheckboxGroup>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md="2">
                                                <Link to="sample.html">
                                                    <Button color="primary" type="button">
                                                        <HiBackspace /> Kembali
                                                    </Button>
                                                </Link>
                                            </Col>
                                            <Col md="10">
                                                <Button color="warning" type="submit">
                                                    <IoCheckmarkDoneOutline /> Simpan Data
                                                </Button>
                                            </Col>
                                        </Row>

                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
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
                {this.state.submitRedirect ? <Redirect to='sample.html' /> : null}
            </Fragment>
        )
    }
}

export default CreateView