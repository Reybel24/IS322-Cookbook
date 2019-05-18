import React from 'react';

class VariableRecipe extends React.Component {

    goToHome = () => {
        this.props.history.push(`/`);
    }

    findRecipe()
    {
        // Check featured

    }

    render() {
        return (
            <div className="variable-recipe">
                <h1>You Clicked on { this.props.match.params.id }</h1>
                <button onClick={this.goToHome}>Go To Home</button>
            </div>
        );
    }
}

export default VariableRecipe;