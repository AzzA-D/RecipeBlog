using Umbraco.Cms.Web.Common.Attributes;

namespace Website.Models.Json
{
    public class IngredientsJson
    {
        public string Heading { get; set; }
        public List<IngredientsSectionJson> Sections { get; set; }
    }

    public class IngredientsSectionJson
    {
        public string Heading { get; set; }
        public List<IngredientJson> Ingredients { get; set; }
    }

    public class IngredientJson
    {
        public string Ingredient { get; set; }
        public string Amount { get; set; }
        public string Measurement { get; set; }
    }
}
