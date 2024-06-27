import { Link } from 'react-router-dom'

const ToTop = () => {
  return (
    <>
      {/* <!-- Scroll Top --> */}
      <Link href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
    </>
  )
}

export default ToTop