import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll"

const Nav = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><Link onClick={(e)=>{e.preventDefault(); window.location='mailto:contacto@edisa785.com'}}>contacto@edisa785.com</Link></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span><Link onClick={(e)=>{e.preventDefault(); window.location='tel:5512462462'}}>+52 55 1246 2462</Link></span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link to='https://www.facebook.com/edisa785' className="facebook"><i className="bi bi-facebook" /></Link>
            <Link to='https://www.instagram.com/edisa785/' className="instagram"><i className="bi bi-instagram" /></Link>
            <Link to='https://www.linkedin.com/company/edisa785/?originalSubdomain=mx' className="linkedin"><i className="bi bi-linkedin" /></Link>
          </div>
        </div>
      </div>
      {/* End Top Bar */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to='/' className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="../../edisa785_logo-negativo.svg" alt="Edisa 785" width={400} />
            {/* <h1 className="sitename">Edisa 785</h1> */}
            {/* <span>.</span> */}
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><ScrollLink to='inicio'>Inicio</ScrollLink></li>
              <li><ScrollLink to='nosotros'>Nosotros</ScrollLink></li>
              <li><ScrollLink to='experiencias'>Experiencias</ScrollLink></li>
              <li><ScrollLink to='organigrama'>Estructura</ScrollLink></li>
              <li><ScrollLink to='mural-fama'>Mural de la fama</ScrollLink></li>
              <li><ScrollLink to='contacto'>Contacto</ScrollLink></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </div>
    </header>


  )
}

export default Nav