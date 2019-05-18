import * as actionTypes from './actionTypes';
import axios from 'axios';

// Search Recipe Actions
export const searchRecipe = (searchPhrase) => {
    return (dispatch) => {
            axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=" + searchPhrase,
              {
                'headers': {
                  "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "6cd2deda84msh110074a9ca39d73p1d86d2jsna86639596f04"
          }
        })
       // axios.get("https://my-json-server.typicode.com/amishin/Cooking-App/recipe")
            .then(response => {
                dispatch(recipiesLoadingSuccess(response.data));
            }).catch(error => {
            dispatch(recipeLoadingError(error.response.data.message));
        });
    };
};

const recipeLoadingError = errorMessage => {
    return {
        type: actionTypes.RECIPIES_LOADED_ERROR,
        payload: errorMessage
    }
};

const recipiesLoadingSuccess  = recipies => {
    console.log("Loaded:", recipies);
    return {
        type: actionTypes.RECIPIES_LOADED_SUCCESS,
        payload: recipies
    }
};

// Search Nutritions Actions
export const searchNutritions = (searchQuestion) => {
    return (dispatch) => {
        console.log("SerachNutrition:", searchQuestion);
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=" + searchQuestion,
        {
            'headers': {
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "6cd2deda84msh110074a9ca39d73p1d86d2jsna86639596f04"
        }
        })

//        axios.get("https://my-json-server.typicode.com/amishin/Cooking-Question/db")
            .then(response => {
                dispatch(nutritionsLoadingSuccess(response.data));
            }).catch(error => {
            dispatch(nutritionsLoadingError(error));
        });
    };
};

const nutritionsLoadingError = errorMessage => {
    console.log("Error:", errorMessage);
    return {
        type: actionTypes.NUTRITIONS_LOADED_ERROR,
        payload: "Request failed, please try again later"
    }
};

const nutritionsLoadingSuccess  = nutritions => {
    console.log("Loaded:", nutritions);
    return {
        type: actionTypes.NUTRITIONS_LOADED_SUCCESS,
        payload: nutritions
    }
};


// Featured recipes action
export const getFeaturedRecipes = (featured) => {
    return (dispatch) => {
        for (var i=0; i < 2; i++)
        {
            axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert",
                {
                    'headers': {
                        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "X-RapidAPI-Key": "6cd2deda84msh110074a9ca39d73p1d86d2jsna86639596f04"
                    }
                })
                .then(response => {
                    // Add to list
                    featured.push(response.data);
                    console.log("added");
                    dispatch(featuredLoadingSuccess(featured));
                }).catch(error => {
                //dispatch(featuredLoadingError(error.response.data.message));
                console.log(error);
            });
        }
    };
};

const featuredLoadingSuccess  = recipes => {
    //console.log("Loaded: ", recipes);
    return {
        type: actionTypes.FEATURED_LOADED_SUCCESS,
        payload: recipes
    }
};

const featuredLoadingError = errorMessage => {
    errorMessage = (errorMessage == null) ? 'unknown error' : errorMessage;
    console.log("Error: ", errorMessage);
    return {
        type: actionTypes.FEATURED_LOADED_ERROR,
        payload: errorMessage
    }
};



// Setting a filter
export const setVisibilityFilter = (filter) => {
    console.log("Filters set to show: ", filter);
    return (dispatch) => {
        filterSuccess(filter);
    };
};

const filterSuccess = filter => {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        payload: filter
    }
};