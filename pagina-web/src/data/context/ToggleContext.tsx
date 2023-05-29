import { createContext, useState } from "react"

interface IToggleContextProps {
    isActivate?: boolean
    isRotate?: () => void
}

const ToggleContext = createContext<IToggleContextProps>({})

export function ToggleProvide(props: any) {
    const [isActivate, setIsActivate] = useState(false)

    function isRotate() {
        setIsActivate(!isActivate)
    }

    return (
        <ToggleContext.Provider value={{
            isActivate,
            isRotate
        }}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext