// 
import { createContext, useContext , useState} from "react";

const LanguageContext = createContext() //creamos el contexto

export const LanguageProvider = ({children}) => { // 
    const [language, setLanguage] = useState('en')
    const changeLanguage =(newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        
        <LanguageContext.Provider value={{language, changeLanguage}}>
                {children}
        </LanguageContext.Provider>
    
    )
}

export const useLanguage = () => useContext(LanguageContext)