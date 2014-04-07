using System.Web.Mvc;

namespace DynamicForms
{
    public class Global : EPiServer.Global
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
        }
    }
}