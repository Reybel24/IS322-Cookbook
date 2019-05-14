import * as actionTypes from './actionTypes';

export const recipeError = errorMessage => {
    return {
        type: actionTypes.RECIPIES_LOADED_ERROR,
        payload: errorMessage
    }
};

export const recipiesLoaded  = recipies => {
    return {
        type: actionTypes.RECIPIES_LOADED_SUCCESS,
        payload: recipies
    }
};