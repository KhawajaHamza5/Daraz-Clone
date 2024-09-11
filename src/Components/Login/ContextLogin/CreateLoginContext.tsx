import React, { createContext, useState, ReactNode } from 'react';


interface UserContextType {
  isLogin: boolean;
  productName:string[];
  totalProducts:number;
  setProductName: (newProductNames: string[] | ((prevProductNames: string[]) => string[])) => void;
  setIsLogin: (isLogin: boolean) => void;
  setTotalProducts:(totalProduct:number)=>void;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);


interface UserContextProviderProps {
  children: ReactNode;
}


export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [productName,setProductName]=useState<string[]>([])
  const [totalProducts,setTotalProducts]=useState<number>(0)
  return (
    <UserContext.Provider value={{ isLogin, setIsLogin,setProductName,productName, totalProducts,setTotalProducts}}>
      {children}
    </UserContext.Provider>
  );
};
