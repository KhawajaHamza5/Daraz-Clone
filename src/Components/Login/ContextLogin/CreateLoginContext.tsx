import React, { createContext, useState, ReactNode } from 'react';


interface UserContextType {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);


interface UserContextProviderProps {
  children: ReactNode;
}


export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};
