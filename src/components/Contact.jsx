import styles from '../styles/Contact.module.css'
import { linkedinLink, whatsappLink, LIGHT } from '../config/consts'
import { linkedin, whatsapp } from '../assets/images'
import { useUISettings } from '../hooks/useUISettings'

const Contact = () => {
  const { theme } = useUISettings()

  return (
    <section className={styles.container}>
      {/*  eslint-disable-next-line */}
      <h3 className={`${styles.title} ${theme === LIGHT && styles.light}`}>Ponte en contacto conmigo 😃​</h3>
      <form action='https://formsubmit.co/65129fde3b1949ece8b83c82be690bdf' method='POST'>
        <div className={styles.name_div}>
          <input type='text' name='name' placeholder=' ' id='name' className={`${styles.name_input} ${theme === LIGHT && styles.light}`} required />
          <label htmlFor='name' className={`${styles.name_label} ${theme === LIGHT && styles.light}`}>Nombre:</label>
        </div>
        <div className={styles.email_div}>
          <input type='email' name='email' placeholder=' ' id='email' className={`${styles.email_input} ${theme === LIGHT && styles.light}`} required />
          <label htmlFor='email' className={`${styles.email_label} ${theme === LIGHT && styles.light}`}>Email:</label>
        </div>
        <div className={styles.subject_div}>
          <input type='text' name='subject' placeholder=' ' id='subject' className={`${styles.subject_input} ${theme === LIGHT && styles.light}`} required />
          <label htmlFor='subject' className={`${styles.subject_label} ${theme === LIGHT && styles.light}`}>Asunto:</label>
        </div>
        <div className={styles.message_div}>
          <textarea name='message' id='message' placeholder=' ' cols='30' rows='5' className={`${styles.message_input} ${theme === LIGHT && styles.light}`} required />
          <label htmlFor='message' className={`${styles.message_label} ${theme === LIGHT && styles.light}`}>Mensaje:</label>
        </div>

        <button type='submit' className={styles.submit_button}>Enviar</button>

        <input type='hidden' name='_next' value='http://localhost:3000/thanks' />
        <input type='hidden' name='_captcha' value='false' />
      </form>

      <span>O bien puedes contactarme a través de los siguientes medios:</span>
      <div className={styles.buttons}>
        <a href={linkedinLink} target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='' />
        </a>

        <a href={whatsappLink} target='_blank' rel='noreferrer'>
          <img src={whatsapp} alt='' />
        </a>
      </div>
    </section>
  )
}

export default Contact
