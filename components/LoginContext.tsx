import React, { createContext, useState } from "react";

interface LoginContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

interface LoginContextProviderProps {
  children: React.ReactNode;
}

export const LoginContextProvider: React.FC<LoginContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const contextValue: LoginContextProps = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
