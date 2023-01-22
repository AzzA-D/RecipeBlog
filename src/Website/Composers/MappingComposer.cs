using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Mapping;
using Website.Mapping;

namespace Website.Composers
{
    public class MappingComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.WithCollectionBuilder<MapDefinitionCollectionBuilder>()
                   .Add<JsonMappingDefinitions>();
        }
    }
}
