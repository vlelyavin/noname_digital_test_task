import { useSelector } from "react-redux";
import { MenuButton } from "../../components/MenuButton";
import "./Menu.scss";

export const Menu = ({ filterByPrice, setFilteredProducts, filterCategory }) => {
  const products = useSelector((state) => state.products);
  return (
    <div className="menu">
      <div className="menu__filters">
        <div className="menu__filter__name">Categories</div>
        <MenuButton title="All" handleClick={() => setFilteredProducts(products)} />
        <MenuButton title="Sneakers" handleClick={() => filterCategory("sneakers")} />
        <MenuButton title="Basketball" handleClick={() => filterCategory("basketball")} />
        <MenuButton title="Football" handleClick={() => filterCategory("football")} />
      </div>
      <div className="menu__filters">
        <div className="menu__filter__name">Filter by price</div>
        <MenuButton title="Price ascending" handleClick={() => filterByPrice("ascending")} />
        <MenuButton title="Price descending" handleClick={() => filterByPrice("descending")} />
      </div>
    </div>
  );
};
