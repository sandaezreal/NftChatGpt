import { RootState } from '../type/type'; 

export const selectCartItems = (state: RootState) => state.cart.cartItems;