import {
  SET_CATEGORY,
  SET_PRODUCTS,
  SET_FILTER,
  SET_SELECTED_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  SET_USER,
  LOGOUT,
  SET_FITLERED_PRODUCTS,
} from "../constants/actionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setFilteredProducts = (products) => ({
  type: SET_FITLERED_PRODUCTS,
  payload: products,
});
