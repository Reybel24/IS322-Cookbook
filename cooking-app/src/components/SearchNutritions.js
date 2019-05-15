import React from 'react';
import {connect} from 'react-redux';

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
        const img = this.props.image ? <img src={this.props.image} /> : null;
        return <div>
            <div> <input type={"text"}
                         value={this.state.searchQuestion}
                         onChange={event=>this.handleChange(event.target.value)}/>
                <button onClick={()=>this.submitQuestion()}>Ask</button>
            </div>
            <div>
                <p> {this.props.errorMessage ? this.props.errorMessage : this.props.answer} </p>
                {img}
            </div>
        </div>;
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