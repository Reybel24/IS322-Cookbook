import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import * as actions from "../actions";


class SearchRecipe extends React.Component {

    state = {
        searchPhrase : ''
    }

    componentDidMount() {
        this.getData(this.state.searchPhrase);
    }

    getData(searchPhrase) {
    //    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + searchPhrase,
      //      {
        //        'headers': {
          //          "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            //        "X-RapidAPI-Key": "d845af67f1msha67d3caa7ea0331p17fd03jsn1411e9aae2eb"
              //  }
            //})

        axios.get("https://my-json-server.typicode.com/amishin/Cooking-App/recipies")
            .then(response => {
                this.props.recipiesLoaded(response.data);
            }).catch(error => {
            console.log(error);
            this.props.recipeError(error.response.data.message);
        });
    }

    searchTextChanged(newSearchPhrase) {
        console.log(newSearchPhrase);
        this.getData(newSearchPhrase);
        this.setState({
            searchPhrase : newSearchPhrase
        });
    }

    renderBody() {
        return <div>
            <div><input onChange={event=>this.searchTextChanged(event.target.value)}/></div>
            <div> {this.props.recipies.length} List of recipies ....</div>
        </div>
    }

    render() {
        return this.renderBody();
        //this.props.errorMessage ? <div>{this.props.errorMessage}</div> :
            this.renderBody();
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
        recipiesLoaded: recepies => dispatch(actions.recipiesLoaded(recepies)),
        recipeError: errorMessage => dispatch(actions.recipeError(errorMessage))
    }
};


export default connect(mapStateToProps, mapDispatchtoProps)(SearchRecipe);