import { createSelector } from 'reselect'
import { CartState } from './cart.reducer'
import { RootState } from '../store'

export const selectCartReducer = (state: RootState): CartState => {
  console.log('SELECTOR CALL')
  return state.cart}

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)


export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
)

export const seceltCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((prev, curr) => curr.quantity * curr.price + prev, 0)
)