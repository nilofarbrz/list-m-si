import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

function TodoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='add task'
        value={input}
        name='text'
        onChange={handleChange}
        ref={inputRef}
      />
      <Button>Add task</Button>
    </Form>
  )
}

export default TodoForm
const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  width: 50%;
  padding: 0.5em 1em;
  margin: 1em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`
const Button = styled.button`
  color: tomato;
  background: #ffff;
  border-color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid;
  border-radius: 3px;
`
