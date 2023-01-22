using SixLabors.ImageSharp.PixelFormats;

namespace Website.Models.Json
{
    public class RecipeCardJson
    {
        public string Heading { get; set; }
        public string Description { get; set; }
        public ImageJson Image { get; set; }
        public string Url { get; set; }
    }
}
