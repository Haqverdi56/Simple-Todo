import React, { useState } from 'react'
import "./Todo.css"

function Todo() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo() {
    setTodos([...todos, 
      {id: Date.now(), title:todo, completed:false}
      ])
      setTodo('')
  }
  return (
    <>
    <div className='todo'>
        <div className='todo-div'>
          <input value={todo} onKeyDown={(e)=>{
            if(e.keyCode == 13) {
              if(todo) {
                addTodo()
              }
            }}} className='todo-div-input' onChange={(e)=>{
            setTodo(e.target.value)
            }} type="text" placeholder='Todo' />
          <button disabled={!todo ? true : false} className='todo-div-button' onClick={()=> addTodo()}>Add</button>
        </div>
        <div>
          <ul>
            {todos.map((el, i)=> (
              <li key={i}>{el.title}</li>
            ))}
          </ul>
        </div>
    </div>
    </>
  )
}

export default Todo