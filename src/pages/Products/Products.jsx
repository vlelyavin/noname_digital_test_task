import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu } from "../../feature/Menu";
import { ProductListItem } from "../../feature/ProductListItem";
import "./Products.scss";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // depending on the category, creates a new array of filtered products
  const filterCategory = (category) => {
    const result = products.filter((product) => product.category === category);
    setFilteredProducts(result);
  };

  // depending on the price filter, creates a new array of products sorted by price
  const filterByPrice = (type) => {
    let result;
    if (type === "ascending") {
      result = filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      result = filteredProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts([...result]);
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
