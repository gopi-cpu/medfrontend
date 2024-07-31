import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Services">
            <ul className='ServicesList'>
                <li className='ServicesListItem'>Medicine Delivery</li>
                <li className='ServicesListItem'>Smart Meds</li>
                <li className='ServicesListItem'>Doctor Appointment Booking</li>
                <li className='ServicesListItem'>Health Service</li>
                <li className='ServicesListItem'>Check Medcine Avalability </li>
                <li className='ServicesListItem'>Buy Medicine Pay later</li>
                <li className='ServicesListItem'>Check Medicine Availability Nearby & Order</li>
            </ul>
        </div>
        <div className="ConnectUs">
            <ul className='ConnectUsList'>
                <h3 className='ConnectUsHeading'>Connect Us On</h3>
                <li className='ConnectUsListItem'>Our Blogs</li>
                <li className='ConnectUsListItem'>Instagram</li>
                <li className='ConnectUsListItem'>Facebook</li>
                <li className='ConnectUsListItem'>Whatsapp</li>
                <li className='ConnectUsListItem'>Linked In</li>
            </ul>
        </div>
        <div className="AboutUs">
            <ul className='AboutUsList'>
                <li className='AboutUsListItem'>Careers</li>
                <li className='AboutUsListItem'>Know About us on our Blogs</li>
                <li className='AboutUsListItem'>Address:                </li>
                <li className='AboutUsListItem'>Nellore</li>
                <li className='AboutUsListItem'>Andhra Pradesh</li>
                <li className='AboutUsListItem'>India</li>
                <li className='AboutUsListItem'>CopyRights @ All Rigths Reserved</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
