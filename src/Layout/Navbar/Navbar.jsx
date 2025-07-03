import './Navbar.css'
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
const Navbar = () => {
  return (
   <header className='container-fluid py-2 shadow-lg position-static top-0'>
  <div className='container'>
    <div className='row align-items-center'>
      <div className="col-md-6 col-12 d-flex  justify-content-center  justify-content-md-start ">
        <span className="fw-bolder fs-1 m-0">LOGO</span>
      </div>
      <div className="col-md-6 d-flex btn-outer gap-3 justify-content-md-end justify-content-center">
        <button type="button" className="btn btn-outline-success py-2 px-3 fs-6">
          <FaWhatsapp size={20}/> Chat with Us
        </button>
        <button type="button" className="btn btn-primary py-2 px-3 fs-6">
          <CiPhone size={20}/> Call Us
        </button>
      </div>  
    </div>
  </div>
</header>

  )
}

export default Navbar