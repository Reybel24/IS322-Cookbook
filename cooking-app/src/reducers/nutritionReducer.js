import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    answer: null,
    image: null,
    errorMessage: null
}

const nutritionReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.NUTRITIONS_LOADED_SUCCESS:
            return {
                ...state,
                answer: action.payload.answer,
                image: action.payload.image,
                errorMessage: null
            };
        case actionTypes.NUTRITIONS_LOADED_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                answer: null,
                image: null
            }

        default:
            return state;
    }
}

export default nutritionReducer;