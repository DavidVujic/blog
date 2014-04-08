namespace DynamicForms.Business.Validators
{
	public interface ICustomValidator
	{
		string GetRegexp();
		bool IsValid(dynamic model, bool isRequired);
	}
}