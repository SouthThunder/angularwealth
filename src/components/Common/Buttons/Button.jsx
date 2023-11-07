
import React from 'react';
import './Button.css';

const Button = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className='reusable-btn'>
      {text}
    </button>
  );
};

export default Button;
