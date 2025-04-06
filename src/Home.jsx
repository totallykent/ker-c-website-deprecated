import logo from './imgs/logo.png';
import mail from './imgs/mail.png';
import telephone from './imgs/telephone.png';
import shop from './imgs/shop.png';
import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import './Home.css';

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide high-quality printing services, including document printing, custom designs, business materials, and more.",
    },
    {
      question: "Where are you located?",
      answer: "We are in the city center of Panabo, near Gaisano Grand Mall, for easy access.",
    },
    {
      question: "Can I place an order online?",
      answer: "Yes! Our online inquiry system allows you to request services, track orders, and manage your account conveniently.",
    },
    {
      question: "How long does it take to process an order?",
      answer: "Processing time depends on the service. Standard prints are usually completed within the day, while bulk or custom orders may take longer.",
    },
    {
      question: "Do you offer delivery?",
      answer: "Currently, we provide pickup at our location. Contact us for more details on delivery options.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order through our online system or contact us for updates.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash and digital payments. More details are available at our store.",
    },
  ];
  return (
    <>
      <div className='Home'>
        <div>
          <div className='Banner'>
            <div className='Banner-text'>
              <h1>WE PROVIDE TOP-QUALITY<br />DIGITAL AND PRINTING<br />SOLUTIONS.</h1>
              <p>Offering reliable services to meet your business and<br />personal needs with precision and efficiency.</p>
              <button className='btnEnquire'>ENQUIRE PRICE</button>
            </div>
            <div className='Banner-image'>
              <img src={logo} alt="Ker-C Logo" />
            </div>
          </div>

          <div className='About'>
            <h1>About Ker-C<br />Printing Services</h1>
            <h3>Your ideas, our prints—delivered with precision and care.</h3>
            <h3>At Ker-C Printing Services, we blend quality craftsmanship with modern convenience. Whether you need vibrant prints, custom designs, or seamless order tracking, our online system makes the process effortless.</h3>
            <h3>With a range of services and excellent customer service, we are committed to providing you with quality products that meet your needs.</h3>
            <h3>Experience printing made simple.</h3>
            <button className='btnEnquire'>ENQUIRE PRICE</button>
          </div>

          <div className='Location'>
            <div className='Location-map'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4059264230295!2d125.68439627571603!3d7.3082109135458735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f945967c2cdf47%3A0x42db7931e05c970b!2sKER-C%20Printing%20Services!5e0!3m2!1sen!2sph!4v1743257498303!5m2!1sen!2sph"
                className='map-frame'
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ker-C Location"
              />
            </div>
            <div className='Location-description'>
              <h2>Ker-C Printing Services</h2>
              <h3>Ker-C Printing Services is conveniently located in the city center of Panabo, near Gaisano Grand Mall.</h3>
              <p>Brgy, 1979 Ybañez Compound, Panabo Wharf Rd, Panabo, 8105 Davao del Norte</p>
              <a href='https://maps.app.goo.gl/MEUbVS46JeiXoUvSA'>Get Directions</a>
            </div>
          </div>

          <div className='Contact'>
            <ul>
              <li>
                <img src={shop} alt="Shop Icon" />
                <div>
                  <h3>Opening Hours:</h3>
                  <h3>Monday - Saturday</h3>
                  <h3>8:00 AM - 7:00 PM</h3>
                </div>
              </li>
              <li>
                <img src={telephone} alt="Telephone Icon" />
                <div>
                  <h3>Call Us:</h3>
                  <h3>09276850004</h3>
                  <h3>09123456789</h3>
                </div>
              </li>
              <li>
                <img src={mail} alt="Mail Icon" />
                <div>
                  <h3>Send us an Email:</h3>
                  <h3>kercprinting@gmail.com</h3>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <img alt="Message Icon" />
                <div>
                  <h3>Message Us:</h3>
                  <h3><a href="">KER-C Printing Services</a></h3>
                </div>
              </li>
              <li>
                <img alt="Follow Icon" />
                <div>
                  <h3>Follow Us</h3>
                  <h3>KER-C Printing Services</h3>
                </div>
              </li>
            </ul>
          </div>
          <button className='btnEnquire'>ENQUIRE PRICE</button>

          <div className='FAQ'>
            <h1>KER-C FAQs</h1>
            <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{index + 1}. {faq.question}</h2>
              <FaChevronDown className={`faq-icon ${openIndex === index ? "rotate" : ""}`} />
            </div>
            <p className={`faq-answer ${openIndex === index ? "open" : ""}`}>{faq.answer}</p>
          </li>
        ))}
      </ul>
          </div>
          <button className='btnEnquire'>ENQUIRE PRICE</button>

          <h2 className='Services' style={{ justifyContent: 'center', padding: '10px' }}>Services</h2>
          <div className='Services'>
            <div>
              <a>T-Shirt Printing</a>
              <a>Flyers / Brochure / Election Propaganda</a>
              <a>Calendar</a>
              <a>Forms</a>
              <a>Carbonless Receipts</a>
              <a>Ordinary Receipts</a>
              <a>Envelope</a>
            </div>
            <div>
              <a>Tarpaulin</a>
              <a>Duplo/Duplication</a>
              <a>Xerox/Photocopy</a>
              <a>ID Card</a>
              <a>ID Pictures</a>
              <a>Layouting</a>
              <a>Business Card</a>
            </div>
            <div>
              <a>Invitation</a>
              <a>Printing Service</a>
              <a>Newsletter</a>
              <a>Yearbook</a>
              <a>Graduation Ribbon</a>
              <a>Lamination</a>
              <a>Sticker / Labels</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
