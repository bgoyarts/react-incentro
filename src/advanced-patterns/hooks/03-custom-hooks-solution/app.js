import React from 'react'
import {Background} from '../../../shared/Background'
import {Text} from '../../../shared/Text'
import {useOnlineStatus} from './useOnlineStatus'

export const App = () => {
  const onLine = useOnlineStatus()
  return (
    <Background darkTheme={!onLine}>
      <Text darkTheme={!onLine}>
        {onLine ? "You're online!" : "You're offline!"}
      </Text>
    </Background>
  )
}
