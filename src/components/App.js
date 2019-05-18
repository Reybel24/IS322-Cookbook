import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import '../CSS/App.css';

import PageTabs from './PageTabs';
import Homepage from './Homepage';
import SearchRecipe from './SearchRecipe';
import SearchNutritions from './SearchNutritions';
import VariableRecipe from './VariableRecipe';

const App = () => {
    return (
        <div className='nav-container'>
            <BrowserRouter>
            <PageTabs/>
            <div>
                <Route path="/Homepage" component={Homepage} />
                <Route path="/SearchRecipe" component={SearchRecipe} />
                <Route path="/SearchNutritions" component={SearchNutritions} />
                <Route path="/VariableRecipe/:id" component={VariableRecipe}/>
            </div>
            </BrowserRouter>
        </div>
    )
    ;
};


export default App;
