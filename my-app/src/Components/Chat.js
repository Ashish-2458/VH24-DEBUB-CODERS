// src/Chat.js
import { useState } from 'react';
import axios from 'axios';
import '../Styles/Chat.css'; // Import the custom CSS file

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer('Loading...');
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD8RSJcQ2cKVii_yXwV06amMdl690QJSzo",
        method: "post",
        data: { "contents": [{ "parts": [{ "text": question }] }] }
      });

      // Extracting and formatting the answer
      const rawAnswer = response.data.candidates[0].content.parts[0].text;
      const formattedAnswer = formatAnswer(rawAnswer);
      setAnswer(formattedAnswer);
    } catch (error) {
      setAnswer('Error generating answer. Please try again.');
    }
  }

  const formatAnswer = (rawAnswer) => {
    // Splitting rawAnswer by new lines and filtering out empty lines
    const points = rawAnswer.split('\n').filter(point => point.trim() !== '');
    // Formatting each point with its index number
    return points.map((point, index) => `${index + 1}. ${point}`).join('\n');
  };

  return (
    <div className="chat-container">
      <textarea
        className="chat-textarea"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />
      <button onClick={generateAnswer} className="chat-button">
        Generate Answer
      </button>
      <div className="chat-answer">
        <pre>{answer}</pre>
      </div>
    </div>
  );
}

export default Chat;