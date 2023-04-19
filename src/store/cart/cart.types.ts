import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  'SET_CART_ITEMS'= 'cart/SET_CART_ITEMS',
  'TOGGLE_CART'= 'cart/TOGGLE_CART',
}

export type CartItem = CategoryItem & {
  quantity: number;
}