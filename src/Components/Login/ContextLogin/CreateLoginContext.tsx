import React, { createContext, useState, ReactNode } from 'react';

// Define the context type
interface UserContextType {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

// Create the context with default values
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider props
interface UserContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};
