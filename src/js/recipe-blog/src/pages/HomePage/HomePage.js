import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";
import Grid from "../../components/Grid/Grid";

function HomePage(props) {
    return (
        <div>
            <PageHeading text={props.heading} level={1} />
            <Grid>
                <RecipeList heading={props.recipesListHeading} recipes={props.recipes} />
            </Grid>
        </div>
    );
}

export default HomePage;