import { combineReducers } from 'redux';

import recipeiesReducer from './recipeReducer';
import nutritionReducer from './nutritionReducer';
import featuredReducer from './featuredReducer';

export default combineReducers({
    recipies: recipeiesReducer,
    nutritions: nutritionReducer,
    featuredRecipies: featuredReducer
});


