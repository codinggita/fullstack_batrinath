import React, { useState } from "react";
import './testimonilas.css';
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Hello Just try the product you guys fall in love with prodcut",
      author: "John",
    },
    {
      quote: "This the best product",
      author: "Joker",
    },
    {
      quote: "This the best product",
      author: "Bruce",
    },
  ];

  const handlePreClick = ()=>{
    setCurrentIndex(
        (currentIndex + testimonials.length-1) % testimonials.length
    )
  }

  const handleNextClick = ()=>{
    setCurrentIndex(
        (currentIndex + 1) % testimonials.length
    )
  }
  return (
    <div className="testimonials">
      <div className="testimonials-quote">{testimonials[currentIndex].quote}</div>

      <div className="testimonials-author">{testimonials[currentIndex].author}</div>

      <div className="testimonials-nav">
        <button onClick={handlePreClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
