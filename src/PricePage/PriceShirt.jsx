import React, { useState } from 'react';
import './PriceShirt.css';

function PriceShirt() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='PriceShirt'>
            <div className='LeftColumn'>
                <button className='btnGoBack'>Choose another service</button>
                <img src="https://tinyurl.com/mrv96adk" alt="" style={{ width: '75%', height: '80%', borderRadius: 10, border: '10px solid #0070f3' }} />
            </div>
            <div className='RightColumn'>
                <h1 style={{fontSize:75}}><u>T-Shirt Printing</u></h1>
                <p style={{fontSize:32}}>We use high-quality screen printing to create durable and vibrant designs for personal, business, or event needs. Perfect for bulk orders with a professional finish.</p>
            </div>
        </div>
    </>
  )
}

export default PriceShirt