import React from 'react';

export default props => (
  <div className="character">
    <div className="character__image"><img src={props.image} alt="" /></div>
    <div className="character__infos">
      <div className="character__id">{props.id}</div>
      <div className="character__name">{props.name}</div>
      <div className="character__gender">{props.gender}</div>
    </div>
  </div>
);