import React, { Component } from 'react'
import { Row, Col, Label, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation'
import { AvSelect } from '../../../../../../helpers/ui/AvCustom'

export default class ContactInformationComponent extends Component {
  render() {
    return (
      <>
       <Row className='mt-5'>
        <Col md={12}>
          <AvForm
           className='needs-validation'
           onValidSubmit={(e) => { console.log() }}
          >
            <Row>
            <Label
             htmlFor='address'
             className='col-md-3 mt-1'
            >
              <strong>Alamat</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='9'>
              <AvInput
               name='address'
               placeholder='Alamat'
               errorMessage='Masukan Alamat'
               className='form-control mb-3'
               id='addressField'
               type='textarea'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='province'
             className='col-md-3 mt-1'
            >
              <strong>Provinsi</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvSelect
               name='province'
               placeholder='Pilih Provinsi'
               options={[]}
               errorMessage='Provinsi harus dipilih'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='city'
             className='col-md-3 mt-1'
            >
              <strong>City</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvSelect
               name='city'
               placeholder='Pilih Kota/Kab'
               options={[]}
               errorMessage='Kota/Kab harus dipilih'
               validate={{ required: { value: true } }}
              />
            </Col>
            <Label
             htmlFor='zipCode'
             className='col-md-2 mt-1'
            >
              <strong>Kode Pos</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='3'>
              <AvInput
               name='zipCode'
               placeholder='Kode Pos'
               errorMessage='Masukan Kode Pos'
               className='form-control mb-3'
               id='zipCodeField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='phone'
             className='col-md-3 mt-1'
            >
              <strong>Telepon</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='4'>
              <AvInput
               name='phone'
               placeholder='Nomor Telepon'
               errorMessage='Masukan Nomor Telepon'
               className='form-control mb-3'
               id='phoneField'
               validate={{ required: { value: true } }}
              />
            </Col>
            <Label
             htmlFor='fax'
             className='col-md-2 mt-1'
            >
              <strong>Fax</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='3'>
              <AvInput
               name='fax'
               placeholder='Fax'
               errorMessage='Masukan Fax'
               className='form-control mb-3'
               id='faxField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='website'
             className='col-md-3 mt-1'
            >
              <strong>Website</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='9'>
              <AvInput
               name='website'
               placeholder='Website'
               errorMessage='Masukan Webiste'
               className='form-control mb-3'
               id='websiteField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row>
            <Label
             htmlFor='email'
             className='col-md-3 mt-1'
            >
              <strong>Email</strong> <span className='text-danger'>*</span>
            </Label>
            <Col md='9'>
              <AvInput
               name='email'
               placeholder='Email'
               errorMessage='Masukan Email'
               className='form-control mb-3'
               id='emailField'
               validate={{ required: { value: true } }}
              />
            </Col>
           </Row>
           <Row className='mt-5'>
            <Col sm={4} md={4} lg={4} xl={4} className='d-flex flex-row'>
              <Button color='warning' style={{ marginRight: '1rem' }}>Kembali</Button>
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
