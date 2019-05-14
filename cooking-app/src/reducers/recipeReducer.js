import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    recipies: [],
    errorMessage: null
};

const recipeiesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.RECIPIES_LOADED_SUCCESS:
            return {
                ...state,
                recipies: action.payload,
                errorMessage: null
            };
        case actionTypes.RECIPIES_LOADED_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                recipies: []
            }

        default:
            return state;
    }
}

export default recipeiesReducer;