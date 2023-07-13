import { useSelector, useDispatch } from "react-redux"
import { changeLanguage, changeTheme } from "./redux/slices/settingSlice";

export default function App() {
    const dispatch = useDispatch()

    const { lang, theme } = useSelector(state => {
        return state.settings
    })

    const changeLang = () => {
        console.log('entra');
        dispatch(changeLanguage())
    }

    const changeTema = () => {
        dispatch(changeTheme())
    }

    return (
        <>
            <h1>Mi portfolio Web</h1>
            <h3>Idioma: {lang}</h3>
            <h3>Tema: {theme}</h3>
            <br />

            <button onClick={changeLang}>Cambiar idioma</button>
            <button onClick={changeTema}>Cambiar tema</button>
        </>
    )
}