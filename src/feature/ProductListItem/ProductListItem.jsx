import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../actions/actions";
import "./ProductListItem.scss";

export const ProductListItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/productDetails" className="product__item" onClick={() => dispatch(setSelectedProduct(product))}>
      <div className="product__item__img__container">
        <img src={product.img} alt="productImage" className="product__item__img" />
      </div>
      <div className="product__item__descr">
        <div className="product__item__descr__title">{product.title}</div>
        <div className="product__item__descr__descr">{product.category}</div>
        <div className="product__item__descr__price">{product.price}$</div>
      </div>
    </Link>
  );
};
