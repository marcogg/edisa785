import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>
      {/* End Top Bar */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to='/' className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="../edisa785_logo-negativo.svg" alt="Edisa 785" width={400} />
            {/* <h1 className="sitename">Edisa 785</h1> */}
            {/* <span>.</span> */}
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="#hero" className="active">Inicio<br /></Link></li>
              <li><Link to="#about">Nosotros</Link></li>
              {/* <li><Link href="#services">Services</Link></li> */}
              <li><Link to="#portfolio">Experiencias</Link></li>
              <li><Link to="#team">Estructura</Link></li>
              <li><Link to="#contact">Contacto</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </div>
    </header>


  )
}

export default Nav