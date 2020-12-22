import React from 'react';

const CharacterCount = ({ count, threshold }) => {
  const charactersAllowed = threshold - count;
  const limitExceeded = charactersAllowed <= 0;
  return (
    <div
      className="character-count"
      style={{
        fontSize: '1.2rem',
        color: limitExceeded ? '#b9003e' : 'rgba(0,0,0,.7)',
        fontStyle: 'italic',
        textAlign: 'right',
      }}
    >
      <strong>{charactersAllowed}</strong> of {threshold} characters
    </div>
  );
};

export default CharacterCount;
