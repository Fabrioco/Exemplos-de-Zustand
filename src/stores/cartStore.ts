import { create } from "zustand";

type Product ={
    id: number
    title:string
    price:number
}

type CartState ={
    cart: Product[]
    addProduct: (product:Product) => void
    removeProduct: (id:number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addProduct: (product) => set((state) => ({cart: [...state.cart, product]})),
    removeProduct: (id) => set((state) => ({cart: state.cart.filter((product) => product.id !== id)})),
    clearCart: () => set({cart: []})
}))