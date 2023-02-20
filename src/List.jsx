import React from 'react';
import { nanoid } from 'nanoid';
import PetCard from './components/PetCard';

function List({ items = [] }) {
  return (
    <div>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default List;
