import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector.js'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'

const CartIcon = () => {
  const dispatch = useDispatch()
  
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)
  
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>      
    </CartIconContainer>
  )
}

export default CartIcon