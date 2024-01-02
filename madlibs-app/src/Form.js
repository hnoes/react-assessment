import React, { useState } from 'react';

function Form({ onFormSubmit }) {
  const [adjective, setAdjective] = useState('');
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');

  const isFormValid = adjective && noun && verb;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onFormSubmit({ adjective, noun, verb });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adjective:
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </label>
      <label>
        Noun:
        <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
      </label>
      <label>
        Verb:
        <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
      </label>
      <button type="submit" disabled={!isFormValid}>
        Generate Story
      </button>
    </form>
  );
}

export default Form;
