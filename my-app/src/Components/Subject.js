import React from 'react';
import '../Styles/Subject.css';
import Resources from './Resources'

function Subject() {
  return (
    <section id="subjects" className="subjects">
      <h2>Find Online Tutor in Any Subject</h2>
      <div className="subjects-list">
        <button className="subject-btn" >Engineering</button>
        <button className="subject-btn">Physics</button>
        <button className="subject-btn">Chemistry</button>
        <button className="subject-btn">Mathematics</button>
        <button className="subject-btn">Biology</button>
        <button className="subject-btn">Advanced Physics</button>
        {/* <button className="subject-btn">Web Design</button> */}
      </div>
    </section>
  );
}

export default Subject;