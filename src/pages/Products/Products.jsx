import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../actions/actions";
import { Menu } from "../../feature/Menu";
import { ProductListItem } from "../../feature/ProductListItem";
import "./Products.scss";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // depending on the category, creates a new array of filtered products
  const filterCategory = (category) => {
    dispatch(setFilteredProducts([...products.filter((product) => product.category === category)]));
  };

  // depending on the price filter, creates a new array of products sorted by price
  const filterByPrice = (type) => {
    let result;
    if (type === "ascending") {
      result = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else {
      result = [...filteredProducts].sort((a, b) => b.price - a.price);
    }
    dispatch(setFilteredProducts(result));
  };

  return (
    <section className="products">
      <Menu filterByPrice={filterByPrice} setFilteredProducts={setFilteredProducts} filterCategory={filterCategory} />
      {filteredProducts.map((product, id) => (
        <ProductListItem key={id} product={product} />
      ))}
    </section>
  );
};
