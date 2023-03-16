import { combineReducers } from 'redux'

import { userReducer  } from './user/user.reduser'
import { categoruiesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoruiesReducer,
  cart: cartReducer,
})