using Website.Services;

namespace Website.App_Start
{
    public static class DependencyInjection
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<AssetsService>();
        }
    }
}
