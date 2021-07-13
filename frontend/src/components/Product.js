import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ description, name, price, id, image }) => {
  const descriptionMaxLength = 120;
  return (
    <div className="product">
      <img src={image} alt={name} title={name} />

      <div className="product__info">
        <p className="info__name" title={name}>
          {name}
        </p>
        <p className="info__description" title={description}>
          {description.length > descriptionMaxLength
            ? `${description.substring(0, descriptionMaxLength)}...`
            : description}
        </p>

        <p className="info__price" title={`$ ${price}`}>
          $ {price}
        </p>

        <Link className="info__button" to={`/product/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
