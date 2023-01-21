using Microsoft.AspNetCore.Mvc;
using RecipeBlog.Models.Generated;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace RecipeBlog.Components
{
    public class RecipesViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(IPublishedContent recipesFolder, int amount)
        {
            if (recipesFolder == null) { return View(new List<RecipePage>()); }

            var recipes = recipesFolder.Children
                .Where(c => c.IsDocumentType(RecipePage.ModelTypeAlias))
                .Take(amount)
                .Cast<RecipePage>()
                .ToList();

            return View(recipes);
        }
    }
}
