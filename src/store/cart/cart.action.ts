import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES, CartItem } from "./cart.types"
import { CategoryItem } from "../categories/category.types"



const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const index = cartItems.findIndex(cartItems => cartItems.id === productToAdd.id)
  if(index !== -1 ) {
    cartItems[index].quantity++
  } else {
    cartItems.push({...productToAdd, quantity: 1})
  }
  return [...cartItems]
}

const removeProduct = (cartItems: CartItem[], productToRemove: CartItem) => {
  return [...cartItems.filter(item => item.id !== productToRemove.id)]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const index = cartItems.findIndex(cartItems => cartItems.id === cartItemToRemove.id)
  if(cartItems[index].quantity === 1) {
    cartItems.splice(index, 1)
  } else {
    cartItems[index].quantity--
  }
  return [...cartItems]
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  console.log('newCartItems', newCartItems)
  return setCartItems(newCartItems)
}

export const removeItemToCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}

export const removeProductFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeProduct(cartItems, productToRemove)
  return setCartItems(newCartItems)
}

export const setIsCartOpen = withMatcher((boolean: boolean) => 
  createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean))