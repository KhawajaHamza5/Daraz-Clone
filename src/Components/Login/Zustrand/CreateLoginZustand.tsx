import { create } from 'zustand';

interface Product {
  name: string;
  price: number;
}

interface UserState {
  products: Product[];
  totalProducts: number;
  showCart: boolean;
  totalBill: number;
  setShowCart: (status: boolean) => void;
  setProducts: (newProducts: Product[] | ((prevProducts: Product[]) => Product[])) => void;
  setTotalProducts: (totalProduct: number) => void;
  setTotalBill: (totalBill: number) => void;
}

const useUserStore = create<UserState>((set) => ({
  totalBill: 0,
  showCart: false,
  products: [],
  totalProducts: 0,
  setShowCart: (showCart) => set({ showCart }),
  
  setProducts: (newProducts) => set((state) => ({
    products: typeof newProducts === 'function' ? newProducts(state.products) : newProducts,
  })),

  setTotalBill: (totalBill) => set({ totalBill: parseFloat(totalBill.toFixed(3)) }),
  setTotalProducts: (totalProduct) => set({ totalProducts: totalProduct }),
}));

export default useUserStore;
