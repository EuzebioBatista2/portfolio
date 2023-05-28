import { createContext, useEffect, useState } from "react"

interface IAppContextProps {
    theme?: string
    switchTheme?: () => void
}

const AppContext = createContext<IAppContextProps>({})

export function AppProvider(props: any) {
    const [theme, setTheme] = useState('dark')

    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const loadTheme = localStorage.getItem('theme')
        if(loadTheme === null) {
            setTheme('dark')
            return
        }
        setTheme(loadTheme)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext