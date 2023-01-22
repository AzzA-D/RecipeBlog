namespace Website.Models.Json
{
    public class MethodJson
    {
        public string Heading { get; set; }
        public List<MethodSectionJson> Sections { get; set; }
    }

    public class MethodSectionJson
    {
        public string Heading { get; set; }
        public List<MethodStepJson> Steps { get; set; }
    }

    public class MethodStepJson
    {
        public string Description { get; set; }
    }
}
