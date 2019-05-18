import React from 'react';
import {connect} from 'react-redux';
import '../CSS/App.css';

import * as actions from "../actions";

class SearchNutritions extends React.Component {

    state = {
        searchQuestion : ''
    }

    handleChange(value) {
        this.setState({searchQuestion: value});
    }

    submitQuestion(){
        if(this.state.searchQuestion && this.state.searchQuestion.length>0)
            this.props.searchNutritions(this.state.searchQuestion);
    }

    renderBody() {
    }

    render() {
        const img = this.props.image ? <img src={this.props.image} className={'nutrition-image'} /> : null;
        return (
        <div className={'page-body-container'}>
            <h1 className={'page-title'}> Ask A Nutrition Question </h1>
            <div> <input type={"text"}
                         placeholder={'Enter a Nutrition Question...'}
                         value={this.state.searchQuestion}
                         onChange={event=>this.handleChange(event.target.value)}/>
                <button onClick={()=>this.submitQuestion()}>Ask</button>
            </div>
            <div>
                <p className={'nutrition-answer'}> {this.props.errorMessage ? this.props.errorMessage : this.props.answer} </p>
                {img}
            </div>
            <div className={'footer'}>
                <p className={'footer-par'}>Project Created For IS322 | Spring 2019 </p>
            </div>
        </div>);
     }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.nutritions.errorMessage,
        answer: state.nutritions.answer,
        image: state.nutritions.image
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        searchNutritions: searchQuestion => dispatch(actions.searchNutritions(searchQuestion)),
    }
};


export default connect(mapStateToProps, mapDispatchtoProps)(SearchNutritions);