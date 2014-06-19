using System;
using System.Linq;
using DynamicForms.Business.Helpers;
using DynamicForms.Business.Validators;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace DynamicForms.Models.Blocks
{
	[ContentType(DisplayName = "Dynamic Input Block",
		GUID = "AE305CDE-BA47-490E-80E4-7BB8B04D90C5",
		Description = "")]
	public class InputBlock : BlockData, IDynamicField
	{
		[Ignore]
		public bool IsRequired
		{
			get
			{
				var category = GetCategory(CategoryHelper.IsBehaviour);

				return category != null && category.Name.Equals("Required", StringComparison.InvariantCultureIgnoreCase);
			}
		}

		[Ignore]
		public string Field
		{
			get
			{
				var category = GetCategory(CategoryHelper.IsField);
				
				return category == null ? string.Empty : category.Name;
			}
		}

		[Ignore]
		public string Group
		{
			get
			{
				var category = GetCategory(CategoryHelper.IsGroup);

				return category == null ? string.Empty : category.Name;
			}
		}

		private Category GetCategory(Func<int, bool> byCategoryType)
		{
			var categories = GetCategories();

			return categories
				.Where(byCategoryType)
				.Select(Category.Find)
				.FirstOrDefault();
		}

		public string GetFullName()
		{
			return string.Format("{0}.{1}", Group, Field);
		}

		public CategoryList GetCategories()
		{
			return CategoryHelper.GetCategoriesFor(this);
		}

		public ICustomValidator GetValidator()
		{
			return ValidatorHelper.GetValidatorFor(Field);
		}

		public string GetPattern()
		{
			var validator = GetValidator();

			if (validator == null)
			{
				return string.Empty;
			}

			return validator.GetRegexp();
		}
	}
}