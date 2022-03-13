import React from 'react';
import './Body.css';
import Header from './Header.js';

export default function Body({ dotify }) {
  return (
    <div className="body">
      <Header dotify={dotify}/>

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className="body-infoText">

        </div>
      </div>
    </div>
  )
}
