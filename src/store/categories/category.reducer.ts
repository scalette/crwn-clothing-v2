import { CATEGORIES_ACTION_TYPE, Category } from "./category.types"
import { CategoryAction, fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action"
import { AnyAction } from "redux"

export type CategoriesState = {
  readonly categories: Category[],
  readonly isLoading: Boolean,
  readonly error: Error | null,
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoruiesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
  if(fetchCategoriesStart.match(action)) {
    return {...state, isLoading: true}
  }
  if(fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    }
  }
  if(fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }

  return state 
}
  // switch(action.type) {
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
  //     return {...state, isLoading: true}
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS: 
  //     return {
  //       ...state,
  //       categories: action.payload,
  //       isLoading: false,
  //     }
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED: 
  //     return {
  //       ...state,
  //       error: action.payload,
  //       isLoading: false,
  //     }
  //   default:
  //     return state
  // }