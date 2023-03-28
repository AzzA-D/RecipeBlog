using Umbraco.Cms.Web.Common;
using Website.Models.Generated;

namespace Website.Services
{
    public class RecipeService
    {
        private readonly UmbracoHelper _umbracoHelper;
        public RecipeService(UmbracoHelper umbracoHelper)
        {
            _umbracoHelper = umbracoHelper;
        }

        public IEnumerable<RecipePage> GetByCategories(Guid rootId, IEnumerable<Guid> categories)
        {
            var root = _umbracoHelper.Content(rootId);

            // TODO - Use proper search - for now this is good enough as there aren't too many recipes to search through
            // TODO - Caching layer?
            var allRecipes = root.DescendantsOfType(RecipePage.ModelTypeAlias).Cast<RecipePage>();

            var output = new List<RecipePage>();
            foreach (var recipe in allRecipes)
            {
                if (recipe.Categories == null || !recipe.Categories.Any())
                {
                    continue;
                }

                var recipeCategoryIds = recipe.Categories.Select(c => c.Key);
                if (recipeCategoryIds.ContainsAll(categories))
                {
                    output.Add(recipe);
                }
            }

            return output;
        }
    }
}
