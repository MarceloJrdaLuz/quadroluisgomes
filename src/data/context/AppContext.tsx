import { createContext, useState } from "react";

interface AppContextProps{
    categoria?: string
    alternarCategoria?: (e: string) => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){

    const [categoria, setCategoria] = useState('')

    function alternarCategoria(e){
        setCategoria(e)
    }

    return(
        <AppContext.Provider value={{
           categoria,
           alternarCategoria
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext