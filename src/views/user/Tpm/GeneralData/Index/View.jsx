import React, { useState } from 'react'
import { Container, Badge, Row, Col, Card, Nav, NavItem, TabContent, TabPane, NavLink } from 'reactstrap'
import preRegisterIcon from '../../../../../assets/images/attrs/icon/pre-register.png'
import emailIcon from '../../../../../assets/images/attrs/icon/email.png'
import inputDataIcon from '../../../../../assets/images/attrs/icon/input-data.png'
import verificationIcon from '../../../../../assets/images/attrs/icon/verification.png'
import certificationIcon from '../../../../../assets/images/attrs/icon/certification.png'
import TpmSidebar from '../../TpmSidebar'
import CompanyInformationComponent from './Components/CompanyInformationComponent'
import ContactInformationComponent from './Components/ContactInformationComponent'
import FinancialInformationComponent from './Components/FinancialInformationComponent'
import DesignComponent from './Components/DesignComponent'

const TopWrapper = {
  padding: '1rem',
  border: '1px solid #0098b0',
  borderRadius: '6px',
  width: '100%',
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem'
}

const TLWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
}

const arrHead = [
  {
    image: preRegisterIcon,
    title: 'Daftar Pre-Register',
    subtitle: 'pertama',
    content: 'Lakukan pre-registrasi dengan mengisi data disamping. Dengan User ID  dan kata sandi sementara.'
  },
  {
    image: emailIcon,
    title: 'Konfirmasi Email',
    subtitle: 'kedua',
    content: 'Periksa Email yang didaftarkan, klik link aktivasi dalam 1 x 24 jam.'
  },
  {
    image: inputDataIcon,
    title: 'Input Data Penyedia',
    subtitle: 'ketiga',
    content: 'Login kembali menggunakan User ID dan kata sandi sementara. Lengkapi data Pelaku Usaha.'
  },
  {
    image: verificationIcon,
    title: 'Proses Verifikasi',
    subtitle: 'Keempat',
    content: 'Lakukan Verifikasi dengan menunjukan dokumen aslikepada verifikator'
  },
  {
    image: certificationIcon,
    title: 'SKT (Surat Keterangan Terdaftar)',
    subtitle: 'kelima',
    content: 'Lakukan Verifikasi dengan menunjukan dokumen asli kepada verifikator'
  }
]

const GeneralDataView = (props) => {
  const [tab, setTab] = useState(0)
    return (
      <>
       <Container className='mb-4 mt-4'>
        <div style={TopWrapper}>
          {
            arrHead.map((item) => (
              <div key={item.image} style={TLWrapper}>
                <img src={item.image} alt={item.title} style={{ width: '42px', height: '42px' }}/>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <Badge color='light' style={{ backgroundColor: '#fbf2ea !important', color: '#FF6E00', fontSize: '8px' }}>{item.subtitle}</Badge>
                  <span>{item?.title}</span>
                </div>
                <div>
                  <span style={{ fontSize: '10px' }}>{item?.content}</span>
                </div>
              </div>
            ))
          }
        </div>
        <Row>
          <Col sm={3} md={3} lg={3} xl={3}>
            <TpmSidebar />
          </Col>
          <Col sm={9} md={9} lg={9} xl={9}>
            <Card className='p-3'>
              <div style={{ backgroundColor: '#e5f5f7', color: '#0098b0', padding: '1rem', width: '155px', marginBottom: '2rem' }}>Edit Data Umum</div>
              <div className='mb-3'>Setiap yang bertanda (&nbsp;<span style={{ color: '#FC3939' }}>*</span>&nbsp;) harus diisi</div>
              <Row className='mt-3'>
              <Col md={12}>
                <Nav tabs>
                  <NavItem
                   onClick={() => setTab(0)}
                  >
                    <NavLink
                     style={{
                      cursor: 'pointer',
                      borderBottom: tab === 0 ? '2px solid #0098b0' : ''
                     }}
                    >
                      Informasi Perusahaan
                    </NavLink>
                  </NavItem>
                  <NavItem
                   onClick={() => setTab(1)}
                  >
                    <NavLink
                     style={{
                      cursor: 'pointer',
                      borderBottom: tab === 1 ? '2px solid #0098b0' : ''
                     }}
                    >
                      Informasi Kontak
                    </NavLink>
                  </NavItem>
                  <NavItem
                   onClick={() => setTab(2)}
                  >
                    <NavLink
                     style={{
                      cursor: 'pointer',
                      borderBottom: tab === 2 ? '2px solid #0098b0' : ''
                     }}
                    >
                      Informasi Keuangan
                    </NavLink>
                  </NavItem>
                  <NavItem
                   onClick={() => setTab(3)}
                  >
                    <NavLink
                     style={{
                      cursor: 'pointer',
                      borderBottom: tab === 3 ? '2px solid #0098b0' : ''
                     }}
                    >
                      Desain
                    </NavLink>
                  </NavItem>
                </Nav>
                </Col>
            </Row>
                <TabContent activeTab={tab}>
                  <TabPane tabId={0}>
                    <CompanyInformationComponent />
                  </TabPane>
                  <TabPane tabId={1}>
                    <ContactInformationComponent />
                  </TabPane>
                  <TabPane tabId={2}>
                    <FinancialInformationComponent />
                  </TabPane>
                  <TabPane tabId={3}>
                    <DesignComponent />
                  </TabPane>
                </TabContent>
            </Card>
          </Col>
        </Row>
       </Container>
      </>
    )
}

export default GeneralDataView
