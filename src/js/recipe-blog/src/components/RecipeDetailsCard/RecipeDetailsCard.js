import './RecipeDetailsCard.scss';

function RecipeDetailsCard(props) {
    return (
        <div className="recipe-details-card">
            <div className="recipe-details-card__body">
                {props.children}
            </div>
        </div>
    );
}

export default RecipeDetailsCard;