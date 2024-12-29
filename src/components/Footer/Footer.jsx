import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer accent-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-12 footer-about">
              <Link href="index.html" className="logo d-flex align-items-start">
                <img src='/../../edisa785_logo.svg' />
              </Link>
              <p className="text-left">Enlace y desarrollo integral SA de CV. es una empresa 100% mexicana con más de 36 años de experiencia en el mercado, enfocada en el sector de protección, ahorro e inversiones.</p>
              <div className="social-links d-flex mt-4">
                <Link><i className="bi bi-facebook" /></Link>
                <Link><i className="bi bi-instagram" /></Link>
                <Link><i className="bi bi-linkedin" /></Link>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2 col-md-12 footer-contact text-center text-md-start">
              <h4>Contáctanos</h4>
              <p>Av. P.º de la Reforma 144, Juárez, Cuauhtémoc</p>
              <p>06600 Ciudad de México, CDMX</p>
              <p className="mt-4 link"><strong>Teléfono:</strong> <span onClick={(e)=>{e.preventDefault(); window.location='tel:5512462462'}}>+52 55 1246 2462</span></p>
              <p className="link"><strong>Email:</strong> <span onClick={(e)=>{e.preventDefault(); window.location='mailto:contacto@edisa785.com'}}>contacto@edisa785.com</span></p>
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