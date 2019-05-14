import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";

import PageTabs from './PageTabs';
//import Homepage from './Homepage';
import SearchRecipe from './SearchRecipe';
import SearchNutritions from './SearchNutritions';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <PageTabs/>
            <div>
                {/*<Route path="/" exact component={Homepage} />*/}
                <Route path="/SearchRecipe" component={SearchRecipe} />
                <Route path="/SearchNutritions" component={SearchNutritions} />
            </div>
            </BrowserRouter>
        </div>
    )
    ;
};


export default App;
