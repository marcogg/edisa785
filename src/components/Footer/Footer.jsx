import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer accent-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-12 footer-about">
              <Link href="index.html" className="logo d-flex align-items-start">
                <img src='/../../edisa785_logo.svg' />
              </Link>
              <p className="text-left">Enlace y desarrollo integral SA de CV. es una empresa 100% mexicana con más de 35 años de experiencia en el mercado, enfocada en el sector de protección, ahorro e inversiones.</p>
              <div className="social-links d-flex mt-4">
                <Link><i className="bi bi-facebook" /></Link>
                <Link><i className="bi bi-instagram" /></Link>
                <Link><i className="bi bi-linkedin" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 footer-links text-left">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            {/* <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div> */}
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contáctanos</h4>
              <p>Piso 1, Juárez, Cuauhtémoc, 06600</p>
              <p>CDMX, México</p>
              <p>México</p>
              <p className="mt-4"><strong>Teléfono:</strong> <span onClick={(e)=>{e.preventDefault(); window.location='tel:5512462462'}}>+52 55 1246 2462</span></p>
              <p><strong>Email:</strong> <span onClick={(e)=>{e.preventDefault(); window.location='mailto:contacto@edisa785.com'}}>contacto@edisa785.com</span></p>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Edisa 785</strong> <span>Derechos reservados</span></p>
        </div>
      </footer>

    </>
  )
}

export default Footer