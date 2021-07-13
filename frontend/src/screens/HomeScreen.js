// external hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// external components
import Spinner from "react-bootstrap/Spinner";

// external css
import "bootstrap/dist/css/bootstrap.css";

// internal components
import Product from "../components/Product";

// internal css
import "./HomeScreen.css";

// actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
            return (
              <Product
                description={product.description}
                price={product.price}
                name={product.name}
                image={product.image}
                id={product._id}
                key={product._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
