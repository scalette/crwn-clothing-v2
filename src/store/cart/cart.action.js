import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"


const addCartItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex(cartItems => cartItems.id === productToAdd.id)
  if(index !== -1 ) {
    cartItems[index].quantity++
  } else {
    cartItems.push({...productToAdd, quantity: 1})
  }
  return [...cartItems]
}

const removeProduct = (cartItems, productToRemove) => {
  return [...cartItems.filter(item => item.id !== productToRemove.id)]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const index = cartItems.findIndex(cartItems => cartItems.id === cartItemToRemove.id)
  if(cartItems[index].quantity === 1) {
    cartItems.splice(index, 1)
  } else {
    cartItems[index].quantity--
  }
  return [...cartItems]
}

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  console.log('newCartItems', newCartItems)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemToCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeProductFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeProduct(cartItems, productToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setIsCartOpen =(boolean) => 
  createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean)