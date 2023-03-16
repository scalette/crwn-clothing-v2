import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'
import Spinner from '../spinner/spinner.component'
import { useSelector} from 'react-redux'
import { selectCategoriesIsLoading } from '../../store/categories/category.selector'


const CategoryPreview = ({values: {title, products}}) => {
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading)
  return (
    <div className='category-preview-container'>
      { categoriesIsLoading ? <Spinner /> : (
      <>
      <h2>
        <Link className='title' to={`${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
      </div>
      </>
      )}
    </div>
  )
}

export default CategoryPreview