import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
  {
    name: 'cart',
    initialState: {
      data: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
      addCart(state, action){
        const itemInCart = state.data.find(item => item.id === action.payload.id);

        if(itemInCart){
          itemInCart.qty++;
        } else state.data.push(action.payload);
      },
    },
  }
);

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;