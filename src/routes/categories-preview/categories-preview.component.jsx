import {useContext, Fragment} from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { Link } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
// import './categories-preview.styles.scss';


function CategoriesPreview() {
    const {categoriesMap} = useContext(CategoriesContext);
  return (
    <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
        })}
    </Fragment>
  );
}

export default CategoriesPreview;