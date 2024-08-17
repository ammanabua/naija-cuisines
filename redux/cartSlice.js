import { createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react";



// const products = localStorage.getItem('cartList') !== null ? JSON.parse(localStorage.getItem('cartList')) : [];
//
// const quantity = localStorage.getItem('cartQuantity') !== null ? JSON.parse(localStorage.getItem('cartQuantity')) : 0;
//
// const total = localStorage.getItem('cartTotal') !== null ? JSON.parse(localStorage.getItem('cartTotal')) : 0;
//
// const setCartList = (products, quantity, total) => {
//     localStorage.setItem('cartList', JSON.stringify(products));
//     localStorage.setItem('cartQuantity', JSON.stringify(quantity));
//     localStorage.setItem('cartTotal', JSON.stringify(total))
// }


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});





export const { addProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;