import { useDispatch, useSelector } from "react-redux";
import { addToCart, setSelectedProduct } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import "./ProductDetails.scss";

export const ProductDetails = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if user is not signed in, redirect to login page, else add product to the cart
  const handleClick = (selectedProduct) => {
    if (user.id) {
      dispatch(addToCart(selectedProduct));
      dispatch(setSelectedProduct({}));

      navigate("/");
    } else {
      if (window.confirm("To buy the product you need to login")) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="product">
      <div className="product__img__container">
        <img src={selectedProduct.img} alt="img" className="product__img" />
      </div>
      <div className="product__descr">
        <div className="product__descr__title">{selectedProduct.title}</div>
        <div className="product__descr__category">{selectedProduct.category}</div>
        <div className="product__descr__price">{selectedProduct.price}$</div>
      </div>
      <Button
        title="Add to cart"
        handleClick={() => handleClick(selectedProduct)}
        style={{ padding: "10px 15px", fontSize: "20px", margin: "10px 15px" }}
      />
    </div>
  );
};
