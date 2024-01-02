import React, { useState } from 'react';
import Form from './Form';
import Story from './Story';

function App() {
  const [storyData, setStoryData] = useState(null);

  const handleFormSubmit = ({ adjective, noun, verb }) => {
    setStoryData({ adjective, noun, verb });
  };

  const handleRestart = () => {
    setStoryData(null);
  };

  return (
    <div className="App">
      <h1>MadLibs Game</h1>
      {!storyData ? (
        <Form onFormSubmit={handleFormSubmit} />
      ) : (
        <Story {...storyData} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
