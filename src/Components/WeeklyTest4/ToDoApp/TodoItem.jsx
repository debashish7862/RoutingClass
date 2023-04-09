import React from 'react'
import { useState,useContext } from 'react'
import myTodoContext from './todoContext'
import InputTodo from './InputTodo.jsx'
export default function TodoItem() {
  
  const {contextData} = useContext(myTodoContext)
  console.log(contextData)
  return (
    <div className='item'>
      <div className="itemTitle">
        <p>{InputTodo.addValue}</p>
        

</div>
<div className="editButton">
  <button>Edit</button>

</div>
        <div className="deleteButton">
          <button>Delete</button>

        </div>

    </div>
  )
}
