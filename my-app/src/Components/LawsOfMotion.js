import React, { useState } from 'react';
import '../Styles/LawsOfMotion.css';

function LawsOfMotion() {
    // State for the search bar
    const [searchTerm, setSearchTerm] = useState('');

    // State for the quiz
    const [questions, setQuestions] = useState([
        {
            question: "What is Newton’s First Law of Motion also known as?",
            options: ["Law of Inertia", "Law of Motion", "Law of Acceleration", "Law of Rest"],
            answer: "Law of Inertia"
        },
        {
            question: "What is the equation for Newton's Second Law of Motion?",
            options: ["F = m/a", "F = m × a", "F = m + a", "F = m - a"],
            answer: "F = m × a"
        },
        {
            question: "What does Newton’s Third Law of Motion state?",
            options: ["For every action, there is an equal and opposite reaction", "An object at rest stays at rest", "The acceleration of an object is proportional to the force", "None of the above"],
            answer: "For every action, there is an equal and opposite reaction"
        },
        {
            question: "What happens to an object at rest if no external force acts on it?",
            options: ["It stays at rest", "It moves", "It accelerates", "It changes direction"],
            answer: "It stays at rest"
        },
        {
            question: "According to Newton’s Second Law, what affects acceleration?",
            options: ["Mass and velocity", "Force and mass", "Velocity and distance", "None of the above"],
            answer: "Force and mass"
        },
    ]);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
    const [score, setScore] = useState(null);

    // Function to handle search input
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to handle answer change
    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = answer;
        setUserAnswers(newAnswers);
    };

    // Function to calculate score
    const calculateScore = () => {
        const newScore = userAnswers.reduce((acc, answer, index) => {
            return answer === questions[index].answer ? acc + 1 : acc;
        }, 0);
        setScore(newScore);
    };

    // Function to reset the quiz
    const resetQuiz = () => {
        setUserAnswers(Array(questions.length).fill(''));
        setScore(null);
    };

    return (
        <div className="content-layout">
            <div className="sidebar">
            <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    />
                </div>
                <h2>Previous Year Questions (PYQs)</h2>
                <ul>
                    <li><a href="#2020">JEE 2020</a></li>
                    <li><a href="#2021">JEE 2021</a></li>
                    <li><a href="#2022">JEE 2022</a></li>
                    <li><a href="#2023">JEE 2023</a></li>
                    <li><a href="#2024">JEE 2024</a></li>
                </ul>
            </div>

            <div className="main-content">
                
                <div className="laws-of-motion">
                    <h1>Laws of Motion</h1>
                    <p>
                        This article will go through Sir Isaac Newton’s Laws of Motion, which revolutionised our understanding of the physical world centuries ago. This article explores Newton’s three laws and provides a deep understanding of their implications. Starting with Newton’s First Law of Motion, also known as the Law of Inertia, we delve into how objects behave when at rest or in uniform motion. Moving on to Newton’s Second Law of Motion, we unravel the relationship between mass, acceleration and external forces. Next, we explore Newton’s Third Law of Motion, shedding light on the concept of action and reaction. A concise summary of Newton’s laws offers a recap of the key concepts, while numerical examples in the Laws of Motion Numericals section demonstrate practical applications. Finally, our Frequently Asked Questions (FAQs) section covers additional queries, ensuring a comprehensive understanding of Newton’s Laws of Motion.
                    </p>
                    <img title="Laws-of-motion" className="law-image" src={require('../assets/laws.png')} alt="Newton's Law Of Motion" />


                    <h1>Newton’s First Law of Motion</h1>
                    <p>
                        Newton’s First Law of Motion, also known as the Law of Inertia, is a fundamental principle that describes the behaviour of objects in the absence of external influences. The term “Law of Inertia” emphasizes the concept of inertia, which refers to the property of massive objects to resist changes in their state of motion. This idea stems from the observation that objects naturally maintain their current state of rest or motion, resisting any changes unless acted upon by an external force.
                    </p>
                    <p>
                        By naming the first law of motion the “Law of Inertia,” Newton highlighted this inherent property of objects and laid the groundwork for understanding how forces can cause changes in motion. Newton’s first law of motion states that objects persist in their current state of motion unless compelled to do otherwise by an external force. Whether an object is at rest or in uniform motion, it will continue in that state unless a net external force acts upon it.
                    </p>
                    <p>
                        One crucial insight provided by Newton’s First Law is that the object will maintain a constant velocity in the absence of a net force resulting from unbalanced forces acting on an object. If the object is already in motion, it will continue moving at the same speed and direction. Likewise, if the object is at rest, it will remain stationary. However, introducing an additional external force will cause the object’s velocity to change, responding to the magnitude and direction of the force applied.
                    </p>
                    <img title="First Law of Motion" className="law-image" src={require('../assets/first-law.png')} alt="Newton's First Law Of Motion" />

                    <p>
                        Understanding Newton’s First Law of Motion sets the stage for a deeper exploration of the subsequent laws that govern the complexities of motion. By comprehending this fundamental principle, we gain crucial insights into how objects behave independently and how external forces influence their motion. The first law of motion provides a strong foundation for further understanding the dynamics and behaviour of objects in the physical world.
                    </p>

                    <h1>Newton’s Second Law of Motion</h1>
                    <p>This section will explore Newton’s Second Law of Motion, which provides a deeper understanding of how bodies respond to external forces.</p>
                    <p>The second law of motion describes the relationship between the force acting on a body and the resulting acceleration. According to Newton’s second law, the force acting on an object is equal to the product of its mass and acceleration.</p>
                    <p>Mathematically, we express Newton’s Second Law as follows:</p>
                    <div className="mathjax-scroll">
                        <p>F = m × a</p>
                    </div>
                    <p>Here, F represents the force, m is the object’s mass and a is the acceleration produced. This equation reveals that the acceleration of an object is directly proportional to the magnitude of the net force applied in the same direction as the force and inversely proportional to the object’s mass.</p>
                    <img title="Newton's Second Law" className="law-image" src={require('../assets/second-law.png')} alt="Newton's Second Law of Motion" />

                    <p>
                        By understanding Newton’s Second Law, we can determine how much an object will accelerate when subjected to a specific net force. The equation highlights the intricate relationship between force, mass, and acceleration, providing a quantitative framework for analysing the dynamics of objects in motion.
                    </p>
                    <p>
                        The concise and powerful expression of Newton’s Second Law showcases the fundamental principle that governs the relationship between force and acceleration in physics. With this law, we gain a quantitative understanding of how external forces impact the motion of objects based on their mass and the resulting acceleration they experience.
                    </p>
                    <p>
                        By exploring Newton’s Second Law of Motion, we deepen our insights into the mechanics of motion, setting the stage for further exploration of the principles that govern the complexities of physical phenomena.
                    </p>

                    <h2>Newton’s Third Law of Motion</h2>
                    <p>This section will discuss Newton’s Third Law of Motion, revealing a fascinating relationship between forces exerted by interacting bodies.</p>
                    <p>Newton’s Third Law of Motion states that for every action, there is an equal and opposite reaction. When two bodies interact, they apply forces on each other that are equal in magnitude and opposite in direction. This law highlights the concept that forces always occur in pairs.</p>
                    <img title="Newton's Third Law" className="law-image" src="https://media.geeksforgeeks.org/wp-content/uploads/20230314153559/Reaction-of-Alcohols-First-law-of-motion-and-Latent-heat-(Feedback).png" />
                    <p>
                        To illustrate this principle, consider the example of a book resting on a table. As the book applies a downward force equal to its weight on the table, the table, in turn, exerts an equal and opposite force on the book. This occurs because the book slightly deforms the table’s surface, causing the table to push back on the book, much like a compressed spring releasing its energy.
                    </p>
                    <p>
                        This third law of motion has profound implications, including conserving momentum. Momentum is a property of moving objects determined by an object’s mass and velocity. According to Newton’s third law, the total momentum of an isolated system remains constant. This means that in any interaction, the total momentum before and after the interaction remains the same, regardless of the forces involved.
                    </p>
                    <p>
                        Understanding Newton’s third law of motion deepens our comprehension of the interconnectedness and equilibrium within the physical world. It provides a framework for analysing and predicting the effects of forces in various scenarios, from everyday interactions to complex mechanical systems.
                    </p>
                    <p>
                        As we delve further into the subsequent sections on the laws of motion, we will continue building upon the foundational principles of inertia, force, and action-reaction relationships.
                    </p>
                    <a href="https://www.youtube.com/live/aPwqkZCBouU?si=">
                        <img src="https://i.ytimg.com/vi/aPwqkZCBouU/hqdefault_29033.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6aN7Ju2obXAkinNOI-jOb2DY3ww" alt="Newton's Laws of Motion Video" className="law-image" />
                    </a>

                    {/* Quiz Section */}
                    <h2>Quiz</h2>
                    <div>
                        {questions.map((q, index) => (
                            <div key={index} className="quiz-question">
                                <p>{q.question}</p>
                                {q.options.map((option) => (
                                    <label key={option}>
                                        <input 
                                            type="radio" 
                                            name={`question-${index}`} 
                                            value={option} 
                                            checked={userAnswers[index] === option}
                                            onChange={() => handleAnswerChange(index, option)} 
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        ))}
                        <button onClick={calculateScore} disabled={score !== null}>
                            Submit
                        </button>
                        <button onClick={resetQuiz} style={{ marginLeft: '10px' }}>
                            Reset Quiz
                        </button>
                        {score !== null && <p>Your Score: {score}/{questions.length}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LawsOfMotion;
