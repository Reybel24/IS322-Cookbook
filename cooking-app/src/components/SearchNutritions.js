import React from 'react';
import {connect} from 'react-redux';

import * as actions from "../actions";

const WAIT_INTERVAL  = 1000;
const ENTER_KEY = 13;

class SearchNutritions extends React.Component {

    state = {
        searchQuestion : ''
    }

    componentDidMount() {
        this.props.searchNutrition(this.state.searchQuestion);
    }

    componentWillMount() {
        this.timer=null;
    }

    handleChange(value) {
        clearTimeout(this.timer);
        this.setState({searchQuestion: value});
        this.timer = setTimeout(()=>this.triggerChange(), WAIT_INTERVAL)
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            this.triggerChange()
        }
    }

    triggerChange(){
        this.props.searchNutrition(this.state.searchQuestion);
    }

    renderBody() {
        return <div>
            <div> <input type={"text"}
                         value={this.state.searchQuestion}
                         onKeyDown={event=>this.handleKeyDown(event)}
                         onChange={event=>this.handleChange(event.target.value)}/>
            </div>

            <div> {this.props.nutritions.map((nutrition) => {
                return (
                    <div key={nutrition.answer}>
                        <p> {nutrition.answer} </p>
                    </div>
                )
            })} </div>
        </div>
    }

    render() {
        return this.props.errorMessage ? <div>{this.props.errorMessage}</div> : this.renderBody();
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.recipies.errorMessage,
        nutritions: state.nutritions.nutritions
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        searchQuestion: searchQuestion => dispatch(actions.searchQuestion(searchQuestion)),
    }
};


export default connect(mapStateToProps, mapDispatchtoProps)(SearchNutritions);