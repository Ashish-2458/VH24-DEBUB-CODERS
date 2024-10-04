import React from 'react';
import '../Styles/HeroSection.css';
import Benefits from './Benefits';
import Subject from './Subject';
import Testimonials from './Testimonials';
function HeroSection() {
  return (

    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Tutor</h1>
        <p>We help you find perfect tutors for 1-on-1 lessons. It is completely free and private.</p>
        <button className="btn btn-get-started">Get Started</button>
        <button className="btn btn-watch">See how it works</button>
        <img src="pic.jpg" alt="" />
      </div>

      <div className="hero-stats">
        <div><strong>870</strong> Expert tutors</div>
        <div><strong>20,000+</strong> Hours tutored</div>
        <div><strong>298</strong> Subjects</div>
        <div><strong>72,920</strong> Active students</div>
        
      </div><br /><br />
      <Benefits/><br />
      <Subject/><br />
      <Testimonials/>
    </section>
  );
}

export default HeroSection;