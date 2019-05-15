import { combineReducers } from 'redux';

import recipeiesReducer from './recipeReducer';
import nutritionReducer from './nutritionReducer';

export default combineReducers({
    recipies: recipeiesReducer,
    nutritions: nutritionReducer
});


