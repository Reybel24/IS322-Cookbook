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

        //console.log("SerachRecipies:", searchPhrase);
       // axios.get("https://my-json-server.typicode.com/amishin/Cooking-App/recipe")
            .then(response => {
                dispatch(recipiesLoaded(response.data));
            }).catch(error => {
            dispatch(recipeError(error.response.data.message));
        });
    };
};

const recipeError = errorMessage => {
    return {
        type: actionTypes.RECIPIES_LOADED_ERROR,
        payload: errorMessage
    }
};

const recipiesLoaded  = recipies => {
    console.log("Loaded:", recipies);
    return {
        type: actionTypes.RECIPIES_LOADED_SUCCESS,
        payload: recipies
    }
};

// Search Nutritions Actions


export const searchNutrition = (searchQuestion) => {
    return (dispatch) => {
        //    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + searchPhrase,
        //      {
        //        'headers': {
        //          "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        //        "X-RapidAPI-Key": "d845af67f1msha67d3caa7ea0331p17fd03jsn1411e9aae2eb"
        //  }
        //})

        console.log("SerachNutrition:", searchQuestion);
        axios.get("https://my-json-server.typicode.com/amishin/Cooking-Question/db")
            .then(response => {
                dispatch(nutritionsLoaded(response.data));
            }).catch(error => {
            dispatch(nutritionsError(error.response.data.message));
        });
    };
};

const nutritionsError = errorMessage => {
    return {
        type: actionTypes.NUTRITIONS_LOADED_ERROR,
        payload: errorMessage
    }
};

const nutritionsLoaded  = nutritions => {
    console.log("Loaded:", nutritions);
    return {
        type: actionTypes.NUTRITIONS_LOADED_SUCCESS,
        payload: nutritions
    }
};
