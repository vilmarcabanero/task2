import React from 'react';
import './index.css';

import { MdEdit, MdDelete } from 'react-icons/md';

export default function Entry(props) {
  return (
    <div id='entry'>
      <div
        id='task'
        className={props.isComplete ? 'complete' : ''}
        onClick={props.onClickComplete}
      >
        {props.children}
      </div>

      <div id='iconGroup'>
        <MdEdit id='editIcon' size={25} onClick={props.onClickEdit} />
        <MdDelete id='deleteIcon' size={25} onClick={props.onClickDelete} />
      </div>
    </div>
  );
}
