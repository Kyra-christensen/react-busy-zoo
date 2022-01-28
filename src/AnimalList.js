import React from 'react';
import Animal from './Animal';

export default function AnimalList(props) {
  return <div className='Animals'>
    {props.animals.map((animal, i) =>
      <Animal key={animal + i} animal={animal} />)}
  </div>;
}
