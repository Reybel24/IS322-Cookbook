import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/App.css';

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
            <div className={'list-element'}>
                <ul className='nav-page-tabs'>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/')} to="/"
                              onClick={event => this.onTabClick(event, '/')}>
                                Explore Recipes
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/SearchRecipe')} to="/SearchRecipe"
                              onClick={event => this.onTabClick(event, '/SearchRecipe')}>
                                Search Recipes
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/SearchNutritions')} to="/SearchNutritions"
                              onClick={event => this.onTabClick(event, '/SearchNutritions')}>
                                Ask A Question
                        </Link>
                    </li>
                </ul>
            </div>
    )
    }

};

export default PageTabs;