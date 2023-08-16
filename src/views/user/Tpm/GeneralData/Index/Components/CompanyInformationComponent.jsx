import React, { Component } from 'react'
import { Row, Col, Label, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation'
import { AvSelect } from '../../../../../../helpers/ui/AvCustom'

export default class CompanyInformationComponent extends Component {
  render() {
    return (
      <>
       <Row className='mt-5'>
        <Col md={12}>
          <AvForm
           className='needs-validation'
           onValidSubmit={(e) => { console.log(e) }}
          >
           <Row>
            <Label
             htmlFor='companyType'
             className='col-md-3 mt-1'
            >
              <strong>Bentuk Perusahaan</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvSelect
               name='companyType'
               placeholder='Perseroan Terbatas (PT)'
               options={[]}
               errorMessage='Data harus dipilih'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='bussinessField'
             className='col-md-3 mt-1'
            >
              <strong>Bidang Usaha</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='9'>
              <AvInput
               name='bussinessField'
               placeholder='Bidang Usaha'
               errorMessage='Masukan bidang usaha'
               className='form-control mb-3'
               id='bussinessField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='npwp'
             className='col-md-3 mt-1'
            >
              <strong>Npwp</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='npwp'
               placeholder='Nomor Npwp'
               errorMessage='Masukan Nomor Npwp'
               className='form-control mb-3'
               id='npwpField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='npwpImage'
             className='col-md-3 mt-1'
            >
              <strong>Npwp Upload</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='npwpImage'
               errorMessage='Npwp tidak boleh kosong'
               className='form-control mb-3'
               id='npwpImageField'
               type='file'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='pkp'
             className='col-md-3 mt-1'
            >
              <strong>Pkp</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='pkp'
               placeholder='Nomor Pkp'
               errorMessage='Masukan Nomor Pkp'
               className='form-control mb-3'
               id='pkpField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='pkpImage'
             className='col-md-3 mt-1'
            >
              <strong>Pkp Upload</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='pkpImage'
               errorMessage='Pkp tidak boleh kosong'
               className='form-control mb-3'
               id='pkpImageField'
               type='file'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='domicileLetter'
             className='col-md-3 mt-1'
            >
              <strong>Surat Domisili</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='domicileLetter'
               errorMessage='Surat domisili tidak boleh kosong'
               className='form-control mb-3'
               id='domicileLetterField'
               type='file'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row className='mt-5'>
            <Col sm={2} md={2} lg={2} xl={2}>
              <Button color='primary'>Selanjutnya</Button>
            </Col>
           </Row>
          </AvForm>
        </Col>
       </Row>
      </>
    )
  }
}
