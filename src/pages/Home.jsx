import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Element } from "react-scroll"
import AOS from 'aos'
import HubspotForm from 'react-hubspot-form'
import './../../src/App.scss'
import { scroller } from 'react-scroll'
import ToTop from '../components/Hooks/ToTop/ToTop'

const Home = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      {/* Navigation */}
      <Nav />
      {/* Start block */}
      <main className="main">
        {/* Hero */}
        <Hero />
        {/* About Section */}
        <Element name='inicio'><section id="inicio" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2 className='text-left'>Nosotros<br /></h2>
            <p className='text-left'> Enlace y desarrollo Integral S.A. de C.V. somos una empresa con más de 36 años en el mercado, enfocada en el sector financiero, salud e inversiones. Nos hemos diferenciado por el excelente desarrollo de empresarios basados en la responsabilidad social, ética profesional y la calidad humana que nos caracteriza.<br />
            Basados en la responsabilidad social, se ha diferenciado por el excelente desarrollo de empresarios con responsabilidad, ética y la calidad humana que nos caracteriza, llegando a obtener la máxima distinción otorgada por GNP en diversas ocasiones.</p>
          </div>{/* End Section Title */}
        </section>{/* /About Section */}
        </Element>
        {/* Stats Section */}
        <Element name='nosotros'>
        <section id="nosotros" className="stats section dark-background">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <img src="./../edisa785_equipo.jpg" alt className="img-fluid rounded-border" />
              </div>
              <div className="col-lg-7">
                <div className="row gy-4">
                  <div className='col-12'>
                    <img src='./../edisa785_logo-negativo.svg' className='img-fluid' width={280} />
                  </div>
                  <div className="col-lg-12">
                    <div className="stats-item d-flex">
                      <div className='text-left'>
                        <p>Es una dirección de agencia de la aseguradora <Link to='https://www.gnp.com.mx/'>GNP</Link> donde se gestionan y coordinan las actividades relacionadas con la venta de pólizas, atención a clientes, tramitación de siniestros y otros servicios relacionados con los seguros. Esta dirección es donde trabajan los agentes de seguros y personal administrativo de la aseguradora para brindar servicios a los clientes.</p>
                      </div>
                    </div>
                  </div>{/* End Stats Item */}
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Stats Section */}
        </Element>
        {/* Begin: Masonry */}
        <section id="clients" className="clients section">
          <div className='container section-title' data-aos="fade-up">
            <h2 className='text-left'>Conoce nuestras oficinas, ubicadas en Av. Paseo de la Reforma 144 <br />Piso #1, Cuahutemoc, Ciudad de México</h2>
          </div>
          <div className="container">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter='15px'>
                <img src='../../oficinas_edisa.jpg' className='img-fluid rounded-border' />
                <img src='../../oficinas_edisa2.jpg' className='img-fluid rounded-border' />
                <img src='../../oficinas_edisa3.jpg' className='img-fluid rounded-border' />
                <img src='../../oficinas-edisa-reforma.jpg' className='img-fluid rounded-border' />
                <img src='../../oficinas-edisa4.jpg' className='img-fluid rounded-border' />
                <img src='../../sala-juntas-edisa.jpg' className='img-fluid rounded-border' />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </section>
        {/* End: Masonry */}
        {/* Team Section */}
        <Element name='organigrama'>
          <section id="organigrama" className="team section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Nuestro equipo</h2>
              <p>Conoce a los profesionales que te ayudarán a impulsar tu carrera</p>
            </div>{/* End Section Title */}
            {/* Organigram Responsive */}
            <div className="container-organigrama">
              <div className='level-1 rectangle'>
                <img src="./../organigrama/nicolas-garcia.jpg" className="img-fluid" alt='Nicolás García' />
              <h2 className="">Nicolás García</h2>
              <p>Director de agencia</p>
              </div>
              
              <ol className="level-2-wrapper">
                <li>
                  <div className='level-2 rectangle'>
                    <img src="./../organigrama/fabian-garcia.jpg" className="img-fluid" alt='Fabián García' />
                    <h2 className="">Fabián García</h2>
                    <p>Director Operativo</p>
                  </div>
                  <div className='level-2 rectangle'>
                    <img src="./../organigrama/paty-palomino.jpg" className="img-fluid" alt='Fabián García' />
                    <h2 className="">Paty Palomino</h2>
                    <p>Directora Líneas Personales</p>
                  </div>
                  <ol className="level-3-wrapper">
                    <li>
                      <div className="level-3 rectangle">
                        <img src="./../organigrama/alejandro-torres.jpg" className="img-fluid" alt='Alejandro Torres' />
                      <h3>Alejandro Torres</h3>
                      <p>Gerente operativo</p>
                      </div>
                      
                      <ol className="level-4-wrapper">
                        <li className='level-4 left'>
                          <div className='rectangle'>
                            <img src="./../organigrama/heidi-sanchez.jpg" className="img-fluid" alt='Heidi Sanchez' />
                            <h4 className="">Heidi Sanchez</h4>
                            <p>Siniestros</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/evelyn-arias.jpg" className="img-fluid" alt='Evelyn Arias' />
                            <h4 className="">Evelyn Arias</h4>
                            <p>Ejecutiva GMM</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                          <div className='rectangle'>
                            <img src="./../organigrama/itzel-serra.jpg" className="img-fluid" alt='Itzel Serra' />
                            <h4 className="">Itzel Serra</h4>
                            <p>Ejecutiva GMM</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/ramces-rodriguez.jpg" className="img-fluid" alt='Ramces Rodriguez' />
                            <h4 className="">Ramces Rodriguez</h4>
                            <p>Ejecutivo GMM</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/daniel-juarez.jpg" className="img-fluid" alt='Daniel Juarez' />
                            <h4 className="">Daniel Juárez</h4>
                            <p>Ejecutivo Autos</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/jose-alfredo-jimenez.jpg" className="img-fluid" alt='José Alfredo Jimenez' />
                            <h4 className="">José Alfredo Jimenez</h4>
                            <p>Ejecutivo Seguros Empresariales</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/lucila-lopez.jpg" className="img-fluid" alt='Lucila Lopez' />
                            <h4 className="">Lucila Lopez</h4>
                            <p>Ejecutiva Seguros Empresariales</p>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className='level-3 rectangle'>
                        <img src="./../organigrama/monica-flores.jpg" className="img-fluid" alt='Mónica Flores' />
                        <h3 className="">Mónica Flores</h3>
                        <p>Gerente operativo</p>
                      </div>
                      <ol className="level-4-wrapper">
                      <li className='level-4 left'>
                        <div className='rectangle'>
                            <img src="./../organigrama/uriel-rosas.jpg" className="img-fluid" alt='Uriel Rosas' />
                            <h4 className="">Uriel Rosas</h4>
                            <p>Ejecutiva Vida</p>
                          </div>
                        </li>
                        <li className='level-4 left'>
                          <div className='rectangle'>
                            <img src="./../organigrama/gaby-molina.jpg" className="img-fluid" alt='Gabriela Molina' />
                            <h4 className="">Gabriela Molina</h4>
                            <p>Ejecutiva Cobranza y Traspasos</p>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <div className='level-2 rectangle'>
                    <img src="./../organigrama/rafael-martinez.jpg" className="img-fluid" alt='Rafa Martinez' />
                    <h2 className="">Rafa Martínez</h2>
                    <p>Director Comercial</p>
                  </div>
                  <ol className="level-3-wrapper right">
                  <li>
                      <div className="level-3 comm rectangle">
                        <img src="./../organigrama/carlos-saloma.jpg" className="img-fluid" alt='Carlos Saloma' />
                        <h3 className="">Carlos Saloma</h3>
                        <p>Gerente de desarrollo</p>
                      </div>
                      <li>
                      <ol className="level-4-wrapper right outflow">
                        <li className='level-4'>
                        <div className='rectangle'>
                            <img src="./../organigrama/norma-romero.jpg" className="img-fluid" alt='Norma Romero' />
                            <h4 className="">Norma Romero</h4>
                            <p>Gerente de promoción - Vida</p>
                          </div>
                        </li>
                        <li className='level-4'>
                        <div className='rectangle'>
                            <img src="./../organigrama/alvar-perez.jpg" className="img-fluid" alt='Alvar Perez' />
                            <h4 className="">Alvar Pérez</h4>
                            <p>Gerente Promoción Patrimonial</p>
                          </div>
                        </li>
                        <li className='level-4'>
                        <div className='rectangle'>
                            <img src="./../organigrama/alberto-bote.jpg" className="img-fluid" alt='Alberto Bote' />
                            <h4 className="">Alberto bote</h4>
                            <p>Gerente Promoción GMM</p>
                          </div>
                        </li>
                        <li className='level-4'>
                        <div className='rectangle'>
                            <img src="./../organigrama/ricardo-monroy.jpg" className="img-fluid" alt='Ricardo Monroy' />
                            <h4 className="">Ricardo Monroy</h4>
                            <p>Gerente de Promoción Empresarial</p>
                          </div>
                        </li>
                        <li className='level-4'>
                        <div className='rectangle'>
                            <img src="./../organigrama/itzel-magali.jpg" className="img-fluid" alt='Itzel Magali' />
                            <h4 className="">Itzel Magali</h4>
                            <p>Seguimiento a logros</p>
                          </div>
                        </li>
                      </ol>
                    </li>
                    </li>
                    <li>
                      <div className="level-3 comm rectangle">
                        <img src="./../organigrama/rafael-martinez-jr.jpg" className="img-fluid" alt='Rafa Martinez Jr' />
                        <h3 className="">Rafa Martínez</h3>
                        <p>Gerente de desarrollo</p>
                      </div>
                    </li>
                    <li>
                      <div className='level-3 comm rectangle'>
                        <img src="./../organigrama/perla-cabrera.jpg" className="img-fluid" alt='Perla Cabrera' />
                        <h3 className="">Perla Cabrera</h3>
                        <p>Gerente reclutamiento</p>
                      </div>
                      <ol className="level-4-wrapper right inflow subteam">
                        <li className='level-4 inflow'>
                        <div className='rectangle'>
                            <img src="./../organigrama/barusch-peralta.jpg" className="img-fluid" alt='Barusch Peralta' />
                            <h4 className="">Barusch Peralta</h4>
                            <p>Ejecutiva de atracción de talento</p>
                          </div>
                        </li>
                        <li className='level-4 inflow'>
                        <div className='rectangle'>
                            <img src="./../organigrama/claudia-mendoza.jpg" className="img-fluid" alt='Claudia Mendoza' />
                            <h4 className="">Claudia Mendoza</h4>
                            <p>Ejecutiva de atracción de talento</p>
                          </div>
                        </li>
                      </ol>
                    </li>
                    
                  </ol>
                </li>
              </ol>
              <ol className='level-5-wrapper'>
                <li className='level-5'>
                  <div className='rectangle'>
                    <img src="./../organigrama/leticia-ortega.jpg" className="img-fluid" alt='Leticia Ortega' />
                    <h4 className="">Leticia Ortega</h4>
                    <p>Asistente de dirección</p>
                  </div>
                </li>
                <li className='level-5'>
                <div className='rectangle'>
                    <img src="./../organigrama/arlette-desentis.jpg" className="img-fluid" alt='Arlette Desentis' />
                    <h4 className="">Arlette Desentis</h4>
                    <p>Community Manager</p>
                  </div>
                </li>
              </ol>
            </div>
            {/* End: Organigrama Responsive */}
          </section>{/* /Team Section */}
        </Element>
        {/* Services Section */}
        <Element name='experiencias'>
          <section id="experiencias" className="services section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Experiencias</h2>
              <p>Edisa recompensa tu esfuerzo con las diferentes experiencias</p>
            </div>{/* End Section Title */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-delay={100}>
                  <div className="service-item  position-relative">
                    <div className="icon">
                      <i className="bi bi-globe-americas" />
                    </div>
                    <h3>Congreso Internacional EDISA</h3>
                    <p>Gana un viaje internacional alcanzando metas específicas</p>
                  </div>
                </div>{/* End Service Item */}
                <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-delay={200}>
                  <div className="service-item position-relative">
                    <div className="icon">
                      <img src='../../seminario.png' width={64} />
                    </div>
                    <h3>Seminario Nacional Edisa</h3>
                    <p>Aprende de las mejores prácticas del sector</p>
                  </div>
                </div>{/* End Service Item */}
                <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-delay={400}>
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-star-fill" />
                    </div>
                    <h3>Congreso Oro, Platino, Diamante</h3>
                    <p>Disfruta de vacaciones pagadas por cumplir objetivos</p>
                  </div>
                </div>{/* End Service Item */}
                <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-delay={300}>
                  <div className="service-item position-relative">
                    <div className="icon">
                    <i className="bi bi-people-fill" />
                    </div>
                    <h3>Campamento de agentes</h3>
                    <p>Conéctate con los líderes más destacados del sector</p>
                  </div>
                </div>{/* End Service Item */}
                <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-delay={400}>
                  <div className="service-item position-relative">
                    <div className="icon">
                    <img src='../../premio.png' width={64} />
                    </div>
                    <h3>Viaje Consejeros</h3>
                    <p>Premiamos a nuestros agentes que obtienen el máximo reconocimiento de ventas por GNP</p>
                  </div>
                </div>{/* End Service Item */}
              </div>
            </div>
          </section>{/* /Services Section */}
                {/* Call To Action Section */}
                <section id="call-to-action" className="call-to-action section dark-background">
          <div className="container">
            <img src="assets/img/cta-bg.jpg" alt />
            <div className="content row justify-content-center" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-xl-10">
                <div className="text-center">
                <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://player.vimeo.com/video/970257032?badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} title="Seminario Edisa 785" /></div>
                  <h3 className='mt-5'>Únete y participa en nuestros seminarios</h3>
                  <p>Incentivamos tu progreso con viajes internacionales y nacionales para que crezcas con nosotros.</p>
                  <div className='row'>
                  <div className='col-md-6 col-12'>
                    <h4 className='text-orange text-left'>Destinos internacionales</h4>
                    <ul className='text-left'>
                      <li>Turquía</li>
                      <li>Perú</li>
                      <li>Nueva York</li>
                    </ul>
                  </div>
                  <div className='col-md-6 col-12'>
                    <h4 className='text-orange text-left'>Destinos nacionales</h4>
                    <ul className='text-left'>
                      <li>Taxco</li>
                      <li>Tequisquiapan</li>
                      <li>Acapulco</li>
                      <li>Veracruz</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Call To Action Section */}
        </Element>
        <Element name='mural-fama'>
        {/* Recent Posts Section */}
        <section id="mural-fama" className="recent-posts section">
          {/* Section Title */}
          <div className="container section-title line-center" data-aos="fade-up">
            <h2 className='text-center'>Mural de la fama</h2>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              {/* Confetti */}
              <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
              </div>
              {/* End: Conffetti */}
              <div className="col-xl-6 col-md-6 offset-lg-3" data-aos="fade-up" data-aos-delay={100}>
                <article>
                  <div className="post-img">
                    <img src='../../trophy.png' width={200} />
                  </div>
                  <p className="post-category">Grupo Apro</p>
                  <h2 className="title">
                    <p>Grupo APRO ha ganado 15 veces el Premio Internacional de Calidad otorgado por la Life Insurance Marketing and Research Association. Además, es miembro de The Million Dollar Round Table, que reconoce a los mejores agentes de seguros de vida y asesores financieros. En más de 30 años, ha formado parte del Consejo de Productores de GNP, logrando 14 campeonatos y 9 subcampeonatos en Vida, Autos, Gastos Médicos y PYMES.
                    </p>
                  </h2>
                </article>
              </div>{/* End post list item */}
            </div>{/* End recent posts list */}
          </div>
        </section>{/* /Recent Posts Section */}
        </Element>
        {/* Faq Section */}
        <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="content px-xl-5">
                  <h3 className='text-left'><span>Plan de </span><strong>carrera</strong></h3>
                  <p className='text-left'>
                  Fomentamos la integralidad de los diferente ramos dentro de la industria de seguros
                  <ul>
                    <li>Capacitación constante</li>
                    <li>Campañas motivacionales para aumentar tus ventas y alcanzar tus objetivos.</li>
                    <li>Seguimiento personalizado.</li>
                    <li>Proyección de negocio a largo plazo.</li>
                    <li>Ingresos excelentes y sin límites.</li>
                    <li>Integralidad de cartera: vida, protección, ahorro, educación, inversión, autos hogar, mascotas, gastos médicos mayores y empresariales.</li>
                  </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-xs-12" data-aos="fade-up" data-aos-delay={200}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 col-12 col-lg-6 col-xl-6 box-careers'>
                    <i className="bi bi-cash-stack iconXl" />
                      <h3>Excelentes ingresos</h3>
                    </div>
                    <div className='col-md-6 col-12 col-lg-6 col-xl-6 box-careers'>
                    <i className="bi bi-emoji-laughing iconXl" />
                      <h3>Mejora tu calidad de vida de manera integral</h3>
                    </div>
                    <div className='col-md-6 col-12 col-lg-6 col-xl-6 box-careers'>
                    <i className="bi bi-briefcase-fill iconXl" />
                      <h3>Crea tupropio negocio</h3>
                      <p className=''>Que contribuya en la historia de cada familia y genere empleos en el país. Implementa las herramientas apropoiadas de ventas para generar lazos de confianza y relaciones estrechas a largo placo con clientes, agencia y aseguradora.</p>
                    </div>
                    <div className='col-md-6 col-12 col-lg-6 col-xl-6 box-careers'>
                    <i className="bi bi-arrow-up-right-circle iconXl" />
                      <h3>Gran mercado potencial</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Faq Section */}

        {/* Listo para constuir tu éxito */}
        <section className='cta section'>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="content px-xl-5">
                  <h2 className='text-center'>Listo para construir tu <span className='text-orange'><strong>éxito</strong></span></h2>
                  <button className='btn-get-started' onClick={()=>scroller.scrollTo('contacto')}>Inicia tu carrera</button>
                </div>
              </div>
              <div className='col-lg-6' data-aos="fade-up" data-aos-delay={200}>
                <picture>
                  <source srcSet='../../noveles-edisa.webp' type='image/webp' />
                  <img src='../../noveles-edisa.png' className='img-fluid' />
                </picture>
            </div>
          </div>
          </div>
        </section>

        {/* Contact Section */}
        <Element name='contacto'>
        <section id="contacto" className="contact section">
          {/* Section Title */}
          <div className="container line-center section-title" data-aos="fade-up">
            <h2 className='text-center'>Contáctanos</h2>
            {/* <p>Inicia tu futuro con nosotros</p> */}
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div className='text-left'>
                      <h3>Visítanos</h3>
                      <p>Av. Paseo de la Reforma 144, Piso 1, Col. Juárez, CDMX</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div className='text-left'>
                      <h3>Llámanos</h3>
                      <p onClick={(e)=>{e.preventDefault(); window.location='tel:+52 55 1246 2462'}}>+52 55 1246 2462</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div className='text-left'>
                      <h3>Email</h3>
                      <p onClick={(e)=>{e.preventDefault(); window.location='mailto:viridiana.talento@edisa785.com'}}>viridiana.talento@edisa785.com</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-8 p-4">
              <HubspotForm className='px-4'
                        portalId='48705185'
                        formId='a5d1d6e9-f25e-4237-ac66-5a2122bb6655'
                        onSubmit={() => console.log('Enviado!')}
                        onReady={(form) => console.log(`Hubspot Form ready: ${form}!`)}
                        loading={<div>Cargando...</div>}
                        style={{ display: 'flex' }}
                      />
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>{/* /Contact Section */}
        </Element>
      </main >

      {/* Scroll to top button */}
      <ToTop />

      {/* Footer */}
      < Footer />
    </>
  )
}

export default Home