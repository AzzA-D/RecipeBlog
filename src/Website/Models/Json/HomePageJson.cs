namespace Website.Models.Json
{
    public class HomePageJson
    {
        public string Heading { get; set; }
        public string RecipesListsHeading { get; set; }
        public List<RecipeCardJson> Recipes { get; set; } 
    }
}
