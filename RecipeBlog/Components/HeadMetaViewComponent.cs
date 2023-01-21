﻿using Microsoft.AspNetCore.Mvc;
using RecipeBlog.Models.Generated;
using RecipeBlog.Models.ViewModels;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace RecipeBlog.Components
{
    public class HeadMetaViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(IPageBase currentPage)
        {
            var homePage = currentPage.Root<HomePage>();

            var model = new HeadMeta
            {
                PageTitle = currentPage.SeoDescription.IsNullOrWhiteSpace() ? currentPage.Name : currentPage.SeoDescription,
                SeoDescription = currentPage.SeoDescription,
                AbsoluteUrl = currentPage.Url(mode: UrlMode.Absolute),
                SocialShareImage = new UmbracoImage(currentPage.SocialShareImage?.Content),
                WebsiteName = homePage.WebsiteName
            };

            return View(model);
        }
    }
}
