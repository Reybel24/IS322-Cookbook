import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

// Variables and such
const ENTER_KEY = 13;

class FeaturedRecipies extends React.Component {
    state = {
        filters: 'test'
    }

    triggerChange() {
        this.props.getFeaturedRecipies(this.state.filters);
    }

    componentDidMount() {
        this.triggerChange()
    }

    renderBody() {
        return <div>
            <div> {this.props.featuredRecipies.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <p> {recipe.title} </p>
                    </div>
                )
            })} </div>
        </div>
    }

    render() {
        return this.props.errorMessage || (this.props.featuredRecipies == null) ? <div>{this.props.errorMessage}</div> : this.renderBody();
    }



}

const mapStateToProps = (state) => {
    console.log("its: ", state.featuredRecipies.featuredRecipies.meals);
    return {
        errorMessage: state.featuredRecipies.errorMessage,
        featuredRecipies: state.featuredRecipies.featuredRecipies.meals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFeaturedRecipies: filters => dispatch(actions.getFeaturedRecipies(filters)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRecipies);