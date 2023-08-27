import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'
import styles from '../styles/Projects.module.css'
import { ES } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings'

const Projects = () => {
  const { lang } = useUISettings()
  return (
    <section className={styles.projects_container}>
      <h3 className={styles.title}>{lang === ES ? 'Proyectos' : 'Projects'}</h3>

      {
        projects.map(project => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              repo={project.repo}
              deploy={project.deploy}
              tech={project.tech}
            />
          )
        })
      }
    </section>
  )
}

export default Projects
