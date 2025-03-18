import React, { useState } from 'react';
import './PriceShirt.css';

function PriceShirt() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='PriceShirt'>
            <div className='LeftColumn'>
                <button className='btnGoBack'>Choose another service</button>
                <img src="https://tinyurl.com/mrv96adk" alt="" style={{ width: '75%', height: '500px', borderRadius: 10, border: '10px solid #0070f3' }} />
            </div>
            <div className='RightColumn'>
                <h1 style={{fontSize:75}}><u>T-Shirt Printing</u></h1>
                <p style={{fontSize:24}}>We use high-quality screen printing to create durable and vibrant designs for personal, business, or event needs. Perfect for bulk orders with a professional finish.</p>
                <div className='PriceTable'>
                  <div class="container">
                    <tr>
                      <th class="header-color1">1 Color</th>
                      <th class="header-color2">2 Colors</th>
                      <th class="header-color3">Multiple Colors</th>
                    </tr>
                    <tr>
                      <td>• Logo Size</td>
                      <td>• Logo Size</td>
                      <td>• Logo Size</td>
                    </tr>
                    <tr>
                      <td>• Medium Size</td>
                      <td>• Medium Size</td>
                      <td>• Medium Size</td>
                    </tr>
                    <tr>
                      <td>• Large Size</td>
                      <td>• Large Size</td>
                      <td>• Large Size</td>
                    </tr>
                    <tr>
                      <td>• Back to back</td>
                      <td>• Back to back</td>
                      <td>• Back to back</td>
                    </tr>
                    <tr>
                      <td>Call for exact pricing and available discounts.</td>
                      <td>Call for exact pricing and available discounts.</td>
                      <td>Call for exact pricing and available discounts.</td>
                    </tr>
                  </div>
                </div>
            </div>
        </div>

       
    </>
  )
}

export default PriceShirt