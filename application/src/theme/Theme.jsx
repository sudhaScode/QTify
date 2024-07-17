import React,{useContext, createContext, useState, Children} from "react";

export const ThemeContext = createContext()
// intial state

const ThemeContextProvider = ({children})=>{

    const [theme, setTheme] = useState("dark");
    const toggleTheme = ()=>{
        setTheme(theme === "dark"? "light":"dark")
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const darkTheme={
        primaryColor: '#dc3545',
        secondaryColor: '#adb5bd',
        backgroundColor:  '#121212',
        textColor: '#ffff',
        // ... other colors
}
export const lightTheme = {
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#fff',
    textColor: '#121212',
    // ... other colors
  };

export default ThemeContextProvider;