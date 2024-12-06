import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './../../App.scss'
import { scroller } from 'react-scroll'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section accent-background">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-5 justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="text-orange text-left"><span> Más de 36 años de experiencia en el mercado, </span><span className="text-blue">enfocada en el sector de protección, ahorro e inversiones, desarrollando empresarios en el sector asegurador.</span></h2>
              <p className='text-left'>Enlace y desarrollo integral SA de CV. empresa 100% mexicana</p>
              <div className="d-flex">
                <button onClick={()=>scroller.scrollTo('contacto')} className="btn-get-started">Únete al equipo</button>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <img src="../hero_v2.webp" className="img-fluid" alt />
            </div>
          </div>
        </div>
        <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-people-fill" style={{color:'#f88d2a'}} /></div>
                  <h4 className="title"><span className="text-left">Una dirección de agencia de la aseguradora GNP con más de 50 agentes.</span></h4>
                </div>
              </div>{/*End Icon Box */}
              <div className="col-xl-6 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-arrow-up-right-circle" style={{color:'#f88d2a'}} /></div>
                  <h4 className="title"><span className="stretched-link">Ofrecemos una carrera flexible en seguros <span className='text-orange'><Link to='https://www.gnp.com.mx/'>GNP</Link></span> con formación en liderazgo y beneficios como coaching personalizado y viajes internacionales.
                  </span></h4>
                </div>
              </div>{/*End Icon Box */}
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-star-fill" style={{color:'#f88d2a'}} /></div>
                  <h4 className="title"><span className="text-left">Desarrollamos empresarios en el sector asegurador
                  </span></h4>
                </div>
              </div>{/*End Icon Box */}
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  )
}

export default Hero