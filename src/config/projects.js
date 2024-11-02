import {
  react,
  css,
  redux,
  express,
  postgre,
  sequelize,
  next,
  piCountries,
  emprendar,
  pemidLink,
  nuxt,
  ts,
  nest,
  prismaDark,
  pinia,
  tailwind
} from '../assets/images'

export const projects = [
  {
    active: false,
    title: 'PI Countries',
    image: piCountries,
    repo: 'https://github.com/PedroMidueno/PI-Countries',
    deploy: 'https://pi-countries-pedromidueno.vercel.app/',
    tech: [react, css, redux, express, postgre, sequelize],
    description: {
      es: 'Aplicación de países, donde se muestra información de más de 200 países desde una API externa, con funcionalidades como una barra de búsqueda, paginación entre otras más.',
      en: 'Countries application, where information from more than 200 countries is displayed from an external API, with features such as a search bar, pagination, among others.'
    }
  },
  {
    active: false,
    title: 'Emprendar',
    image: emprendar,
    repo: 'https://github.com/PedroMidueno/Emprendar_Front',
    // deploy: 'https://emprendar-front.vercel.app/',
    deploy: 'https://www.youtube.com/watch?v=HHAi49LWzmE&ab_channel=Emprendar',
    tech: [next, css, redux, express, postgre, sequelize],
    description: {
      es: 'Una plataforma de crowdfunding que se enfoca en apoyar y financiar emprendimientos innovadores y prometedores.',
      en: 'A crowdfunding platform that focuses on supporting and financing innovative and promising ventures.'
    }
  },
  {
    active: true,
    title: 'pemid.link',
    image: pemidLink,
    repo: 'https://github.com/PedroMidueno/pemid.link_front',
    deploy: 'https://pemid.link',
    tech: [nuxt, tailwind, pinia, ts, nest, prismaDark, postgre],
    description: {
      es: 'Un acortador de urls simple',
      en: 'A simple url shortener'
    }
  }
]
