import {useState, useEffect} from 'react'

export function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const online = () => setOnline(true)

    const offline = () => setOnline(false)

    window.addEventListener('online', online)
    window.addEventListener('offline', offline)

    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  })

  return online
}
