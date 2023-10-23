"use client"

import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";

interface CartProduct extends Product {
    quantity: number
}

interface ICartContext {
    products: CartProduct[],
    cartTotalPrice: number,
    cartBasePrice: number,
    cartTotalDiscount: number
}

const cartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0
})

const CartProvider = ({ children }: { children: ReactNode}) => {
    return ( 
        <cartContext.Provider value={{
            products: [],
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0}}
            >
            {children}
        </cartContext.Provider>
     );
}
 
export default CartProvider;