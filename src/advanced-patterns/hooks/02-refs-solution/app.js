import React, {useRef, useState} from 'react'
import {Container} from '../../../shared/Container'
import {Button} from '../../../shared/Button'
import {Input} from '../../../shared/Input'

export const App = () => {
  const inputElement = useRef(null)
  const [field, setField] = useState('')
  const onClick = () => inputElement.current.focus()

  return (
    <Container>
      <Button onClick={onClick}>Click to put focus on input</Button>
      <Input
        innerRef={inputElement}
        type="text"
        value={field}
        onChange={({target: {value}}) => setField(value)}
      />
      <pre>{field}</pre>
    </Container>
  )
}
