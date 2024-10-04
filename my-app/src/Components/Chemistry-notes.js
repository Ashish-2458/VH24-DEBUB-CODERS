import React, { useState } from 'react';
import '../Styles/ChemistryNotes.css'; // Ensure your styles are included

function ChemistryNotes() {
    // State for the search bar
    const [searchTerm, setSearchTerm] = useState('');

    // State for the quiz
    const [questions, setQuestions] = useState([
        {
            question: "What is the atomic number of Carbon?",
            options: ["6", "8", "12", "14"],
            answer: "6"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            answer: "H2O"
        },
        {
            question: "What is the pH level of pure water?",
            options: ["0", "7", "14", "1"],
            answer: "7"
        },
        {
            question: "What type of bond is formed between sodium and chlorine in NaCl?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            answer: "Ionic"
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Nitrogen"
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
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#section1">Introduction to Chemistry</a></li>
                    <li><a href="#section2">Atomic Structure</a></li>
                    <li><a href="#section3">Chemical Bonds</a></li>
                    <li><a href="#section4">Stoichiometry</a></li>
                    <li><a href="#section5">Thermodynamics</a></li>
                </ul>
            </div>

            <div className="main-content">
                <div className="chemistry-notes">
                    <h1>Chemistry Notes</h1>
                    <p>
                        Welcome to the Chemistry notes section! Here, we will cover various fundamental topics in chemistry.
                    </p>
                    
                    <h2 id="section1">Introduction to Chemistry</h2>
                    <p>
                        Chemistry is the study of matter, its properties, and how it interacts with other matter. It plays a vital role in our everyday lives, influencing everything from cooking and cleaning to the development of medicines and technologies. This subject helps us understand the composition, structure, and changes of substances, leading to discoveries that advance various scientific fields.
                    </p>
                    
                    <h2 id="section2">Atomic Structure</h2>
                    <p>
                        Atoms are the basic units of matter. Each atom consists of protons, neutrons, and electrons. The number of protons in an atom determines its atomic number and its identity as a particular element. Neutrons contribute to the atomic mass and stability of the nucleus, while electrons are involved in chemical bonding and reactions.
                    </p>

                    <h2 id="section3">Chemical Bonds</h2>
                    <p>
                        Chemical bonds are interactions between atoms that result in the formation of compounds. The main types of bonds include covalent bonds, where atoms share electrons, and ionic bonds, where electrons are transferred from one atom to another, creating charged ions. Understanding these bonds is crucial for predicting the behavior of substances and their reactions.
                    </p>

                    <h2 id="section4">Stoichiometry</h2>
                    <p>
                        Stoichiometry is the calculation of reactants and products in chemical reactions. It allows chemists to predict the quantities of substances involved in reactions, ensuring the correct proportions of reactants are used. This is essential for successful experimentation and production in laboratories and industries.
                    </p>

                    <h2 id="section5">Thermodynamics</h2>
                    <p>
                        Thermodynamics studies the energy changes in physical and chemical processes. It encompasses concepts like enthalpy, entropy, and Gibbs free energy, which help us understand the feasibility and spontaneity of reactions. Mastering thermodynamics is vital for chemists as it aids in the design of energy-efficient processes and materials.
                    </p>

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

export default ChemistryNotes;