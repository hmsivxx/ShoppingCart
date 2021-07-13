// external hooks
import { useSelector } from "react-redux";

// external components
import { Link } from "react-router-dom";

// internal css
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sidedrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, items) => qty + Number(items.qty), 0);
  };

  if (show) {
    sidedrawerClass.push("show");
  }

  return (
    <div className={sidedrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
