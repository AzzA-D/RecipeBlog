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
        public List<string> Ingredients { get; set; }
    }
}
