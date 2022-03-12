import React from 'react';
import './Body.css';
import Header from './Header.js';

export default function Body({ dotify }) {
  return (
    <div className="body">
      <Header dotify={dotify}/>
    </div>
  )
}
