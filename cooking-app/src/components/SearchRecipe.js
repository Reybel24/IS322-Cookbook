import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import * as actions from "../actions";

const WAIT_INTERVAL  = 1000;
const ENTER_KEY = 13;

class SearchRecipe extends React.Component {

    state = {
        searchPhrase : ''
    }

    componentDidMount() {
        this.getData(this.state.searchPhrase);
    }

    componentWillMount() {
        this.timer=null;
    }

    handleChange(value) {
        clearTimeout(this.timer);

        this.setState({value});

        this.timer = setTimeout(::triggerChange, WAIT_INTERVAL)
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            ::this.triggerChange()
        }
    }

    triggerChange(){
        const {value} = this.state;

        this.props.onChange(value);
    }


    getData(searchPhrase) {
    //    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + searchPhrase,
      //      {
        //        'headers': {
          //          "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            //        "X-RapidAPI-Key": "d845af67f1msha67d3caa7ea0331p17fd03jsn1411e9aae2eb"
              //  }
            //})

        axios.get("https://my-json-server.typicode.com/amishin/Cooking-App/recipe")
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
            <div> <input type={"text"}
                         value={this.state.value}
                         onKeyDown={::this.handleChange()}
                         onChange={::this.handleChange} {event=>this.searchTextChanged(event.target.value)}/>
            </div>

            <div> {this.props.recipies.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <p> {recipe.name} </p>
                    </div>
                )
            })} </div>
        </div>
    }

    render() {
        return this.renderBody();
        //this.props.errorMessage ? <div>{this.props.errorMessage}</div> :
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