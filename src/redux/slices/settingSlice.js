import { createSlice } from "@reduxjs/toolkit";
import { ES, EN, LIGHT, DARK } from '../../config/consts'

const initialState = {
    theme: DARK,
    lang: ES
}

export const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            console.log('entra al slice');
            if (state.lang === ES) state.lang = EN
            else state.lang = ES
        },
        changeTheme: (state, action) => {
            if (state.theme === LIGHT) state.theme = DARK
            else state.theme = LIGHT
        }
    }
})

export const { changeLanguage, changeTheme } = settingSlice.actions
export default settingSlice.reducer