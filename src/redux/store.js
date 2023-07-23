import { configureStore } from "@reduxjs/toolkit";
import UISettingsReducer from './slices/UISettingSlice'

export const store = configureStore({
    reducer: {
        UISettings: UISettingsReducer
    }
})