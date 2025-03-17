import logo from './imgs/logo.png';
import fb from './imgs/facebook.png';
import messenger from './imgs/messenger.png'
import gmail from './imgs/gmail.png'
import React, { useState } from 'react';
import Home from './Home.jsx';
import PriceShirt from './PricePage/PriceShirt.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className='Header-bar'>
            <div>
              <ul>
                  <li>
                      <button>Home</button>
                  </li>
                  <li>
                      <button>About</button>
                  </li>
                  <li>
                      <button>Location</button>
                  </li>
                  <li>
                      <img src={logo} height={100}/>
                  </li>
                  <li>
                      <button>Contact</button>
                  </li>
                  <li>
                      <button>FAQs</button>
                  </li>
                  <li>
                      <button>My Account</button>
                  </li>
              </ul>
            </div>
          </header>
        
        <PriceShirt /> {/*  Opens Home.jsx  */}

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
