import React from 'react';
import './Card.css';

export default function Card({ imagen, titulo, price, codigo }) {
  return (
    
    <div className='card-grid'>
      <div className="card">
        <img src={imagen} alt={titulo} />
        <div className="card-details">
          <h2>{titulo}</h2>
          <p>Valor: {price}</p>
          <p className='codigo'>{codigo}</p>
        </div>
      </div>
    </div>
  );
}

