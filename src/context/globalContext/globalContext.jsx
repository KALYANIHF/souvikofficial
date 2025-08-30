import { createContext, useState } from "react";
const GlobalContext = createContext();
export const GlobalContextProvider = () => {
  const [theme, setTheme] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
