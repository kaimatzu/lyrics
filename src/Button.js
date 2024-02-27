// Button.js
import React from 'react';

function Button({ label, color, onClick }) {
  const handleClick = () => {
    onClick(color);
  };

  return (
    <div className="button" style={{ backgroundColor: color }} onClick={handleClick}>
      {label}
    </div>
  );
}

export default Button;
