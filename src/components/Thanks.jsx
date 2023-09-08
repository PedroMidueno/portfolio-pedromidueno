import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'wouter'

const Thanks = () => {
  const [countdown, setCountDown] = useState(10)
  const timerId = useRef()
  const [, setLocation] = useLocation()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current)
      setLocation('/')
    }
  }, [countdown])
  return (
    <section>
      <h1>Redirigiendo en {countdown} segundos</h1>
    </section>
  )
}

export default Thanks
