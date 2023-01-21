using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors.ValueConverters;

namespace RecipeBlog.Models.ViewModels
{
    public class UmbracoImage
    {
        protected IPublishedContent _content;
        public bool Exists => _content != null;

        public string Url => Exists ? _content.Url() : string.Empty;
        public string AbsoluteUrl => Exists ? _content.MediaUrl(mode: UrlMode.Absolute) : string.Empty;

        public string Name => Exists ? _content.Name : string.Empty;
        public double Size => Exists ? _content.Value<double>("umbracoBytes") : 0;
        public string AltText => Exists ? _content.Value("altText", fallback: Fallback.ToDefaultValue, defaultValue: string.Empty) : string.Empty;
        public int Width => Exists ? _content.Value("umbracoWidth", fallback: Fallback.ToDefaultValue, defaultValue: 0) : 0;
        public int Height => Exists ? _content.Value("umbracoHeight", fallback: Fallback.ToDefaultValue, defaultValue: 0) : 0;
        public float Ratio => Exists ? (float)Height / (float)Width : 0;

        public UmbracoImage(IPublishedContent content)
        {
            _content = content;
        }
    }
}
