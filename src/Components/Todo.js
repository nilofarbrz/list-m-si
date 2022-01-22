import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { GrFormEdit } from 'react-icons/gr'
import styled from 'styled-components'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' })

  const SubmitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({ id: null, value: '' })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={SubmitUpdate} />
  }

  return todos.map((todo, index) => (
    <Container
    // className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    // key={index}
    >
      <Complete key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </Complete>
      <div>
        <Close size={25} onClick={() => removeTodo(todo.id)} />
        <Edit
          size={25}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </Container>
  ))
}

export default Todo
const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  margin-left: 0.25em;
`
const Complete = styled.div`
  width: 50%;
  word-wrap: break-word;
  padding: 0.5em 1em;
  background: papayawhip;
  margin: 1em;
  border: none;
  border-radius: 3px;
`
const Close = styled(RiCloseCircleLine)`
  color: red;
  margin: 1em;
`
const Edit = styled(GrFormEdit)`
  margin: 1em;
`
