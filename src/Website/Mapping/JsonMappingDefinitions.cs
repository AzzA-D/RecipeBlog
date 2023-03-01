using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models;
using Website.Controllers;
using Website.Models.Forms;
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
                    target.Heading = source.PageHeading;

                    target.RecipesListsHeading = source.RecipeListHeading;
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
                    var recipePage = source.Parent<Recipes>();

                    target.Heading = source.Heading.IsNullOrWhiteSpace() ? source.Name : source.Heading;
                    target.Subheading = source.Description;
                    target.Ingredients = new IngredientsJson
                    {
                        Heading = recipePage.IngredientsSectionHeading,
                        Sections = mapper.MapEnumerable<IngredientsSection, IngredientsSectionJson>(source.Ingredients.Select(i => i.Content as IngredientsSection))
                    };
                    target.Method = new MethodJson
                    {
                        Heading = recipePage.MethodSectionHeading,
                        Sections = mapper.MapEnumerable<MethodSection, MethodSectionJson>(source.Method.Select(m => m.Content as MethodSection))
                    };
                    target.MoreRecipesHeading = recipePage.MoreRecipesHeading;
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

            mapper.Define<MediaWithCrops<Image>, ImageJson>(
                (source, context) => new ImageJson(),
                (source, target, context) =>
                {
                    target.Url = source.Url();
                    target.AltText = source.Content.AltText;
                }
            );

            mapper.Define<BookmarksPage, BookmarksPageJson>(
                (source, context) => new BookmarksPageJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Name;
                    target.BookmarkSections = mapper.MapEnumerable<BookmarkSection, BookmarkSectionJson>(source.Children<BookmarkSection>());

                    target.FormModel = new CreateBookmarkFormModel
                    {
                        SubmitUrl = BookmarksApiController.CreateUrl,
                        BookmarksPageId = source.Key,
                        Sections = mapper.MapEnumerable<BookmarkSection, BookmarkSectionFormModel>(source.Children<BookmarkSection>())
                    };
                }
            );

            mapper.Define<BookmarkSection, BookmarkSectionJson>(
                (source, context) => new BookmarkSectionJson(),
                (source, target, context) =>
                {
                    target.Heading = source.Name;
                    target.Bookmarks = mapper.MapEnumerable<Bookmark, BookmarkJson>(source.Children<Bookmark>());
                }
            );

            mapper.Define<Bookmark, BookmarkJson>(
                (source, context) => new BookmarkJson(),
                (source, target, context) =>
                {
                    target.Name = source.Name;
                    target.Url = source.Url;
                }
            );

            mapper.Define<BookmarkSection, BookmarkSectionFormModel>(
                (source, context) => new BookmarkSectionFormModel(),
                (source, target, context) =>
                {
                    target.SectionId = source.Key;
                    target.Heading = source.Name;
                }
            );

        }
    }
}
