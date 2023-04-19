import { useState, useEffect } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'

import {CategoryContainer, CategoryTitle} from './category.styles'

type CategoryRoutParams = {
  category: string;
}

const Category = () => {
  const {category} = useParams<keyof CategoryRoutParams>() as CategoryRoutParams;
  const categoriesMap = useSelector(selectCategoriesMap)
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(()=> {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      { categoriesIsLoading ? <Spinner /> : 
      <CategoryContainer>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>}
    </>
  )
}

export default Category