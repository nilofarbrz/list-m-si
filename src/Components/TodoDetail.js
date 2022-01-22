import React from 'react'
import TodoList from './TodoList'
import styled from 'styled-components'
import { GrTextWrap } from 'react-icons/gr'

function TodoDetail() {
  return (
    <Container>
      <TodoItems>
        <TodoList />
      </TodoItems>
      <Wrap>
        <img src='/images/1.jpg' />
      </Wrap>
    </Container>
  )
}

export default TodoDetail
const Container = styled.div``
const TodoItems = styled.div`
  margin: 5em auto;
  width: 80%;
`
const Wrap = styled.div`
  margin-right: 4em;
  margin-left: 4em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
