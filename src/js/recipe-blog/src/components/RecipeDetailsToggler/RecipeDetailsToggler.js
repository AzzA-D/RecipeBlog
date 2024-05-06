import './RecipeDetailsToggler.scss';
import Ingredients from "../../components/Ingredients/Ingredients";
import Method from "../../components/Method/Method";
import RecipeDetailsCard from "../../components/RecipeDetailsCard/RecipeDetailsCard";
import React, { useState } from "react";

function RecipeDetailsToggler(props) {

    const [isMethodOpen, setIsMethodOpen] = useState(false);

    return (
        <div className='recipe-details-toggler'>
            
            <div className='recipe-details-toggler__ingredients '>
                <RecipeDetailsCard>
                    <Ingredients {...props.ingredients} />
                </RecipeDetailsCard>
            </div>

            <div className={`recipe-details-toggler__open-button ${isMethodOpen ? 'is-open' : ''}`}>
                <button
                    type="button"
                    onClick={() => {
                        setIsMethodOpen(!isMethodOpen);
                    }}
                >
                    <span>{isMethodOpen ? 'CLOSE METHOD' : 'SHOW METHOD'}</span>
                </button>
            </div>

            <div className={`some-overlay ${isMethodOpen ? 'is-open' : ''}`}
                onClick={() => {
                    setIsMethodOpen(!isMethodOpen);
                }}
            >
            </div>

            <div className={`recipe-details-toggler__method ${isMethodOpen ? 'is-open' : ''}`}>


                <RecipeDetailsCard>
                    <Method {...props.method} />
                </RecipeDetailsCard>
            </div>

        </div>
    );
}

export default RecipeDetailsToggler;