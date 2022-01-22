import react from 'react'
import styled from 'styled-components'
import { Heart } from '@pxblue/react-progress-icons'
function TodosHeader() {
  // TODO improve this, this is just to test the design
  const date = new Date()
  const day = date.getDate()
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][date.getDay()]
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][date.getMonth()]

  const enOrdinalRules = new Intl.PluralRules('en', { type: 'ordinal' })
  const enOrdinalRulesMap = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }
  const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)]

  return (
    <Container>
      <RightSide>
        <Heart percent={50} size={60} color={'#f6c90e'} outlined={true} />
      </RightSide>
      <LeftSide>
        <h1>{`${weekDay}, ${day}${enOrdinalSuffix}`}</h1>
        <p>{month}</p>
      </LeftSide>
    </Container>
  )
}

export default TodosHeader
const Container = styled.div`
  min-height: 30px;
  cursor: pointer;
  background-color: #ff0000;
  overflow: hidden;
  position: static;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px 10px 15px;
  color: #ffff;
`
const RightSide = styled.div`
  float: right;
  padding: 15px 20px;
`
const LeftSide = styled.div`
  font-family: Arial, sans-serif;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
`
