import Heading from "../Heading/Heading";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.scss";

function RecipeList(props) {
    return (
        <section className="recipe-list">
            <Heading text={props.heading} level={2} />
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