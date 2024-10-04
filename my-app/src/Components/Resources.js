import React, { useState } from 'react';
import '../Styles/Resources.css'; // Ensure to include your styles

const Resources = () => {
  const [selectedPhysicsChapter, setSelectedPhysicsChapter] = useState(null);
  const [selectedChemistryChapter, setSelectedChemistryChapter] = useState(null);
  const [selectedMathChapter, setSelectedMathChapter] = useState(null);

  const physicsChapters = [
    { name: 'Kinematics', notes: 'Notes on Kinematics...' },
    { name: 'Dynamics', notes: 'Notes on Dynamics...' },
    { name: 'Thermodynamics', notes: 'Notes on Thermodynamics...' },
    { name: 'Electromagnetism', notes: 'Notes on Electromagnetism...' },
    { name: 'Optics', notes: 'Notes on Optics...' },
    { name: 'Quantum Physics', notes: 'Notes on Quantum Physics...' },
  ];

  const chemistryChapters = [
    { name: 'Stoichiometry', notes: 'Notes on Stoichiometry...' },
    { name: 'Organic Chemistry', notes: 'Notes on Organic Chemistry...' },
    { name: 'Inorganic Chemistry', notes: 'Notes on Inorganic Chemistry...' },
    { name: 'Physical Chemistry', notes: 'Notes on Physical Chemistry...' },
    { name: 'Biochemistry', notes: 'Notes on Biochemistry...' },
  ];

  const mathChapters = [
    { name: 'Calculus', notes: 'Notes on Calculus...' },
    { name: 'Algebra', notes: 'Notes on Algebra...' },
    { name: 'Geometry', notes: 'Notes on Geometry...' },
    { name: 'Trigonometry', notes: 'Notes on Trigonometry...' },
    { name: 'Statistics', notes: 'Notes on Statistics...' },
  ];

  return (
    <div className="resources-container">
      <div className="subject-container">
        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp14061798.jpg)' }}>
          <h2>Physics</h2>
          <div>
            <button onClick={() => setSelectedPhysicsChapter(selectedPhysicsChapter === null ? 0 : null)}>
              {selectedPhysicsChapter === null ? 'Show Chapters' : 'Hide Chapters'}
            </button>
            {selectedPhysicsChapter !== null && (
              <div>
                {physicsChapters.map((chapter, index) => (
                  <div key={index} onClick={() => setSelectedPhysicsChapter(index)}>
                    {chapter.name}
                  </div>
                ))}
              </div>
            )}
            {selectedPhysicsChapter !== null && (
              <div className="notes">
                <h3>{physicsChapters[selectedPhysicsChapter].name} Notes</h3>
                <p>{physicsChapters[selectedPhysicsChapter].notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp11993721.jpg)' }}>
          <h2>Chemistry</h2>
          <div>
            <button onClick={() => setSelectedChemistryChapter(selectedChemistryChapter === null ? 0 : null)}>
              {selectedChemistryChapter === null ? 'Show Chapters' : 'Hide Chapters'}
            </button>
            {selectedChemistryChapter !== null && (
              <div>
                {chemistryChapters.map((chapter, index) => (
                  <div key={index} onClick={() => setSelectedChemistryChapter(index)}>
                    {chapter.name}
                  </div>
                ))}
              </div>
            )}
            {selectedChemistryChapter !== null && (
              <div className="notes">
                <h3>{chemistryChapters[selectedChemistryChapter].name} Notes</h3>
                <p>{chemistryChapters[selectedChemistryChapter].notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp13606474.jpg)' }}>
          <h2>Mathematics</h2>
          <div>
            <button onClick={() => setSelectedMathChapter(selectedMathChapter === null ? 0 : null)}>
              {selectedMathChapter === null ? 'Show Chapters' : 'Hide Chapters'}
            </button>
            {selectedMathChapter !== null && (
              <div>
                {mathChapters.map((chapter, index) => (
                  <div key={index} onClick={() => setSelectedMathChapter(index)}>
                    {chapter.name}
                  </div>
                ))}
              </div>
            )}
            {selectedMathChapter !== null && (
              <div className="notes">
                <h3>{mathChapters[selectedMathChapter].name} Notes</h3>
                <p>{mathChapters[selectedMathChapter].notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
