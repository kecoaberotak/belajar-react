import toolkit from '@reduxjs/toolkit';
const {configureStore, createAction, createReducer} = toolkit;

// action
const addCart = createAction('ADD_CART')

const loginSession = createAction('LOGIN_SESSION');


// reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(loginSession, (state, action) => {
    state.status = action.payload;
  });
});


// store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log('oncreate store: ', store.getState());


// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

// dispatch
store.dispatch(addCart({id: 2, qty: 20}));
store.dispatch(addCart({id: 4, qty: 55}));

store.dispatch(loginSession(true));