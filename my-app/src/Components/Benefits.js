import React from 'react';
import '../Styles/Benefits.css';

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <h2>Benefits of online tutoring services with us</h2>
      <div className="benefits-list">
        <div className="benefit-item">
          <h3>One-on-one Teaching</h3>
          <p>Personalized teaching according to your needs.</p>
        </div>
        <div className="benefit-item">
          <h3>24/7 Tutor Availability</h3>
          <p>Our tutors are available any time to help you out.</p>
        </div>
        <div className="benefit-item">
          <h3>Interactive Whiteboard</h3>
          <p>Real-time interaction with tutors via whiteboard.</p>
        </div>
        <div className="benefit-item">
          <h3>Affordable Prices</h3>
          <p>Get the best tutors that fit your budget.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;