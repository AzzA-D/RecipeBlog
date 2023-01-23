import Ingredients from "../../components/Ingredients/Ingredients";
import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";
import Method from "../../components/Method/Method";
import Grid from "../../components/Grid/Grid";

function RecipePage(props) {
    return (
        <div>
            <PageHeading text={props.heading} subheading={props.subheading} level={1} />
            <main>
                <Grid>
                    {/* TODO Body Text */}
                    {/* TODO Recipe Details */}
                    <Ingredients {...props.ingredients} />
                    <Method {...props.method} />
                    {/* TODO Notes */}
                </Grid>
            </main>
            {props.moreRecipes.length > 0 &&
                <Grid>
                    <RecipeList heading={props.moreRecipesHeading} recipes={props.moreRecipes} />
                </Grid>
            }
        </div>
    );
}

export default RecipePage;