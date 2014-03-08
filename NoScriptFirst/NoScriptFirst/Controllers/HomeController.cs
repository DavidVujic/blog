using System.Web.Mvc;
using NoScriptFirst.Models;
using NoScriptFirst.MyLittleService;

namespace NoScriptFirst.Controllers
{
	public class HomeController : Controller
	{
		private readonly IExampleService _myLittleService;

		public HomeController(IExampleService myLittleService)
		{
			_myLittleService = myLittleService;
		}

		public ActionResult Index()
		{
			return View();
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		public ActionResult Add(Person person)
		{
			if (!ModelState.IsValid)
			{
				ViewBag.Message = "The ModelState was invalid.";

				return ViewOrJson();
			}

			_myLittleService.Add(person.Name);

			ViewBag.Message = string.Format("Hello {0}", person.Name);

			return ViewOrJson();
		}

		private ActionResult ViewOrJson()
		{
			if (Request.IsAjaxRequest())
			{
				return Json(new {status = ViewBag.Message});
			}

			return View("Index");
		}
	}
}