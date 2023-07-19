import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null); // untuk nyimpen data, atau sebagai state

const TotalPriceDispatchContext = createContext(null); // untuk nyimpen action

const totalPriceReducer = (state, action) => {
  switch(action.type){
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unknown action", action.type);
    }
  }
};

export function TotalPriceProvider({children}) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0}); // (reducer, {initial state})
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

// custome Hooks
export function useTotalPrice(){
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch(){
  return useContext(TotalPriceDispatchContext);
}