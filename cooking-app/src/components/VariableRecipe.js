import React from 'react';
import {connect} from 'react-redux';

class VariableRecipe extends React.Component {
    state = {
        recipe: {}
    };

    goToHome = () => {
        this.props.history.push(`/Homepage`);
    }

    findRecipe(id)
    {
        console.log("checking ", id);
        console.log("containing: ", this.props.featuredRecipes);
        // Check featured
        for (var i = 0; i< this.props.featuredRecipes.length; i++)
        {
            if (this.props.featuredRecipes[i]['recipes'][0].id == id)
            {
                console.log("found it");
                this.setState({ recipe:  this.props.featuredRecipes[i]['recipes']})
            }
            else {
                console.log("Not found");
            }
        }
    }

    recipeInfo()
    {
        console.log("title is: ", this.state.recipe[0].title);
        return  (
            <div className="variable-recipe">
                <h1>{this.state.recipe[0].title}</h1>
                <img src={this.state.recipe[0].image} />
                <p className="recipe-instructions">{this.state.recipe[0].instructions}</p>

                <button onClick={this.goToHome}>Go To Home</button>
            </div>
        )
    }

    componentDidMount() {
        this.findRecipe(this.props.match.params.id)
    }

    renderBody() {
        return <div>
            <h3>About this Recipe</h3>
            {this.recipeInfo()}
        </div>
    }

    render() {
        return (this.state.recipe.length > 0) ? <div>{this.renderBody()}</div> : "Empty";
    }


}

const mapStateToProps = state => {
    return {
        featuredRecipes: state.featuredRecipies.featuredRecipes
    }
};

export default connect(mapStateToProps)(VariableRecipe);