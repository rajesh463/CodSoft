import React from 'react'
import "../components/Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className='Footer'>
      <h6 id='All-Rights'>All Rights Reserved</h6>
      <Link to="/contactus">Contact Us</Link>
              <br />
      <Link to="/about">About Us</Link>
              <br />

    </div>
    
  )
}

export default Footer