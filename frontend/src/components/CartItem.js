import { Link } from "react-router-dom";

import "./CartItem.css";

const CartItem = ({
  image,
  name,
  id,
  price,
  qty,
  stock,
  qtyChangeHandler,
  removeFromCartHandler,
}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={image} alt={name} />
      </div>

      <Link to={`/product/${id}`} className="cartitem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__price">$ {price}</p>

      <select
        className="cartitem__select"
        value={qty}
        onChange={(e) => qtyChangeHandler(id, e.target.value)}
      >
        {[...Array(stock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button className="cartitem__delete">
        <i
          className="fas fa-trash"
          onClick={() => removeFromCartHandler(id)}
        ></i>
      </button>
    </div>
  );
};

export default CartItem;
