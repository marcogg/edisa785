import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section accent-background">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-5 justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2><span>Más de 35 años de experiencia en el mercado, enfocada en el </span><span className="accent">sector de protección, ahorro e inversiones</span></h2>
              <p>Enlace y desarrollo integral SA de CV. empresa 100% mexicana</p>
              <div className="d-flex">
                <Link to="#about" className="btn-get-started">Únete al equipo</Link>
                <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></Link>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <img src="../hero.png" className="img-fluid" alt />
            </div>
          </div>
        </div>
        <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-easel" /></div>
                  <h4 className="title"><a href className="stretched-link">Te brindamos las mejores opciones para hacer crecer tu dinero y proteger tu inversión.</a></h4>
                </div>
              </div>{/*End Icon Box */}
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-gem" /></div>
                  <h4 className="title"><a href className="stretched-link">Sed ut perspiciatis</a></h4>
                </div>
              </div>{/*End Icon Box */}
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-geo-alt" /></div>
                  <h4 className="title"><a href className="stretched-link">Magni Dolores</a></h4>
                </div>
              </div>{/*End Icon Box */}
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-command" /></div>
                  <h4 className="title"><a href className="stretched-link">Nemo Enim</a></h4>
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