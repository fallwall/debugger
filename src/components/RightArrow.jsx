import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i aria-hidden="true" class="arrow alternate circle right massive icon"></i>
    </div>
  )
}

export default RightArrow;