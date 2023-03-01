import { ADD_PRODUCT_TO_CART, FETCH_CATEGORIES, FETCH_BY_CATEGORY, FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_PRODUCT } from "./types";
import productService from "../../services/productService";

export const getProducts = () => async(dispatch) => {
    try {
        const res = await productService.getAll();

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
    catch(err) {
        console.log(err)
    }

}

export const filterProducts = (title) => async(dispatch) => {
    try {
    dispatch({
        type: FILTER_PRODUCTS,
        payload: title
    })
    }
    catch(err) {
        console.log(err)
    }
}

export const fetchCategories = () => async(dispatch) => {
    const res = await productService.fetchCategories();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data 
    })
}

export const fetchByCategory = (category) => async(dispatch) => {
    const res = await productService.fetchByCategory(category);

    dispatch({
        type : FETCH_BY_CATEGORY,
        payload: res.data
    })
}

export const addProductToCart = (id) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: id
    })
}