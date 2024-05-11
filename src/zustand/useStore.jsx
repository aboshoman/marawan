import { create } from "zustand";

export const useStore = create((set) => ({
  productId: -1 ,
    setProduct: (id) => set({ productId : id })

}));
