import React from 'react';
import '../Styles/HeroSection.css';
import Benefits from './Benefits';
import Subject from './Subject';
import Testimonials from './Testimonials';
import Footer from './Footer';
import VideoConference from './VideoConference';
import { useNavigate } from 'react-router-dom';
import LawsOfMotion from './LawsOfMotion';
// import TutorStudentPage from './Tutors';




 
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="fade-in">Find Your Perfect Tutor</h1>
          <br></br>
          <br></br>
          <p className="fade-in2">We help you find perfect tutors for 1-on-1 lessons. It is completely free and private.</p>
          <div className="btn-group">
            <button className="btn btn-get-started" >Get Started</button>
            <button className="btn btn-watch">See how it works</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={require('../assets/tutor_img.jpg')} alt="Tutoring" className="hero-image slide-in" />
        </div>
      </div>

      <div className="hero-stats ">
        <div><strong>870</strong> Expert tutors</div>
        <div><strong>20,000+</strong> Hours tutored</div>
        <div><strong>298</strong> Subjects</div>
        <div><strong>72,920</strong> Active students</div>
      </div><br /><br />
      <Benefits /><br />
      <Subject /><br />
      <Testimonials />
      {/* < TutorStudentPage/> */}
      {/* <VideoConference /> */}
      {/* <LawsOfMotion/> */}
    </section>
  );
}

export default HeroSection;