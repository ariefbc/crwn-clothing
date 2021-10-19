export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const reduceItemFromCart = (cartItems, reduceItemFromCart) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === reduceItemFromCart.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== reduceItemFromCart.id
    );
  }

  return cartItems.map((cartItem) => {
    return cartItem.id !== reduceItemFromCart.id
      ? cartItem
      : { ...cartItem, quantity: cartItem.quantity - 1 };
  });
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const newCart = cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToRemove.clearItemId
  );
  return newCart;
};
