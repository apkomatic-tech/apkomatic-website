import React from 'react';

const CharacterCount = ({ count, threshold }) => {
  const charactersAllowed = threshold - count;
  const limitExceeded = charactersAllowed <= 0;
  return (
    <div
      className="character-count"
      data-testid="character-count"
      style={{
        fontSize: '1.2rem',
        color: limitExceeded ? 'rgb(185, 0, 62)' : 'rgba(0,0,0,.7)',
        fontStyle: 'italic',
        textAlign: 'right',
      }}
    >
      <strong data-testid="characters-allowed">{charactersAllowed}</strong> of{' '}
      <span data-testid="threshold">{threshold}</span> characters
    </div>
  );
};

export default CharacterCount;
