import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import * as actions from "../actions";

class SearchNutritions extends React.Component {

    state = {
        searchQuestion : ''
    }

    componentDidMount() {
        this.getData(this.state.searchQuestion);
    }

    getData(searchQuestion) {
        axios.get("")
    }
}

export default SearchNutritions;