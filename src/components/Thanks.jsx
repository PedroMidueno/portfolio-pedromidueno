import styles from '../styles/Thanks.module.css'
import { messageSent } from '../assets/images'
import { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'wouter'

const Thanks = () => {
  const [countdown, setCountDown] = useState(5)
  const timerId = useRef()
  const [, navigate] = useLocation()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current)
      navigate('/redirect')
    }
  }, [countdown])

  return (
    <section className={styles.container}>
      <img src={messageSent} alt='message sent' />
      <span className={styles.thanks}>
        Mensaje enviado! / Message sent!
      </span>

      <span className={styles.redirect}>
        Redirigiendo en / Redirecting in {countdown} s.
      </span>

      <Link href='/'>
        <a className={styles.link}>
          Ir al inicio / Go to home page
        </a>
      </Link>

    </section>
  )
}

export default Thanks
