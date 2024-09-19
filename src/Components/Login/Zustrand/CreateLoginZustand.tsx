import { create } from 'zustand';

interface Product {
  name: string;
  price: number;
  thumbnail: string;
  category: string;
  discountPercentage: number;
  id: number;
  quantity: number;
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
  clearProducts: () => void;
  removeProduct: (id: number, discountPrice: number) => void;
}

const useUserStore = create<UserState>((set) => ({
  products: JSON.parse(localStorage.getItem('products') || '[]'),
  totalBill: parseFloat(localStorage.getItem('totalBill') || '0'),
  totalProducts: parseInt(localStorage.getItem('totalProducts') || '0'),
  showCart: false,
  isLogined: JSON.parse(localStorage.getItem('isLogined') || 'false'),

  setShowCart: (showCart) => set({ showCart }),

  setProducts: (newProducts) => set((state) => {
    const updatedProducts = typeof newProducts === 'function' ? newProducts(state.products) : newProducts;

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    localStorage.setItem('totalProducts', updatedProducts.length.toString());

    return { products: updatedProducts, totalProducts: updatedProducts.length };
  }),

  removeProduct: (id: number, discountPrice: number) => set((state) => {
    const updatedProducts = state.products.filter(product => product.id !== id);

    
    let updatedTotalBill = Math.max(state.totalBill - discountPrice, 0);
    updatedTotalBill = parseFloat(updatedTotalBill.toFixed(3));

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    localStorage.setItem('totalProducts', updatedProducts.length.toString());
    localStorage.setItem('totalBill', updatedTotalBill.toFixed(3));

  
    return { products: updatedProducts, totalProducts: updatedProducts.length, totalBill: updatedTotalBill };
  }),

  setTotalBill: (totalBill) => set(() => {
    const updatedBill = parseFloat(totalBill.toFixed(3));
    localStorage.setItem('totalBill', updatedBill.toString());
    return { totalBill: updatedBill };
  }),

  setTotalProducts: (totalProduct) => set(() => {
    localStorage.setItem('totalProducts', totalProduct.toString());
    return { totalProducts: totalProduct };
  }),

  setIsLogined: (status) => {
    localStorage.setItem('isLogined', JSON.stringify(status));
    set({ isLogined: status });
  },

  clearProducts: () => set(() => {
    localStorage.removeItem('products');
    localStorage.setItem('totalProducts', '0');
    localStorage.setItem('totalBill', '0');
    return { products: [], totalProducts: 0, totalBill: 0 };
  }),
}));

export default useUserStore;
