import { createContext, useState } from "react";

interface AppContextProps{
    pdfShow?: boolean
    setPdfShow?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){

    const [pdfShow, setPdfShow] = useState(false)

    function alternarPdfShow(){
        console.log(pdfShow)
    }

    return(
        <AppContext.Provider value={{
            pdfShow,
            setPdfShow
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext