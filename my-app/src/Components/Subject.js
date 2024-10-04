import React from 'react';
import '../Styles/Subject.css';

function Subject() {
  return (
    <section id="subjects" className="subjects">
      <h2>Find Online Tutor in Any Subject</h2>
      <div className="subjects-list">
        <button className="subject-btn">Engineering</button>
        <button className="subject-btn">Programming</button>
        <button className="subject-btn">Languages</button>
        <button className="subject-btn">Science</button>
        <button className="subject-btn">History</button>
        <button className="subject-btn">Physiology</button>
        <button className="subject-btn">Web Design</button>
      </div>
    </section>
  );
}

export default Subject;