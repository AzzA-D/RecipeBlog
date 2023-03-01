using Website.Controllers;

namespace Website.Models.Forms
{
    public class CreateBookmarkFormModel
    {
        public string SubmitUrl { get; set; }
        public Guid BookmarksPageId { get; set; }
        public List<BookmarkSectionFormModel> Sections { get; set; } = new List<BookmarkSectionFormModel>();
    }

    public class BookmarkSectionFormModel
    {
        public Guid SectionId { get; set; }
        public string Heading { get; set; }
    }

    public class CreateBookmarkRequest
    {
        public Guid BookmarksPageId { get; set; }

        public Guid? SectionId { get; set; }
        public string NewSectionName { get; set; }

        public string Name { get; set; }
        public string Url { get; set; }
    }
}
