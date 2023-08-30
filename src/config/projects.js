import { react, css, redux, express, postgre, sequelize, piCountries } from '../assets/images'

export const projects = [
  {
    title: 'PI Countries',
    image: piCountries,
    repo: 'https://github.com/PedroMidueno/PI-Countries',
    deploy: 'https://pi-countries-pedromidueno.vercel.app/',
    tech: [react, css, redux, express, postgre, sequelize],
    description: {
      es: 'Aplicación de países, donde se muestra información de más de 200 países desde una API externa, con funcionalidades como una barra de búsqueda, paginación entre otras más.',
      en: 'Country application, where information from more than 200 countries is displayed from an external API, with features such as a search bar, pagination, among others.'
    }
  }
]
