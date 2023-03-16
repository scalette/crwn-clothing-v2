import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE } from "./category.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { Category } from "./category.types"

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START))

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray))

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error))

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try{
//     const categoriesArray = await getCategoriesAndDocuments()
//     dispatch(fetchCategoriesSuccess(categoriesArray))

//   } catch(err){
//     dispatch(fetchCategoriesFailed(err))
//   }
// } 

export type CategoryAction = 
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed