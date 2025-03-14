import logo from './imgs/logo.png';
import mail from './imgs/mail.png';
import telephone from './imgs/telephone.png';
import shop from './imgs/shop.png';
import React, { useState } from 'react';
import './Home.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Home'>
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
                    <img src={logo} height={100}></img>
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
            <div>
                <div className='Banner'>
                  <div className='Banner-text'>
                      <h1>WE PROVIDE TOP-QUALITY<br></br>DIGITAL AND PRINTING<br></br>SOLUTIONS.</h1>
                      <p>Offering reliable services to meet your business and<br></br>personal needs with precision and efficiency.</p>
                      <button className='btnEnquire'>ENQUIRE PRICE</button>
                  </div>
                  <div className='Banner-image'>
                      <img src={logo} height={400}></img>
                  </div>
                </div>

                <div className='About'>
                    <h1>About Ker-C<br></br>Printing Services</h1>
                    <h3>Your ideas, our prints-delivered with precision and care.</h3>
                    <h3>At Ker-C Printing Services, we blend quality craftsmanship with modern convenience. Whether you need vibrant prints, custom designs, or seamless order tracking, our online system makes the process effortless. From inquiries to final delivery, we ensure efficiency, accuracy, and top-tier service every step of the way.</h3>
                    <h3>With a range of services and excellent customer service, we are committed to providing you with quality products that meet your needs. Whether it's custom prints, business materials, or personalized designs, we ensure precision, reliability, and a seamless experience from start to finish. Your vision is our priority, and we strive to bring it to life with exceptional craftsmanship and attention to detail.</h3>
                    <h3>Experience printing made simple.</h3>
                    <button className='btnEnquire'>ENQUIRE PRICE</button>
                </div>

                <div className='Location'>
                <div className='Location-image'>
                    <img height={350} width={400} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.donmai.us%2Foriginal%2F3d%2F72%2F__nanashi_mumei_and_nanashi_mumei_s_horror_painting_hololive_and_1_more_drawn_by_kukie_nyan__3d728ed119392a286a8e6b7c7a5c6909.png%3Fdownload%3D1&f=1&nofb=1&ipt=c59dd28818bb7ca3110788d021f05e519fdbbb49a3b0eea0b1de472c55e3b5e7&ipo=images'></img>
                </div>
                <div className='Location-description'>
                    <h2>Ker-C Printing Services</h2>
                    <h3>Ker-C Printing Services is conveniently located in the city center of Panabo, near Gaisano Grand Mall.</h3>
                    <p>Brgy, 1979 Ybañez Compound, Panabo Wharf Rd, Panabo, 8105 Davao del Norte</p>
                    <a href='https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA'>Get Directions</a>
                </div>
                </div>

                <div className='Contact'>
                <ul>
                    <li>
                    <img src={shop} height={150}></img>
                    <div>
                        <h3>Opening Hours:</h3>
                        <h3>Monday - Saturday</h3>
                        <h3>8:00 AM - 7:00 PM</h3>
                    </div>
                    </li>
                    <li>
                    <img src={telephone} height={150}></img>
                    <div>
                        <h3>Call Us:</h3>
                        <h3>09276850004</h3>
                        <h3>09123456789</h3>
                    </div>
                    </li>
                    <li>
                    <img src={mail} height={150}></img>
                    <div>
                        <h3>Send us an Email:</h3>
                        <h3>kercprinting@gmail.com</h3>
                    </div>
                    </li>
                </ul>
                <button className='btnEnquire'>ENQUIRE PRICE</button>
                </div>

                <div className='FAQ'>
                    <h1>KER-C FAQs</h1>
                        <ul>
                            <li>
                            <h2>1. What services do you offer?</h2>
                            <p>We provide high-quality printing services, including document printing, custom designs, business materials, and more.</p></li>
                            <li>
                            <h2>2. Where are you located?</h2>
                            <p>We are in the city center of Panabo, near Gaisano Grand Mall, for easy access.</p></li>
                            <li>
                            <h2>3. Can I place an order online?</h2>
                            <p>Yes! Our online inquiry system allows you to request services, track orders, and manage your account conveniently.</p></li>
                            <li>
                            <h2>4. How long does it take to process an order?</h2>
                            <p>Processing time depends on the service. Standard prints are usually completed within the day, while bulk or custom orders may take longer.</p></li>
                            <li>
                            <h2>5. Do you offer delivery?</h2>
                            <p>Currently, we provide pickup at our location. Contact us for more details on delivery options.</p></li>
                            <li>
                            <h2>6. How can I track my order?</h2>
                            <p>You can track your order through our online system or contact us for updates.</p></li>
                            <li>
                            <h2>7. What payment methods do you accept?</h2>
                            <p>We accept cash and digital payments. More details are available at our store.</p>
                            <p>For more inquiries, feel free to contact us!</p></li>
                        </ul>
                </div>
                <button className='btnEnquire'>ENQUIRE PRICE</button>   

                <h2 className='Services' style={{justifyContent: 'center', padding: '10px'}}>Services</h2>
                <div className='Services'>
                    <div>
                        <a href=''>Offset Printing</a>
                        <a href=''>Digital Printing</a>
                        <a href=''>Business Cards</a>
                        <a href=''>Flyers & Brochures</a>
                        <a href=''>Stickers & Labels</a>
                        <a href=''>Calendars</a>
                        <a href=''>Envelopes</a>
                    </div>
                    <div>
                        <a href=''>Newsletter</a>
                        <a href=''>Wedding & Invitation Cards</a>
                        <a href=''>ID Cards</a>
                        <a href=''>Tarpaulin</a>
                        <a href=''>Layouting</a>
                        <a href=''>Election Propaganda</a>
                        <a href=''>Bookbinding</a>
                    </div>
                    <div>
                        <a href=''>Yearbook Printing</a>
                        <a href=''>Lamination</a>
                        <a href=''>T-Shirt Printing</a>
                        <a href=''>Xerox / Photocopy</a>
                        <a href=''>Carbonless Receipts</a>
                        <a href=''>Graduation Ribbons</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
