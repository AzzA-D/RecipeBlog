import './RecipeDetailsToggler.scss';
import Ingredients from "../../components/Ingredients/Ingredients";
import Method from "../../components/Method/Method";
import Grid from "../../components/Grid/Grid";
import React, { useState } from "react";

function RecipeDetailsToggler(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='recipe-details-toggler'>
            <div className='recipe-details-toggler__ingredients'>
                <Grid>
                    <Ingredients {...props.ingredients} />
                </Grid>
            </div>
            <button
                className={`recipe-details-toggler__open-button ${isOpen ? 'is-open' : ''}`}
                type="button"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <span>{isOpen ? 'INGREDIENTS' : 'METHOD'}</span>
            </button>
            <div className={`recipe-details-toggler__method ${isOpen ? 'is-open' : ''}`}>
                <Grid>
                    <Method {...props.method} />
                </Grid>
            </div>
        </div>
    );
}

export default RecipeDetailsToggler;