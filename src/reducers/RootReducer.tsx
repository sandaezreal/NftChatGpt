// rootReducer.ts

import { combineReducers } from 'redux';
import cartReducer from '../../src/reducers/ChatReducer';
import { RootState } from '../../src/app/type/type';



const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;