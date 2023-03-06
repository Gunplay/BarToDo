import React from 'react'
import CreateListToDo from '../create-list-todo/create-list-todo'
import './create-list-todos.css'

const CreateListTodos = ({ text, onDelete, color }) => {
  console.log(color)
  console.log(text)
  const elements = text.map((elem, i) => {
    const { id, ...elemProps } = elem
    return (
      <CreateListToDo
        key={i}
        {...elemProps}
        onDelete={() => onDelete(id)}
        color={text.color}
      />
    )
    // return <CreateListToDo {...elem} />
  })
  return <ul className="list-todos">{elements}</ul>
}

export default CreateListTodos
