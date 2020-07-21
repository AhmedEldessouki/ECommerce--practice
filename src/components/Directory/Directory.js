import React from 'react';
import './Directory.scss';
import male from '../../assets/male.jpg';
import female from '../../assets/female.jpg';

const Directory = (props) => {
  return (
    <div className="directory">
      <a href="/" className="card" style={{ width: '350px' }}>
        <img className="card-img-top" src={male} alt="Male Shopper" />
      </a>
      <a href="/" className="card" style={{ width: '350px' }}>
        <img className="card-img-top" src={female} alt="Female Shopper" />
      </a>
    </div>
  );
};

export default Directory;
