import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../actions/actions";
import { Button } from "../../components/Button";
import "./CartItem.scss";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart__item">
      <div className="cart__item__img__container">
        <img src={product.img} alt="img" className="cart__item__img" />
      </div>
      <div className="cart__item__descr">
        <div className="cart__item__descr__title">{product.title}</div>
        <div className="cart__item__descr__category">{product.category}</div>
        <div className="cart__item__descr__price">{product.price}$</div>
        <Button
          title="Remove"
          style={{ padding: "5px 10px", margin: "10px 0 0 0" }}
          handleClick={() => dispatch(deleteCartItem(product.id))}
        />
      </div>
    </div>
  );
};
