import React from 'react';

const Slide = ({ image }) => {
  return (
    <div className="slide" >
      <img className="slide-current" src={image} />
    </div>
  )
}

export default Slide;