import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../Styles/Resources.css'; // Ensure to include your styles

const Resources = () => {
  const [selectedPhysicsChapter, setSelectedPhysicsChapter] = useState(null);
  const [selectedChemistryChapter, setSelectedChemistryChapter] = useState(null);
  const [selectedMathChapter, setSelectedMathChapter] = useState(null);

  const physicsChapters = [
    { name: 'Kinematics', path: '/lawsofMotion' },
    { name: 'Dynamics', path: '/dynamics' }, // Add paths for other chapters
    { name: 'Thermodynamics', path: '/thermodynamics' },
    { name: 'Electromagnetism', path: '/electromagnetism' },
    { name: 'Optics', path: '/optics' },
    { name: 'Quantum Physics', path: '/quantumPhysics' },
  ];

  const chemistryChapters = [
    { name: 'Stoichiometry', path: '/chemistry' },
    { name: 'Organic Chemistry', path: '/organicChemistry' },
    { name: 'Inorganic Chemistry', path: '/inorganicChemistry' },
    { name: 'Physical Chemistry', path: '/physicalChemistry' },
    { name: 'Biochemistry', path: '/biochemistry' },
  ];

  const mathChapters = [
    { name: 'Calculus', path: '/calculus' },
    { name: 'Algebra', path: '/algebra' },
    { name: 'Geometry', path: '/geometry' },
    { name: 'Trigonometry', path: '/trigonometry' },
    { name: 'Statistics', path: '/statistics' },
  ];

  return (
    <div className="resources-container">
      <div className="subject-container">
        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp14061798.jpg)' }}>
          <h2 className='heading'>Physics</h2>
          <button onClick={() => setSelectedPhysicsChapter(selectedPhysicsChapter === null ? 0 : null)}>
            {selectedPhysicsChapter === null ? 'Show Chapters' : 'Hide Chapters'}
          </button>
          {selectedPhysicsChapter !== null && (
            <div>
              {physicsChapters.map((chapter, index) => (
                <Link key={index} to={chapter.path} style={{ display: 'block', margin: '5px 0' }}>
                  {chapter.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp11993721.jpg)' }}>
          <h2 className='heading'>Chemistry</h2>
          <button onClick={() => setSelectedChemistryChapter(selectedChemistryChapter === null ? 0 : null)}>
            {selectedChemistryChapter === null ? 'Show Chapters' : 'Hide Chapters'}
          </button>
          {selectedChemistryChapter !== null && (
            <div>
              {chemistryChapters.map((chapter, index) => (
                <Link key={index} to={chapter.path} style={{ display: 'block', margin: '5px 0' }}>
                  {chapter.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="subject" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp13606474.jpg)' }}>
          <h2 className='heading'>Mathematics</h2>
          <button onClick={() => setSelectedMathChapter(selectedMathChapter === null ? 0 : null)}>
            {selectedMathChapter === null ? 'Show Chapters' : 'Hide Chapters'}
          </button>
          {selectedMathChapter !== null && (
            <div>
              {mathChapters.map((chapter, index) => (
                <Link key={index} to={chapter.path} style={{ display: 'block', margin: '5px 0' }}>
                  {chapter.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
