import React from 'react';

export default function Sign({ isOpen }) {
  return (
    <div className='open-sign'>
      {isOpen ? 'The zoo is open!' : 'Sorry, the zoo is closed.'}
    </div>
  );
}
