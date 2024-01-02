import React from 'react';

function Story({ adjective, noun, verb, onRestart }) {
  const generateStory = () => {
    return `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}.`;
  };

  return (
    <div>
      <h2>Generated Story:</h2>
      <p>{generateStory()}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Story;
