import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Nav />
      {/* Start block */}
      <main className="main">
        {/* Hero */}
        <Hero />

        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2 className='text-left'>Nosotros<br /></h2>
            <p className='text-left'>Hace 36 años él — Act. Nicolás García Luna fundó Enlace como una de las direcciones mas fuertes y distinguidas de GNP.... Comprometida con el éxito y grandeza.
              Basados en la responsabilidad social, se ha diferenciado por el excelente desarrollo de empresarios con responsabilidad, ética y la calidad humana que nos caracteriza, llegando a obtener la máxima distinción otorgada por GNP en diversas ocasiones.</p>
          </div>{/* End Section Title */}
        </section>{/* /About Section */}
        {/* Begin: Masonry */}
        <section id="clients" className="clients section">
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
        {/* Stats Section */}
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <img src="./../edisa785_equipo.jpg" alt className="img-fluid" />
              </div>
              <div className="col-lg-7">
                <div className="row gy-4">
                  <div className='col-12'>
                    <img src='./../edisa785_logo.svg' className='img-fluid' width={280} />
                  </div>
                  <div className="col-lg-12">
                    <div className="stats-item d-flex">
                      <div>
                        <p>Es una dirección de agencia de la aseguradora <Link to='https://www.gnp.com.mx/'>GNP</Link> donde se gestionan y coordinan las actividades relacionadas con la venta de pólizas, atención a clientes, tramitación de siniestros y otros servicios relacionados con los seguros. Esta dirección es donde trabajan los agentes de seguros y personal administrativo de la aseguradora para brindar servicios a los clientes.</p>
                        <p>Connoce nuestras oficinas, ubicadas en Av. Paseo de la Reforma 144 Piso #1, Cuahutemoc, Ciudad de México</p>
                      </div>
                    </div>
                  </div>{/* End Stats Item */}
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Stats Section */}
        {/* Team Section */}
        <section id="team" className="team section">
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
                <ol className="level-3-wrapper">
                  <li>
                    <div className="level-3 rectangle">
                      <img src="./../organigrama/alejandro-torres.jpg" className="img-fluid" alt='Alejandro Torres' />
                    <h3>Alejandro Torres</h3>
                    <p>Gerente de operativo</p>
                    </div>
                    
                    <ol className="level-4-wrapper">
                      <li>
                        <div className='level-4 rectangle'>
                          <img src="./../organigrama/heidi-sanchez.jpg" className="img-fluid" alt='Heidi Sanchez' />
                          <h4 className="">Heidi Sanchez</h4>
                          <p>Siniestros</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/evelyn-arias.jpg" className="img-fluid" alt='Evelyn Arias' />
                          <h4 className="">Evelyn Arias</h4>
                          <p>Ejecutiva GMM</p>
                        </div>
                      </li>
                      <li>
                        <div className='level-4 rectangle'>
                          <img src="./../organigrama/itzel-serra.jpg" className="img-fluid" alt='Itzel Serra' />
                          <h4 className="">Itzel Serra</h4>
                          <p>Ejecutiva GMM</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/ramces-rodriguez.jpg" className="img-fluid" alt='Ramces Rodriguez' />
                          <h4 className="">Ramces Rodriguez</h4>
                          <p>Ejecutivo GMM</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/daniel-juarez.jpg" className="img-fluid" alt='Daniel Juarez' />
                          <h4 className="">Daniel Juárez</h4>
                          <p>Ejecutivo Autos</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/jose-alfredo-jimenez.jpg" className="img-fluid" alt='José Alfredo Jimenez' />
                          <h4 className="">José Alfredo Jimenez</h4>
                          <p>Ejecutivo Seguros Empresariales</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
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
                      <p>Gerente de Operación Vida</p>
                    </div>
                    <ol className="level-4-wrapper">
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/uriel-rosas.jpg" className="img-fluid" alt='Uriel Rosas' />
                          <h4 className="">Uriel Rosas</h4>
                          <p>Ejecutiva Vida</p>
                        </div>
                      </li>
                      <li>
                        <div className='level-4 rectangle'>
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
                <ol className="level-3-wrapper">
                <li>
                    <div className="level-3 rectangle">
                      <img src="./../organigrama/carlos-saloma.jpg" className="img-fluid" alt='Carlos Saloma' />
                      <h3 className="">Carlos Saloma</h3>
                      <p>Gerente de desarrollo</p>
                    </div>
                  </li>
                  <li>
                    <div className="level-3 rectangle">
                      <img src="./../organigrama/rafael-martinez-jr.jpg" className="img-fluid" alt='Rafa Martinez Jr' />
                      <h3 className="">Rafa Martínez</h3>
                      <p>Gerente de desarrollo</p>
                    </div>
                  </li>
                  <li>
                    <div className='level-3 rectangle'>
                      <img src="./../organigrama/perla-cabrera.jpg" className="img-fluid" alt='Perla Cabrera' />
                      <h3 className="">Perla Cabrera</h3>
                      <p>Gerente de reclutamiento</p>
                    </div>
                    <ol className="level-4-wrapper">
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/barusch-peralta.jpg" className="img-fluid" alt='Barusch Peralta' />
                          <h4 className="">Barusch Peralta</h4>
                          <p>Ejecutiva de atracción de talento</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/claudia-mendoza.jpg" className="img-fluid" alt='Claudia Mendoza' />
                          <h4 className="">Claudia Mendoza</h4>
                          <p>Ejecutiva de atracción de talento</p>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol className="level-4-wrapper">
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/norma-romero.jpg" className="img-fluid" alt='Norma Romero' />
                          <h4 className="">Norma Romero</h4>
                          <p>Gerente de promoción - Vida</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/alvar-perez.jpg" className="img-fluid" alt='Alvar Perez' />
                          <h4 className="">Alvar Pérez</h4>
                          <p>Gerente Promoción Patrimonial</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/alberto-bote.jpg" className="img-fluid" alt='Alberto Bote' />
                          <h4 className="">Alberto bote</h4>
                          <p>Gerente Promoción GMM</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/ricardo-monroy.jpg" className="img-fluid" alt='Ricardo Monroy' />
                          <h4 className="">Ricardo Monroy</h4>
                          <p>Gerente de Promoción Empresariales</p>
                        </div>
                      </li>
                      <li>
                      <div className='level-4 rectangle'>
                          <img src="./../organigrama/itzel-magali.jpg" className="img-fluid" alt='Itzel Magali' />
                          <h4 className="">Itzel Magali</h4>
                          <p>Seguimiento a logros</p>
                        </div>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </div>


          {/* End: Organigrama Responsive */}
          <div className="container-full">
            <div className="row gy-4">
              <div className="col-xl-2 col-md-2 d-flex m-auto" data-aos="fade-up" data-aos-delay={100}>
                <div className="member">
                  <img src="./../organigrama/nicolas-garcia.jpg" className="img-fluid" alt='Nicolás García' />
                  <h4>Nicolás García</h4>
                  <span>Director de agencia</span>
                  <div className="social">
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                </div>
              </div>{/* End Team Member */}
            </div>
            <div className='row'>
              <div className='col-6 opsBg'>
                <div data-aos="fade-up" data-aos-delay={200}>
                  <div className="member">
                    <img src="./../organigrama/fabian-garcia.jpg" className="img-fluid" alt='Fabián García' />
                    <h4>Fabián García</h4>
                    <span>Director Operativo</span>
                    <div className="social">
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                  </div>
                </div>{/* End Team Member */}
              </div>
              <div className='col-6 commBg'>
                <div data-aos="fade-up" data-aos-delay={200}>
                  <div className="member">
                    <img src="./../organigrama/rafael-martinez.jpg" className="img-fluid" alt='Fabián García' />
                    <h4>Rafa Martínez</h4>
                    <span>Director Comercial</span>
                    <div className="social">
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                  </div>
                </div>{/* End Team Member */}
              </div>
            </div>
            <div className='row'>
              <div className='col-6 opsBg'>
                <div className='row d-flex m-auto'>
                  <div data-aos="fade-up" data-aos-delay={300}>
                    <div className="member">
                      <img src="./../organigrama/alejandro-torres.jpg" className="img-fluid" alt='Alejandro Torres' />
                      <h4>Alejandro Torres</h4>
                      <span>Gerente de operación</span>
                    </div>
                  </div>
                  {/* Monica Flores */}
                  <div data-aos="fade-up" data-aos-delay={300}>
                    <div className="member">
                      <img src="./../organigrama/monica-flores.jpg" className="img-fluid" alt='Mónica Flores' />
                      <h4>Monica Flores</h4>
                      <span>Gerente de operación Vida</span>
                    </div>
                  </div>{/* End Team Member */}
                </div>
              </div>
              {/* Comercial row */}
              <div className='col-6 commBg'>
                <div className='row mx-auto'>
                  {/* Perla Cabrera */}
                  <div data-aos="fade-up" data-aos-delay={300}>
                    <div className="member">
                      <img src="./../organigrama/perla-cabrera.jpg" className="img-fluid" alt='Perla Cabrera' />
                      <h4>Perla Cabrera</h4>
                      <span>Gerente de reclutamiento y selección</span>
                    </div>
                  </div>
                  {/* Carlos Saloma */}
                  <div data-aos="fade-up" data-aos-delay={300}>
                    <div className="member">
                      <img src="./../organigrama/carlos-saloma.jpg" className="img-fluid" alt='Carlos Saloma' />
                      <h4>Carlos Saloma</h4>
                      <span>Gerente de desarrollo</span>
                    </div>
                  </div>{/* End Team Member */}
                  {/* Rafael Martinez Jr */}
                  <div data-aos="fade-up" data-aos-delay={300}>
                    <div className="member">
                      <img src="./../organigrama/rafael-martinez.jpg" className="img-fluid" alt='Rafael Martinez' />
                      <h4>Rafael Martínez Jr.</h4>
                      <span>Gerente de desarrollo</span>
                    </div>
                  </div>{/* End Team Member */}
                </div>
              </div>
            </div>{/*  End Row */}
            <div className='row'>{/*New Row */}
              <div className='col-6 opsBg'>
                <div className='row'>
                {/* Uriel Rosas */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/uriel-rosas.jpg" className="img-fluid" alt='Uriel Rosas' />
                    <h4>Uriel Rosas</h4>
                    <span>Ejecutivo de vida</span>
                  </div>
                </div>
                {/* Gabriela molina */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/gaby-molina.jpg" className="img-fluid" alt='Gabriela Molina' />
                    <h4>Gabriela Molina</h4>
                    <span>Ejecutiva de cobranza y traspasos</span>
                  </div>
                </div>
                {/* Heidi Sanchez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/heidi-sanchez.jpg" className="img-fluid" alt='Heidi Sanchez' />
                    <h4>Heidi Sanchez</h4>
                    <span>Siniestros</span>
                    
                  </div>
                </div>
                {/* Evelyn Arias */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/evelyn-arias.jpg" className="img-fluid" alt='Evelyn Arias' />
                    <h4>Evelyn Arias</h4>
                    <span>Ejecutiva de GMM</span>
                    
                  </div>
                </div>
                {/* Itzel Serra */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/itzel-serra.jpg" className="img-fluid" alt='Itzel Serra' />
                    <h4>Itzel Serra</h4>
                    <span>Ejecutiva GMM</span>
                    
                  </div>
                </div>
                {/* Ramces Rodriguez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/ramces-rodriguez.jpg" className="img-fluid" alt='Ramces Rodriguez' />
                    <h4>Ramces Rodriguez</h4>
                    <span>Ejecutiva GMM</span>
                    
                  </div>
                </div>
                {/* Daniel Juarez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/daniel-juarez.jpg" className="img-fluid" alt='Daniel Juarez' />
                    <h4>Daniel Juarez</h4>
                    <span>Ejecutivo Autos</span>
                    
                  </div>
                </div>
                {/* Jose Alfredo Jimenez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/jose-alfredo-jimenez.jpg" className="img-fluid" alt='José Alfredo Jimenez' />
                    <h4>José Alfredo Jimenez</h4>
                    <span>Ejecutiva Seguros Empresariales</span>
                    
                  </div>
                </div>
                {/* Lucila Lopez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/lucila-lopez.jpg" className="img-fluid" alt='Lucila Lopez' />
                    <h4>Lucila Lopez</h4>
                    <span>Ejecutiva Seuguros Empresariales</span>
                    
                  </div>
                </div>{/*End Member*/}
              </div>
              </div>
              {/* Comercial team */}
              <div className='col-6 commBg'>
                <div className='row'>
                {/* Barusch Peralta */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/barusch-peralta.jpg" className="img-fluid" alt='Barusch Peralta' />
                    <h4>Barusch Peralta</h4>
                    <span>Ejecutiva de atracción</span>
                    
                  </div>
                </div>
                {/* Claudia mendoza */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/claudia-mendoza.jpg" className="img-fluid" alt='Claudia Mendoza' />
                    <h4>Claudia Mendoza</h4>
                    <span>Ejecutiva de atracción</span>
                    
                  </div>
                </div>
                {/* Norma Romero */}
                <div  data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/norma-romero.jpg" className="img-fluid" alt='Norma Romero' />
                    <h4>Norma Romero</h4>
                    <span>Gerente de Promoción de Vida</span>
                    
                  </div>
                </div>
                {/* Alvar Pérez */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/alvar-perez.jpg" className="img-fluid" alt='Alvar Perez' />
                    <h4>Alvar Perez</h4>
                    <span>Gerente Promoción Patrimonial</span>
                    
                  </div>
                </div>
                {/* Alberto Bote */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/alberto-bote.jpg" className="img-fluid" alt='Albero Bote' />
                    <h4>Alberto Bote</h4>
                    <span>Gerente Promoción GMM</span>
                    
                  </div>
                </div>
                {/* Ricardo Monroy */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/ricardo-monroy.jpg" className="img-fluid" alt='Ricardo Monroy' />
                    <h4>Ricardo Monroy</h4>
                    <span>Gerente promoción empresariales</span>
                    
                  </div>
                </div>
                {/* Itzel Magali */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="./../organigrama/itzel-magali.jpg" className="img-fluid" alt='Itzel Magali' />
                    <h4>Itzel Magali</h4>
                    <span>Seguimiento a Logros</span>
                  </div>
                </div>
              </div>
              </div>
            </div> {/* End Row */}
          </div>
        </section>{/* /Team Section */}
        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section dark-background">
          <div className="container">
            <img src="assets/img/cta-bg.jpg" alt />
            <div className="content row justify-content-center" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-xl-10">
                <div className="text-center">
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
                  <h3>Call To Action</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a className="cta-btn" href="#">Call To Action</a>
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Call To Action Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" />
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
            </div>
          </div>
        </section>{/* /Services Section */}
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>{/* /Testimonials Section */}

        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Free Plan</h3>
                  <div className="icon">
                    <i className="bi bi-box" />
                  </div>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                    <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item featured">
                  <h3>Business Plan</h3>
                  <div className="icon">
                    <i className="bi bi-rocket" />
                  </div>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Developer Plan</h3>
                  <div className="icon">
                    <i className="bi bi-send" />
                  </div>
                  <h4><sup>$</sup>49<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
            </div>
          </div>
        </section>{/* /Pricing Section */}
        {/* Faq Section */}
        <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="content px-xl-5">
                  <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3><span className="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
                    <div className="faq-content">
                      <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>{/* /Faq Section */}
        {/* Recent Posts Section */}
        <section id="recent-posts" className="recent-posts section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Recent Blog Posts</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-1.jpg" alt className="img-fluid" />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-2.jpg" alt className="img-fluid" />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-2.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-3.jpg" alt className="img-fluid" />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-3.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
            </div>{/* End recent posts list */}
          </div>
        </section>{/* /Recent Posts Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={500}>
                    <i className="bi bi-clock flex-shrink-0" />
                    <div>
                      <h3>Open Hours:</h3>
                      <p>Mon-Sat: 11AM - 23PM</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade" data-aos-delay={100}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={8} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>{/* /Contact Section */}
      </main >


      {/* Footer */}
      < Footer />
    </>
  )
}

export default Home