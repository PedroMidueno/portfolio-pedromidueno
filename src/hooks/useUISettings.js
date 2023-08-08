import { useSelector } from 'react-redux'

export const useUISettings = () => {
  const { lang, theme } = useSelector(state => {
    return state.UISettings
  })

  return { lang, theme }
}
