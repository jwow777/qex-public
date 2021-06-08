import React from 'react';

function UlLists({ className, dataMap, Component }) {
  return (
    <ul className={`list ${className}`}>
      {dataMap.map((item, index) => <Component item={item} key={index}/>)}
    </ul>
  );
}

export default UlLists;
