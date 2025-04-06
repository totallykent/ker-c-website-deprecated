import React, { useState } from 'react';
import logo from './imgs/logo.png';
import fb from './imgs/facebook.png';
import messenger from './imgs/messenger.png';
import gmail from './imgs/gmail.png';

import Home from './Home.jsx';
import PagePrice from './PagePrice/PriceShirt.jsx';
import Login from './PageAuthentication/LoginPage.jsx';
import Register from './PageAuthentication/RegisterPage.jsx';
import PriceShirt from './PagePrice/PriceShirt.jsx';
import CustomerOrder from './PageCustomer/CustomerOrder.jsx';
import PageInquiry from './PageInquiry/InquiryPage.jsx';
import './App.css';
import InquiryPage from './PageInquiry/InquiryPage.jsx';
import { Squash as Hamburger } from 'hamburger-react';


function App() {
  const [isOpen, setIsOpen] = useState(0);
  
  return (
    <>
      <div className="App">
        <header className='Header-bar'>
          <div className="nav-container">
            <div className="hamburger-menu">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
            <img src={logo} height={80} alt="Logo" className="mobile-logo" />
            <nav className={`nav-links ${isOpen ? "open" : ""}`}>
              <ul>
                <li><a href="#home" className="tile">Home</a></li>
                <li><a href="#about" className="tile">About</a></li>
                <li><a href="#location" className="tile">Location</a></li>
                <li><img src={logo} height={80} alt="Logo" className="pc-logo" /></li>
                <li><a href="#contact" className="tile">Contact</a></li>
                <li><a href="#faqs" className="tile">FAQs</a></li>
                <li><a href="#my-account" className="tile">My Account</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <Home /> {/*  Opens Home.jsx  */}

        <footer className='Footer'>
          <div className='Copyright'>
            <p>Copyright © 2025 - Ker-C Printing Services</p>
          </div>
          <div className='Social'>
            <img src={fb} className='SocialImg'></img>
            <img src={gmail} className='SocialImg'></img>
            <img src={messenger} className='SocialImg'></img>
          </div>
        </footer>
      </div>  
    </>
  )
}

export default App
