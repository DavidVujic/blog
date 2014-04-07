using System;
using System.Collections.Generic;
using System.Web.Mvc;
using DynamicForms.Business.Helpers;
using DynamicForms.Models.Blocks;
using EPiServer.DataAbstraction;
using EPiServer.Web.Mvc;

namespace DynamicForms.Controllers.Blocks
{
	public class InputController : BlockController<InputBlock>
	{
		public override ActionResult Index(InputBlock currentBlock)
		{
			var categories = CategoryHelper.GetCategoriesFor(currentBlock);

			SetPropertyValuesFromCategories(currentBlock, categories);

			return PartialView(currentBlock);
		}

		private static void SetPropertyValuesFromCategories(InputBlock currentBlock, IEnumerable<int> categories)
		{
			foreach (var categoryId in categories)
			{
				if (CategoryHelper.IsField(categoryId))
				{
					currentBlock.Field = Category.Find(categoryId).Name;

					continue;
				}

				if (CategoryHelper.IsGroup(categoryId))
				{
					currentBlock.Group = Category.Find(categoryId).Name;

					continue;
				}

				if (CategoryHelper.IsBehaviour(categoryId))
				{
					if (Category.Find(categoryId).Name.Equals("Required", StringComparison.InvariantCultureIgnoreCase))
					{
						currentBlock.IsRequired = true;
					}
				}
			}
		}
	}
}
