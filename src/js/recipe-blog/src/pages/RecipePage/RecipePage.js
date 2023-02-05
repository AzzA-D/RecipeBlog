
import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";
import Grid from "../../components/Grid/Grid";
import RecipeDetailsToggler from "../../components/RecipeDetailsToggler/RecipeDetailsToggler";

function RecipePage(props) {
    return (
        <div>
            <PageHeading text={props.heading} subheading={props.subheading} level={1} />
            <main>
                {/* TODO Body Text */}
                {/* TODO Recipe Details */}
                <RecipeDetailsToggler
                    ingredients={props.ingredients}
                    method={props.method}
                />
                {/* TODO Notes */}
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