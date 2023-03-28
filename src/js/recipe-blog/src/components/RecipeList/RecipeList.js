import Heading from "../Heading/Heading";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.scss";

function RecipeList(props) {
    return (
        <section className="recipe-list__wrapper">
            <Heading text={props.heading} level={2} theme={Heading.Themes.Secondary} />
            <div className="recipe-list">
                {props.recipes.map((recipe, i) =>
                    <RecipeCard
                        {...recipe}
                        key={i}
                    />
                )}
            </div>
        </section>
    );
}

export default RecipeList;