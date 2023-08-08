import { createSlice } from '@reduxjs/toolkit'
import { ES, EN, LIGHT, DARK } from '../../config/consts'

const initialState = {
  theme: DARK,
  lang: ES
}

export const UISettingsSlice = createSlice({
  name: 'UISettings',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      if (state.lang === ES) state.lang = EN
      else state.lang = ES
    },
    changeTheme: (state, action) => {
      if (state.theme === LIGHT) state.theme = DARK
      else state.theme = LIGHT
    }
  }
})

export const { changeLanguage, changeTheme } = UISettingsSlice.actions
export default UISettingsSlice.reducer
