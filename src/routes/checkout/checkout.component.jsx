import { useContext } from "react"
import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { selectCartItems, seceltCartTotal } from '../../store/cart/cart.selector'
import { useSelector} from 'react-redux'
import PaymentForm from "../../components/payment-form/payment-form.component"

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(seceltCartTotal)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    {cartItems.map(item => {
        return <CheckoutItem key={item.id} cardItem={item}></CheckoutItem>
      })}
      <span className="total">Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
  )
}

export default CheckOut