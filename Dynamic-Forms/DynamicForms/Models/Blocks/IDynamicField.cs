using DynamicForms.Business.Validators;
using EPiServer.Core;

namespace DynamicForms.Models.Blocks
{
	public interface IDynamicField
	{
		bool IsRequired { get; }
		string Field { get; }
		string Group { get; }

		CategoryList GetCategories();
		ICustomValidator GetValidator();
		string GetPattern();
	}
}