import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

// Components
import FeaturedItems from "./FeaturedRecipies";

// Variables and such
const ENTER_KEY = 13;

class Homepage extends React.Component {
    state = {
        searchPhrase: ''
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            this.triggerChange()
        }
    }

    triggerChange() {
        this.props.searchRecipe(this.state.searchPhrase);
    }

    render() {
        return <div>
            <div>
                <select name="filters" value={this.state.searchPhrase} onChange={event=>this.handleChange(event.target.value)}>
                    <option value="gluten_free">Gluten free</option>
                    <option value="sugar_free">Sugar Free</option>
                    <option value="chocolate">Chocolate</option>
                </select>
            </div>
            <div> {this.props.recipies.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <p> {recipe.title} </p>
                    </div>
                )
            })}
            </div>

            <FeaturedItems />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.recipies.errorMessage,
        recipies: state.recipies.recipies
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        searchRecipe: searchPhrase => dispatch(actions.searchRecipe(searchPhrase)),
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Homepage);