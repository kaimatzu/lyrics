import React, { useState, useEffect, useMemo } from 'react';
import Button from './Button'
import Viewport from './Viewport';
import './App.css';

function App() {
  const [showTextBox, setShowTextBox] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [currentColor, setCurrentColor] = useState(''); // New state to track current color
  const [savedLyrics, setSavedLyrics] = useState([]);
  const [currentLyric, setCurrentLyric] = useState('');

  const handleButtonClick = (color) => {
    setShowTextBox(true);
    setTextInput('');
    setCurrentColor(color); // Set the current color when a button is clicked
  };

  const handleTextBoxChange = (event) => {
    setTextInput(event.target.value);
    setCurrentLyric(event.target.value);
  };

  const handleTextBoxEnter = (event) => {
    if (event.key === 'Enter') {
      setShowTextBox(false);
      // Save the text and color when Enter is pressed
      setSavedLyrics([...savedLyrics, { text: textInput, color: currentColor }]);
      setTextInput(''); // Clear the text input
      setCurrentLyric(''); // Clear the current lyric
    }
  };

  return (
    <div className="App">
      <h1>Complete the lyrics</h1>
      <div className="buttons-container">
        <Button label="First Singer" color="#ad93e9" onClick={handleButtonClick} />
        <Button label="Second Singer" color="#9ed369" onClick={handleButtonClick} />
        <Button label="Third Singer" color="#48cead" onClick={handleButtonClick} />
        <Button label="Fourth Singer" color="#ed86bf" onClick={handleButtonClick} />
      </div>
      {showTextBox && (
        <input
          type="text"
          value={textInput}
          onChange={handleTextBoxChange}
          onKeyDown={handleTextBoxEnter}
          placeholder="Type lyrics here and press Enter"
          className="textbox"
        />
      )}
      <Viewport savedLyrics={savedLyrics} currentLyric={currentLyric} currentColor={currentColor}  />
    </div>
  );
}

export default App;
