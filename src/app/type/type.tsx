

export interface CartState {
  cartItems: CartItem[];
}

export type CartActionTypes = 
  | { type: 'ADD_TO_CART', payload: CartItem }
  | { type: 'REMOVE_FROM_CART', payload: CartItem }
  | { type: 'CLEAR_CART' };
  
export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface RootState {
    cart: {
      cartItems: CartItem[];
    };
  }

 
