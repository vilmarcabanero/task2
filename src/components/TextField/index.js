import React from 'react';
import { MdAdd, MdSave } from 'react-icons/md';
import './index.css';

export default function TextField(props) {
  return (
    <div id='add'>
      <label htmlFor={props.name} id='icon' onClick={props.handleAddTask}>
        {props.status === 'add' ? <MdAdd size={20} /> : <MdSave size={20} />}
      </label>
      <input
        type={props.type}
        id='customInput'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
