import PageHeading from "../../components/PageHeading/PageHeading";
import RecipeList from "../../components/RecipeList/RecipeList";

function HomePage(props) {
    return (
        <div>
            <PageHeading text={props.heading} level={1} />
            <RecipeList text={props.recipesListHeading} recipes={props.recipes} />
        </div>
    );
}

export default HomePage;