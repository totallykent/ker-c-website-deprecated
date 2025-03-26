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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className='Header-bar'>
          <div>
            <ul>
              <li>
                <a href="#home" className="tile">Home</a>
              </li>
              <li>
                <a href="#about" className="tile">About</a>
              </li>
              <li>
                <a href="#location" className="tile">Location</a>
              </li>
              <li>
                <img src={logo} height={100} alt="Logo" />
              </li>
              <li>
                <a href="#contact" className="tile">Contact</a>
              </li>
              <li>
                <a href="#faqs" className="tile">FAQs</a>
              </li>
              <li>
                <a href="#my-account" className="tile">My Account</a>
              </li>
            </ul>
          </div>
        </header>

        <InquiryPage /> {/*  Opens Home.jsx  */}

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
