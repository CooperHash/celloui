import React, { useState } from 'react';
import './ToggleButton.css';

export const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <button className="toggle-button" onClick={handleClick}>
      <div className={`toggle-button-circle ${isToggled ? 'toggled' : ''}`} />
    </button>
  );
}
