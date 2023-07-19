import toolkit from '@reduxjs/toolkit';
const {configureStore, createSlice} = toolkit;

// Slice => action dan reducer jadi satu
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart(state, action){
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log('oncreate store: ', store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

// dispatch
store.dispatch(cartSlice.actions.addCart({id: 2, qty: 20}));