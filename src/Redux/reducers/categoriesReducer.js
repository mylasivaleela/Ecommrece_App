import React from 'react';
import { FETCH_CATEGORIES, FETCH_BY_CATEGORY } from '../actions/types';

const initialState = {
    categories: [],
    categoryDetails: []
    // electronics: [],
    // jewelery: [],
    // mensClothing: [],
    // womensClothing: []
}

const categoriesReducer = (state = initialState,action) => {
    const {type,payload} = action

    switch(type) {
        case FETCH_CATEGORIES: return {...state, categories: payload};
        case FETCH_BY_CATEGORY: return {...state, categoryDetails: payload};
        default: return state 
    }
}

export default categoriesReducer