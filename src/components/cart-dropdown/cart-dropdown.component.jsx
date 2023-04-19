import Button from '../button/button.component'
import { useCallback, useMemo } from 'react'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useSelector} from 'react-redux'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  
  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout')
  }, [])

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem}/>
          })) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown