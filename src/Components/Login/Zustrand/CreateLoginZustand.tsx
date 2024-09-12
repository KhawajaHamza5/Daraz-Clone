import { create } from "zustand";

interface UserState {
  isLogined: boolean;
  setIsLogined: (status: boolean) => void;
  productName: string[];
  totalProducts: number;
  totalBill:number;
  setProductName: (newProductNames: string[] | ((prevProductNames: string[]) => string[])) => void;
  setTotalProducts: (totalProduct: number) => void;
  setTotalBill:(totalBill:number)=> void;
}

const useUserStore = create<UserState>((set) => ({
 totalBill:0,
  isLogined: false,
  productName: [],
  totalProducts: 0,
  setIsLogined: (isLogined) => set({ isLogined }),
  setProductName: (newProductNames) => set((state) => ({
    productName: typeof newProductNames === 'function' ? newProductNames(state.productName) : newProductNames
  })),
  setTotalBill:(totalBill)=>set({totalBill:totalBill}),
  setTotalProducts: (totalProduct) => set({ totalProducts: totalProduct }),
}));

export default useUserStore;
