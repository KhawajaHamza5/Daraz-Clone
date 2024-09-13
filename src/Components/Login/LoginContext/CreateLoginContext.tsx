// ///////////////////With context API//////////////////////////////
// import React, { createContext, useState, ReactNode } from 'react';
// interface UserContextType {
//   isLogined: boolean;
//   productName:string[];
//   totalProducts:number;
//   setProductName: (newProductNames: string[] | ((prevProductNames: string[]) => string[])) => void;
//   setIsLogined: (isLogined: boolean) => void;
//   setTotalProducts:(totalProduct:number)=>void;
// }


// export const UserContext = createContext<UserContextType | undefined>(undefined);


// interface UserContextProviderProps {
//   children: ReactNode;
// }


// export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
//   const [isLogined, setIsLogined] = useState<boolean>(false);
//   const [productName,setProductName]=useState<string[]>([])
//   const [totalProducts,setTotalProducts]=useState<number>(0)
//   return (
//     <UserContext.Provider value={{isLogined,setIsLogined, setProductName,productName, totalProducts,setTotalProducts}}>
//       {children}
//     </UserContext.Provider>
//   );
// };









