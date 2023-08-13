import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import { PiTranslateBold, PiCheckBold } from 'react-icons/pi'

import flagId from "../../../assets/images/flags/id.png"
import flagEn from "../../../assets/images/flags/en.png"

import { Button } from 'reactstrap'

const NavBar = () => {
   const [stickyMenu, setStickyMenu] = useState(false);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   useEffect(() => {
      const stickyMenuBar = () => {
          if (window.scrollY > 100) {
              setStickyMenu(true)
          }
          else {
              setStickyMenu(false)
          }
      }
     window.addEventListener('scroll', stickyMenuBar)
     stickyMenuBar()
   },[])


   return (
      <>
         <header>
            {/* <div className={stickyMenu ? "sticky_menu top-bar-white top-bar-3 lg-pt-30 lg-pb-30 h3_topBar" : "top-bar-white top-bar-3 pt-30 pb-30 h3_topBar"}> */}
            <div className="top-bar-white top-bar-3 pt-20 pb-20 h3_topBar">
               <div className="container">
                  <div className={ "row align-items-center"}>
                     <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                        <div className="logo logo-3 pos-rel">
                           <Link to="/"><img src={logo} style={{height: 60, width: 145}} alt=""/></Link>
                        </div>
                     </div>
                     <div className='col-6 d-lg-none'>
                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i></button>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 d-none d-lg-block">
                        <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                           <div className="lang-icon">
                              <PiTranslateBold size={22} />
                           </div>
                           <ul className="header-lang-list header-lang-list-3">
                              <li>
                                 <a href="#">
                                    <div className="float-start"><img src={flagId} style={{height: 12}} /> {' '} Bahasa</div>
                                    <div className="float-end"><PiCheckBold /></div>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <div className="float-start"><img src={flagEn} style={{height: 12}} /> {' '} English</div>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div style={{height: 61}} className="header-menu-area">
               <div className={stickyMenu ? "sticky_menu header-menu-area header-menu-blue theme-bg sticky_navBar_bg" : "header-menu-area header-menu-blue theme-bg h3_navBar"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8">
                           <div className="header__menu menu-dark">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li><Link to="/home.html">Home</Link></li>
                                    <li><Link to="/faq.html">FAQ</Link></li>
                                    <li><Link to="/contact.html">Contact</Link></li>
                                    <li>
                                       <span dangerouslySetInnerHTML={{ __html: '<a href="javascript:void(0);">Procedure +</a>' }} />
                                       <ul className="submenu">
                                          <li><Link to="/">Informasi Manual Book</Link></li>
                                          <li><Link to="/">General Terms & Conditions</Link></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span dangerouslySetInnerHTML={{ __html: '<a href="javascript:void(0);">Our Products +</a>' }} />
                                       <ul className="submenu">
                                          <li><Link to="/">e-Catalogue</Link></li>
                                          <li><Link to="/">Penayangan Produk Vendor</Link></li>
                                          <li><Link to="/">Modul e-Procurement</Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>

                        </div>
                        <div className="col-xl-4 col-lg-4">
                           <div className="header-right f-right">
                              <div className="header-social-icons f-right d-none d-lg-block p-0">
                                 <ul>
                                    <li>
                                       <Link to="/auth/login.html">
                                          <Button color="warning" style={{borderColor: '#ffffff', paddingLeft: '40px', paddingRight: '40px'}}>Masuk</Button>
                                       </Link>
                                    </li>
                                    {
                                       window.location.pathname !== '/auth/register.html' && 
                                       <li>
                                          <Link to="/auth/register.html">
                                             <Button color="primary" style={{borderColor: '#ffffff', paddingLeft: '40px', paddingRight: '40px'}}>Daftar</Button>
                                          </Link>
                                       </li>
                                    }
                                 </ul>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </header>

         {/* <Sidebar show={show} handleClose={handleClose} /> */}
      </>
   );
};

export default NavBar;