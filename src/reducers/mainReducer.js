import {
  SET_USER,
  LOGOUT,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  SET_FITLERED_PRODUCTS,
} from "../constants/actionTypes";
import { products } from "../data/products";

const INITIAL_STATE = {
  products: products,
  filteredProducts: products,
  selectedProduct: {},
  cart: [],
  user: {},
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: {}, cart: [] };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case SET_FITLERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_CART_ITEM:
      return { ...state, cart: [...state.cart.filter((item) => item.id !== action.payload)] };
    default:
      return state;
  }
};
