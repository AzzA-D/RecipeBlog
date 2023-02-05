using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NPoco.fastJSON;

namespace Website.Services
{
    public class AssetsService
    {
        private const string DIRECTORY_PREFIX = "/dist";
        private const string MANIFEST_LOCATION = $"{DIRECTORY_PREFIX}/asset-manifest.json";

        public Dictionary<string, string> Files
        {
            get
            {
                if (_files == null)
                {
                    _files = ReadFilesFromAssetManifest();
                }

                return _files;
            }
        }

        private Dictionary<string, string> _files;

        private readonly IWebHostEnvironment _webhostEnvironment;

        public AssetsService(IWebHostEnvironment webHostEnvironment)
        {
            _webhostEnvironment = webHostEnvironment;
        }

        public string GetFileLocationFromManifest(string fileName)
        {
            // If not found should this return empty string, throw a descriptive error, use a fallback file?
            return $"{DIRECTORY_PREFIX}{Files[fileName]}";
        }

        private Dictionary<string, string> ReadFilesFromAssetManifest()
        {
            var path = _webhostEnvironment.MapPathWebRoot(MANIFEST_LOCATION);
            using (var reader = new StreamReader(path))
            {
                var contents = reader.ReadToEnd();
                var json = JsonConvert.DeserializeObject<AssetManifest>(contents);
                return json.Files;
            }
        }

        internal class AssetManifest
        {
            public Dictionary<string, string> Files { get; set; }
            public List<string> Entrypoints { get; set; }
        }
    }
}
