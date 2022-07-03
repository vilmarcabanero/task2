import React from 'react';
import './index.css'

export default function Button(props) {
  return (
    <button id='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
}
