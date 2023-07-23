import { useSelector } from "react-redux";

export const useGlobalSettings = () => {
    const { lang, theme } = useSelector(state => {
        return state.settings
    })

    return { lang, theme }
}