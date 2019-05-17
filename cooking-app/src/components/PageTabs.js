import React from 'react';
import { Link } from 'react-router-dom';

class PageTabs extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <ul className='nav page-tabs'>
            <li className='nav-item'>
            <Link className={this.isActiveTab('/')} to="/Homepage"
        onClick={event => this.onTabClick(event, '/Homepage')}>
        Homepage
        </Link>
        </li>
        <li className='nav-item'>
            <Link className={this.isActiveTab('/SearchRecipe')} to="/SearchRecipe"
        onClick={event => this.onTabClick(event, '/SearchRecipe')}>
        Search Recipe
        </Link>
        </li>
        <li className='nav-item'>
            <Link className={this.isActiveTab('/SearchNutritions')} to="/SearchNutritions"
        onClick={event => this.onTabClick(event, '/SearchNutritions')}>
        Search Nutritions
        </Link>
        </li>
        </ul>
    )
    }

};

export default PageTabs;