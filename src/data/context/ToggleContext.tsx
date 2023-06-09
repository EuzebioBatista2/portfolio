import { createContext, useState } from "react"

interface IToggleContextProps {
    isActivate?: boolean
    isRotate?: () => void
    disabled?: () => void
}

const ToggleContext = createContext<IToggleContextProps>({})

export function ToggleProvide(props: any) {
    const [isActivate, setIsActivate] = useState(false)

    function isRotate() {
        setIsActivate(!isActivate)
    }

    function disabled() {
      setIsActivate(false)
    }

    return (
        <ToggleContext.Provider value={{
            isActivate,
            isRotate,
            disabled
        }}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext