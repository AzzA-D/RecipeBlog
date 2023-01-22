import Ingredients from "../../components/Ingredients/Ingredients";
import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";
import Method from "../../components/Method/Method";

function RecipePage(props) {
    return (
        <div>
            <PageHeading text={props.heading} subheading={props.subheading} level={1} />

            {/* TODO Body Text */}
            {/* TODO Recipe Details */}
            <Ingredients {...props.ingredients} />
            <Method {...props.method} />
            {/* TODO Notes */}

            <RecipeList heading={props.moreRecipesHeading} recipes={props.moreRecipes} />
        </div>
    );
}

export default RecipePage;