import Home from './Home.jsx';
import fb from './imgs/facebook.png';
import messenger from './imgs/messenger.png'
import gmail from './imgs/gmail.png'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
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
