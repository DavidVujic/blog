using System.Collections.Generic;
using System.Web.Mvc;
using DynamicForms.Models.Blocks;
using DynamicForms.Models.Pages;
using DynamicForms.Models.ViewModels;
using EPiServer.Core;
using EPiServer.Web.Mvc;

namespace DynamicForms.Controllers
{
	public class MyStandardController : PageController<MyStandardPage>
	{
		public ActionResult Index(MyStandardPage currentPage)
		{
			return View(currentPage);
		}

		[HttpPost]
		public ActionResult Index(MyStandardPage currentPage, MyFormData myFormData)
		{
			// Manipulate with the ModelState and/or do different stuff if items are valid or not
			var validatedItems = Validate(currentPage, myFormData);			

			return View(currentPage);
		}

		private static IList<bool> Validate(MyStandardPage currentPage, MyFormData model)
		{
			var validatedItems = new List<bool>();

			if (currentPage.MainContentArea == null)
			{
				return validatedItems;
			}

			var items = currentPage.MainContentArea.Items;

			foreach (var content in items)
			{
				var block = content.GetContent();

				if (block == null)
				{
					continue;
				}

				var input = block as ICustomValidation;

				if (input == null)
				{
					continue;
				}

				var validator = input.GetValidator();

				if (validator == null)
				{
					continue;
				}

				validatedItems.Add(validator.IsValid(model));
			}

			return validatedItems;
		}
	}
}