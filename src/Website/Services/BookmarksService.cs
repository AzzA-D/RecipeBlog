using Umbraco.Cms.Core.Services;

namespace Website.Services
{
    public class BookmarksService
    {
        private readonly IContentService _contentService;

        public BookmarksService(IContentService contentService)
        {
            _contentService = contentService;
        }

        public Guid CreateSection(Guid bookmarksPage, string name)
        {
            var section = _contentService.Create(name, bookmarksPage, "bookmarkSection");
            _contentService.Save(section);

            return section.Key;
        }

        public Guid Create(Guid section, string name, string url, string ipAddress)
        {
            var bookmark = _contentService.Create(name, section, "bookmark");

            bookmark.SetValue("url", url);
            bookmark.SetValue("ipAddress", ipAddress);
            bookmark.SetValue("created", DateTime.Now);

            _contentService.Save(bookmark);
            return bookmark.Key;
        }
    }
}
