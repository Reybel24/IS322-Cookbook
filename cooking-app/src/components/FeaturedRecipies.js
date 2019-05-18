import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {Link} from "react-router-dom";

// Next: whenever any filter changes -> set new filters in 'filters' -> iterate through pick 3 random items from
// allItemsList that match the filters -> request item information (name, photo, calories) from API -> display them in grid

class FeaturedRecipies extends React.Component {
    state = {
        filters: 'test',
        featured: []
    };

    triggerChange() {
        this.props.getFeaturedRecipes(this.state.featured);
    }

    componentDidMount() {
        this.triggerChange()
    }

    renderBody() {
        return <div>
            <h3 id="featured-head">Here are some featured recipes for you to check out</h3>
            <div id="featured-container"> {this.props.featuredRecipes.map((recipe) => {
                return (
                        <div class="featured-recipe" key={recipe['recipes'][0].id}>
                            <Link to={'/VariableRecipe/' + recipe['recipes'][0].id}>
                                <p class="featured-name">{recipe['recipes'][0].title}</p>
                                <img class="featured-image" src={recipe['recipes'][0].image} alt={recipe['recipes'][0].name} />
                            </Link>
                        </div>
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
        console.log("recipes: ", state.featuredRecipies.featuredRecipes);
        return {
            errorMessage: null,
            featuredRecipes: state.featuredRecipies.featuredRecipes
        };
    }

    return {
        errorMessage: state.featuredRecipies.errorMessage,
        featuredRecipes: state.featuredRecipies.featuredRecipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFeaturedRecipes: (featured) => dispatch(actions.getFeaturedRecipes(featured))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRecipies);