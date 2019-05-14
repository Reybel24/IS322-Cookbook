import { combineReducers } from 'redux';

import recipeiesReducer from './recipeReducer';

export default combineReducers({
    recipies: recipeiesReducer
});


