namespace Website.Models.Json
{
    public class RecipePageJson
    {
        public string Heading { get; set; }
        public string Subheading { get; set; }
        public IngredientsJson Ingredients { get; set; }
        public MethodJson Method { get; set; }
        public string MoreRecipesHeading { get; set; }
        public List<RecipeCardJson> MoreRecipes { get; set; }
    }
}
