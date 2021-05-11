import React from 'react';

// ehh... might as well be its own file?
// button that does some neat things
const Button = props => {
  return (
    <button type="button" 
      onClick={props.click}
      className= {props.active ? "btn btn-sm btn-dark" : "btn btn-sm btn-outline-dark"} 
      data-tooltip="" aria-label={props.tooltip}
      onMouseDown={e => e.preventDefault()}
    >
      {props.children}
    </button>
  );
}

export default Button;