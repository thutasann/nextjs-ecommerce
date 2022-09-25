import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const itemExits = state.find((item) => item._id === action.payload._id);
            if(itemExits){
                itemExits.quantity++;
            }
            else{
                state.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        incrementQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload);
            item.quantity++;
        },

        decrementQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload);
            if(item.quantity === 1){
                const index = state.findIndex((item) => item._id === action.payload);
                state.splice(index, 1);
            }
            else {
                item.quantity--;
            }
        },

        removeFromCart: (state, action) => {
            const index = state.findIndex((item) => item._id === action.payload);
            state.splice(index, 1);
        },

        clearCart: (state) => {
            return state = [];
        },
    },
});

export const {
    addProduct,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions;
export default cartSlice.reducer;