import { createSelector } from 'reselect'
import { CategoryMap } from './category.types'
import { CategoriesState } from './category.reducer'

const selectCategoryReducer = (state): CategoriesState => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
      const {title, items} = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
  )
  