import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid mainFooter bg-primary '>
      
         <footer className="container py-4">
      {/* Navigation Links */}
      <ul className="nav justify-content-center border-bottom pb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">Features</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">FAQs</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">About</a>
        </li>
      </ul>
  
    </footer>
      
    </div>
  )
}

export default Footer