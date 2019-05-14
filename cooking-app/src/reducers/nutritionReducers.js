import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    nutritions: '',
    errorMessage: null
}

const nutritionReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.NUTRITIONS_LOADED_SUCCESS:
            return {
                ...state,
                nutritions: action.payload,
                errorMessage: null
            };
        case actionTypes.NUTRITIONS_LOADED_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                nutritions: []
            }

        default:
            return state;
    }
}

export default nutritionReducer;