import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";
import Grid from "../../components/Grid/Grid";

function CategoryPage(props) {
    return (
        <div>
            <PageHeading text={props.heading} level={1} subheading={props.description} />
            <Grid>
                <RecipeList heading={props.recipesListHeading} recipes={props.recipes} />
            </Grid>
        </div>
    );
}

export default CategoryPage;