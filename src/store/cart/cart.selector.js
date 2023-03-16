import { createSelector } from 'reselect'

export const selectCartReducer = state => state.cart

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