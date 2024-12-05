
const ScrollToSection = (id) => {
        const getId = document.getElementById(id)
        if(getId){
          getId.scrollIntoView({behavior:'smooth', block:'start'}) 
        }
      }

export default ScrollToSection