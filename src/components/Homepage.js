import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

// Components
import FeaturedRecipes from "./FeaturedRecipies";
import {setVisibilityFilter} from "../actions";

// Variables and such
const ENTER_KEY = 13;

class Homepage extends React.Component {
    state = {
        filter: {}
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

    updateFilter() {
        // Get all filters set
        this.state.filter['filter_diet1'] = document.getElementById('filter_diet').value;
        this.state.filter['filter_diet2'] = document.getElementById('filter_diet').value;
        this.state.filter['filter_diet3'] = document.getElementById('filter_diet').value;

        //actions.setVisibilityFilter(filter)(dispatch);
        //setVisibilityFilter: filter => dispatch(actions.searchRecipe(searchPhrase));
        this.props.setFilter(this.state.filter);
    }

    render() {
        return <div>
            <FeaturedRecipes />
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        filter: state.featuredRecipies.visibilityFilter
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        setFilter: (filter) => dispatch(setVisibilityFilter(filter))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Homepage);