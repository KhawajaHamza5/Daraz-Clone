import { create } from 'zustand';

interface Product {
  name: string;
  price: number;
  thumbnail: string;
  category: string;
  discountPercentage: number;
}

interface UserState {
  products: Product[];
  totalProducts: number;
  showCart: boolean;
  totalBill: number;
  isLogined: boolean;
  
  setShowCart: (status: boolean) => void;
  setProducts: (newProducts: Product[] | ((prevProducts: Product[]) => Product[])) => void;
  setTotalProducts: (totalProduct: number) => void;
  setTotalBill: (totalBill: number) => void;
  setIsLogined: (status: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
  totalBill: 0,
  showCart: false,
  products: [],
  totalProducts: 0,
  isLogined: JSON.parse(localStorage.getItem('isLogined') || 'false'), // Initialize from localStorage
  
  setShowCart: (showCart) => set({ showCart }),
  
  setProducts: (newProducts) => set((state) => ({
    products: typeof newProducts === 'function' ? newProducts(state.products) : newProducts,
  })),

  setTotalBill: (totalBill) => set({ totalBill: parseFloat(totalBill.toFixed(3)) }),
  
  setTotalProducts: (totalProduct) => set({ totalProducts: totalProduct }),

  setIsLogined: (status) => {
    localStorage.setItem('isLogined', JSON.stringify(status)); // Update localStorage
    set({ isLogined: status });
  },
}));

export default useUserStore;
