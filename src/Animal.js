import React from 'react';

export default function Animal(props) {
  return <div className='animal'>
    {props.animal === 'camel' && '🐫'}
    {props.animal === 'zebra' && '🦓'}
    {props.animal === 'giraffe' && '🦒'}
    {props.animal === 'elephant' && '🐘'}
  </div>;
}
