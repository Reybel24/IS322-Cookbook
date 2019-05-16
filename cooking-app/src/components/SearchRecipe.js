import React from 'react';
import {connect} from 'react-redux';
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
            <h1 className={'page-title'}> Search Thousands of Recipes By Ingredients </h1>
            <div> <input type={"text"}
                         className={'search-bar'}
                         value={this.state.searchPhrase}
                         onKeyDown={event=>this.handleKeyDown(event)}
                         onChange={event=>this.handleChange(event.target.value)}/>
            </div>

            <div> {this.props.recipies.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <p> {recipe.title} </p>
                    </div>
                )
            })} </div>
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