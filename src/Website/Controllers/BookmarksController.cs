using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.Common.Controllers;
using Website.Models.Forms;
using Website.Services;

namespace Website.Controllers
{
    public class BookmarksController : UmbracoApiController
    {
        private readonly BookmarksService _bookmarksService;

        public BookmarksController(BookmarksService bookmarksService)
        {
            _bookmarksService = bookmarksService;
        }

        public const string CreateUrl = "/umbraco/api/bookmarks/create";
        [HttpPost]
        public bool Create(CreateBookmarkRequest model)
        {
            // TODO - Validation

            var sectionId = model.SectionId.HasValue ? model.SectionId.Value : _bookmarksService.CreateSection(model.BookmarksPageId, model.NewSectionName);

            var ipAddress = Request.HttpContext.Connection.RemoteIpAddress?.ToString();
            var bookmarkId = _bookmarksService.Create(sectionId, model.Name, model.Url, ipAddress);

            return true;
        }
    }
}
