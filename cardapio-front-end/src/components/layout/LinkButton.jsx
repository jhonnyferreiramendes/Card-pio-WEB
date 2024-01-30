import React from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';

export default function LinkButton({ text, onClick, to }) {

  const handlClick = () =>{
    if(onClick){
      onClick();
    }
  }

  return (
    <button className="btn">
      <Link to={to} onClick={onClick} className="linkText">
        {text}
      </Link>
    </button>
  );
}
