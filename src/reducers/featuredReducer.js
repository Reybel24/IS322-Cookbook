import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    visibilityFilter: [],
    featuredRecipes: [],
    errorMessage: null
};

const featuredReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FEATURED_LOADED_SUCCESS:
            return {
                ...state,
                featuredRecipes: action.payload,
                errorMessage: null
            };
        case actionTypes.FEATURED_LOADED_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                featuredRecipies: []
            }
        case actionTypes.SET_VISIBILITY_FILTER:
            console.log("B");
            return {
                ...state,
                visibilityFilter: action.payload
            }

        default:
            return state;
    }
}

export default featuredReducer;