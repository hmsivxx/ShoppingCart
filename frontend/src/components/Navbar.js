// external hooks
import { useSelector } from "react-redux";

// external components
import { Link } from "react-router-dom";

// internal css
import "./Navbar.css";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, items) => qty + Number(items.qty), 0);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>Shopping Cart</h2>
      </div>

      {/* Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div className="hamburger__manu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
