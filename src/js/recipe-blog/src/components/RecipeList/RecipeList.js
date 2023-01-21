import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.scss";

function RecipeList(props) {
    return (
        <section className="recipe-list">
            {props.recipes.map((recipe, i) =>
                <RecipeCard
                    {...recipe}
                    key={i}
                />
            )}
        </section>
    );
}

export default RecipeList;