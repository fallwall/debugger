import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="back-arrow" onClick={props.prevSlide}>
      <i aria-hidden="true" class="arrow alternate circle left massive icon"></i>
    </div>
  )
}

export default LeftArrow;