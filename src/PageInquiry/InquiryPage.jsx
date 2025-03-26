import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshirt from "../imgs/inquiryPage/tshirt.png";
import btnNext from "../imgs/inquiryPage/btnNext.png";
import btnPrev from "../imgs/inquiryPage/btnPrev.png";
import tarpaulin from "../imgs/inquiryPage/tarpaulin.png"
import printing from "../imgs/inquiryPage/printing.png"
import calendar from "../imgs/inquiryPage/calendar.png"
import invitation from "../imgs/inquiryPage/invitation.png"
import './InquiryPage.css';


const data = [
  { image: tshirt, name: "T-shirt printing", description: "High-quality custom t-shirts." },
  { image: printing, name: "Printing", description: "Professional printing services." },
  { image: calendar, name: "Calendar", description: "Custom-designed calendars." },
  { image: tarpaulin, name: "Tarpaulin", description: "Durable tarpaulin prints." },
  { image: invitation, name: "Invitation Card", description: "Elegant invitation cards." },
];


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <img src={btnNext} alt="Next" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <img src={btnPrev} alt="Previous" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '10px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px',
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
      },
    },
  ],
};


function InquiryPage() {
  return (
    <div style={{ width: "85%", margin: "auto", padding: "5px 20px", position: "relative" }}>
      <h2 className="Service">Choose a service</h2>
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="serviceName" key={item.name}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img className="serviceImage"
                  src={item.image}  
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p className="serviceDescription">{item.description}</p>
                <button className="btnConfirm">Confirm</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


export default InquiryPage;