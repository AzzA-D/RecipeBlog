namespace Website.Models.Json
{
    public class CategoryPageJson
    {
        public string Heading { get; set; }
        public string Description { get; set; }
        public IEnumerable<RecipeCardJson> Recipes { get; set; }
    }
}
