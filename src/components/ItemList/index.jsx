import React from 'react';
import './style.css';

export default function ItemList({title, description}) {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
    </div>
  )
}
