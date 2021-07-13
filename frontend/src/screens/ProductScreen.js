// external hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// external components
import Spinner from "react-bootstrap/Spinner";

// external css
import "bootstrap/dist/css/bootstrap.css";

// internal css
import "./ProductScreen.css";

// actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function ProductScreen({ match, history }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  console.log(productDetails);

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.image} alt="product name" />
            </div>

            <div className="left__info">
              <p className="left__name">P{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>$ {product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>{product.stock > 0 ? "In Stock" : "Out of stock"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
