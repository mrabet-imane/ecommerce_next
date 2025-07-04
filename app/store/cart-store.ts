import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: 0,

      addItem: (item) => {
        const state = get();
        const existing = state.items.find((i) => i.id === item.id);

        if (existing) {
          return set(() => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }));
        } else {
          return set(() => ({
            items: [...state.items, item],
          }));
        }
      },

      removeItem: (id) => {
        const state = get();
        const updatedItems = state.items
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);

        return set(() => ({
          items: updatedItems,
        }));
      },

      clearCart: () => {
        return set(() => ({
          items: [],
          totalPrice: 0,
        }));
      },
    }),
    {
      name: "cart", // localStorage key
    }
  )
);


// import {create} from "zustand"
// import {persist} from "zustand/middleware"
// export interface CartItem{
//     id:string;
//     name:string;
//     price:number;
//     imageUrl:string|null;
//     quantity:number;

// }
// interface CartStore{
//     items: CartItem[];
//     totalPrice: number;
//     addItem: (item: CartItem) => void;
//     removeItem: (id: string) => void;
//     clearCart: () => void;
// }
// export const useCartStore=create<CartStore>()(
//     persist((set)=>({
//     items: [],
//     addItem:(item)=>set((state)=>{
//         const existing= state.items.find(i => i.id === item.id);
//         if (existing) {
//             return {
//                 items: state.items.map(i =>
//                     i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i
//                 ),
//                 totalPrice: state.totalPrice + item.price * item.quantity
//             };
//         } else {
//             return {
//                 items: [...state.items, item],
//                 totalPrice: state.totalPrice + item.price * item.quantity
//             };
//         }
//     })
// }),{name:"cart"}))