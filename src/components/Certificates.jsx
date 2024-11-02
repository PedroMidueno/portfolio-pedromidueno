import { certificates } from '../config/certificates'
import styles from '../styles/Certificates.module.css'
import { useUISettings } from '../hooks/useUISettings'
import { ES, LIGHT } from '../config/consts'

const Certificates = () => {
  const { lang, theme } = useUISettings()

  return (
    <section className={styles.container}>
      <h3 className={`${styles.title} ${theme === LIGHT ? styles.light : undefined}`}>
        {lang === ES ? 'Certificados' : 'Certificates'}
      </h3>
      <div className={styles.certificates_container}>
        {certificates.map(cert => {
          return (cert.active &&
            <article key={cert.link} className={styles.cert_card}>
              <a
                href={cert.link} className={styles.certificate}
                target='_blank' rel='noreferrer'
              >
                <img
                  src={cert.image}
                  alt='Certificado'
                  title={lang === ES ? 'Ver Certificado' : 'View Certificate'}
                  className={`${styles.img} ${theme === LIGHT ? styles.light : undefined}`}
                />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Certificates
