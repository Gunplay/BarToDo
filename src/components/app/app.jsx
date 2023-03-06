import { Component } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './app.css'
import Head from '../head/head'
import CreateListTodos from '../create-list-todos/create-list-todos'

import InputToDo from '../input-todo/input-todo'

function App() {

  const [text, setText] = useState('')
  const [todo, setTodos] = useState([])
  // const [todo, setTodos] = useState([ 

  //   { text: 'Hi', id: 1 },
  //   { text: 'How are you?', id: 2 },
  //   {
  //     text: 'Have you a new car: bmw, toyota,?',
  //     id: 3,
  //   },
  //   { text: 'Imsadsa', id: 5 },
  //   { text: 'Imasdsad nice', id: 6 },
  //   { text: 'asdsa dfdnice', id: 7 },
  //   {
  //     text: 'Im 2323232233213 12321e',
  //     id: 8,
  //   },

  // ])

  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      id: uuidv4(),
      color: generateColor()
    }
    setTodos([newTodo, ...todo])
   
  }

  const deleteItem = (id) => {
     setTodos(todo.filter(item => item.id !== id))
    // console.log(id)
  }



  // function generateId() {
  //   return Date.now().toString(36) + Math.random().toString(36).substring(2);
  // }
  return (
    <div className="app">
      <Head />
      {/* <CreateListTodos text={textObj} onDelete={(id) => {console.log(id)}}/> */}
      
      {!todo.length ? <h1 style={{textAlign: "center", background: "white", border: "1px solid #007bff"}}>You don't have any to do...</h1> : <CreateListTodos text={todo} onDelete={deleteItem} />}
      <InputToDo text={text} setText={setText}  addTodo={addTodoHandler} />
    </div>
  )
}

export default App
