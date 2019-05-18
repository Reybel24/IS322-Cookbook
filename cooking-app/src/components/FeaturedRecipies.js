import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {Link} from "react-router-dom";

// Due to very limited allowed usage of the Spponaculra API (50 requests per day), we will give the food
// metadata in here and check it locally toa void having to send a request per food item to the api to
// see if it fits the filter
const allItemsList = [
    ['burger', 'gluten_free, sugar_free'],
    ['chickenburritos', 'gluten_free, sugar_free'],
    ['chickenfingers', 'gluten_free']
];

// Next: whenever any filter changes -> set new filters in 'filters' -> iterate through pick 3 random items from
// allItemsList that match the filters -> request item information (name, photo, calories) from API -> display them in grid

class FeaturedRecipies extends React.Component {
    state = {
        filters: 'test',
        featured: []
    };

    triggerChange() {
        this.props.getFeaturedRecipes(allItemsList, this.state.featured);
    }

    componentDidMount() {
        this.triggerChange()
    }

    renderBody() {
        return <div>
            <h3 id="featured-head">Here are some featured recipes for you to check out</h3>
            <div id="featured-container"> {this.props.featuredRecipes.map((recipe) => {
                return (
                    <Link to={'/VariableRecipe/' + recipe.id}>
                        <div key={recipe.id} class="featured-recipe">
                            <p class="featured-name">{recipe.title}</p>
                            <img class="featured-image" src={recipe.image} alt={recipe.name} />
                        </div>
                    </Link>
                )
            })} </div>
        </div>


    }

    render() {
        return (this.props.errorMessage != null) ? <div>{this.props.errorMessage}</div> : this.renderBody();
    }

}

const mapStateToProps = (state) => {
    if (state.featuredRecipies.featuredRecipes.length > 0)
    {
        console.log("recipes: ", state.featuredRecipies.featuredRecipes[0]['recipes']);
        return {
            errorMessage: null,
            featuredRecipes: state.featuredRecipies.featuredRecipes[0]['recipes']
        };
    }

    return {
        errorMessage: state.featuredRecipies.errorMessage,
        featuredRecipes: state.featuredRecipies.featuredRecipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFeaturedRecipes: (allItemsList, featured) => dispatch(actions.getFeaturedRecipes(allItemsList, featured))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRecipies);