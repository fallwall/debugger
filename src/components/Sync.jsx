import React from 'react';

const Sync = (props) => {
  return (
    <div className="randomize" onClick={props.randomize}>
      <i aria-hidden="true" class="random massive icon"></i>
    </div>
  )
}

export default Sync;