using Umbraco.Cms.Core.Mapping;
using Website.Models.Generated;
using Website.Models.Json;

namespace Website.Mapping
{
    public class JsonMappingDefinitions : IMapDefinition
    {
        public void DefineMaps(IUmbracoMapper mapper)
        {
            mapper.Define<HomePage, HomePageJson>(
                (source, context) => new HomePageJson(),
                (source, target, context) =>
                {
                    target.Heading = "TODO";

                    target.RecipesListsHeading = "TODO";
                    var recipePages = source.DescendantsOfType(RecipePage.ModelTypeAlias).Cast<RecipePage>().ToList();
                    target.Recipes = mapper.MapEnumerable<RecipePage, RecipeCardJson>(recipePages);
                }
            );

            mapper.Define<RecipePage, RecipeCardJson>(
                (source, context) => new RecipeCardJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Heading.IsNullOrWhiteSpace() ? source.Name : source.Heading;
                    target.Description = source.Description;
                    target.Image = source.Image != null ? mapper.Map<ImageJson>(source.Image) : null;
                    target.Url = source.Url();
                }
            );

            mapper.Define<RecipePage, RecipePageJson>(
                (source, context) => new RecipePageJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Heading.IsNullOrWhiteSpace() ? source.Name : source.Heading;
                    target.Subheading = source.Description;
                    target.Ingredients = new IngredientsJson
                    {
                        Heading = "TODO",
                        Sections = mapper.MapEnumerable<IngredientsSection, IngredientsSectionJson>(source.Ingredients.Select(i => i.Content as IngredientsSection))
                    };
                    target.Method = new MethodJson
                    {
                        Heading = "TODO",
                        Sections = mapper.MapEnumerable<MethodSection, MethodSectionJson>(source.Method.Select(m => m.Content as MethodSection))
                    };
                    target.MoreRecipesHeading = "TODO";
                    target.MoreRecipes = new List<RecipeCardJson>();
                }
            );

            mapper.Define<IngredientsSection, IngredientsSectionJson>(
                (source, context) => new IngredientsSectionJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Heading;
                    target.Ingredients = mapper.MapEnumerable<Ingredient, IngredientJson>(source.Ingredients.Select(i => i.Content as Ingredient));
                }
            );

            mapper.Define<Ingredient, IngredientJson>(
                (source, context) => new IngredientJson(),
                (source, target, context) =>
                {
                    target.Ingredient = source.IngredientName;
                    target.Measurement = source.Measurement;
                    target.Amount = source.Amount;
                }
            );

            mapper.Define<MethodSection, MethodSectionJson>(
                (source, context) => new MethodSectionJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Heading;
                    target.Steps = mapper.MapEnumerable<Method, MethodStepJson>(source.Steps.Select(s => s.Content as Method));
                }
            );

            mapper.Define<Method, MethodStepJson>(
                (source, context) => new MethodStepJson(),
                (source, target, context) =>
                {
                    target.Description = source.Description.ToHtmlString();
                }
            );
        }
    }
}
