using DynamicForms.Business.Validators;
using EPiServer.Core;

namespace DynamicForms.Models.Blocks
{
	public interface IDynamicField
	{
		bool IsRequired { get; set; }
		string Field { get; set; }
		string Group { get; set; }

		CategoryList GetCategories();
		ICustomValidator GetValidator();
		string GetPattern();
	}
}