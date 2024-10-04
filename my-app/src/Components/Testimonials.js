import React from 'react';
import '../Styles/Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Students Say About Us</h2>
      <div className="testimonial-item">
        <p>“As a student on this platform, I can confidently say it's helped me excel in academics.”</p>
        <h4>Albert Monica</h4>
      </div>
      <div className="testimonial-item">
        <p>“The tutors are amazing and help guide me every step of the way.”</p>
        <h4>Sophia Johnson</h4>
      </div>
    </section>
  );
}

export default Testimonials;