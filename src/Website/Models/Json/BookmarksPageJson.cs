using Website.Models.Forms;

namespace Website.Models.Json
{
    public class BookmarksPageJson
    {
        public string Heading { get; set; }
        public string Subheading { get; set; }
        public List<BookmarkSectionJson> BookmarkSections { get; set; } = new List<BookmarkSectionJson>();

        public CreateBookmarkFormModel CreateBookmarkFormModel { get; set; }
    }

    public class BookmarkSectionJson
    {
        public string Heading { get; set; }
        public List<BookmarkJson> Bookmarks { get; set; } = new List<BookmarkJson>();
    }

    public class BookmarkJson
    {
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
