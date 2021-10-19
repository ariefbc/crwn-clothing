import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const reduceItem = (item) => {
  return {
    type: CartActionTypes.REDUCE_ITEM,
    payload: item,
  };
};

export const clearItemfromCart = (clearItemId) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: { clearItemId },
  };
};
