import React from 'react';

const Number = ({nbr,color}) => {
  return <div className={color}>
      <p>{nbr}</p>
  </div>;
};

export default Number;
