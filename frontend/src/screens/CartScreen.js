// external hooks
import { useSelector, useDispatch } from "react-redux";

// external components
import { Link } from "react-router-dom";

// internal css
import "./CartScreen.css";

// internal components
import CartItem from "../components/CartItem";

// actions
import { addToCart } from "../redux/actions/cartActions";
import { removeFromCart as deleteFromCart } from "../redux/actions/cartActions";

function CartScreen() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(deleteFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              image={item.image}
              description={item.description}
              price={item.price}
              id={item.product}
              qty={item.qty}
              stock={item.stock}
              qtyChangeHandler={qtyChangeHandler}
              key={item.product}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>$ {getCartSubTotal().toFixed(2)}</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default CartScreen;
