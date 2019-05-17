import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    featuredRecipies: [],
    errorMessage: null
};

const featuredReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FEATURED_LOADED_SUCCESS:
            return {
                ...state,
                featuredRecipies: action.payload,
                errorMessage: null
            };
        case actionTypes.FEATURED_LOADED_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                featuredRecipies: []
            }

        default:
            return state;
    }
}

export default featuredReducer;