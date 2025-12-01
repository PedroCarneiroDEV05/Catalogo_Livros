import React from 'react';

const Counters = ({ total, filtrados }) => {
  return (
    <div className="counters">
      <div className="counter">
        <span className="counter-label">Total:</span>
        <span className="counter-value">{total}</span>
      </div>
      <div className="counter">
        <span className="counter-label">Filtrados:</span>
        <span className="counter-value">{filtrados}</span>
      </div>
    </div>
  );
};

export { Counters };
export default Counters;