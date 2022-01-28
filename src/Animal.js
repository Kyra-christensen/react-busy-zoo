import React from 'react';

export default function Animal(props) {
  return <div>
    {props.animal === 'camel' && '🐫'}
    {props.animal === 'zebra' && '🦓'}
    {props.animal === 'giraffe' && '🦒'}
    {props.animal === 'elephant' && '🐘'}
  </div>;
}
