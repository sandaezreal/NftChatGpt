export const addToCart = (item: any) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (item: any) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });