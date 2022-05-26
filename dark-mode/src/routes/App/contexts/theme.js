import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  mode: 'light',
});

const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState('light');
  const { children } = props;

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
