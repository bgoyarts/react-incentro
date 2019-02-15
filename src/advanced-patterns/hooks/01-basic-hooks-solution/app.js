import React, {useState} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Button} from '../../../shared/Button'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title>The number is {count}</Title>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </Container>
  )
}
