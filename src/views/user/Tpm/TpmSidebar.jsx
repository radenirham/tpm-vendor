import React from 'react'
import { Card, Nav, NavItem, NavLink } from 'reactstrap'
import {
  RiBuilding2Fill,
  RiFileUserFill,
  RiUserReceived2Fill,
  RiBankCard2Fill,
  RiFilePaper2Fill,
  RiFilePaper2Line,
  RiFileLockFill,
  RiNewspaperFill,
  RiArchiveDrawerFill,
  RiUserSettingsFill,
  RiLockPasswordFill,
  RiMoneyEuroBoxFill,
  RiMoneyDollarBoxFill,
  RiBuildingFill,
  RiUser3Fill,
  RiSecurePaymentFill,
  RiLightbulbFill } from 'react-icons/ri'

const ItemWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: '1rem',
  TextDecoder: 'none'
}

const arrItems = [
  {
    name: 'General Data',
    icon: <RiBuilding2Fill style={{ marginRight: 8 }}/>,
    to: 'general-data'
  },
  {
    name: 'Akta',
    icon: <RiFileUserFill style={{ marginRight: 8 }}/>,
    to: 'akta'
  },
  {
    name: 'Pengurus',
    icon: <RiUserReceived2Fill style={{ marginRight: 8 }}/>,
    to: 'pengurus'
  },
  {
    name: 'Kontak',
    icon: <RiBankCard2Fill style={{ marginRight: 8 }}/>,
    to: 'kontak'
  },
  {
    name: 'TDP / NIB',
    icon: <RiFilePaper2Fill style={{ marginRight: 8 }}/>,
    to: 'tdp'
  },
  {
    name: 'Izin Usaha',
    icon: <RiFilePaper2Line style={{ marginRight: 8 }}/>,
    to: 'izin-usaha'
  },
  {
    name: 'GTC (General Term Condition)',
    icon: <RiFileLockFill style={{ marginRight: 8 }}/>,
    to: 'gtc'
  },
  {
    name: 'Sertifikasi',
    icon: <RiNewspaperFill style={{ marginRight: 8 }}/>,
    to: 'sertifikasi'
  },
  {
    name: 'Pengalaman',
    icon: <RiArchiveDrawerFill style={{ marginRight: 8 }}/>,
    to: 'pengalaman'
  },
  {
    name: 'Personel',
    icon: <RiUserSettingsFill style={{ marginRight: 8 }}/>,
    to: 'personel'
  },
  {
    name: 'Perlatan',
    icon: <RiLockPasswordFill style={{ marginRight: 8 }}/>,
    to: 'peralatan'
  },
  {
    name: 'Laporan Keuangan',
    icon: <RiMoneyEuroBoxFill style={{ marginRight: 8 }}/>,
    to: 'laporan-keuangan'
  },
  {
    name: 'Pajak',
    icon: <RiMoneyDollarBoxFill style={{ marginRight: 8 }}/>,
    to: 'pajak'
  },
  {
    name: 'Kantor Cabang',
    icon: <RiBuildingFill style={{ marginRight: 8 }}/>,
    to: 'kantor-cabang'
  },
  {
    name: 'User Penyedia',
    icon: <RiUser3Fill style={{ marginRight: 8 }}/>,
    to: 'user-penyedia'
  },
  {
    name: 'Permintaan Verifikasi',
    icon: <RiSecurePaymentFill style={{ marginRight: 8 }}/>,
    to: 'permintaan-verifikasi'
  },
]



const TpmSidebar = () => {
  return (
    <Card className='p-2'>
      <Nav vertical>
        {
          arrItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink style={ItemWrapper}>
                <div>
                  {item?.icon}
                  <span>{item?.name}</span>
                </div>
                {
                  index !== 14 && index !== 15 && (
                    <RiLightbulbFill />
                  )
                }
              </NavLink>
            </NavItem>
          ))
        }
      </Nav>
    </Card>
  )
}

export default TpmSidebar