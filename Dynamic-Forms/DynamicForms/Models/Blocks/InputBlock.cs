using DynamicForms.Business.Helpers;
using DynamicForms.Business.Validators;
using EPiServer.Core;
using EPiServer.DataAnnotations;

namespace DynamicForms.Models.Blocks
{
	public interface ICustomValidation
	{
		CategoryList GetCategories();
		ICustomValidator GetValidator();
		string GetPattern();
	}

	[ContentType(DisplayName = "Dynamic Input Block",
		GUID = "AE305CDE-BA47-490E-80E4-7BB8B04D90C5",
		Description = "")]
	public class InputBlock : BlockData, ICustomValidation
	{
		[Ignore]
		public bool IsRequired { get; set; }
		
		[Ignore]
		public string Field { get; set; }
		
		[Ignore]
		public string Group { get; set; }
		
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