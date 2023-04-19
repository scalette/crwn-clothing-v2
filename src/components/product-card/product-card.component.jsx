import './product-card.styles.scss'
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component'
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product
  
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  console.log('RENDER ProductCard')
  return (<div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add</Button>
  </div>)
}

export default ProductCard