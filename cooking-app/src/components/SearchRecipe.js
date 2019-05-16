import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../CSS/App.css';

import * as actions from "../actions";

const WAIT_INTERVAL  = 1000;
const ENTER_KEY = 13;

class SearchRecipe extends React.Component {

    state = {
        searchPhrase : ''
    }

    componentDidMount() {
        this.props.searchRecipe(this.state.searchPhrase);
    }

    componentWillMount() {
        this.timer=null;
    }

    handleChange(value) {
        clearTimeout(this.timer);
        this.setState({searchPhrase: value});
        this.timer = setTimeout(()=>this.triggerChange(), WAIT_INTERVAL)
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            this.triggerChange()
        }
    }

    triggerChange(){
        this.props.searchRecipe(this.state.searchPhrase);
    }

    renderBody() {
        return (
        <div className={'page-body-container'}>
            <div className={'title-container'}>
                <h1 className={'page-title'}> Search Thousands of Recipes By Ingredients </h1>
            </div>
                <div className={'search-bar'}>
                    <input type={"text"}
                           placeholder={'Enter An Ingredient...'}
                         value={this.state.searchPhrase}
                         onKeyDown={event=>this.handleKeyDown(event)}
                         onChange={event=>this.handleChange(event.target.value)}/>
                </div>

            <div className={'results'}> {this.props.recipies.map((recipe) => {
                return (
                    <div className={'recipe-box'} key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} className={'recipe_image'} />
                        <Link to={{pathname: '/VariableRecipe/${recipe.id}'}}> <p className={'recipe-title'}> {recipe.title} </p> </Link>
                    </div>
                )
            })} </div>

            <div className={'footer'}>
                <p className={'footer-par'}>Project Created For IS322 | Spring 2019 </p>
            </div>
        </div>)
    }

    render() {
        return this.props.errorMessage ? <div>{this.props.errorMessage}</div> : this.renderBody();
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


export default connect(mapStateToProps, mapDispatchtoProps)(SearchRecipe);