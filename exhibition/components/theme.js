import React, { useState, useMemo, useEffect } from 'react'

export const ThemeContext = React.createContext({ screen: 'black' });

export const ThemeProvider = ({
  children,
}) => {
  const [value, setValue] = useState({ screen: 'black' })
  const context = useMemo(() => [value, setValue], [value])

  return (
    <ThemeContext.Provider value={context}>
      {children}  
    </ThemeContext.Provider>
  ); 
}
const ThemeConsumer = ThemeContext.Consumer;
export const useTheme = () => React.useContext(ThemeContext);
export const useScreen = (screen) => {
  const [, setTheme] = useTheme();
  useEffect(() => {
    setTheme({ screen });
  }, [])
}