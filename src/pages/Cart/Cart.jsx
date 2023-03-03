import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { CartItem } from "../../feature/CartItem";
import "./Cart.scss";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  let totalSum = 0;
  // calculates total price
  for (let i = 0; i < cart.length; i++) {
    totalSum += +cart[i].price;
  }
  // if cart has at least one product, shows the list of these products, total price and quantity,
  // else shows a message that your cart is empty
  return (
    <div className="cart">
      {cart.length > 0 ? (
        <>
          <div className="cart__items">
            {cart.map((product, id) => (
              <CartItem key={id} product={product} />
            ))}
          </div>
          <div className="cart__total">
            <div className="cart__total__sum">
              Total : {cart.length} items {"=>"} {totalSum}$
            </div>
            <Button title="Buy" style={{ padding: "10px 15px" }} />
          </div>
        </>
      ) : (
        <p>Your bag is empty</p>
      )}
    </div>
  );
};
