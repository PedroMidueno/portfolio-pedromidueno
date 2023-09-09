import styles from '../styles/Contact.module.css'
import { linkedinLink, whatsappLink, LIGHT, ES } from '../config/consts'
import { linkedin, whatsapp, message } from '../assets/images'
import { useUISettings } from '../hooks/useUISettings'

const Contact = () => {
  const { theme, lang } = useUISettings()

  return (
    <section className={styles.container}>
      {/*  eslint-disable-next-line */}
      <h3 className={`${styles.title} ${theme === LIGHT && styles.light}`}>
        {lang === ES ? 'Ponte en contacto conmigo 😃' : 'Get in touch with me 😃'}

      </h3>

      <div className={styles.form_container}>
        <img src={message} alt='' />

        <form action='https://formsubmit.co/65129fde3b1949ece8b83c82be690bdf' method='POST' className={`${theme === LIGHT && styles.light}`}>
          <div className={styles.name_div}>
            <input type='text' name='name' placeholder=' ' id='name' className={`${styles.name_input} ${theme === LIGHT && styles.light}`} required />
            <label htmlFor='name' className={`${styles.name_label} ${theme === LIGHT && styles.light}`}>
              {lang === ES ? 'Nombre:' : 'Name:'}
            </label>
          </div>
          <div className={styles.email_div}>
            <input type='email' name='email' placeholder=' ' id='email' className={`${styles.email_input} ${theme === LIGHT && styles.light}`} required />
            <label htmlFor='email' className={`${styles.email_label} ${theme === LIGHT && styles.light}`}>
              {lang === ES ? 'Correo electrónico:' : 'Email:'}
            </label>
          </div>
          <div className={styles.subject_div}>
            <input type='text' name='subject' placeholder=' ' id='subject' className={`${styles.subject_input} ${theme === LIGHT && styles.light}`} required />
            <label htmlFor='subject' className={`${styles.subject_label} ${theme === LIGHT && styles.light}`}>
              {lang === ES ? 'Asunto:' : 'Subject:'}
            </label>
          </div>
          <div className={styles.message_div}>
            <textarea name='message' id='message' placeholder=' ' cols='30' rows='5' className={`${styles.message_input} ${theme === LIGHT && styles.light}`} required />
            <label htmlFor='message' className={`${styles.message_label} ${theme === LIGHT && styles.light}`}>
              {lang === ES ? 'Tu mensaje:' : 'Your message:'}
            </label>
          </div>
          <button type='submit' className={`${styles.submit_button} ${theme === LIGHT && styles.light}`}>
            {lang === ES ? 'Enviar' : 'Submit'}
          </button>
          <input type='hidden' name='_next' value='http://localhost:3000/thanks' />
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </div>

      <div className={`${styles.separador} ${theme === LIGHT && styles.light}`}>
        <hr />
        <span>
          {lang === ES ? 'ó' : 'or'}
        </span>
      </div>

      <span className={styles.social}>
        {lang === ES
          ? 'Puedes contactarme a través de los siguientes medios:'
          : 'You can contact me through the following means:'}
      </span>
      <div className={styles.links}>
        <a href={linkedinLink} target='_blank' rel='noreferrer' className={`${styles.link} ${theme === LIGHT && styles.light}`}>
          <img src={linkedin} alt='' title='LinkedIn' />
        </a>

        <a href={whatsappLink} target='_blank' rel='noreferrer' className={`${styles.link} ${theme === LIGHT && styles.light}`}>
          <img src={whatsapp} alt='' title='WhatsApp' />
        </a>
      </div>
    </section>
  )
}

export default Contact
